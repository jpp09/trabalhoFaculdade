const form = document.getElementById('form_add')
const bt_enviar = document.getElementById('addPost')
bt_enviar.addEventListener('click',add)
form.addEventListener('submit', get_form)
function add(){
    const titulo_post = document.getElementById('input_title')
    const titulo_filme = document.getElementById('nome_filme')
    const spoiler = document.querySelector('input[name="input_spoiler"]:checked')
    const categoria = document.getElementById('categoria')
    const descricao = document.getElementById('input_description')
    criar_post(titulo_post.value,titulo_filme.value,descricao.value,spoiler.value,categoria.value)
    titulo_filme.value = ''
    titulo_post.value = ''
    spoiler.checked = false
    descricao.value = ''
}
function get_form(ev){
    ev.preventDefault()
    window.location = '#coment0'
}

function criar_post(titulo_post,titulo_filme,descricao, spoiler, categoria){
    const div_card = document.createElement('div')
    const div = document.createElement('div')
    const h3_titulo_conteudo = document.createElement('h3')
    const h4_titulo_filme = document.createElement('h4')
    const categ = document.createElement('p')
    const comentario = document.createElement('p')
    const sp = document.createElement('p')
    const section = document.getElementById('section_coment')
    div.id = `coment${document.querySelectorAll('.coment').length}`
    div_card.className = 'card'
    div.className = 'card-body'
    h3_titulo_conteudo.innerText = `${titulo_post}`
    h3_titulo_conteudo.className = 'card-title'
    h4_titulo_filme.innerText = `Nome da obra: ${titulo_filme}`
    h4_titulo_filme.titulo_filme = 'card-subtitle mb-2 text-body-secondary'
    categ.innerText = `Categoria: ${categoria}`
    categ.className = 'card-text'
    comentario.innerText =  `Comentário: ${descricao}`
    sp.innerText = `O conteúdo contem spoiler: ${spoiler}`
    sp.className = 'card-text'
    comentario.className = 'card-text'
    div.append(h3_titulo_conteudo,h4_titulo_filme,categ,sp,comentario)
    div_card.append(div)
    section.append(div_card)
}


