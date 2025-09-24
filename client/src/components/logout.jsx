import { useNavigate } from "react-router-dom";
import { removeToken, removeUserRole } from "../api/auth.api"; // funciones que borren token y rol

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Limpiar token y rol
    removeToken();
    removeUserRole();

    // 2. Redirigir al login/menu
    navigate("/menu", { replace: true });
  };

  return (
    <button onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
}

export default Logout;
