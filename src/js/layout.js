import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home.js";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar.jsx";
import About from "./views/about.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about/:info" element={<About />} />
					<Route path="*" element={<h1 className="text-white text-center pt-3">Data lost in far away lands!</h1>} />
				</Routes>
			</BrowserRouter>
		</div >
	);
};

export default injectContext(Layout);
