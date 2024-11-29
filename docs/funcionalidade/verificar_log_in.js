const url_log = 'https://trabalhofaculdadebackend.onrender.com/sessao'
const url_deslogar = 'https://trabalhofaculdadebackend.onrender.com/deslogar'
const btn = document.getElementById('criar_resenha')
const login = document.getElementById('login')
const registro = document.getElementById('register')
const logout = document.getElementById('deslogar')
const logout_drop = document.getElementById('deslogar_drop')
const login_drop = document.getElementById('login_drop')
const registro_drop = document.getElementById('register_drop')

fetch(url_log,{headers:{
    'Content-Type': 'application/json',
  }})
.then(res => res.json())
.then(j => check_login(j))


function check_login(log){
  if(log != ''){
    try{
      btn.disabled = false
    } catch(erro){
      console.log(erro)
    }
    logout.style.display = 'block'
    login.style.display = 'none'
    registro.style.display = 'none'
}
    else{ 
      try{
        btn.disabled = true
      } catch(erro){
        console.log(erro)
      }
      logout.style.display = 'none'
      logout_drop.display = 'none'
    }

  }

logout.addEventListener('click',  deslogar)
logout_drop.addEventListener('click',deslogar)

function deslogar(){
  fetch(url_deslogar,{headers:{
    'Content-Type': 'application/json',
  }})
  .then(res => res.json())
  .then(j=> {
    alert(j.mensagem)
  })
}


