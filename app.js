document.getElementById('loan-form').addEventListener('submit',function (e) {
    //hide results
    document.getElementById('results').style.display = 'none';
    //show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault(); 
});

function calculateResults() {
    console.log('Calculating...');
    const amount  = document.getElementById('amount');
    const interest  = document.getElementById('interest');
    const years  = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12 ;
    const calculatePayments = parseFloat(years.value) * 12;

    //compute monthly payments

    const x = Math.pow(1+ calculatedInterest,calculatePayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatePayments).toFixed(2);
        totalInterest.value = ((monthly*calculatePayments)-principal).toFixed(2);

        document.getElementById('results').style.display = 'block';

        document.getElementById('loading').style.display = 'none';
    }
    else{
        showError('Please check your numbers');    
    }
}

function showError(error){


    document.getElementById('results').style.display = 'block';

    document.getElementById('loading').style.display = 'none';

    const errorDiv = document.createElement('div');

    const card  = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';
    //create text node
    errorDiv.appendChild(document.createTextNode(error));

    //insert above heading
    card.insertBefore(errorDiv,heading);

    //clear error afater 3s
    setTimeout(clearError,2000);

}

function clearError() {
    document.querySelector('.alert').remove();
}