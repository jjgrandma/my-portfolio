import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

/* ===== AUTH ===== */
import Login from "./pages/auth/Login";

/* ===== ADMIN ===== */

import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageVehicles from "./pages/admin/ManageVehicles";
import RolesPermissions from "./pages/admin/RolesPermissions";
import Reports from "./pages/admin/Reports";



/* ===== OTHER ROLES ===== */
import OfficerDashboard from "./pages/transportOfficer/OfficerDashboard";
import DriverDashboard from "./pages/driver/DriverDashboard";
import UserDashboard from "./pages/user/UserDashboard";

/* ===== PROTECTED ROUTE ===== */
function ProtectedRoute({ allowedRoles, children }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" replace />;

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {/* ===== LOGIN ===== */}
      <Route path="/" element={!user ? <Login /> : <Navigate to="/redirect" />} />

      {/* ===== ROLE REDIRECT ===== */}
      <Route
        path="/redirect"
        element={
        
          user?.role === "ADMIN" ? (
            <Navigate to="/admin" />
          ) : user?.role === "TRANSPORT" ? (
            <Navigate to="/transport" />
          ) : user?.role === "DRIVER" ? (
            <Navigate to="/driver" />
          ) : user?.role === "USER" ? (
            <Navigate to="/user" />
          ) : (
            <Login />
          )
        }
      />

      {/* ===== ADMIN ROUTES ===== */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="vehicles" element={<ManageVehicles />} />
        <Route path="roles" element={<RolesPermissions />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* ===== TRANSPORT OFFICER ===== */}
      <Route
        path="/transport"
        element={
          <ProtectedRoute allowedRoles={["TRANSPORT"]}>
            <OfficerDashboard />
          </ProtectedRoute>
        }
      />

      {/* ===== DRIVER ===== */}
      <Route
        path="/driver"
        element={
          <ProtectedRoute allowedRoles={["DRIVER"]}>
            <DriverDashboard />
          </ProtectedRoute>
        }
      />

      {/* ===== USER ===== */}
      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRoles={["USER"]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* ===== FALLBACK ===== */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}