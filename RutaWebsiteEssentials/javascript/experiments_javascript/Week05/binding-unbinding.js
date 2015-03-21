$(document).ready(function () {

    $("#bindingDiv").bind("click", (function () {
        $("#contents").text("This div is now binded! ");
    }));

    $("#unbindBtn").bind("click", (function () {
        $('#bindingDiv').unbind("click");
        $("#contents").text("DIV UNBINDED! ");
    }));

    $("#bindBtn").bind("click", (function () {
        $("#bindingDiv").bind({
            click: function () {
                $("#contents").append("This div is now binded! ");
            }
        });
    }));
});