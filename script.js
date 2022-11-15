let arrayspesa = ["1kg patate","4 cipolle","11 uova","steca costini","deodorante","candegina","3l Vino rosso"];
let h = 0;
while(h<arrayspesa.length){
    console.log(arrayspesa[h++]);
}
console.log(`\n\n`);



let additembtn = document.getElementById("btnadditem");

additembtn.addEventListener('click',function(){
    let item = document.getElementById("inputitem").value;
    arrayspesa.push(item);

    for(let i=0;i<arrayspesa.length;i++){
        console.log(arrayspesa[i]);
    }
    
});





