import { Navigate } from "react-router-dom";
import { timer } from "./timers.js";

function AuthManager({ children }) {
  let email = localStorage.getItem("email");
  if (email) {
    timer();
  }

  return email ? children : <Navigate to="/signin" replace />;
}
export default AuthManager;
