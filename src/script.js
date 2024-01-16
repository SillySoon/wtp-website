let channel = document.getElementById('channel');
let botname = document.getElementById('botname');
let token = document.getElementById('token');
let autoStart = document.getElementById('autoStart');
let autoRestart = document.getElementById('autoRestart');
let displayMode = document.getElementById('displayMode');
let previewPokemon = document.getElementById('previewPokemon');
let previewTwitch = document.getElementById('previewTwitch');
let autoGiveUp = document.getElementById('autoGiveUp');
let autoGiveUpTime = document.getElementById('autoGiveUpTime');
let randomSpawnTime = document.getElementById('randomSpawnTime');
let randomSpawnTimeMin = document.getElementById('randomSpawnTimeMin');
let randomSpawnTimeMax = document.getElementById('randomSpawnTimeMax');
let pointReward = document.getElementById('pointReward');
let pointRewardCommand = document.getElementById('pointRewardCommand');
let pointRewardAmount = document.getElementById('pointRewardAmount');
let showPokeDex = document.getElementById('showPokeDex');

if (channel.value) {
    createLink();
} else {
    result.value = "Please enter a Channel Name.";
}

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
    createLink();
});

displayMode.addEventListener('change', function() {
    createLink();
});

autoGiveUp.addEventListener('change', function() {
    createLink();
});

autoGiveUpTime.addEventListener('input', function() {
    createLink();
});

randomSpawnTime.addEventListener('change', function() {
    createLink();
});

randomSpawnTimeMin.addEventListener('input', function() {
    createLink();
});

randomSpawnTimeMax.addEventListener('input', function() {
    createLink();
});

pointReward.addEventListener('change', function() {
    createLink();
});

pointRewardCommand.addEventListener('input', function() {
    createLink();
});

pointRewardAmount.addEventListener('input', function() {
    createLink();
});

showPokeDex.addEventListener('change', function() { 
    createLink();
});

// Create Link
function createLink() {
    let link = "https://sillysoon.de/pokemon/widget/"
    let result = document.getElementById('result');

    if (channel.value) {
        link += "?channel=" + channel.value.toLowerCase();

        if (botname.value) {
            link += "&botname=" + botname.value.toLowerCase();
        }
        if (token.value) {
            link += "&token=" + token.value;
        }
        if (!autoStart.checked) {
            link += "&autoStart=" + autoStart.checked;
        }
        if (!autoRestart.checked) {
            link += "&autoRestart=" + autoRestart.checked;
        }
        if (displayMode.value) {
            link += "&displayMode=" + displayMode.value;
        }
        if (autoGiveUp.checked && autoGiveUpTime.value) {
            link += "&autoGiveUp=" + autoGiveUp.checked;
            link += "&autoGiveUpTime=" + autoGiveUpTime.value;
        }
        if (randomSpawnTime.checked && randomSpawnTimeMin.value && randomSpawnTimeMax.value) {
            link += "&randomSpawnTime=" + randomSpawnTime.checked;
            link += "&randomSpawnTimeMin=" + randomSpawnTimeMin.value;
            link += "&randomSpawnTimeMax=" + randomSpawnTimeMax.value;
        }
        if (pointReward.checked && pointRewardCommand.value && pointRewardAmount.value) {
            link += "&pointReward=" + pointReward.checked;
            link += "&pointRewardCommand=" + pointRewardCommand.value;
            link += "&pointRewardAmount=" + pointRewardAmount.value;
        }
        if (!showPokeDex.checked) {
            link += "&showPokeDex=" + showPokeDex.checked;
        }

        result.value = link;
        previewPokemon.src = link;
    } else {
        result.value = "Please enter a Channel Name.";
        previewPokemon.src = "";
    } 
}