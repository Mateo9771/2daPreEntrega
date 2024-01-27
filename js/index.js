const Motos = function (marca, modelo, color, stock, cilindrada){

    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.stock = stock
    this.cilindrada = cilindrada

}

let moto1 = new Motos ("Yamaha", "Fz", "Negro", 10, "149cc") 
let moto2 = new Motos ("Yamaha", "Fz", "Blanco", 2, "149cc")
let moto3 = new Motos ("Yamaha", "Fz", "Rojo", 5, "149cc")
let moto4 = new Motos ("Yamaha", "Crypton", "Negro", 2, "110cc")
let moto5 = new Motos ("Yamaha", "Crypton", "Blanco", 1, "110cc")
let moto6 = new Motos ("Yamaha", "Fz", "Azul", 3, "250cc")
let moto7 = new Motos ("Honda", "Titan", "Negro", 6, "150cc")
let moto8 = new Motos ("Yamaha", "Twister", "Rojo", 1, "250cc")
let moto9 = new Motos ("Yamaha", "Fz", "Azul", 2, "250cc")

let lista = [moto1, moto2, moto3, moto4, moto5, moto6, moto7, moto8, moto9]

function filtrarProducto () {

    let search = prompt ("ingresa marca").toUpperCase().trim()
    let resultado = lista.filter( (x) => x.marca.toUpperCase().includes(search))

    if (resultado.length > 0) {
        console.table(resultado)
    }else{
        alert("no fue encontrado")
    }
}

function agregarPoducto (){

    let marca = prompt ("Ingresa la marca").trim()
    let modelo = prompt ("Ingresa el modelo").trim()
    let color = prompt ("Ingresa el color").trim()
    let stock = parseFloat(prompt("Ingresa cantidad"))
    let cilindrada = prompt ("Ingresa cilindrada").trim()

    if(isNaN (stock) || marca == ""){
        alert("por favor, ingrese valores correctos")
        return
    }

    let moto = new Motos (marca, modelo, color, stock, cilindrada)

    if(lista.some((m)=>m.marca === moto.marca)){
        alert("La marca ya existe en la lista")
    }

    lista.push(moto)
    console.table(lista)
}