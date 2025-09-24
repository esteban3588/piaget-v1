import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth.api";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser(); // Limpia token y rol
    navigate("/", { replace: true }); //redirige al login
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
}

export default LogoutButton;
