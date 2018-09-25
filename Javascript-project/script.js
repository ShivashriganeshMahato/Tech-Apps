var curUser;
var colors = {
    "green": "#badc58",
    "red": "#ff7979",
    "blue": "#7ed6df",
    "orange": "#ffbe76",
    "yellow": "#f6e58d"
}

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
            // <div class="todoListTask">
            //     <div class="todoListColorPicker">
            //         <div class="todoListColorPickerColor red"></div>
            //         <div class="todoListColorPickerColor yellow"></div>
            //         <div class="todoListColorPickerColor green"></div>
            //         <div class="todoListColorPickerColor blue"></div>
            //         <div class="todoListColorPickerColor orange"></div>
            //     </div>
            //     <div class="todoListTaskCheck"></div>
            //     <div class="todoListTaskContent"><input></div>
            //     <div class="todoListTaskClose">
            //         <span class="fas fa-times todoListTaskCloseBtn"></span>
            //     </div>
            // </div>

            var newFormCheck;

            var newForm = document.createElement("DIV");
            newForm.className = "todoListTask";

            var picker = document.createElement("DIV");
            picker.className = "todoListColorPicker";

            function setColor(e) {
                newFormCheck.style.background = colors[e.target.className.replace("todoListColorPickerColor ", "")];
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

            content.appendChild(newForm);
        }
        node.appendChild(addBtn);

        var content = document.createElement("DIV");
        content.className = "todoListContent";

        this.tasks.forEach(task => {
            content.appendChild(task.getDOM());
        });

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
            curUser.lists[listInd].tasks.splice(ind, 1);
            setupList();
            storeCurUser();
        }
        close.appendChild(closeBtn);

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
    if (!localStorage[username]) {
        localStorage[username] = JSON.stringify({
            username: username,
            lists: [
                {
                    name: "Hello world",
                    tasks: [
                        {
                            name: "Boom",
                            color: "white",
                            completed: true
                        },
                        {
                            name: "Boom 2",
                            color: "white",
                            completed: true
                        },
                        {
                            name: "Boo 3m",
                            color: "white",
                            completed: true
                        }
                    ]
                }
            ]
        });
    }
    curUser = getUserByUsername(username);
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

document.addEventListener("DOMContentLoaded", function (e) {
    $id("loginFormInput").addEventListener('input', updateLoginFormBtn);
    $id("loginFormBtn").addEventListener('click', onLogin);
});
