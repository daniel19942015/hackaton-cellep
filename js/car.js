$(document).ready(function () {

    var produto = getProduct()
    var carrinho = document.getElementById("car")
    console.log(produto)
    makeProduct(produto)
    contCar()

    carrinho.addEventListener("click", function(){
        addCar(produto)
        contCar()
    })

})

function getProduct(){
    var url_ = new URL(location.href);
    var id = parseInt(url_.searchParams.get("id"));

    var produtos = JSON.parse(localStorage.getItem("produtos"))
    var produto = produtos.filter(element => element.id === id)

    return produto[0]
}

function makeProduct(produto){
    var card_title = document.getElementById("card-title")
    var imagem = document.getElementById("imagem")
    var preco = document.getElementById("preco")
    imagem.setAttribute('src', produto.img)
    card_title.innerHTML = produto.nome
    preco.innerHTML = "R$ " + produto.preco.toFixed(2).toString().replace(".", ",")
}

function addCar(produto){

    if(localStorage.getItem("carrinho")){
        console.log("Carrinho existe")
        var car = JSON.parse(localStorage.getItem("carrinho"))
        localStorage.removeItem("carrinho")
        car.push(produto)
        console.log(car)
        localStorage.setItem("carrinho", JSON.stringify(car))
    }else{
        console.log("Carrinho nao existe")
        localStorage.setItem("carrinho", JSON.stringify([produto]))
    }

}

function contCar(){
    var cont = document.getElementById("cont-car")
    var produto = JSON.parse(localStorage.getItem("carrinho"))
    if(produto){
        cont.innerHTML = produto.length
    }
}