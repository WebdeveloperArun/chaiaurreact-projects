import React from "react";
import { Container, LogoutBtn} from "../index"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/",
      active: authStatus,
    },
  ]
  
  return (
    <header>
      <Container>
        <nav className="flex justify-around">
          <h2> <Link to="/" >Blog-Do</Link> </h2>
          <ul className="flex gap-4">
            {navItems && navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)}>{item.name}</button>
              </li>
            ) : (null))}
          </ul>
          {authStatus && (
            <LogoutBtn/>
          )}
        </nav>
      </Container>
    </header>
  )
};

export default Header;
