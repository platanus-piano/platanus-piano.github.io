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

var program2html = function(program, flag = false) {
    var str = "";
    var prev_year = "0000";
    var prev_id = -1;
    for(var playing of program) {
        if(playing.year != prev_year && flag){
            str += "<h3>" + playing.year + "</h3>";
            prev_year = playing.year;
        }
        if(playing.id != prev_id && flag){
            str += "<h4><a href='/archive/concert/?id=" + playing.id + "'>";
            str += playing.concert_name;
            //str += " " + playing.year;
            str += "</a></h4>";
            prev_id = playing.id;
        }
        str += "<ul>";
        str += "<li><p>";
        str += "<strong>" + playing.name + "</strong>";
        str += "<br>";
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

                str += "<tt>" + player.instrument + "</tt>";
                str += " : ";

                str += "<a href='/archive/player/?name=" + player.name + "'>";
                str += player.name;
                str += "</a>";


                str += "</p></li>";
            }
        str += "</ul>";
        str += "</ul>";
    }
    return str;
}
