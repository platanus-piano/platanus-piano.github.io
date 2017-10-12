(function() {
    var name = getUrlParameter('name');
    $('title').text(name + " : Platanus");
    $('#main').append("<h2>" + name + "さんの演奏一覧</h2>");
    $.getJSON( "/archive/player/data.json", {
        format: "json"
    })
    .done(function(data) {
        var program;
        for(var programs of data) {
            if(programs[0].player_name == name){
                program = programs;
                break;
            }
        }

        $('#main').append(program2html(program));
    });
})();
