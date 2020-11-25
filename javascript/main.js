/**
 * Boolzapp Vue
 */
var app = new Vue({
    el: '#app',
    data: {

     list: [7,8,9],
     list2: ["a","b","c"],
     lista3: []
   },

    created(){
       this.addNumber();
    },


   methods:{

       addNumber(){

           this.list.map((e, i) =>  this.lista3.push(e + this.list2[i]))

           console.log(lista3)
         }


       }





});


// const list = [7,8,9]
// const list2 = ["a","b","c"]
//
//
// var newArray = list.map((e, i) => e + list2[i]);
// console.log(newArray);
