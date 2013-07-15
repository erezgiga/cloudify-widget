$(function(){

    function init() {
        setButton();
    }

    function setButton() {
        $("#redBtn, #greenBtn, #blueBtn").on("click", function() {
            var iframe = $("#iframe");
            $.postMessage(JSON.stringify({name: 'update_skin', value: this.value}), document.location.origin, iframe.get(0).contentWindow);
        });
    }

    $.receiveMessage(function (e) {
            try {
                var msg = JSON.parse(e.data);

                if (msg.name = 'change_color') {
                    $('#widgetBg').css('background-color', msg.value);
                }
            } catch (exc) {
                console.log(["problem invoking callback for ", e, exc, callbacks]);
            }
        },
        function (origin) {
            return true;
        }
    );

    init();
});