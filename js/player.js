var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

(function() {
    var name = getUrlParameter('name');
    $('title').text(name + " : Platanus");
    $('#main').append("<h2>" + name + "さんの演奏一覧</h2>");
    $.getJSON( "/archive/player/data.json", {
        format: "json"
    })
    .done(function(data) {
        var program;
        for(var player of data) {
            if(player.name == name){
                program = player.program;
                break;
            }
        }

        console.log(program);
        var str = "";
        for(var playing of program) {
            str += "<ul>"
            str += "<li><strong>" + playing.program.name + "</strong> / " + playing.program.composer + "</li>";
            str += "<ul>"
            for(var player of playing.program.player){
                for(var key in player){
                    str += "<li>" + key + " : <a href='/archive/player/?name=" + player[key] + "'>" + player[key]  + "</a></li>";
                }
            }
            str += "</ul>"
            str += "</ul>"
        }
        $('#main').append(str);
    });
})();
