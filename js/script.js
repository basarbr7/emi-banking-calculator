
const calculate = document.querySelector(".button")


calculate.addEventListener("click", function(){

    let principle =  parseFloat(document.querySelector(".principle").value);
    let interest_rate =  parseFloat(document.querySelector(".interest_rate").value);
    let tenure =  parseInt(document.querySelector(".tenure").value);
    let monthly_emi = document.querySelector(".monthly_emi");
    let Total_interest = document.querySelector(".Total_interest");
    let total_payment = document.querySelector(".total_payment");

    if (isNaN(principle) || isNaN(interest_rate) || isNaN(tenure) || principle <= 0 || interest_rate <= 0 || tenure <= 0) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const monthly_rate = interest_rate / (12*100);

    const emi = (principle*monthly_rate*Math.pow(1+monthly_rate, tenure)) / (Math.pow(1+monthly_rate, tenure) -1);

    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - principle;

    monthly_emi.innerText = `Tk. ${Math.round(emi).toLocaleString()}`;
    Total_interest.innerText =`Tk. ${Math.round(totalInterest).toLocaleString()}`;
    total_payment.innerText = `Tk. ${Math.round(totalPayment).toLocaleString()}`;

})

