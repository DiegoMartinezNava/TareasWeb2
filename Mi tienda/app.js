let carrito = [];

function mostrarMenu() {
    return parseInt(prompt(`
        "Seleccione un producto para agregar al carrito"
        1.- Camisa - $300
        2.- Pantalón - $500
        3.- Tenis - $800
        4.- Hoodie - $1200
        5.- Ver Carrito y Total
        6.- Salir
    `));
}

// Función para agregar una camisa al carrito
function agregarCamisa() {
    let camisa = { 
        nombre: "Camisa",
        precio: 300
    };
    carrito.push(camisa); 
    console.log(`Producto "${camisa.nombre}" agregado al carrito.`);
}

// Función para agregar un pantalon al carrito
function agregarPantalon() {
    let pantalon = { 
        nombre: "Pantalon",
        precio: 500
    };
    carrito.push(pantalon); // Agregamos el objeto camisa al carrito
    console.log(`Producto "${pantalon.nombre}" agregado al carrito.`);
}

// Función para agregar unos tenis al carrito
function agregarTenis() {
    let tenis = { 
        nombre: "Tenis",
        precio: 800
    };
    carrito.push(tenis); // Agregamos el objeto camisa al carrito
    console.log(`Producto "${tenis.nombre}" agregado al carrito.`);
}

// Función para agregar una hoodie al carrito
function agregarHoodie() {
    let hoodie = { 
        nombre: "Hoodie",
        precio: 1200
    };
    carrito.push(hoodie); // Agregamos el objeto camisa al carrito
    console.log(`Producto "${hoodie.nombre}" agregado al carrito.`);
}

// Función para ver el carrito y el total
function verTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Carrito de Compras:");
        let total = 0;
        carrito.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
            total += producto.precio; 
        });
        console.log(`Total: $${total}`);
    }
}

// Función para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarCamisa();
                break;
            case 2:
                agregarPantalon();
                break;
            case 3:
                agregarTenis();
                break;
            case 4:
                agregarHoodie();
                break;
            case 5:
                verTotal();
                break; // Asegúrate de agregar break aquí
            case 6:
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
        }
    }
    alert("Programa finalizado");
}

iniciarPrograma();
