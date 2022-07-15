for ( n = 0; n < 5; n++) {
    console.log(n)
}

var videoGames = ["PC", "PS4", "XBOX", "NITENDO"]

for (item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item])

    if (videoGames[item] === "PS4") {
        break
    }
}

var frutas1 = ["Banana", "Maçã", "Uva", "Morango", "Maracujá"]

frutas1.forEach(function(item) {
    console.log(item)
})


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1994, 1962, 1970, 1994, 2022]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach(function(ano) {
    console.log(`O Brasil ganhou a Copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta])

    if (frutas[fruta] === "Pera") {
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let ultimaFruta = frutas[frutas.length - 1]