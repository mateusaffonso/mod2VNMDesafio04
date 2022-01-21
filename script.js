//1 - crie uma função que exiba uma mensagem no console

function goodMornning(){
    console.log("Good morning, human!")
}

goodMornning()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function showName(nome){
    let variable = `Hello, ${nome}`
    console.log(variable)
}

showName('Mateus Augusto')
showName('Nathalia Mello')

//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function personalData(name, age, musicStyle){
    console.log(`Nome: ${name}\nIdade: ${age}\nEstilo Musical: ${musicStyle}`)
}

personalData("Mateus Augusto do Nascimento Affonso", "23 anos", "MPB")

//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function favorites(film,music){
    console.log(`Filme favorito: ${film}\nMúsica favorita: ${music}`)
}

favorites("Um sonho de liberdade", "Dai a Cesar o Que É de Cesar - Cesar Mc")
//*Bônus

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(number){
    let result = number*3
    console.log(`O triplo de ${number} é ${result}.`)
}

triplo(3)