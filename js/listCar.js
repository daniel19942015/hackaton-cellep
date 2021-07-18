$(document).ready(function(){
    contCar()
    listCar()
})

function listCar(){
    var conteudo = document.getElementById("conteudo")
    var car = JSON.parse(localStorage.getItem("carrinho"))
    for(var info of car){
        var preco = info.preco.toFixed(2).toString().replace(".", ",")
        html = `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${info.img}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${info.nome}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">R$ ${preco}</small></p>
            </div>
          </div>
        </div>
      </div>`

      conteudo.innerHTML += html
    }

}

function contCar(){
    var cont = document.getElementById("cont-car")
    var produto = JSON.parse(localStorage.getItem("carrinho"))
    if(produto){
        cont.innerHTML = produto.length
    }
}