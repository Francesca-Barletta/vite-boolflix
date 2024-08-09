import { reactive } from 'vue'
export const store = reactive ({
    userValue:'',
    movies: [],
    tvSeries: [],
	showFavorites: false,
	myList: JSON.parse(localStorage.getItem('myList')) || [],
    filmGenres: [
		{
			"id" : 28,
			"name": "Azione"
		},
		{
			"id" : 12,
			"name": "Avventura"
		},
		{
			"id" : 16,
			"name": "Animazione"
		},
		{
			"id" : 35,
			"name": "Commedia"
		},
		{
			"id" : 80,
			"name": "Crime"
		},
		{
			"id" : 99,
			"name": "Documentario"
		},
		{
			"id" : 18,
			"name": "Drammatico"
		},
		{
			"id" : 10751,
			"name": "Famiglia"
		},
		{
			"id" : 14,
			"name": "Fantasy"
		},
		{
			"id" : 36,
			"name": "Storia"
		},
		{
			"id" : 27,
			"name": "Horror"
		},
		{
			"id" : 10402,
			"name": "Musicale"
		},
		{
			"id" : 9648,
			"name": "Mistero"
		},
		{
			"id" : 10749,
			"name": "Romantico"
		},
		{
			"id" : 878,
			"name": "Science-Fiction"
		},
		{
			"id" : 53,
			"name": "Triller"
		},
		{
			"id" : 10752,
			"name": "Guerra"
		},
		{
			"id" : 37,
			"name": "Western"
		},

	] , 
	seriesGenres: [
		{
			"id" : 10759,
			"name": "Azione e avventura"
		},
		{
			"id" : 16,
			"name": "Animazione"
		},
		{
			"id" : 35,
			"name": "Commedia"
		},
		{
			"id" : 80,
			"name": "Crime"
		},
		{
			"id" : 99,
			"name": "Documentario"
		},
		{
			"id" : 18,
			"name": "Drammatico"
		},
		{
			"id" : 10751,
			"name": "Famiglia"
		},
		{
			"id" : 10762,
			"name": "Bambini"
		},
		{
			"id" : 10763,
			"name": "Mistero"
		},
		{
			"id" : 10764,
			"name": "Reality"
		},
		{
			"id" : 10765,
			"name": "Sci-Fi e Fantasy"
		},
		{
			"id" : 10766,
			"name": "Soap"
		},
		{
			"id" : 10767,
			"name": "Talk"
		},
		{
			"id" : 10768,
			"name": "Guerra e Politica"
		},
		{
			"id" : 37,
			"name": "Western"
		},
	],                                  
	isInFavorite(item) {
		console.log('isInFavorite',this.myList.some(fav => fav.id === item.id))
		return this.myList.some(fav => fav.id === item.id);
	},
	toggleFavorite(item) {
		const index = this.myList.findIndex(fav => fav.id === item.id);
		if (index === -1) {
		  this.myList.push(item);
		} else {
		  this.myList.splice(index, 1);
		}
		this.saveFavorites();
	  },

	saveFavorites() {
		localStorage.setItem('myList', JSON.stringify(this.myList));
	  }
});