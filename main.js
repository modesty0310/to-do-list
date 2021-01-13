const text = document.querySelector('.input');
const addBtn = document.querySelector('.add-button');
const items = document.querySelector('.items');
const deleteBtn = document.querySelectorAll('.item-delete')

addBtn.addEventListener('click', e=>{
    onAdd();
});

items.addEventListener('click', e => {
    const target = e.target.dataset.id;
    if(target){
        const deleted = document.querySelector(`.item-row[data-id='${target}']`)
        deleted.remove();
    };
});

text.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        onAdd();
    }
});


function onAdd() {
    if(!text.value){
        return;
    };
    const toDo = text.value;
    const item = createItem(toDo);
    items.appendChild(item);
    text.value = ''
    text.focus();
};

let id = 0;

function createItem (toDo) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item-row')
    itemRow.setAttribute('data-id', id)
    itemRow.innerHTML = `
    <div class="item">
        <span class="item-name">${toDo}</span>
        <button class="item-delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    `
    id++;
    return itemRow;
};