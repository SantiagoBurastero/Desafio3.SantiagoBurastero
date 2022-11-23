
class Producto{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const producto1 = new Producto(1, 'guitarra', 9000)
const producto2 = new Producto(2, 'Bajo', 9000)
const producto3 = new Producto(3, 'Bateria', 15000)
const producto4 = new Producto(4, 'Piano', 25000)
const producto5 = new Producto(5, 'Sintetizador', 6000)
const producto6 = new Producto(6, 'Cable plug', 400)
const producto7 = new Producto(7, 'Microfono', 2000)
const producto8 = new Producto(8, 'Correa', 800)
const producto9 = new Producto(9, 'Puas x4', 150)

const productosArray = {
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
}

const divProductos = document.querySelector('#divProductos')

productosArray.forEach(producto => {

    divProductos.innerHTML = divProductos.innerHTML + `
    <div id="${producto.id}" class="card cardProducto">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <button id="${producto.id}">Agregar</button>
    </div>
    </div>

    `
})

const carrito = []
const botonAgregar = document.querySelectorAll ('.btn-primary')

botonAgergar.forEach(boton=>{
    boton.onclick = () => {
        const producto = productosArray.find(prod=>prod.id===parseInt (boton.id))



        const productoCarrito = {
            id: producto.nombre,
            precio: producto.nombre,
            cantidad: 1
        }

        const indexCarrito = carrito.findIndex (prod=>prod.id === producto.id)
        if(indexCarrito === -1){
            carrito.push (productoCarrito)
        } else {
            carrito[indexCarrito].cantidad += 1
        }
        console.log(carrito)
    }
})

const botonFinalizar = document.querySelector ('#finalizar')
botonFinalizar.onclick = () => {
    const totalCompra = carrito.map(prod.precio*prod.cantidad).reduce ((elem1,elem2)=>elem1+elem2)
    console.log (totalCompra)
}