const form = document.getElementById('cadastro_form')
form.addEventListener('submit',cadastro)
const url = 'https://trabalhofaculdadebackend.onrender.com/cadastro'
function cadastro(ev){
    ev.preventDefault()
    const user = document.getElementById('user_name')
    const senha = document.getElementById('password')
    const nome = document.getElementById('name')
    const email = document.getElementById('email')
    const confirma_senha = document.getElementById('confirm_password')

    if (senha.value == confirma_senha.value){
        pessoa_cadastrada = {
            'nome' : nome.value,
            'usuario' : user.value,
            'email' : email.value,
            'senha': senha.value
        }
        fetch(url,{
            method : 'post',
            headers :  {'Content-Type': 'application/json',},
            body : JSON.stringify(pessoa_cadastrada)
            
        })
        .then(res => res.json())
        .then(j => alert(j.mensagem))
        user.value = ''
        senha.value = ''
        nome.value = ''
        email.value = ''
        confirma_senha.value = ''
    }else{
        alert('As senhas não conferem. Por favor digie novamente')
    }
    location.href = 'https://jpp09.github.io/trabalhoFaculdade/index.html'
}