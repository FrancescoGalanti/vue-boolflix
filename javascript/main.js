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

           const self = this;
            // calling the API with Jason //
            axios.get('https://api.themoviedb.org/3/search/movie?', {
                  params:{
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    query: self.movieSearched,
                  }
               })
               .then(function (response) {
                // Testing the call API made with JASON //
                console.log(response)
                // refenze variable default object "all" //
                let cdslist = response.result;
                 // Filter appling in cds list if the value is different from "all"

                 if (self.movieSearched.trim() !== "") {
                       cdslist = cdslist.filter(element =>{
                       // Returning only the elemnt.genre white same value in genreChosen //
                       return element.title.toLowerCase() === self.movieSearched;
                   });

                 }
                 // Returnig the list with or withnot the filter applied //
                 self.listaFiltered = cdslist;

                 console.log(self.listaFiltered)

               })
                 .catch(function (error) {
                   alert(error);
               });

          }
        }




});
