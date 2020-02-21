//discountTable object to store Discount values
const discountTable = [
    {
        minValue: 0,
        maxValue: 1000,
        discount: 0
    },
    {
        minValue: 1000,
        maxValue: 5000,
        discount: 6
    },
    {
        minValue: 5000,
        maxValue: 7000,
        discount: 9
    },
    {
        minValue: 7000,
        maxValue: 10000,
        discount: 12
    },
    {
        minValue: 10000,
        maxValue: null,
        discount: 15
    }
]
//discountTable object to store Tax values
const taxTable = [
    {
        state: 'AB',
        tax: 5
    },
    {
        state: 'ON',
        tax: 13
    },
    {
        state: 'QC',
        tax: 14.975
    },
    {
        state: 'MI',
        tax: 6
    },
    {
        state: 'DE',
        tax: 0
    }
]


function calculateDiscount(totalCost) { //Function to calculate calculate Discount
  let discountAmount = 0;
  //Logic to handle test to fail conditions discount calculation
  if (!totalCost) {
    return "Total cost parameters is required";
  }
  if (totalCost && typeof totalCost !== "number") //Logic to check data type of totalCost and whether it has value in it.
  {
    return "Invalid total cost";
  }

  discountTable.forEach(e => {
    if (totalCost >= e.minValue && (e.maxValue ? totalCost < e.maxValue : true)) 
    {
      discountAmount = (totalCost * e.discount) / 100;
    }
  });
  return discountAmount;
}


function calculateTax(totalCost, state) {
  let taxAmout = 0;
  //Logic to handle test to fail conditions Tax calculation
  typeof state === "string" ? (state = state.toUpperCase()) : "";
  if (!state && totalCost) {
    return "Province/state parameter is required";
  }
  if (!totalCost) {
    return "Total cost parameter missing";
  }
  if (state && state.length != 2) {
    return "Invalid province/state code length";
  }

  if (typeof totalCost === "number" && state) {
    taxTable.forEach(e => {
      if (e.state === state) {
        taxAmout = (totalCost * e.tax) / 100;
      }
    });
  } else {
    taxAmout = "Invalid amount";
  }

  return taxAmout;
}

function calculateCost(totalUnits, pricePerUnit, state) {

  if (typeof totalUnits != "number") {
    return "Invalid number of items";
  }
  
  if (!pricePerUnit) {
    return "Unit price is required";
  } else if (pricePerUnit < 0 ){
    return "Invalid unit price";
  }else if (pricePerUnit && typeof pricePerUnit !== "number") {
    return "Invalid unit price";
  }

  if (!state) {
    return "Province/state parameter is required";
  } else if (state && typeof state !== "string") {
    return "Invalid province/state code";
  } else if (state && state.length != 2) {
    return "Invalid province/state code length";
  }
  
  var totalCost = totalUnits * pricePerUnit;
  var discountAmount = calculateDiscount(totalCost);
  totalCost = totalCost - discountAmount;

  var taxAmount = calculateTax(totalCost, state);
  totalCost = totalCost + taxAmount;

  return totalCost;
}

function example1() {
  console.log("Example 1");
  console.log("UserInput:  1500 items, $1 per item, Alberta");
  console.log("Output: $" + calculateCost(1500, 1, "AB").toFixed(2));
}

function example2() {
  console.log("Example 2");
  console.log("Input:  3600 items, $2.25 per item, Michigan");
  console.log("Output: $" + calculateCost(3600, 2.25, "MI").toFixed(2));
}


example1()
console.log('\n');
example2()
