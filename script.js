// Variables definition
let pricepizza,
  pricepasta,
  priceStarters,
  priceDelivery,
  orderCost,
  orderNumber,
  orderConfirm,
  cumulativePrice = 0,
  priceTotal;
  // Construct declaration
let userForm,
  userData = [];
// Function to find Pizza Price based on size
function pizzaprice() {
  if (document.getElementById("pizza").value == "Margherita") {
    priceSize = 500;
  } else if (document.getElementById("pizza").value == "Formaggio") {
    priceSize = 400;
  } else if (document.getElementById("pizza").value == "meat town") {
    priceSize = 200; 
   } else {
    priceSize = 1100;
  }
  return priceSize;
}
function pastaprice() {
    if (document.getElementById("pasta").value == "crustless") {
      priceCrust = 0;
    } else if (document.getElementById("pasta").value == "Lasagna") {
      priceCrust = 300;
    } else if (document.getElementById("pasta").value == "Ravioli") {
      priceCrust = 200;
    } else if (document.getElementById("pasta").value == "Spaghetti Classica") {
      priceCrust = 150;
    } else {
      priceCrust = 650;
    }
    return priceCrust;
  }
  // Function to find Pizza Price based on Toppings
function Startersprice() {
  if (document.getElementById("starters").value == "Starters") {
    priceToppings = 0;
  } else if (document.getElementById("starters").value == "Today's Soup") {
    priceToppings = 100;
  } else if (document.getElementById("starters").value == "Bruschetta") {
    priceToppings = 50;
  } else if (document.getElementById("starters").value == "Garlic bread") {
    priceToppings = 50;
  } else {
    priceToppings = 150;
  }
  return priceToppings;
}
// Fuction to find Pizza Delivery Price
function deliveryPrice() {
  if (document.getElementById("dprice").value == "Namanga") {
    priceDelivery = 0;
  } else if (document.getElementById("dprice").value == "Ngatataek") {
    priceDelivery = 100;
  } else if (document.getElementById("dprice").value == "patimaro") {
    priceDelivery = 200;
  } else if (document.getElementById("dprice").value == "bissil") {
    priceDelivery = 200;
  } else if (document.getElementById("dprice").value == "meto") {
    priceDelivery = 100;
  } else if ((document.getElementById("dprice").value = "kajiado twon")) {
    priceDelivery = 30
  } else {
    priceDelivery = 500;
  }
  return priceDelivery;
}
//  Function to calculate the order price
function orderPrice() {
  pizzaPrice();
  pastaPrice();
  priceStarters();
  orderCost = priceSize + priceCrust + priceToppings;
  userForm = {
    size: document.getElementById("pizza").value,
    crust: document.getElementById("pasta").value,
    toppings: document.getElementById("starters").value
  };
  userData = Object.values(userForm);
  alert(
    "You have picked a " +
      userForm.pizza +
      " " +
      userForm.pasta +
      " " +
      userForm.starters +
      " pizza. The total charge for your Pizza is " +
      orderCost
  );
  cumulativePrice += orderCost;
  alert("The total cost for Pizza(s) order is Kshs. " + cumulativePrice);
  console.log(cumulativePrice);
  let priceConfirm = confirm("Do you want to make another order?");
  document.getElementById("form").reset();
  if (priceConfirm == true) {
    document.getElementById("form").reset();
  } else {
    orderConfirm = confirm("Do you want your Order Delivered?");
    if (orderConfirm == true) {
      // jQuery to display Delivery option
      $(document).ready(function () {
        $("#form-s").hide(function () {
          $("#form1-h").show();
        });
      });
    } else {
      document.getElementById("form").reset();
      history.go();
      alert("Your order is ready for pick up from our location");
    }
  }
}

// Function to calculate the total price
function totalOrderPrice() {
  deliveryPrice();
// order cost + delivery
  priceTotal = cumulativePrice + priceDelivery; 
  let finalOrder = " ";
  userData.forEach(orderDetails);
  function orderDetails(value, index, array){
    finalOrder += value + " "
    console.log(finalOrder)
  }
  alert(
    "The total charge for your order Pizza(s) " +
      finalOrder +
      " and its delivery cost is " +
      priceTotal
  );

  document.getElementById("form").reset();
  history.go();
  alert("Your order will be delivered at your location");
}