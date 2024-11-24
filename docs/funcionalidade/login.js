url = 'http://127.0.0.1:5000/cadastro'
fetch(url,{
    headers: {
        'Content-Type': 'application/json',
      },
    body : JSON.stringify('Deu certo'),
    method : 'post'
})
.then(res => res.json())
.then(j => console.log(j))

