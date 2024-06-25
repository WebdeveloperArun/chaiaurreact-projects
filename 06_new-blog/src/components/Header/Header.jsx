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
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  
  return (
    <header className="bg-gray-900 text-white">
      <Container>
        <nav className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold">
            <Link to="/" className="hover:text-gray-400">
              Do-Blog
            </Link>
          </h2>
          <ul className="flex gap-4">
            {navItems &&
              navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="hover:text-gray-400"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
          </ul>
          {authStatus && <LogoutBtn />}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
