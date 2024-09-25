// calculate button
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function () {

    const income = parseFloat(document.getElementById('income').value);
    const grocery = parseFloat(document.getElementById('grocery').value);
    const houseRent = parseFloat(document.getElementById('house-rent').value);
    const utility = parseFloat(document.getElementById('utility').value);

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


    const expense = grocery + houseRent + utility;
    const balance = income - expense;

    // it will show total expense in the history list
    const totalExpense = document.getElementById('total-expenses');
    totalExpense.innerText = expense;

    // it will show the balance after deducting expenses in the history list
    const remainingBalance = document.getElementById('balance');
    remainingBalance.innerText = balance;

});

// saving button
const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click', function () {

    const income = parseFloat(document.getElementById('income').value);
    const grocery = parseFloat(document.getElementById('grocery').value);
    const houseRent = parseFloat(document.getElementById('house-rent').value);
    const utility = parseFloat(document.getElementById('utility').value);

    const expense = grocery + houseRent + utility;
    const balance = income - expense;

    // it will calculate the saving percentage based on the remaining balance
    const saving = document.getElementById('savings').value;

    if (isNaN(saving) || utility <= 0) {
        document.getElementById('savings-error').classList.remove('hidden');
        return;
    }

    let savings = (balance * saving) / 100;

    // it will show total savings in the history list
    const totalSavings = document.getElementById('savings-amount');
    totalSavings.innerText = savings;

    // it will show remainng balance after deducting the saving amount in the history list
    const finalBalance = document.getElementById('remaining-balance');
    finalBalance.innerText = balance - savings;
});