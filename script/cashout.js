document.getElementById('cashout-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('cashout-account-number').value;
    const amount = getInputValueByID('cashout-amount');
    const pinNumber = getInputValueByID('cashout-pin');
    const mainBalance = getInnerTextByID('main-balance');

    if(accountNumber.length === 11){
       if(pinNumber === 1234){
    const sum = mainBalance - amount;
    setInnerTextByIDandValue('main-balance', sum)
    

       } else{
        alert('pin not valid')
       }
    } else{
        alert('account number not valid')
    }

})