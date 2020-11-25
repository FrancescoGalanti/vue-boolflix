/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {

     // List filtered managed b a function in vue
     listaFiltered: [],
     // string of value managed by vue //
     movieSearched: "",
   },


   methods:{
         // Function that allow to filter the movie per titlte using query
         searchingMovie(){


            // calling the API with Jason //
            axios.get('https://api.themoviedb.org/3/search/movie', {
                  params:{
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    query: this.movieSearched,
                    language: 'it-IT',
                  }
               })

                .then(response =>{
                  // default situation that leads to not printing any element if the string is empty 
                  if (this.searchKey.trim() != '') {
                   this.listaFiltered = result.data.results;
                  }

                 })
                .catch(error =>{
                 console.log(error);
                });

            }
        }


});
