const text = document.querySelector('.input');
const addBtn = document.querySelector('.add-button');
const items = document.querySelector('.items');
const deleteBtn = document.querySelectorAll('.item-delete');
const allDeleteBtn = document.querySelector('.delete-all-btn');
const checkDeleteBtn = document.querySelector('.delete-chk-btn');


addBtn.addEventListener('click', e=>{
    onAdd();
});

items.addEventListener('click', e => {
    const chk = e.target.dataset.chk;
    const target = e.target.dataset.id;
    const checkBox = e.target.childNodes[0];
    if(target){
        const deleted = document.querySelector(`.item-row[data-id='${target}']`);
        deleted.remove();
    }else if(chk){
        e.target.classList.toggle('checked');
        checkBox.classList.toggle('hide');
    }
});

text.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        onAdd();
    }
});

allDeleteBtn.addEventListener('click', e=> {
    const length = items.childElementCount;
    for(let i=0; i<length; i++){
        items.children[0].remove()
    };
});

checkDeleteBtn.addEventListener('click', e=> {
    const deleted = document.querySelectorAll('.checked');
    for (const del of deleted) {
        del.parentElement.parentElement.remove();
    }
}) 

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
        <span class="item-name" data-chk=${id}><i class="fas fa-check hide"></i>${toDo}</span>
        <button class="item-delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    `
    id++;
    return itemRow;
};