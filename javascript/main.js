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

   created(){
     // // Testing API search //
     // axios.get('https://api.themoviedb.org/3/search/movie?' , {
     //          params:{
     //            api_key: '63beb53b8b00ec7f4a87ec286b6e0c8d',
     //            query: 'fantozzi'
     //          }
     //
     //         })
     //
     //
     //       .then(response => {
     //         // default situation that leads to not printing any element if the string is empty
     //          console.log(response)
     //        })
     //
     //       .catch(error => {
     //        console.log(error);
     //       });


       },

       methods:{
         // function that filter the movie searched
         SearchingMovie(){
           axios.get('https://api.themoviedb.org/3/search/movie?' , {
                    params:{
                      api_key: '63beb53b8b00ec7f4a87ec286b6e0c8d',
                      query: this.movieSearched
                    }

                   })


                 .then(response => {

                    console.log(response)
                     // default situation that leads to not printing any element if the string is empty
                       if (this.movieSearched != "") {
                           var movieList = response.data.results;
                       }




                    // actal filtering movie
                    movieList = movieList.filter(element =>{
                      return element === this.movieSearched;
                    })

                    this.listaFiltered = movieList;
                    // testing
                    // console.log(this.listaFiltered)

                  })

                 .catch(error => {
                  console.log(error);
                 });


         }
       }
  });
