var insertItem;
var addItem;

$(function() {
    var app = new Vue({
        el: "#app",
        methods: {
            toggleSelect: function (target) {
                target.selected = !target.selected;

                var curTotal = Number(app.total.replace(/[^0-9.-]+/g,""));
                var delta = Number(target.price.replace(/[^0-9.-]+/g,""));
                var newTotal;
                if (target.selected) {
                    newTotal = curTotal + delta;
                } else {
                    newTotal = curTotal - delta;
                }
                app.total = newTotal.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                });
            }
        },
        data: {
            total: "$0.00",
            projects: [[]]
        }
    });

    addItem = function(price, image, desc) {
        var projects = app.projects;
        if (projects[projects.length - 1].length >= 3) {
            projects.push([]);
        }
        var recent = projects[projects.length - 1];
        recent.push({
            price: "$" + price,
            image: image,
            desc: desc
        });
    }

    insertItem = function() {
        var price = $("#price").val();
        var image = $("#imageLink").val();
        var desc = $("#description").val();
        addItem(price, image, desc);
    }
});
