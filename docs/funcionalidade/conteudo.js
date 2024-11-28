const url_teste = 'http://127.0.0.1:5000/conteudo'
const pegarConteudo = fetch(url_teste,{
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .then(json => console.log(json.results))