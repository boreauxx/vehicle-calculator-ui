export class LeaseCalculatorService {

    getValues() {
        const carValue = parseInt(document.getElementById('car_value_range').value);
        const downPaymentPercent = parseInt(document.getElementById('down_payment_range').value);
        const leasePeriod = parseInt(document.getElementById('lease_period').value);
        const interestRate = this.getInterestRate();

        return { carValue, downPaymentPercent, leasePeriod, interestRate };
    }

    getInterestRate() {
        const vehicleType = document.getElementById('vehicle_type').value;
        return vehicleType === 'Brand new' ? 2.99 : 3.7;
    }

    calculateDownPayment(carValue, downPaymentPercent) {
        return (carValue * downPaymentPercent) / 100;
    }

    calculateMonthlyInstallment(carValue, downPaymentPercent, leasePeriod, interestRate) {
        const principal = carValue - this.calculateDownPayment(carValue, downPaymentPercent);
        const annualInterestRate = parseFloat(interestRate) / 100;
        const monthlyInterestRate = annualInterestRate / 12;

        return (monthlyInterestRate * principal) / (1 - Math.pow(1 + monthlyInterestRate, -leasePeriod));
    }

    calculateTotalLeasingCost(carValue, downPaymentPercent, leasePeriod, interestRate) {
        const monthlyInstallmentValue = this.calculateMonthlyInstallment(carValue, downPaymentPercent, leasePeriod, interestRate);
        const downPaymentValue = this.calculateDownPayment(carValue, downPaymentPercent);

        return (monthlyInstallmentValue * leasePeriod) + downPaymentValue;
    }

    calculateAll() {
        const { carValue, downPaymentPercent, leasePeriod, interestRate } = this.getValues();

        const downPayment = this.calculateDownPayment(carValue, downPaymentPercent);
        const totalLeasingCost = this.calculateTotalLeasingCost(carValue, downPaymentPercent, leasePeriod, interestRate);
        const monthlyInstallment = this.calculateMonthlyInstallment(carValue, downPaymentPercent, leasePeriod, interestRate);

        return {totalLeasingCost, downPayment, monthlyInstallment};
    }

    calculateAndDisplay() {
        const { downPayment, totalLeasingCost, monthlyInstallment } = this.calculateAll();
        document.getElementById('total_down_payment').textContent = `Down payment: $${downPayment.toFixed(2)}`;
        document.getElementById('total_leasing').textContent = `Total Leasing Cost: $${totalLeasingCost.toFixed(2)}`;
        document.getElementById('total_monthly_installment').textContent = `Monthly installment: $${monthlyInstallment.toFixed(2)}`;
        document.getElementById('total_interest_rate').textContent = `Interest rate: ${this.getInterestRate().toFixed(2)}%`;
    }
}
