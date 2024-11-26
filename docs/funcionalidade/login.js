const form = document.getElementById('form_login')
form.addEventListener('submit',login)
url = 'http://127.0.0.1:5000/login'

function login(ev){
  ev.preventDefault()
  const usuario = document.getElementById('input_usuario')
  const senha = document.getElementById('input_senha')
  const login_user = {
    user : usuario.value,
    password : senha.value
  }
  fetch(url,{
    method : 'post',
    headers :  {'Content-Type': 'application/json',},
    body : JSON.stringify(login_user)
  })
  .then(res => res.json())
  .then(j => console.log(j.mensagem))
}