function calculateNetSalary(basicsalary, benefit){

    const NHIFrates = [{ min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: Infinity, deduction: 1000 },]

        // maximum NSSF contribution

        const NSSFcontribution = math.min(basicsalary*0.06, 180);

        //PAYE calculation

        let taxableIncome = basicsalary + benefit;
        let paye = 0;

        //tax brackets based on kenyan tax rates

        if (taxableIncome > 500000) {
            paye += (taxableIncome - 500000) * 0.3;
            taxableIncome = 50000;
        }
        if (taxableIncome > 300000) {
            paye += (taxableIncome - 300000) * 0.25;
            taxableIncome = 30000;
        }
        if (taxableIncome > 200000) {
            paye += (taxableIncome - 200000) * 0.2;
            taxableIncome = 20000;
        }
        if (taxableIncome > 132000) {
            paye += (taxableIncome - 132000) * 0.18;
            taxableIncome = 1322000;
        }
        paye += taxableIncome* 0.1; // first kes 132 000 is taxed at 10%
}
// NHIF  deduction
const nhifDeduction =NHIFrates.find(rate => basicsalary >= rate.min && basicsalary <= rate.max).deduction;

// calculate gross salary
const grosssalary = basicsalary + benefit;

// Net salary
const netsalary =grosssalary - (paye + nhifDeduction + NSSFcontribution);

return{
    paye,
    grosssalary,
    nhifDeduction,
    NSSFcontribution: NSSFcontribution,
    netsalary
};

