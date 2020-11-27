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
     // list of avible langue //
     availableFlags: ["it","en"]
   },

   created(){
     // Testing API search //
     axios.get('https://api.themoviedb.org/3/search/movie?' , {
              params:{
                api_key: '63beb53b8b00ec7f4a87ec286b6e0c8d',
                query: 'fantozzi'
              }

             })


           .then(response => {
             // deafaukt situation
              const res = response.data.results;
               this.listaFiltered = res;

              console.log(response)
            })

           .catch(error => {
            console.log(error);
           });



       },

       methods:{
         // function that filter  movie and tv series searched
         SearchingMovie(){
          // avoid duplicate the result
           this.listaFiltered = []

           // Calling API FOR MOVIE
           axios.get('https://api.themoviedb.org/3/search/movie?' , {
                    params:{
                      api_key: '63beb53b8b00ec7f4a87ec286b6e0c8d',
                      query: this.movieSearched,
                      language: 'it-IT'
                    }

                   })


                 .then(response => {

                    console.log(response)
                     // referenze varable //


                     // concatenation of the two calls to avoid possible delay in data reception
                     // Avoiding duplicate serach from start
                     
                        const res = response.data.results
                        this.listaFiltered = this.listaFiltered.concat(res)


                  })

                 .catch(error => {
                  console.log(error);
                 });

                 // calling API for tv
                 axios.get('https://api.themoviedb.org/3/search/tv?' , {
                          params:{
                            api_key: '63beb53b8b00ec7f4a87ec286b6e0c8d',
                            query: this.movieSearched
                          }

                         })


                       .then(response => {

                          console.log(response)
                           // referenze varable //
                           const res = response.data.results
                           // concatenation of the two calls to avoid possible delay in data reception
                           this.listaFiltered = this.listaFiltered.concat(res)

                        })

                       .catch(error => {
                        console.log(error);
                       });


              },
              // Function callback with one parames that convert in vote the poit
              getVote(vote){
                return Math.ceil(vote / 2);
              },
              // Function callback that check the lang
              isLangFlag(lang){
                // checking if inside the list there is the lang
                return this.availableFlags.includes(lang)
              },

              getFlag(lang){
                return `./img/${lang}.png`
              }


       }
  });
