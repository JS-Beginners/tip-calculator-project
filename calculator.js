const form = document.querySelector('form')
const summary = document.querySelector('#summary')
const totalBill = document.querySelector('#total-bill')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const amount = Number(form.amount.value)
    const tip = Number(form.percentTip.value)
    const tipDecimal = tip/100
    const tipAmount = Number((amount * tipDecimal).toFixed(2))

    if (amount === NaN || tip === NaN) {
        alert('Please be sure to enter numbers')
    }

    if (tip < 0 || tip >100){
        alert('Please enter a tip amount between 0 and 100 percent!')
        return
    }

    form.amount.value = ''
    form.percentTip.value = ''
    
    summary.textContent = `A ${tip}% tip on $${amount} comes to a total of $${tipAmount}.`

    totalBill.textContent = `Your total bill comes to $${Number((amount + tipAmount).toFixed(2))}.`
})


