$(document).ready(function () {

    var produtos = [
        { id: 1, img: "https://www.w3schools.com/w3images/jeans1.jpg", nome: "Calça Jeans 1", preco: 50.00, page: "produto.html" },
        { id: 2, img: "https://www.w3schools.com/w3images/jeans2.jpg", nome: "Calça Jeans Skinning", preco: 40.00, page: "produto.html" },
        { id: 3, img: "https://www.w3schools.com/w3images/jeans3.jpg", nome: "Calça Jeans 2", preco: 100.00, page: "produto.html" },
        { id: 4, img: "https://www.w3schools.com/w3images/jeans4.jpg", nome: "Calça Jeans 3", preco: 75.00, page: "produto.html" },
        { id: 5, img: "https://www.w3schools.com/w3images/jeans2.jpg", nome: "Calça Jeans 4", preco: 30.00, page: "produto.html" },
        { id: 6, img: "https://www.w3schools.com/w3images/jeans1.jpg", nome: "Calça Jeans 5", preco: 30.00, page: "produto.html" },
        { id: 7, img: "https://www.w3schools.com/w3images/jeans3.jpg", nome: "Calça Jeans 5", preco: 75.00, page: "produto.html" },
        { id: 8, img: "https://www.w3schools.com/w3images/jeans1.jpg", nome: "Calça Jeans 6", preco: 60.00, page: "produto.html" },
        { id: 9, img: "https://www.w3schools.com/w3images/jeans3.jpg", nome: "Calça Jeans 7", preco: 75.00, page: "produto.html" }
    ]
    //Set Local Storage
    addData(produtos)
    countItens(produtos)
    createElements(produtos)
    contCar()

})

function countItens(obj){
    var items = document.getElementById("item")
    items.innerHTML = obj.length <= 1 ? `${obj.length} item` : `${obj.length} itens`; 

}

function createElements(obj) {

    var conteudo = document.getElementById("conteudo")

    for(var produto of obj){
        var preco = produto.preco.toFixed(2).toString().replace(".", ",")
        var div = ` 
        <div class="col-md-4 p-3 mb-5 rounded">
            <div class="card">
                    <img src="${produto.img}" class="card-img-top" alt="...">
                    <a href="${produto.page}?id=${produto.id}" class="verify">
                        <i class="bi bi-search"></i>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">R$ ${preco}</small>
                    </div>
            </div>
        </div>` 

        conteudo.innerHTML += div

    }
}

function addData(obj) {
    localStorage.setItem("produtos", JSON.stringify(obj))
}

function contCar(){
    var cont = document.getElementById("cont-car")
    var produto = JSON.parse(localStorage.getItem("carrinho"))
    if(produto){
        cont.innerHTML = produto.length
    }
}