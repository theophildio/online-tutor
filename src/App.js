import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Footer from "./Pages/Common/Footer/Footer";
import Header from "./Pages/Common/Header/Header";
import Cources from "./Pages/Cources/Cources";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Auth/Login/Login";
import Logout from "./Pages/Auth/Logout/Logout";
import Register from "./Pages/Auth/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/Auth/RequireAuth/RequireAuth";
import AddedCource from "./Pages/AddedCource/AddedCource";

function App() {
	return (
		<div className="app-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cources" element={<Cources />} />
				<Route path="/aboutme" element={<AboutMe />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/register" element={<Register />} />
        <Route path="/checkout" element={
					<RequireAuth>
          	<Checkout />
        	</RequireAuth>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
