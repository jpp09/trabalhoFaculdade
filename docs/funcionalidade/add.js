const form = document.getElementById('form_add')
form.addEventListener('submit', add)
function add(ev){
    ev.preventDefault()
    const titulo_post = document.getElementById('input_title')
    const titulo_filme = document.getElementById('nome_filme')
    const spoiler = document.querySelector('input[name="input_spoiler"]:checked')
    const categoria = document.getElementById('categoria')
    const descricao = document.getElementById('input_description')
    criar_post(titulo_post.value,titulo_filme.value,descricao.value,spoiler.value,categoria.value)
}

function criar_post(titulo_post,titulo_filme,descricao, spoiler, categoria){
    const div = document.createElement('div')
    const h3_titulo_conteudo = document.createElement('h3')
    const h4_titulo_filme = document.createElement('h4')
    const categ = document.createElement('p')
    const comentario = document.createElement('p')
    const sp = document.createElement('p')
    const section = document.getElementById('section_coment')
    div.id = `coment${document.querySelectorAll('.coment').length}`
    div.className = 'coment'
    h3_titulo_conteudo.innerText = titulo_post
    h4_titulo_filme.innerText = titulo_filme
    categ.innerText = `Categoria: #${categoria}`
    comentario.innerText =  `Comentário: ${descricao}`
    sp.innerText = `O conteúdo contem spoiler: ${spoiler}`
    div.append(h3_titulo_conteudo,h4_titulo_filme,categ,sp,comentario)
    section.append(div)

}

