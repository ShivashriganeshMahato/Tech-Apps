function calculate() {
    var billStr = document.getElementById("bill").value;
    var tipStr = document.getElementById("tip").value;

    if (!/^\d+$/.test(billStr) || !/^\d+$/.test(tipStr)) {
        alert("Invalid inputs!");
        return;
    }

    var bill = +billStr, tip = +tipStr;
    var result = bill + (tip / 100) * bill;

    document.getElementById("result").innerText = "$" + result;
}
