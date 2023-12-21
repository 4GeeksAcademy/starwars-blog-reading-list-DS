const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPlanets: () => {
				fetch('https://swapi.dev/api/planets')
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
			},

			getStarships: () => {
				fetch('https://swapi.dev/api/starships')
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }))
					.catch(err => console.error(err))
			},

			getVehicles: () => {
				fetch('https://swapi.dev/api/vehicles')
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))
			},

			getCharacters: () => {
				fetch('https://swapi.dev/api/people')
					.then(resp => {
						console.log("Fetch people/characters: " + resp.ok);
						console.log("status code: " + resp.status);
						return resp.json();
					})
					.then(data => {
						console.log(data)
						setStore({ characters: data.results })
					})

					.catch(error => {
						console.log(error)
					})
			},

			addToFavs: (name) => {
				let store = getStore()
				store.favorites.push(name)
				setStore(store)
			},

			deleteFavorite: (i) => {
				let store = getStore()
				let newFavorites = store.favorites.filter((item, index) => index != i)
				setStore({ favorites: newFavorites })
			}

		}
	};
};

export default getState;