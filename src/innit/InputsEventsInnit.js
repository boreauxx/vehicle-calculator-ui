export class InputsEventsInnit {

  constructor(leaseCalculatorService) {
    this.carValueRange = document.getElementById('car_value_range');
    this.carValueInput = document.getElementById('car_value');
    this.downPaymentRange = document.getElementById('down_payment_range');
    this.downPaymentInput = document.getElementById('down_payment');
    this.leaseCalculatorService = leaseCalculatorService;
    this.init();
  }

  init() {
    // Initial sync between input and range
    this.carValueInput.value = this.carValueRange.value;
    this.downPaymentInput.value = this.downPaymentRange.value;

    // Event listeners to keep input and range in sync
    this.carValueRange.addEventListener('input', this.updateCarValueInput.bind(this));
    this.carValueInput.addEventListener('input', this.updateCarValueRange.bind(this));

    this.downPaymentRange.addEventListener('input', this.updateDownPaymentInput.bind(this));
    this.downPaymentInput.addEventListener('input', this.updateDownPaymentRange.bind(this));

    this.registerCalculationListeners();
  }

  updateCarValueInput() {
    this.carValueInput.value = this.carValueRange.value;
    this.leaseCalculatorService.calculateAndDisplay();
  }

  updateCarValueRange(event) {
    if (event.inputType === 'deleteContentBackward' || event.key === 'Backspace') {
      return;
    }
    if(this.carValueInput.value.toString().length < 5){
      return;
    }
    let input = parseInt(this.carValueInput.value);
    if (input < 10000) {
      input = 10000;
    } else if (input > 200000) {
      input = 200000;
    }
    this.carValueInput.value = input;
    this.carValueRange.value = input;
    this.leaseCalculatorService.calculateAndDisplay();
  }

  updateDownPaymentInput() {
    this.downPaymentInput.value = this.downPaymentRange.value;
    this.leaseCalculatorService.calculateAndDisplay();
  }

  updateDownPaymentRange(event) {
    if (event.inputType === 'deleteContentBackward' || event.key === 'Backspace') {
      return;
    }
    if(this.downPaymentInput.value.toString().length < 2){
      return;
    }
    let input = parseInt(this.downPaymentInput.value);
    if (input > 50) {
      input = 50;
    }
    this.downPaymentInput.value = input;
    this.downPaymentRange.value = input;
    this.leaseCalculatorService.calculateAndDisplay();
  }

  registerCalculationListeners() {
    this.carValueInput.addEventListener('input', this.leaseCalculatorService.calculateAndDisplay.bind(this.leaseCalculatorService));
    this.carValueRange.addEventListener('input', this.leaseCalculatorService.calculateAndDisplay.bind(this.leaseCalculatorService));
    this.downPaymentInput.addEventListener('input', this.leaseCalculatorService.calculateAndDisplay.bind(this.leaseCalculatorService));
    this.downPaymentRange.addEventListener('input', this.leaseCalculatorService.calculateAndDisplay.bind(this.leaseCalculatorService));
    document.getElementById('lease_period').addEventListener('change', this.leaseCalculatorService.calculateAndDisplay.bind(this.leaseCalculatorService));
    document.getElementById('vehicle_type').addEventListener('change', this.leaseCalculatorService.calculateAndDisplay.bind(this.leaseCalculatorService));
  }
}
