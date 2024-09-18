document.addEventListener('DOMContentLoaded', () => {
    // Retrieve elements from the DOM
    const depositInput = document.getElementById('deposit-input');
    const withdrawInput = document.getElementById('withdraw-input');  
    const depositBtn = document.getElementById('deposit-btn');
    const depositBtn1 = document.getElementById('deposit-Btn1');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const withdrawBtn1 = document.getElementById('withdraw-Btn1');
    const submitBtn = document.getElementById('submit-btn');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const accountDetails = document.getElementById('account-details');
    const balanceDisplay = document.getElementById('balance');
    const depositDisplay = document.getElementById('deposit');
    const withdrawDisplay = document.getElementById('withdraw');
    const home = document.getElementById('home');
    const logout = document.getElementById('logout');

    // Initialize balance in localStorage if it does not exist
    if (localStorage.getItem('balance') === null) {
        localStorage.setItem('balance', '0');
        localStorage.setItem('deposit', '0');
        localStorage.setItem('withdraw', '0');
    }

    // Function to update the balance display
    function updateBalanceDisplay() {
        const balance = Number(localStorage.getItem('balance'));
        const deposit = Number(localStorage.getItem('deposit'));
        const withdraw = Number(localStorage.getItem('withdraw'));

        if (balanceDisplay) balanceDisplay.innerText = balance;
        if (depositDisplay) depositDisplay.innerText = deposit;
        if (withdrawDisplay) withdrawDisplay.innerText = withdraw;
    }

    // Update the balance display on page load
    updateBalanceDisplay();

    if (submitBtn && emailInput && passwordInput) {
        submitBtn.onclick = () => {
            if (emailInput.value === 'example@gmail.com' && passwordInput.value === 1234) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Incorrect email or password');
            }
        };
    }

    if(home){
        home.addEventListener('click',()=> {
            window.location.href = 'dashboard.html';
        })
    }
    if(logout){
        logout.addEventListener('click',()=> {
            window.location.href = 'index1.html';
        })
    }

    if (depositBtn1) {
        depositBtn1.addEventListener('click', () => {
            window.location.href = 'deposit.html';
        });
    }

    if (withdrawBtn1) {
        withdrawBtn1.addEventListener('click', () => {
            window.location.href = 'withdraw.html';
        });
    }

    if (accountDetails) {
        accountDetails.addEventListener('click', () => {
            window.location.href = 'account-details.html';
        });
    }

    if (depositBtn && depositInput && balanceDisplay) {
        depositBtn.addEventListener('click', () => {
            const pin = Number(prompt('Enter PIN number'));
            if (pin === 1234) {
                const value = Number(depositInput.value);
                if (isNaN(value) || value <= 0) {
                    alert('Invalid deposit amount');
                    return;
                }
                let currentBalance = Number(localStorage.getItem('balance'));
                let currentDeposit = Number(localStorage.getItem('deposit'));
                currentBalance += value;
                currentDeposit += value;

                localStorage.setItem('balance', currentBalance);
                localStorage.setItem('deposit', currentDeposit);
                depositInput.value = '';

                updateBalanceDisplay();
            } else {
                alert('Incorrect PIN');
            }
        });
    }

    if (withdrawBtn && withdrawInput && balanceDisplay) {
        withdrawBtn.addEventListener('click', () => {
            const pin = Number(prompt('Enter PIN number'));
            if (pin === 1234) {
                const value = Number(withdrawInput.value);
                if (isNaN(value) || value <= 0) {
                    alert('Invalid withdrawal amount');
                    return;
                }
                let currentBalance = Number(localStorage.getItem('balance'));
                if (value > currentBalance) {
                    alert("You don't have enough balance to withdraw");
                } else {
                    let currentWithdraw = Number(localStorage.getItem('withdraw'));
                    currentBalance -= value;
                    currentWithdraw += value;

                    localStorage.setItem('balance', currentBalance);
                    localStorage.setItem('withdraw', currentWithdraw);
                    withdrawInput.value = '';

                    updateBalanceDisplay();
                }
            } else {
                alert('Incorrect PIN');
            }
        });
    }
});

    