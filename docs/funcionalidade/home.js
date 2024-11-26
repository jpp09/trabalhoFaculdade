const url = 'https://trabalhofaculdadebackend.onrender.com/home'
const url_teste = 'http://127.0.0.1:5000/home'

const pegarConteudo = fetch(url,{
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(res => res.json())
.then(json => json.results.forEach(element => criar(element.overview,element.poster_path)))

function criar(ov,img){
    const p = document.createElement('p')
    const image = document.createElement('img')
    const div_externa = document.createElement('div')
    const pegarID= document.getElementById('noticias')
    const div_body = document.createElement('div')
    const span = document.createElement('span')
    div_body.className = 'card-body'
    div_externa.className = 'card'
    div_externa.style = 'width: 500px'
    image.setAttribute('src',`https://image.tmdb.org/t/p/w500${img}`)
    image.className = 'card-img-top'
    p.innerText = `Sinopse: ${ov}`
    p.className = 'card-text'
    div_body.append(p)
    div_externa.append(image,div_body)
    pegarID.append(div_externa)
}