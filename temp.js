let balance = 0;
const transactionList = document.getElementById("transactionList");
const balanceElement = document.getElementById("balance");

function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (text.trim() === "" || isNaN(amount)) {
        alert("Please enter valid text and amount");
        return;
    }

    const transaction = document.createElement("li");
    transaction.innerHTML = `${text} <span>${amount >= 0 ? '+' : '-'}$${Math.abs(amount).toFixed(2)}</span>`;
    transactionList.appendChild(transaction);

    balance += amount;
    updateBalance();

    // Clear input fields
    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}

function updateBalance() {
    balanceElement.innerText = balance.toFixed(2);
}
