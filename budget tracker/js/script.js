let balance = 0;

function addTransaction() {
  const text = document.getElementById('text').value;
  const amount = +document.getElementById('amount').value;
  const type = document.getElementById('type').value;

  if (text.trim() === '' || isNaN(amount)) {
    alert('Please enter valid text and amount!');
    return;
  }

  const transaction = {
    text,
    amount,
    type,
  };

  updateBalance(transaction);
  updateTransactions(transaction);
}

function updateBalance(transaction) {
  const { amount, type } = transaction;
  if (type === 'income') {
    balance += amount;
  } else {
    balance -= amount;
  }

  const balanceAmount = document.getElementById('balanceAmount');
  balanceAmount.innerText = `$${balance.toFixed(2)}`;
  balanceAmount.className = balance >= 0 ? 'income' : 'expense';
}

function updateTransactions(transaction) {
  const transactionsList = document.getElementById('transactions');

  const sign = transaction.type === 'income' ? '+' : '-';
  const transactionItem = document.createElement('li');
  transactionItem.classList.add(transaction.type);
  transactionItem.innerHTML = `
    ${transaction.text} <span>${sign}$${Math.abs(transaction.amount).toFixed(2)}</span>
  `;

  transactionsList.appendChild(transactionItem);
}



