const billAmount = document.getElementById('amount');
const tipPercent = document.getElementById('percent');
const calcButton = document.getElementById('calculate');

const tipTotal = document.getElementById('tip');
const actualTotal = document.getElementById('total')


calcButton.addEventListener('click', function() {
    const bill = billAmount.value
    const percent = tipPercent.value

    const tip = bill * percent/100
    const total = Number(bill) + Number(tip)

    tipTotal.innerHTML = tip.toFixed(2);
    actualTotal.innerHTML = total.toFixed(2);
});
