document.getElementById('expForm').addEventListener('submit', function(e){
    e.preventDefault();
    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let amount = document.getElementById('amount').value;

    if(type === 'chooseOne' || name === '' || date === '' || amount === ''){
        alert('Please fill in all the fields');
        return;
    }

    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${type}</td>
        <td>${name}</td>
        <td>${date}</td>
        <td>${amount}</td>
        <td>
            <button class="delete">Delete</button>
        </td>
    `;

    document.getElementById('expenseTable').appendChild(newRow);

    // Clear the form
    document.getElementById('type').value = 'chooseOne';
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('amount').value = '';
});

document.getElementById('expenseTable').addEventListener('click', function(e){
    if(e.target && e.target.nodeName === 'BUTTON'){
        let button = e.target;
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});