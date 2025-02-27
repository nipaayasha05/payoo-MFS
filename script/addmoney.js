document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
   const amount = getInputValueByID('amount');
   const pin = getInputValueByID('pin');
   const mainBalance = getInnerTextByID('main-balance')
   console.log(mainBalance)
  const account = document.getElementById('account-number').value;

  
  if(account.length === 11){
    if(pin === 1234){
    const sum = mainBalance + amount;
    setInnerTextByIDandValue('main-balance', sum)

    } else('incorrect pin')
  } else{
    alert('incorrect account number')
  }

})