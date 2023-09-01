import React, { useCallback, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import { useState } from 'react';
import { normalizePlans } from './utils';

export const StoreContext = React.createContext();
export const useStore = () => React.useContext(StoreContext);

const StoreProvider = React.memo(({ children }) => {
    const [plans, setPlans] = useState([]);
    const [user, setUser] = useState({});
    const [fetchUserLoading, setFetchUserLoading] = useState(true);

    console.log('user', user);

    const fetchCustomer = useCallback(async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const { signInUserSession, attributes: { email } } = user;
            const token = signInUserSession.idToken.jwtToken;

            const response = await API.get('cloneaiCustomersApi', `/customers/${email}`, { headers: { Authorization: token } });
            setUser(Object.assign({}, user.attributes, response));

        } catch (e) {
            console.log('fetchCustomer error', e);
        } finally {
            setFetchUserLoading(false)
        }
    }, []);

    const addBrokerAccount = useCallback(async (interactiveBrokerAccount) => {
        try {
            const { signInUserSession, attributes: { email } } = await Auth.currentAuthenticatedUser();
            const token = signInUserSession.idToken.jwtToken;
            const body = { email, interactiveBrokerAccount };
            const response = await API.put('cloneaiCustomersApi', '/customers/add-broker-account', {
                headers: { Authorization: token },
                body,
                response: true,
            });
            await fetchCustomer()
            console.log('addBrokerAccount response', response);
        } catch (e) {
            throw new Error(e?.response?.data?.message || 'Something went wrong')
        }
    }, [fetchCustomer]);

    const getPlans = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const { signInUserSession } = user;
            const token = signInUserSession.idToken.jwtToken;
            const response = await API.get('cloneaiCustomersApi', '/plans', { headers: { Authorization: token } });
            console.log('plans', normalizePlans(response));
            setPlans(normalizePlans(response));
            return response;
        } catch (e) {
            console.log('getPlans error', e);
        }
    }

    const createStripeSubscription = async (body) => {
        try {
            console.log('payload', body);
            const response = await API.post('cloneaiCustomersApi', '/create-subscription', { body, response: true });
            console.log('createStripeSubscription', response);
            setTimeout(() => fetchCustomer(), 5000);
            return response;
        } catch (e) {
            throw new Error(e?.response?.data?.message || 'Something went wrong')
        }
    }

    const cancelSubscription = async () => {
        try {
            const body = { id: user?.subscription?.id };
            const response = await API.post('cloneaiCustomersApi', '/cancel-subscription', { body, response: true });
            console.log('cancelSubscription', response);
            setUser((prevUser) => ({ ...prevUser, subscription: { ...prevUser.subscription, status: 'canceled' } }))
            return response;
        } catch (e) {
            throw new Error(e?.response?.data?.message || 'Something went wrong')
        }
    }

    const sendContactUsEmail = async (body) => {
        try {
            const response = await API.post('cloneaiCustomersApi', '/contact-us', { body, response: true });
            console.log('response sendContactUsEmail', response);
            return response;
        } catch (e) {
            throw new Error(e?.response?.data?.message || 'Something went wrong')
        }
    }

    useEffect(() => {
        fetchCustomer();
        getPlans();
    }, [fetchCustomer]);

    return (
        <StoreContext.Provider
            value={{
                user,
                plans,
                fetchUserLoading,
                setUser,
                createStripeSubscription,
                cancelSubscription,
                addBrokerAccount,
                sendContactUsEmail,
                fetchCustomer,
                getPlans
            }}
        >
            {children}
        </StoreContext.Provider>
    )
});

export default StoreProvider