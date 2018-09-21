function addItem() {
    var item = document.getElementById("toAdd").value;
    if (item !== "") {
        document.getElementById("toAdd").value = "";
        var li = document.createElement("li");
        li.innerText = item;
        document.getElementById("itemList").appendChild(li);
        document.getElementById("deleteBtn").disabled = false;
    }
}

function deleteItem() {
    var list = document.getElementById("itemList");
    list.removeChild(list.childNodes[0]);
    if (list.childNodes.length === 0) {
        document.getElementById("deleteBtn").disabled = true;
    }
}
