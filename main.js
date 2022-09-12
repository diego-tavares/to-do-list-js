const texto = document.querySelector('input');
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.head button')
const ul = document.querySelector('ul')

var itensDB = []

texto.addEventListener('keypress', e => {
    if (e.key == 'Enter' && texto.value != '') {
        setItemDB()
    }
})

btnInsert.onclick = () => {
    if (texto.value != '') {
        setItemDB()
    }
}

function setItemDB() {
    if (itensDB.length >= 20) {
        alert('limite máximo de 20 itens atingido!')
        return
    }
    
    itensDB.push({ 'item': texto.value, 'status': ''})
    updateDB()
}

function updateDB () {
    localStorage.setItem('todolist', JSON.stringify(itensDB))
    loadItens()
}

function loadItens () {
    ul.innetHTML = "";
    itensDB = JSON.parse(localStorage.getItem('todolisst')) ?? []
    itensDB.array.forEach(item, i => {
        insertItemTela(item.item, item.status, i)
    });
}

