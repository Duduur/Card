'use strict' //faz com que erros de hortografia não acontecam

const cidades = [
    {nome: 'Buggati', cor:'red', icon:'cidade.png'},
    {nome: 'Porche',cor: 'purple', icon:'cidade.png'},
    {nome:'Mclaren', cor: 'blue',icon:'cidade.png'},
    {nome:'Lamborguini', cor: 'gray',icon:'cidade.png'},
    {nome:'Ferrari', cor: 'green',icon:'cidade.png'}
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
    {imagem:'ferrari.png' , titulo: 'FERRARI', desc:'Experimente o poder e a exclusividade da Ferrari. Modelos icônicos que combinam design sofisticado e desempenho excepcional. ', preco:'US$ 8 milhões'},
    {imagem:'mclaren.png' , titulo: 'MCLAREN', desc:'Desfrute da potência e tecnologia de ponta da McLaren. Modelos incríveis que oferecem desempenho de classe mundial e um design impressionante.', preco:'US$ 12 milhões' },
    {imagem:'porche.png' , titulo: 'PORCHE', desc:'Sinta a emoção da condução com a Porsche. Um equilíbrio perfeito entre desempenho, design e inovação, criando uma experiência única a cada quilômetro.', preco:'US$ 2 milhões' },
    {imagem:'lamborguini.png' , titulo: 'LAMBORGUINI', desc:'Sinta a adrenalina com a Lamborghini. Design ousado e desempenho impressionante, para quem busca excelência e emoção a cada aceleração.', preco:'US$ 3,950 milhões'},
    {imagem:'buggati.png' , titulo: 'BUGGATI', desc:'Explore a supremacia da velocidade e luxo com a Bugatti. Potência incomparável e design exclusivo, criando uma experiência de dirigir sem igual. ', preco:'US$ 10,78 milhões' }
]
function Cards(cards){
    const main = document.getElementById('main')
    const cartao =  document.createElement('div')
    const novoTexto = document.createElement('h1')
    const novaImg = document.createElement('img')
    const descricao = document.createElement('p')
    const preco = document.createElement('h2')
    const novoButton = document.createElement('button')


    novoTexto.textContent = cards.titulo
    novaImg.src = ` ./icon/${cards.imagem}`
    descricao.textContent = cards.desc
    preco.textContent = cards.preco
    novoButton.textContent = "Add to Cart"
    

    cartao.className = 'card'

    cartao.appendChild(novoTexto)
    cartao.appendChild(novaImg)
    cartao.appendChild(descricao)
    cartao.appendChild(preco)
    cartao.appendChild(novoButton)


    main.appendChild(cartao)


}
   
cidades.forEach(criarMenu)
card.forEach(Cards)