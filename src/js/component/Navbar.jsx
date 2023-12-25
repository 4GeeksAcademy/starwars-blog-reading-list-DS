import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-background">
			<div className="container py-4">

				{/* LOGO STARWARS */}
				<Link to="/">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className="logo-starwars" />
				</Link>

				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((item, i) => {
							return (
								<li key={i} className="px-1">

										<div>
											{item.name}
										</div>

										<div onClick={() => actions.deleteFavorite(i)}>
											<i className="fa-solid fa-trash-can"></i>
										</div>

								</li>
							)
						})}
					</ul>
				</div>

			</div>
		</nav>
	);
};

export default Navbar;