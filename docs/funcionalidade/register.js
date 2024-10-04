senha = document.querySelector('#password')
confirmarSenha = document.querySelector('#confirm_password')
bt = document.querySelector('button').addEventListener('click',registro)

function registro(){
    if(senha.value === confirmarSenha.value){
        alert('Cadastro realizado com sucesso!!')
        console.log(senha.value,confirmarSenha.value)
    }else{
        alert('As senhas não coincidem. Por favor, tente novamente.')
        console.log(senha.value,confirmarSenha.value)
    }
}