import React, { useContext } from "react";
import "../../styles/home.css";

import Card from "../component/Card.jsx"
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center container-fluid container-home p-4">

			<div className="container">

				<h2 className="background-title-sections">Characters</h2>
				<div className="row flex-row flex-nowrap overflow-auto container-cards-home">
					{store.characters.map((item, i) => {
						return (
							<Card item={item} id={i} type={"characters"} key={i} />
						)
					})}
				</div>
				<h2 className="background-title-sections">Planets</h2>
				<div className="row flex-row flex-nowrap overflow-auto container-cards-home">
					{store.planets.map((item, i) => {
						return (
							<Card item={item} id={i} type={"planets"} key={i} />
						)
					})}
				</div>
				<h2 className="background-title-sections">Starships</h2>
				<div className="row flex-row flex-nowrap overflow-auto container-cards-home">
					{store.starships.map((item, i) => {
						return (
							<Card item={item} id={i} type={"starships"} key={i} />
						)
					})}
				</div>
				<h2 className="background-title-sections">Vehicles</h2>
				<div className="row flex-row flex-nowrap overflow-auto container-cards-home">
					{store.vehicles.map((item, i) => {
						return (
							<Card item={item} id={i} type={"vehicles"} key={i} />
						)
					})}
				</div>
			</div>

		</div>
	)
};