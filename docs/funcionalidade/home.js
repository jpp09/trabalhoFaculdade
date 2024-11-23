const url = 'https://trabalhofaculdadebackend.onrender.com/home'

const pegarConteudo = fetch(url,{
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get'
})
.then(res => res.json())
.then(json => json.results.forEach(element => criar(element.overview,element.poster_path)))

function criar(ov,img){
    const p = document.createElement('p')
    const image = document.createElement('img')
    const div = document.createElement('div')
    const pegarID= document.getElementById('noticias')
    div.className = 'div'
    image.setAttribute('src',`https://image.tmdb.org/t/p/w500${img}`)
    image.className = 'img'
    p.innerText = ov
    p.className = 'text'
    div.append(image,p)
    pegarID.append(div)
}