$(document).ready(function () {
    $("#exp1").click(function () {
        //alert("Inside click function");
        $.get("../../../experiments/Week01/exp1-basics.html", function (data, status) {
            var msg = data;

            document.getElementById("content").innerHTML = msg;
        });
    });

    $("#exp2").click(function () {
        //alert("Inside click function");
        $.get("../../../experiments/Week02/exp8-fluid-flow.html", function (data, status) {
            var msg = data;
            document.getElementById("content").innerHTML = msg;
        });
    });
});