function addItem() {
    var item = document.getElementById("toAdd").value;
    if (item !== "") {
        document.getElementById("toAdd").value = "";
        var li = document.createElement("li");
        li.innerText = item;
        document.getElementById("itemList").appendChild(li);
    }
}
