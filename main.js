const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra-1'),
      incomeExtra2 = document.getElementById('income-extra-2'),
      
      costFlat = document.getElementById('costs-flat'),
      costHouseServices = document.getElementById('costs-house-services'),
      costTransport = document.getElementById('costs-transport'),
      costCredit = document.getElementById('costs-credit'),

      totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year')

let totalDay, totalMonth, totalYear;

const moneyBoxRange = document.getElementById('money-box-range'),
    //   
      accumulationInput = document.getElementById('accumulation')
      totalSpend =document.getElementById('spend')

let accumulation = 0
let totalPresents = 0


const inputs = document.querySelectorAll('.input')

for (input of inputs) {
    input.addEventListener('input', () =>{
        countingAviableMoney()
        accumulationMoney()
        countingSpend()
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAviableMoney = () =>{
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2)
    const totalCosts = strToNum(costFlat) + strToNum(costTransport) + strToNum(costHouseServices) + strToNum(costCredit)
    totalMonth = totalPerMonth - totalCosts
    totalMonthInput.value = totalMonth
}


moneyBoxRange.addEventListener('input', e =>{
    let totalPresentsEl = document.getElementById('total-precents')
    totalPresentsEl.textContent = e.target.value
    totalPresents = e.target.value
    accumulationMoney()
    countingSpend()
})


const fullMonth = monthMoney => monthMoney ? monthMoney : 0

const accumulationMoney = () =>{
    accumulation =  ((fullMonth(totalMonth) * totalPresents) / 100).toFixed()
    accumulationInput.value = accumulation
    console.log(accumulation);
}



const countingSpend = () => {
    totalSpend.value = totalMonth - accumulation
    totalDayInput.value = (totalSpend.value / 30).toFixed()
    totalYearInput.value = accumulation * 12
}
