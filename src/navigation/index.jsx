import { Routes, Route } from "react-router-dom";
import Auth from "../views/auth";
import Home from "../views/home";

import DashboardLayout from "../components/dashboard-layout";
import DashboardNew from "../views/dashboard";
import Profile from "../views/profile";
import Subscription from "../views/subscription";
import CheckoutPage from "../views/checkout";
import PrivacyPage from "../views/privacy";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "../views/forgot-password";
import Verification from "../views/verification";

const NavigationContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DashboardNew />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/subscription"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Subscription />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Auth />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  );
};

export default NavigationContainer;
