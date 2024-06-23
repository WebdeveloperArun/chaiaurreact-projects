import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import auth from "./appwrite/auth";
import { login, logout } from "./store/authSlice.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth
      .getUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div>
      <Header />
      <main> Todo:  <Outlet/></main>
      <Footer />
    </div>
  ) : (
    <h1>Loading ...</h1>
  );
}

export default App;
