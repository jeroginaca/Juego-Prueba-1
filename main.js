window.onload = () =>{
    document.querySelector("#btn").addEventListener("click", () =>{
    document.querySelector("#respuesta").innerHTML = generateExcuse();
    });
};

let generateExcuse = () => {
    
    let first = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let second = ["de Enero","de Febrero","de Marzo","de Abril","de Mayo",];

    let firstIndex = Math.floor(Math.random() * first.length);
    let secondIndex = Math.floor(Math.random() * second.length);

 
    let result = first[firstIndex] + " " + second[secondIndex];

   // if (result != "25 de Mayo"){
     //   document.querySelector("#btn-2").style.display = "none";
   // } 

    //else 
    return (result);
  
    
}

