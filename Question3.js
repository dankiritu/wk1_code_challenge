function calculateNetSalary() {
    // Getting the inputs for basic salary and benefits
    let basicSalary = Number(prompt("Enter the basic salary !"));
    let benefits = Number(prompt("Enter the benefits !"));

    // Here we are calculating the gross salary
    let grossSalary = basicSalary + benefits;

    // Here we are calculating PAYE(the tax)
    let payee = calculatePAYE(grossSalary);

    // Calculating the NHIF deduction
    let nhifDeduction = calculateNHIF(grossSalary);

    // Here we are calculating the NSSF deduction
    let nssfDeduction = calculateNSSF(grossSalary);

    // Calculate the net salary
    let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    // Displaying the results here!
    console.log(grossSalary);
    console.log(payee);
    console.log(nhifDeduction);
    console.log(nssfDeduction);
    console.log(netSalary);
}

function calculatePAYE(grossSalary) {
    let payee = 0;
    // PAYE calculations according to the KRA tax rates
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = 2400 + ((grossSalary - 24000) * 0.25);
    } else {
        payee = 2400 + (8333 * 0.25) + ((grossSalary - 32333) * 0.3);
    }
    return payee;
}

function calculateNHIF(grossSalary) {
    // NHIF calculations are all these jameni
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

function calculateNSSF(grossSalary) {
    // NSSF calculation are executed here
    return Math.min(grossSalary * 0.06, 1800);
}

// Here we are calling the function to execute it
calculateNetSalary();
