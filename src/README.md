# Vehicle Rental UI

A simple yet convenient and user friendly lease calculator. To use it you need to input the following things
 - **vehicle type** which could be brand new or used, keep in mind the two have different interest rates
 - **vehicle value** - how much the vehicle costs
 - **lease period** - how long is the lease period, in months (12 to 60)
 - **down payment percent** - how much of the down payment you've paid, in %, lowest being 10, highest being 50

## Components folder
 - inside the `componenets` are the plain HTML for the calculator and the css styling
 - for further expanding of components simply create a new folder for the desired component inside

## Innit folder
 - inside the `innit` folder we have `InputsEvenInnit` which is solely responsible for the responsive output of the information
 - it contains all the event listeners, values and non-business logic
 - the second file is `LeaseCalculatorService` which is responsible for the business logic
 - it contains methods to get all the values and do calculations with them
 - calculates down payment, total leasing, monthly installment

## Index.js file
 - Runs the script when the document loads