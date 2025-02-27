document.getElementById('cashout').style.display = 'none'
document.getElementById('transaction-history').style.display = 'none'



document.getElementById('add-money-box').addEventListener
('click', function(){
    handleToogle('addmoney', 'block');
    handleToogle('cashout', 'none')

})
document.getElementById('cashout-box').addEventListener
('click', function(){
    handleToogle('addmoney', 'none');
    handleToogle('cashout', 'block')

})

