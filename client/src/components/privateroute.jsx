import { Navigate } from "react-router-dom";
import { getToken, getUserRole } from "../api/auth.api";

function RutaPrivada({children , role}){
    const token = getToken();
    const userRole = (getUserRole() || "").toLowerCase();

    //si no hay token -> no esta logeado -> login
    if (!token){
        return <Navigate to= "/" replace />;
    }

    //si tiene token pero el rol no coincide -> acceso denegado
    if (role && userRole !== role.toLowerCase()){
        return <Navigate to="/" replace />;
    }

    //si esta todo bien -> renderiza el componente hijo
    return children;
}

export default RutaPrivada;