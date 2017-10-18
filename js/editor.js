var editor = new JSONEditor(document.getElementById('editor_holder'), {
    schema: {
        type: "array",
        title: "List of concerts",
        format: "tabs",
        items: {
            type: "object", 
            title: "Concert", 
            headerTemplate: "{{self.year}}-{{self.month}}-{{self.day}}", 
            options: {
                disable_edit_json: true, 
            }, 
            properties: {
                name: {
                    type: "string", 
                    title: "Name of the concert"
                },
                year: {
                    type: "string", 
                    title: "Year (YYYY)"
                }, 
                month: {
                    type: "string", 
                    title: "Month (MM)"
                }, 
                day: {
                    type: "string", 
                    title: "Day (DD)"
                }, 
                place: {
                    type: "string",
                    titel: "Place",
                },
                comment: {
                    type: "string",
                    title: "Comment"
                }, 
                imgs: {
                    type: "string",
                    title: "URL to GooglePhotos"
                }, 
                program: {
                    type: "array", 
                    format: "table",
                    title: "Program",
                    items: {
                        type: "object",
                        title: "Playing",
                        properties: {
                            name: {
                                type: "string",
                                title: "Title"
                            },
                            composer: {
                                type: "string",
                                title: "Composer name",
                            },
                            arrangedby: {
                                type: "string",
                                title: "Arranged by", 
                            }, 
                            players: {
                                type: "array",
                                format: "table",
                                title: "Player list",
                                items: {
                                    type: "object", 
                                    title: "Player", 
                                    properties: {
                                        instrument: {
                                            type: "string",
                                            title: "Instrument", 
                                            default: "pf"
                                        }, 
                                        name: {
                                            type: "string",
                                            title: "Player name"
                                        },
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    }
});


(function() {
    $.getJSON( "/archive/all.json", {
        format: "json"
    })
    .done(function(data) {
        editor.setValue(data);
    });
})();

(function() {
    $.getJSON( "/archive/composer/data.json", {
        format: "json"
    })
    .done(function(data) {
        var str = "";
        for(var composer of data){
            var composer_name = composer[0].composer;
            str += "<option value='" + composer_name + "'>";
        }
        $("#composer_name").append(str);
    });
})();

(function() {
    $.getJSON( "/archive/player/data.json", {
        format: "json"
    })
    .done(function(data) {
        var str = "";
        for(var player of data){
            var player_name = player[0].player_name;
            str += "<option value='" + player_name + "'>";
        }
        $("#player_name").append(str);
    });
})();


document.getElementById('save').addEventListener('click', function() {
    console.log(editor.getValue());
    var a = document.getElementById("save_link");
    var blob = new Blob([JSON.stringify(editor.getValue())], {type: "application/json"});
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.download = 'all.json';
    a.click();
});

$(document).on("focus", "input[name$=\\[composer\\]]", function(){
    $(this).attr("list", "composer_name");
});

$(document).on("focus", "input[name$=\\[name\\]]", function(){
    $(this).attr("list", "player_name");
});
