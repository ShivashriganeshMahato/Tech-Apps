function addItem() {
    var item = document.getElementById("toAdd").value;
    if (item !== "") {
        document.getElementById("toAdd").value = "";
        var li = document.createElement("li");
        li.innerText = item;
        var removeBtn = document.createElement("button");
        removeBtn.innerText = "X";
        removeBtn.onclick = function (event) {
            li.remove();
        }
        li.appendChild(removeBtn);
        document.getElementById("itemList").appendChild(li);
    }
}
