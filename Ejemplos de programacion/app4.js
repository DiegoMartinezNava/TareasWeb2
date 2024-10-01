let usuarioHorizontal = parseInt(prompt("¿Cúantas x quieres en horizontal?"), 10);
let usuarioVertical = parseInt(prompt("¿Cúantas x quieres de forma vertical?"), 10);

let horizontalArray = [];
let verticalArray = [];

for (let i = 0; i < usuarioHorizontal; i++){
    horizontalArray.push("x");
}

for (let i = 0; i < usuarioVertical; i++){
    verticalArray.push("x");
}

let alerta = "";

horizontalArray.forEach(()=>{
    alerta += "x";
});

alerta += "\n";

verticalArray.forEach(()=>{
    alerta += "x\n"
});

alert(alerta);