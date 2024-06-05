import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {_id: "tejas", role:"user"};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const logOutHandeler =() =>{
    setIsOpen(false)
  }

  return (
    <nav className="header">
      <Link onClick={()=> setIsOpen(false)} to={"/"}>Home</Link>
      <Link onClick={()=> setIsOpen(false)}  to={"/search"}>
        {" "}
        <FaSearch />
      </Link>
      <Link onClick={()=> setIsOpen(false)}  to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={toggleDialog}>
            <FaUser />
          </button>
          {isOpen && (
            <dialog open={isOpen}>
              <div>
                {user.role === "admin" && (
                  <Link onClick={()=> setIsOpen(false)}  to='/admin/dashboard'>Admin</Link>
                )}
                <Link onClick={()=> setIsOpen(false)}  to="/orders">Orders</Link>
                <button onClick={logOutHandeler} >
                  <FaSignOutAlt />
                </button>
              </div>
            </dialog>
          )}
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;