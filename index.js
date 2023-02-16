

function getNumberValueOfField(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputFieldValueStr = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueStr)
    // inputField.value = ''
    return inputFieldValue
}

function getNumberValueOfText(textId) {
    const textField = document.getElementById(textId)
    const textFieldValueStr = textField.innerText
    const textFieldValue = parseFloat(textFieldValueStr)
    // textField.value = ''
    return textFieldValue
}

function setTextValue(textId, value) {
    const textField = document.getElementById(textId)
    textField.innerText = value
}


document.getElementById('calculate-btn').addEventListener('click', function () {

    const incomeValue = getNumberValueOfField('income-field')
    const foodFieldValue = getNumberValueOfField('food-field')
    const rentFieldValue = getNumberValueOfField('rent-field')
    const clothesFieldValue = getNumberValueOfField('clothes-field')

    if (!incomeValue) {
        alert("Please Input your income value properly !!!")
        return;
    }

    else if (!foodFieldValue) {
        alert('Please Input your food cost value properly !!!')
        return;
    }
    else if (!rentFieldValue) {
        alert('Please Input your rent cost value properly !!!')
        return;
    }
    else if (!clothesFieldValue) {
        alert('Please Input your clothes cost value properly !!!')
        return;
    } else if (incomeValue < 0 || foodFieldValue < 0 || rentFieldValue < 0 || clothesFieldValue < 0) {
        alert('Your income or cost never will be nagetive. So, You can not provide any nagetive value here... !!! ')
        return;
    }

    const totalCost = foodFieldValue + rentFieldValue + clothesFieldValue;

    if (incomeValue < totalCost) {
        alert('Your cost never will be greater than to your income. So provide cost balance properly.')
        return;
    }

    setTextValue('total-expenses', totalCost)

    const balanceTotal = Math.abs(incomeValue - totalCost)
    setTextValue('balance', balanceTotal)

})


document.getElementById('save-btn').addEventListener('click', function () {
    const incomeValue = getNumberValueOfField('income-field')
    const savingField = getNumberValueOfField('saving-field')
    const balance = getNumberValueOfText('balance')

    if (!savingField) {
        alert('Please input your saving percentage porperly...!!!')
        return;
    }
    else if (savingField < 0) {
        alert('Your saving percentage never will be nagetive. So, You can not provide any nagetive value here... !!! ')
        return;
    }

    const savingValue = (savingField * incomeValue) / 100

    if (savingValue > balance) {
        alert('Sorry... You dont have enough money to save...!!!')
        return;
    }

    setTextValue('saving-amount', savingValue)

    const remainingBalance = balance - savingValue
    setTextValue('remaining-balance', remainingBalance)
    // console.log(balance, savingValue)

})





// (3 * total) / 100