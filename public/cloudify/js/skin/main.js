$(function(){

    var postUrl = 'http://erez.cloudifysource.org';

    function init() {
        setButtons();
    }

    function setButtons() {
        $("#start_btn").on("click", function() {
            var iframe = $("#iframe");
            updateButtonState('play');
            $.postMessage(JSON.stringify({name: 'play_widget', advanced: getAdvanced()}), postUrl, iframe.get(0).contentWindow);
        });

        $("#stop_btn").on("click", function() {
            var iframe = $("#iframe");
            updateButtonState('stop');
            $.postMessage(JSON.stringify({name: 'stop_widget'}), postUrl, iframe.get(0).contentWindow);
        });
    }

    function getAdvanced() {
        var $advanced = $(".advanced_section");
        var $project = $advanced.find("[name=project_name]");
        var $key = $advanced.find("[name=hpcs_key]");
        var $secretKey = $advanced.find("[name=hpcs_secret_key]");

        return {project : $project.val(), key : $key.val(), secretKey : $secretKey.val()};
    }

    function updateButtonState(state) {
        if (state == 'play') {
            $("#stop_btn").show();
            $("#play_btn").hide();
        } else if (state == 'stop') {
            $("#stop_btn").hide();
            $("#play_btn").show();
        }
    }

    $.receiveMessage(function (e) {
            try {
                var msg = JSON.parse(e.data);
                var $log = $("#log");

                if (msg.name = 'write_log') {
                    $log.append($("<li/>", {html: msg.html}).addClass(msg.className));
                    $log.scrollTop($log[0].scrollHeight);
                } else if (msg.name = 'set_advanced') {
                    var $advanced = $(".advanced_section");
                    var $project = $advanced.find("[name=project_name]");
                    var $key = $advanced.find("[name=hpcs_key]");
                    var $secretKey = $advanced.find("[name=hpcs_secret_key]");

                    $project.val(msg.project);
                    $key.val(msg.key);
                    $secretKey.val(msg.secretKey);
                } else if (msg.name == "state_update") {
                    updateButtonState(msg.state);
                }
            } catch (exception) {
                console.log(["problem invoking callback for ", e, exception, callbacks]);
            }
        },
        function (origin) {
            return true;
        }
    );

    init();
});