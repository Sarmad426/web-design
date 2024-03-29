function calculateTotalPower() {
  var acPower = parseInt(document.getElementById("acCount").value) || 0;
  var ironPower = parseInt(document.getElementById("ironCount").value) || 0;
  var fridgePower = parseInt(document.getElementById("fridgeCount").value) || 0;
  var pumpPower = parseInt(document.getElementById("pumpCount").value) || 0;
  var fanPower = parseInt(document.getElementById("fanCount").value) || 0;
  var bulbPower = parseInt(document.getElementById("bulbCount").value) || 0;
  var tvPower = parseInt(document.getElementById("tvCount").value) || 0;
  var washerPower = parseInt(document.getElementById("washerCount").value) || 0;

  var totalPower =
    acPower * 1000 +
    ironPower * 1100 +
    fridgePower * 750 +
    pumpPower * 1000 +
    fanPower * 120 +
    bulbPower * 25 +
    tvPower * 150 +
    washerPower * 300;

  document.getElementById("acPower").textContent = acPower * 1000 + " Watts";
  document.getElementById("ironPower").textContent =
    ironPower * 1100 + " Watts";
  document.getElementById("fridgePower").textContent =
    fridgePower * 750 + " Watts";
  document.getElementById("pumpPower").textContent =
    pumpPower * 1000 + " Watts";
  document.getElementById("fanPower").textContent = fanPower * 120 + " Watts";
  document.getElementById("bulbPower").textContent = bulbPower * 25 + " Watts";
  document.getElementById("tvPower").textContent = tvPower * 150 + " Watts";
  document.getElementById("washerPower").textContent =
    washerPower * 300 + " Watts";

  document.getElementById("totalPower").textContent = totalPower + " Watts";
}
