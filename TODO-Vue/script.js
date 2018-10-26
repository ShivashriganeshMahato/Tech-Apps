var curUser;
var colors = {
    "green": "#badc58",
    "red": "#ff7979",
    "blue": "#7ed6df",
    "orange": "#ffbe76",
    "yellow": "#f6e58d"
}
var prevDeleted;

function storeCurUser() {
    localStorage[curUser.username] = JSON.stringify(curUser);
}

function $id(id) {
    return document.getElementById(id);
}

function setupList() {
    Array.from(document.getElementsByClassName("todoListContainer")).forEach(elem => {
        elem.remove();
    });
    curUser.lists.forEach(list => {
        var listObj = new List(list.name, curUser.lists.indexOf(list));
        listObj.initTasks(list.tasks);
        $id("todoContainer").appendChild(listObj.getDOM());
    });
}

var List = function (name, ind) {
    this.name = name;
    this.tasks = [];

    this.addTask = function (task) {
        this.tasks.push(task);
    }

    this.removeTask = function (task) {
        var ind = this.tasks.indexOf(task);
        if (ind === -1)
            return;
        this.tasks.splice(ind);
    }

    this.initTasks = function (tasks) {
        tasks.forEach(task => {
            this.addTask(new Task(task.name, task.color, task.completed,
                ind, tasks.indexOf(task)));
        });
    }

    this.getDOM = function () {
        var node = document.createElement("DIV");
        node.className = "todoListContainer";

        var title = document.createElement("SPAN");
        title.className = "todoListTitle";
        title.innerText = this.name;
        node.appendChild(title);

        var addBtn = document.createElement("SPAN");
        addBtn.className = "todoListAddBtn fas fa-plus";
        addBtn.onclick = function () {
            var newFormCheck;
            var newFormColor = "#7ed6df";

            var newForm = document.createElement("DIV");
            newForm.className = "todoListTask";

            var picker = document.createElement("DIV");
            picker.className = "todoListColorPicker";

            function setColor(e) {
                newFormColor = colors[e.target.className.replace("todoListColorPickerColor ", "")];
                newFormCheck.style.background = newFormColor;
                picker.style.display = "none";
            }

            var red = document.createElement("DIV");
            red.className = "todoListColorPickerColor red";
            red.onclick = setColor;
            picker.appendChild(red);
            var yellow = document.createElement("DIV");
            yellow.className = "todoListColorPickerColor yellow";
            yellow.onclick = setColor;
            picker.appendChild(yellow);
            var green = document.createElement("DIV");
            green.className = "todoListColorPickerColor green";
            green.onclick = setColor;
            picker.appendChild(green);
            var blue = document.createElement("DIV");
            blue.className = "todoListColorPickerColor blue";
            blue.onclick = setColor;
            picker.appendChild(blue);
            var orange = document.createElement("DIV");
            orange.className = "todoListColorPickerColor orange";
            orange.onclick = setColor;
            picker.appendChild(orange);

            picker.style.display = "none";
            newForm.appendChild(picker);

            newFormCheck = document.createElement("DIV");
            newFormCheck.className = "todoListTaskCheck";
            newFormCheck.onmouseover = function () {
                newFormCheck.style.cursor = "pointer";
            }
            newFormCheck.onclick = function () {
                picker.style.display = "block";
            }
            newForm.appendChild(newFormCheck);

            var newFormContent = document.createElement("DIV");
            newFormContent.className = "todoListTaskContent";

            var contentInput = document.createElement("INPUT");
            newFormContent.appendChild(contentInput);

            newForm.appendChild(newFormContent);

            var newFormSubmit = document.createElement("DIV");
            newFormSubmit.className = "todoListTaskClose";

            var newFormSubmitBtn = document.createElement("SPAN");
            newFormSubmitBtn.className = "fas fa-check todoListTaskSubmitBtn";
            newFormSubmitBtn.onclick = function (e) {
                var newFormSubmitContent = e.target.parentElement.parentElement
                    .children[2].children[0].value;
                curUser.lists[ind].tasks.push({
                    name: newFormSubmitContent,
                    color: newFormColor,
                    completed: false
                });
                setupList();
                storeCurUser();
            }
            newFormSubmit.appendChild(newFormSubmitBtn);

            newForm.appendChild(newFormSubmit);

            content.appendChild(newForm);
            contentInput.focus();
        }
        node.appendChild(addBtn);

        var content = document.createElement("DIV");
        content.className = "todoListContent";

        this.tasks.forEach(task => {
            content.appendChild(task.getDOM());
        });

        node.ondragover = function (e) {
            e.preventDefault();
        };
        node.ondrop = function (e) {
            if (e.toElement.classList.contains("todoListTaskContent") ||
                e.toElement.classList.contains("todoListTask") ||
                e.toElement.classList.contains("todoListTaskCheck") ||
                e.toElement.classList.contains("todoListTaskCheckBox") ||
                e.toElement.classList.contains("todoListTaskClose") ||
                e.toElement.classList.contains("todoListTaskCloseBtn"))
                return;
            e.preventDefault();
            var list = e.dataTransfer.getData("list");
            var task = e.dataTransfer.getData("task");
            var elem = curUser.lists[list].tasks[task];
            curUser.lists[list].tasks.splice(task, 1);
            curUser.lists[ind].tasks.push(elem);
            storeCurUser();
            setupList();
        };
        node.appendChild(content);

        return node;
    }
}

var Task = function (name, color, completed, listInd, ind) {
    this.name = name;
    this.color = color;
    this.completed = completed;

    this.getDOM = function () {
        var $this = this;

        var node = document.createElement("DIV");
        node.className = "todoListTask";

        var check = document.createElement("DIV");
        check.style.background = color;
        check.className = "todoListTaskCheck";

        var checkbox = document.createElement("SPAN");
        checkbox.className = "far todoListTaskCheckBox ";
        checkbox.onclick = function () {
            $this.completed = !$this.completed;
            curUser.lists[listInd].tasks[ind].completed = $this.completed;
            setupList();
            storeCurUser();
        }
        if (this.completed) {
            checkbox.className += "fa-check-square";
        } else {
            checkbox.className += "fa-square";
        }
        check.appendChild(checkbox);

        node.appendChild(check);

        var content = document.createElement("DIV");
        content.className = "todoListTaskContent";

        var contentTxt = document.createElement("SPAN");
        contentTxt.innerText = this.name;
        content.appendChild(contentTxt);

        node.appendChild(content);

        var close = document.createElement("DIV");
        close.className = "todoListTaskClose";

        var closeBtn = document.createElement("SPAN");
        closeBtn.className = "fas fa-times todoListTaskCloseBtn";
        closeBtn.onclick = function () {
            prevDeleted = {
                listInd: listInd,
                taskInd: ind,
                task: curUser.lists[listInd].tasks[ind]
            };
            $id("todoNavbarUndo").style.display = "inline";
            curUser.lists[listInd].tasks.splice(ind, 1);
            setupList();
            storeCurUser();
        }
        close.appendChild(closeBtn);

        node.draggable = true;
        node.ondragstart = function (e) {
            e.dataTransfer.setData("list", listInd);
            e.dataTransfer.setData("task", ind);
        };
        node.ondragover = function (e) {
            e.preventDefault();
            node.style.borderTop = "solid 1px black";
        };
        node.ondragleave = function (e) {
            e.preventDefault();
            node.style.borderTop = "none";
        };
        node.ondrop = function (e) {
            e.preventDefault();
            var list = e.dataTransfer.getData("list");
            var task = e.dataTransfer.getData("task");
            var elem = curUser.lists[list].tasks[task];
            curUser.lists[list].tasks.splice(task, 1);
            curUser.lists[listInd].tasks.splice(ind, 0, elem);
            storeCurUser();
            setupList();
        };
        node.appendChild(close);

        return node;
    }
}

function getUserByUsername(username) {
    return JSON.parse(localStorage[username]);
}

// freq is frame rate
// callback is function expecting parameters end, a function that ends the
// animation, and params, the object that was passed
// params is an object storing variables to be used in the animation
// onComplete is a parameterless function called when the animation completes
function animate(freq, callback, params, onComplete) {
    var anim;

    function end() {
        clearInterval(anim);
        onComplete();
    }

    function frame() {
        callback(end, params);
    }

    anim = setInterval(frame, freq);
}

function updateLoginFormBtn(e) {
    // Disabled if login form input is empty
    $id("loginFormBtn").disabled = e.target.value.length === 0;
}

function onLogin(e) {
    var username = $id("loginFormInput").value;
    $id("loginFormInput").value = "";
    if (!localStorage[username]) {
        localStorage[username] = JSON.stringify({
            username: username,
            lists: []
        });
    }
    curUser = getUserByUsername(username);
    $id("todoNavbarName").innerHTML += username.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    // Animate login form sliding up
    animate(5, function (end, p) {
        if (p.top <= -300) {
            end();
        } else {
            p.top -= 5;
            $id("loginFormContainer").style.top = p.top + 'px';
        }
    }, {
        top: 200
    }, function () {
        setupList();
        $id("todoContainer").style.display = "block";
        // Once complete, animate todo container fading in
        animate(5, function (end, p) {
            if (p.opacity >= 1) {
                end();
            } else {
                p.opacity += 0.005;
                $id("todoContainer").style.opacity = p.opacity;
            }
        }, {
            opacity: 0
        }, function () {
        });
    });
}

function onLogout() {
    // Animate login form sliding in
    animate(5, function (end, p) {
        if (p.opacity <= 0) {
            end();
        } else {
            p.opacity -= 0.01;
            $id("todoContainer").style.opacity = p.opacity;
        }
    }, {
        opacity: 1
    }, function () {
        $id("todoContainer").style.display = "none";
        $id("todoNavbarName").innerHTML = "Hello, ";
        // Once complete, animate todo container fading in
        animate(5, function (end, p) {
            if (p.top >= 200) {
                end();
            } else {
                p.top += 5;
                $id("loginFormContainer").style.top = p.top + 'px';
            }
        }, {
            top: -300
        }, function () {
            curUser = null;
        });
    });
}

function showNewListInput(e) {
    $id("todoNavbarInput").style.display = "inline";
    $id("todoNavbarInput").focus();
}

function onNewListInputChange(e) {
    if (e.keyCode === 13) {
        $id("todoNavbarInput").style.display = "none";
        curUser.lists.push({
            name: $id("todoNavbarInput").value,
            tasks: []
        });
        $id("todoNavbarInput").value = "";
        storeCurUser();
        setupList();
    }
}

function undoDelete(e) {
    var p = prevDeleted;
    curUser.lists[p.listInd].tasks.splice(p.taskInd, 0, p.task);
    $id("todoNavbarUndo").style.display = "none";
    setupList();
    storeCurUser();
}

document.addEventListener("DOMContentLoaded", function (e) {
    $id("loginFormInput").addEventListener('input', updateLoginFormBtn);
    $id("loginFormBtn").addEventListener('click', onLogin);
    $id("todoNavbarAdd").addEventListener('click', showNewListInput);
    $id("todoNavbarInput").addEventListener('keypress', onNewListInputChange);
    $id("todoNavbarLogout").addEventListener("click", onLogout);
    $id("todoNavbarUndo").addEventListener("click", undoDelete);
});

// Close new list input if you click outside of it
document.addEventListener("click", function (e) {
    if (e.target.id !== "todoNavbarAdd") {
        $id("todoNavbarInput").style.display = "none";
    }
});
