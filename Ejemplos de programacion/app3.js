let vertical = "";
let horizontal = "";
let x = [0,1,2,3];

x.forEach(()=>{
    vertical += "x\n";
});

x.forEach(()=>{
    horizontal += "x";
});

let cuadrado = "";
for (let i = 0; i < 3; i++){
    x.forEach(()=>{
        cuadrado += "x";
    });
    cuadrado += "\n";
}

let tablaDiez = "";

for (let i = 1; i <= 10; i ++){
    tablaDiez += `10 x ${i} = ${10 * i}\n`;
}

alert(vertical);
alert(horizontal);
alert(cuadrado);
alert(tablaDiez);
