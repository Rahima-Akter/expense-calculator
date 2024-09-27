// global variables
let income, grocery, houseRent, utility, expense, balance;

// calculate button
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function () {

    income = parseFloat(document.getElementById('income').value);
    grocery = parseFloat(document.getElementById('grocery').value);
    houseRent = parseFloat(document.getElementById('house-rent').value);
    utility = parseFloat(document.getElementById('utility').value);

    if (isNaN(income) || income <= 0) {
        document.getElementById('income-error').classList.remove('hidden');
    };

    if (isNaN(grocery) || grocery <= 0) {
        document.getElementById('grocery-error').classList.remove('hidden');
    };

    if (isNaN(houseRent) || houseRent <= 0) {
        document.getElementById('house-rent-error').classList.remove('hidden');
    };

    if (isNaN(utility) || utility <= 0) {
        document.getElementById('utility-error').classList.remove('hidden');
        return;
    };


    expense = grocery + houseRent + utility;
    expense.toFixed(2);
    balance = income - expense;
    balance.toFixed(2);

    if (expense > balance) {
        document.getElementById("logic-error").classList.remove('hidden')
        return;
    }
    // it will show total expense in the history list
    parseFloat(document.getElementById('total-expenses').innerText = expense.toFixed(2));

    // it will show the balance after deducting expenses in the history list
    parseFloat(document.getElementById('balance').innerText = balance.toFixed(2));

    document.getElementById('income').value = '';
    document.getElementById('grocery').value = '';
    document.getElementById('house-rent').value = '';
    document.getElementById('utility').value = '';

});

// saving button
let totalSavings, remainingBalance;
const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click', function () {

    const currentExpense = grocery + houseRent + utility;
    const currentBalance = income - expense;

    // it will calculate the saving percentage based on the remaining balance
    const saving = parseFloat(document.getElementById('savings').value);

    if (isNaN(saving) || saving <= 0) {
        document.getElementById('savings-error').classList.remove('hidden');
        return;
    }

    let savings = (currentBalance * saving) / 100;
    


    // it will show total savings in the history list
    totalSavings = parseFloat(document.getElementById('savings-amount').innerText = savings.toFixed(2));

    // balance after deducting savings from remaining balance
    remainingBalance = parseFloat((currentBalance - totalSavings).toFixed(2));

    // it will show remainng balance after deducting the saving amount in the history list
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);

    document.getElementById('savings').value = '';

    document.getElementById('results').classList.remove('hidden');
});

// common function for switching styles of the assistant/expense form button
function styles(showId, hideId) {
    document.getElementById(showId).classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById(hideId).classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
}

// js for controlling history btn
const historyBtn = document.getElementById('history-tab').addEventListener('click', function () {
    document.getElementById('expense-form').classList.add('hidden'); //to show result section

    styles('history-tab', 'assistant-tab'); // it will change the sytles of the clicked button


    // js for history section
    document.getElementById('history-section').classList.remove('hidden');

    const div = document.createElement('div');
    div.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'

    const time = new Date().toLocaleDateString();
    div.innerHTML = `
        <p class="text-xs text-gray-500">Date: ${time}</p>
        <p class="text-xs text-gray-500">Total Expense: ৳${expense.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Total savings: ৳${totalSavings}</p>
        <p class="text-xs text-gray-500">Balance: ৳${remainingBalance}</p>
    `
    document.getElementById('history-list').appendChild(div);
});

// js for controlling assistant btn
const assistantBtn = document.getElementById('assistant-tab').addEventListener('click', function () {
    document.getElementById('expense-form').classList.remove('hidden');//to show expense section

    styles('assistant-tab', 'history-tab'); // it will change the sytles of the clicked button

    // js for history section
    document.getElementById('history-section').classList.add('hidden');
});

