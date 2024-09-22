senha = document.querySelector('#password')
confirmarSenha = document.querySelector('#confirm_password')
bt = document.querySelector('button').addEventListener('click',registro)

function registro(){
    if(senha.value === confirmarSenha.value){
        alert('Cadastro realizado')
        console.log(senha.value,confirmarSenha.value)
    }else{
        alert('Cadastro errado ')
        console.log(senha.value,confirmarSenha.value)
    }
}