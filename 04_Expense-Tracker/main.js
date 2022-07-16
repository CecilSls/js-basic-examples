
const dataForm = document.querySelector('#dataForm');
const tableBody = document.querySelector('#tableData tbody')
let expenseData = [];

dataForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let name = document.getElementById('name');
    let date = document.getElementById('date');
    let amount = document.getElementById('amount');
    let id = (expenseData.length == 0) ? 1 : expenseData.at(-1).id + 1;

    let newExpense = {
        'id': id,
        'name': name.value,
        'date': date.value,
        'amount': amount.value,
    }

    if(validateDuplicateName(newExpense.name)) { alert('Name Found! '); return; }
    if( !validateForm(newExpense) ){ alert("Data incorrect!"); return; }

    addExpenseData(newExpense);
    name.value = '';
    date.value = '';
    amount.value = '';
});

drawTable();

function drawTable(){
    let htmlInsert = '';
    tableBody.innerHTML = '';
    if( expenseData.length === 0 ){
        htmlInsert = `
        <tr class="table-active">
            <td colspan="4"> No data Found! </td>
        </tr>
        `;
    }
    expenseData.forEach( (expense) => {
        htmlInsert += 
        `<tr>
            <td> ${ expense.name } </td>
            <td> ${ expense.date } </td>
            <td> ${ expense.amount } </td>
            <td>
                <button class="btn btn-danger" onclick="deleteExpense(${expense.id})">X</button>
            </td>
        </tr>
        `;
    });
    tableBody.innerHTML = htmlInsert;
}

function addExpenseData(obj){
    expenseData.push(obj);
    drawTable();
}

function deleteExpense(id){
    expenseData = expenseData.filter( item => item.id !== id );
    drawTable();
}

function validateForm(obj){
    if(!obj.amount || !obj.amount.match(/^\d{1,10}(\.\d{1,4})?$/) ||
        !obj.name || !obj.name.match(/^[a-zA-Z\s]*$/) ||
        !obj.date || !obj.date.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)){
        return false;
    }
    return true;
}

function validateDuplicateName(name){
    return expenseData.some( item => item.name === name )
}