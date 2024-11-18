const form = document.getElementById('form_add')
form.addEventListener('submit', (ev) =>{
pegar_dados()
})

function pegar_dados(){
    const nome_titulo =  document.querySelector('#nome_filme')
    const titulo = document.querySelector('#input_title')
    const spoiler = document.querySelector('input[name="input_spoiler"]:checked')
    const categoria = document.querySelector('select[name="categoria"]')
    nome_titulo.value = ''
    titulo.value = ''
    spoiler.value = ''
}
