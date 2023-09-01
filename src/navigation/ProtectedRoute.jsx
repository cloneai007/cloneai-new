import { Navigate } from "react-router-dom";
import { useStore } from "../context/AppProvider";
import { CircularProgress, Stack } from "@mui/material";

const ProtectedRoute = ({ children }) => {
    const { user, fetchUserLoading } = useStore();
    console.log('user ProtectedRoute', user)
    console.log('fetchUserLoading ProtectedRoute', fetchUserLoading)

    if (fetchUserLoading) {
        return (
            <Stack alignItems="center" justifyContent="center" height="100vh">
                <CircularProgress sx={{ color: "#d22418"  }}/>
            </Stack>
        )
    }

    if (!Object.keys(user || {}).length) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;