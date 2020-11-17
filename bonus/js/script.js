// Partiamo dallo zip che vi passo,
// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini
// BONUS:
// vediamo se troviamo una nostra tecnica per affrontare la cosa;
// facciamo si che sia evidenziato solo il pallino relativo all’img in corso;
// altro che volete provare.

var app = new Vue({
  el: "#app",
  data: {
    fotoIndex: 0,
    foto: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg"
    ],


  },
   methods: {
     nextFoto: function () {
       this.fotoIndex = this.fotoIndex + 1;


       if(this.fotoIndex > (this.foto.length - 1)){
         this.fotoIndex = 0;

       }
       console.log(this.fotoIndex)
     },
     prevFoto: function () {
       this.fotoIndex = this.fotoIndex + -1;


       if (this.fotoIndex < 0) {
         this.fotoIndex = (this.foto.length -1);
      
       }
       console.log(this.fotoIndex)
     }

  }
})
