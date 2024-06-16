import {InputsEventsInnit} from "./innit/InputsEventsInnit.js";
import {LeaseCalculatorService} from "./innit/LeaseCalculatorService.js";

document.addEventListener('DOMContentLoaded', function () {
  const leaseCalculatorService = new LeaseCalculatorService();
  const inputsEventsInnit = new InputsEventsInnit(leaseCalculatorService);
  determineInterestRate();
  leaseCalculatorService.calculateAndDisplay();
});

function determineInterestRate() {
  const vehicleType = document.getElementById('vehicle_type');
  const interest = document.getElementById('total_interest_rate');
  vehicleType.value === 'Brand new' ? interest.textContent = 'Interest rate: 2.99%' : interest.textContent = 'Interest rate: 3.7%';
  vehicleType.addEventListener('change', function () {
    determineInterestRate();
  });
}




