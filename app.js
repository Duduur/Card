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

const card = [
    {imagem:'ferrari.png' , titulo: '', desc:'', preco:'' },
    {imagem:'mclaren.png' , titulo: '', desc:'', preco:'' },
    {imagem:'porche.png' , titulo: '', desc:'', preco:'' },
    {imagem:'lamborguini.png' , titulo: '', desc:'', preco:'' },
    {imagem:'buggati.png' , titulo: '', desc:'', preco:'' }
]

function Cards(cards){
    const main = document.createElement('main')
    const novoItem = document.createElement('div')
    const cartao =  document.createElement('card')
    const novoTexto = document.createElement('h1')
    const descricao = document.createElement('p')
    const novaImg = document.createElement('img')
    const novoButton = document.createElement('button')

    novaImg.src = ` ./icon/${ferrari.icon}`


    novoTexto.textContent = cards.titulo
    descricao.textContent = cards.desc


    main.appendChild(novoItem)
    novoItem.appendChild(cartao)
    novoItem.appendChild(novoTexto)
    novoItem.appendChild(novaImg)
    novoItem.appendChild(descricao)
    novoItem.appendChild(novoButton)


}
   
cidades.forEach(criarMenu)