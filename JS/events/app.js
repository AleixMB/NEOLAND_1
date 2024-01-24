//1.1 --------------------------------------------

document.addEventListener("DOMContentLoaded", function (){
    
    document.getElementById("btnToClick").addEventListener("click", (e) => {
        console.log(e);
    });

});


//1.2 --------------------------------------------

document.addEventListener("DOMContentLoaded", function (){

    document.querySelector(".focus").addEventListener("focus", (e) => {
        console.log(e);
    });

});
//1.3 --------------------------------------------

document.addEventListener("DOMContentLoaded", function (){

    document.getElementById("input").addEventListener("click", (e) => {
    console.log(e);
    });

  });