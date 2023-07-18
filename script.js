function calculateTotal() {
  var itemName = document.getElementById("item").value;
  var quantity = parseInt(document.getElementById("quantity").value);
  var price = parseFloat(document.getElementById("price").value);

  if (itemName === "" || isNaN(quantity) || isNaN(price)) {
    alert("Please fill in all fields with valid values");
    return;
  }

  var total = quantity * price;

  document.getElementById("total").value = total.toFixed(2);

  alert("Total amount calculated successfully");
}
