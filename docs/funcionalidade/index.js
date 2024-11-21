const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODZmNmQ2YzZkNTVhODJiNmY5MmU4NWE0ODc0MTljYyIsIm5iZiI6MTczMjEyMTY4Ny42NjE2NDEsInN1YiI6IjY3MmU5M2U4N2ZkNzI0MzQyYTkwMDNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZPOxVFX4Vknfx33ERuTOL4Hi49EMDLx6t9RI6cZnWfI'
  }
};

const teste = fetch(url, options)
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