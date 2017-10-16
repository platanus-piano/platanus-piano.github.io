var getUrlParameter = function(sParam) {
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

var program2html = function(program) {
    var str = "<ul>";
    for(var playing of program) {
        str += "<li><p>";
        str += "<strong>" + playing.name + "</strong>";
        str += " / ";
        str += "<a href='/archive/composer/?name=" + playing.composer + "'>";
        str += playing.composer;
        str += "</a>";

        if(playing.arrangedby){
            str += " (" + playing.arrangedby + " 編曲)";
        }
        str += "</p></li>";

        str += "<ul>";
            for(var player of playing.players){
                str += "<li><p>";
                str += player.instrument;
                str += " : ";
                str += "<a href='/archive/player/?name=" + player.name + "'>";
                str += player.name;
                str += "</a></p></li>";
            }
        str += "</ul>";
    }
    str += "</ul>";
    return str;
}
