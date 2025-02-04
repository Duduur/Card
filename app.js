'use strict' //faz com que erros de hortografia não acontecam

const cidades = [
    {nome: 'Jandira', cor:'red', icon:'cidade.png'},
    {nome: 'Itapevi',cor: 'purple', icon:'cidade.png'},
    {nome:'Osasco', cor: 'blue',icon:'cidade.png'},
    {nome:'Barueri', cor: 'gray',icon:'cidade.png'},
    {nome:'Sorocaba', cor: 'green',icon:'cidade.png'}
]

function criarMenu(cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./icon/${cidade.icon}`


    novoLink.href = '#'
    novoLink.textContent = cidade.nome
    
    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}
   
cidades.forEach(criarMenu)