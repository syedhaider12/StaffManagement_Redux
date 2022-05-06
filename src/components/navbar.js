import React from "react";
import { LogoutIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let email = localStorage.getItem("email");

  return (
    <>
      <div>
        <nav className="flex flex-row justify-between w-full px-2 py-3 font-mono text-lg font-bold text-white bg-blue-600 ">
          <h1>STAFF MEMBERS</h1>

          {email && (
            <LogoutIcon
              className="w-5 h-5"
              onClick={() => {
                localStorage.removeItem("email");
                navigate("/signin");
              }}
            ></LogoutIcon>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
