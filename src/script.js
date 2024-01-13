let channel = document.getElementById('channel');
let botname = document.getElementById('botname');
let token = document.getElementById('token');
let autoStart = document.getElementById('autoStart');
let autoRestart = document.getElementById('autoRestart');
let displayMode = document.getElementById('displayMode');
let previewPokemon = document.getElementById('previewPokemon');
let previewTwitch = document.getElementById('previewTwitch');

result.value = "Please enter a Channel Name.";

// Event listeners
channel.addEventListener('input', function() {
    createLink();
});

botname.addEventListener('input', function() {
    createLink();
});

token.addEventListener('input', function() {
    createLink();
});

autoStart.addEventListener('change', function() {
    createLink();
});

autoRestart.addEventListener('change', function() {
    console.log(autoRestart.checked);
    createLink();
});

displayMode.addEventListener('change', function() {
    createLink();
});

// Create Link
function createLink() {
    let link = "https://sillysoon.de/pokemon/widget/"
    let result = document.getElementById('result');

    if (channel.value) {
        link += "?channel=" + channel.value;

        if (botname.value) {
            link += "&botname=" + botname.value;
        }
        if (token.value) {
            link += "&token=" + token.value;
        }
        if (autoStart.checked) {
            link += "&autoStart=" + autoStart.checked;
        }
        if (autoRestart.checked) {
            link += "&autoRestart=" + autoRestart.checked;
        }
        if (displayMode.value) {
            link += "&displayMode=" + displayMode.value;
        }
        result.value = link;
        previewPokemon.src = link;
    } else {
        result.value = "Please enter a Channel Name.";
        previewPokemon.src = "";
    } 
}