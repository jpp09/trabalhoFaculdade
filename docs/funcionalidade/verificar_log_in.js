const btn = document.getElementById('pegar btn do formulário')
const secao_acesso = document.getElementById('pegar seção de acesso')
const btn_logout = document.getElementById('Pegar botão de logout')
fetch(url,{headers: {}})
.then(res => res.json())
.then(j => check_login(j.log))

function check_login(log){
if(j.log != None){
btn.style.disabled = 'false'
secao_acesso.style.display = 'none'
btn_logout.style.display = 'block'} else{btn.style.disabled = 'True'
secao_acesso.style.display = 'block'
btn_logout.style.display = ''none")}
}
