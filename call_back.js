"use strict";

function playFootball(player, callback) {
    console.log(`Name of player ${player}`);
    callback();
}

function goals() {
    console.log('His shot 100 goals');
}

playFootball('MoSalah', goals)