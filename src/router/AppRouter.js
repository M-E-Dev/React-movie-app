// import { useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import MovieDetail from "../pages/MovieDetail"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


const AppRouter = () => {

  const {currentUser} = useContext(AuthContext)

  function PrivateRouter() {
    let location = useLocation()
    if (!currentUser) {
      return <Navigate to="/login" state={{from: location}} replace />
    }
    return <Outlet/>
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* Eğer üsttekiler dışında path gelirse==>
            1- PrivateRouter'a git
            2- CurrentUser varsa Outlet yani Route childine git
            3- Yoksa /login e Navigate et */}
        <Route element={<PrivateRouter/>} >
          <Route path="/details/:id" element={<MovieDetail/>} />
          <Route path="/users/:id" element={<MovieDetail/>} />
        </Route>
        
        {/* ---------- :id ile dinamik routing -----------
        {/* Doğrudan details linki girilirse logine atsın, back yapıldığında sarmala girmemek için,
         logini url eklemesin diye Navigate kullnıldı */}
         {/* Her sayfa için tek tek yapmamak için bu sistemi kullanmıyoruz, PRIVATE ROUTE KULLAN!
        <Route path="/details/:id" element={currentUser? <MovieDetail/> : <Navigate to="/login"/> } /> */} */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
