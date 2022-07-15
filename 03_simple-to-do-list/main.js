
let tableBody = document.querySelector("#table tbody");
let toDo = [];

drawTable();

function drawTable(){
    let htmlInsert = '';
    tableBody.innerHTML = '';
    toDo.forEach( element => {
        let edit = (!element.done) ? `<button onclick="changeToDone(${element.id})">Done!</button>` : '';
        let color = (!element.done) ? 'textRed' : 'textBlue';
        htmlInsert += `
            <tr class=${color}>
                <td align="center"><span> ${element.id } </span></td>
                <td align="center"><span> ${element.text} </span></td>
                <td align="center"> ${edit} </td>
                <td align="center">
                    <button onclick="deleteElement(${element.id})">X</button>
                </td>
            </tr>
        `;
    });
    tableBody.innerHTML = htmlInsert;
}

formToDo.addEventListener('submit', (e)=>{
    e.preventDefault();

    let text = document.querySelector('#text');

    //* Check input text
    if(text.value.trim().length == 0){
        alert("Input text is empty!")
        return;
    }

    let id = (toDo.length == 0) ? 1 : toDo.at(-1).id + 1;
    let object = {
        'id': id,
        'text': text.value,
        'done': false
    }
    addElement(object);
    text.value = '';
})

const addElement = (element) => {
    toDo.push(element);
    drawTable();
}


const deleteElement = (id) => {
    toDo = toDo.filter(element => element.id !== id);
    drawTable();
}

const changeToDone = (id) => {
    toDo.forEach(element => {
        if(element.id === id){
            element.done = !element.done;
        }
    });
    drawTable();
}