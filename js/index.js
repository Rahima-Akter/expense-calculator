// global variables
let income, grocery, houseRent, utility, remainingBalance;

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


    const expense = grocery + houseRent + utility;
    const balance = income - expense;

    // it will show total expense in the history list
    parseFloat(document.getElementById('total-expenses').innerText = expense);

    // it will show the balance after deducting expenses in the history list
    parseFloat(document.getElementById('balance').innerText = balance);

    document.getElementById('income').value = '';
    document.getElementById('grocery').value = '';
    document.getElementById('house-rent').value = '';
    document.getElementById('utility').value = '';

});

// saving button
const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click', function () {


    const expense = grocery + houseRent + utility;
    const balance = income - expense;

    // it will calculate the saving percentage based on the remaining balance
    const saving = parseFloat(document.getElementById('savings').value);

    if (isNaN(saving) || saving <= 0) {
        document.getElementById('savings-error').classList.remove('hidden');
        return;
    }

    let savings = (balance * saving) / 100;

    // it will show total savings in the history list
    const totalSavings = parseFloat(document.getElementById('savings-amount').innerText = savings);
    
    // balance after deducting savings from remaining balance
    const total = balance - totalSavings;

    // it will show remainng balance after deducting the saving amount in the history list
    document.getElementById('remaining-balance').innerText = total;

    document.getElementById('savings').value = '';

    document.getElementById('results').classList.remove('hidden');
});

