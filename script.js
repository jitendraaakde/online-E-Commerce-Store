const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });   
}

var removeLinks = document.querySelectorAll("#cart a i.bx.bxs-x-circle");

removeLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    var row = event.target.closest("tr");
    row.parentNode.removeChild(row);

    recalculateTotal();
  });
});

function recalculateTotal() {
  var subtotal = 0;
  var quantityInputs = document.querySelectorAll('#cart input[type="number"]');
  var priceCells = document.querySelectorAll("#cart td:nth-child(4)");

  quantityInputs.forEach(function (input, index) {
    var quantity = parseInt(input.value, 10);
    var price = parseFloat(
      priceCells[index].textContent.replace("$", "").trim()
    );
    subtotal += quantity * price;
  });

  var subtotalCell = document.querySelector("#subtotal td:nth-child(2)");
  subtotalCell.textContent = "$ " + subtotal.toFixed(2);

  var totalCell = document.querySelector("#subtotal td:nth-child(4)");
  totalCell.textContent = "$ " + subtotal.toFixed(2);
}
