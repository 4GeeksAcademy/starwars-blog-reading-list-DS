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

			addToFavs: (type, id) => {
				let store = getStore();
				let item = store[type][id];
				let newFavorites = [...store.favorites, item];
				setStore({ favorites: newFavorites });
			},

			deleteFavorite: (i) => {
				let store = getStore();
				let newFavorites = store.favorites.filter((item, index) => index !== i);
				setStore({ favorites: newFavorites });
			},

			toggleFavorite: (item) => {
				let store = getStore();
				let isFavorite = store.favorites.some(fav => fav.name === item.name);

				if (isFavorite) {
					// Si ya es un favorito, elimínalo
					let newFavorites = store.favorites.filter(fav => fav.name !== item.name);
					setStore({ favorites: newFavorites });
					console.log("Esto es el console.log para QUITAR favorito", newFavorites)
				} else {
					// Si no es un favorito, agrégalo
					let newFavorites = [...store.favorites, item];
					setStore({ favorites: newFavorites });
					console.log("Esto es el console.log para AGREGAR favorito", newFavorites)
				}
			},

		}
	};
};

export default getState;