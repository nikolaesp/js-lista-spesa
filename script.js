let arrayspesa = ["1kg patate","4 cipolle","11 uova","steca costini","deodorante","candegina","3l Vino rosso"];
let h = 0;
while(h<arrayspesa.length){
    console.log(arrayspesa[h++]);
}
console.log(`\n\n`);

let list = document.getElementById("listaspesa"); //crea una unorderd list
  let i =0;
arrayspesa.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  arrayspesa.push(item);
  let button = document.createElement("button");
button.innerHTML = "Elimina";
li.appendChild(button);
li.setAttribute("id","elimina"+i);
  list.appendChild(li);  
  i++;
});                       //crea list items con valore di nostra array lista


    
    let btndel = document.getElementById("elimina1");


    
    btndel.addEventListener('click', function(){
        btndel.parentNode.parentNode.removeChild(element);

        
        let element = document.getElementById("elimina1");
        console.log("------"+element.id+" - - - - - ");
        element.parentNode.parentNode.parentElement.removeChild();
    
    });






let additembtn = document.getElementById("btnadditem");

additembtn.addEventListener('click',function(){

    
    let item = document.getElementById("inputitem").value;
    arrayspesa.push(item);
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
    for(let i=0;i<arrayspesa.length;i++){
        console.log(arrayspesa[i]);
    }
    
});





