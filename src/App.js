import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Listings from "./pages/Listings/Listings";
import ListItem from "./pages/ListItem/ListItem";
import "./App.css";
import AuthProvider from "./context/auth";
import ListingProvider from "./context/listings";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";

function App() {
  return (
    <AuthProvider>
      <ListingProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/:slug" element={<ListItem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </ListingProvider>
    </AuthProvider>
  );
}

export default App;
