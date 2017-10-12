(function() {
    var name = getUrlParameter('name');
    $('title').text(name + " : Platanus");
    $('#main').append("<h2>" + name + "の曲一覧</h2>");
    $.getJSON( "/archive/composer/data.json", {
        format: "json"
    })
    .done(function(data) {
        var program;
        for(var programs of data) {
            if(programs[0].composer == name){
                program = programs;
                break;
            }
        }

        $('#main').append(program2html(program));
    });
})();
