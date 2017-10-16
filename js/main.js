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
        str += "<li><p><strong>" + playing.name + "</strong> / <a href='/archive/composer/?name=" + playing.composer + "'>" + playing.composer + "</a></p></li>";
        str += "<ul>";
            for(var player of playing.players){
                str += "<li><p>" + player.instrument + " : <a href='/archive/player/?name=" + player.name + "'>" + player.name  + "</a></p></li>";
            }
        str += "</ul>";
    }
    str += "</ul>";
    return str;
}
