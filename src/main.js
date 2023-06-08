/*
This is the digital component or boss part of our game, called 'A Journey of Fate.'
Some of the mechanics of the boss have not been added yet.  Such as declaring the move type before starting the players turn.
The code is very messy and no state Machines are implemented yet.
Any line of code that has the comment 'Not used' after it should be ignored, same with commented out code.

The starting scene is the menuScene, then travelerScene.  The order of the boss or changing of the scenes is travelerScene, belovedScene, bruteScene, and then dragonScene.
The player returns to the menuScene after beating all bosses.

Each scene besides the menuScene is a boss room, or level.
everyboss scene is coded very similar to each other, or the structure is the same but not the moves List and title.

Look at the menuScene or Menus.js first because is the starting screen.
*/

//Sets up the game configuration, which includes the width and height of the canvas, what scenes there are, and the container.
let config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    // Sets game scaling
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT,
        // Center vertically and horizontally
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    //This is for the REXUI plugin that has to create a textfield
    dom: {
        createContainer: true
    },
    //Ignore Demo.js, this was for testing the RexUI plugin textfield on an empty canvas.
    scene: [ Menu, Demo, Traveler, Beloved, Brute, Dragon ]
}

//Declaring our keys input and also the game for each room.
let game = new Phaser.Game(config);
let keyF, keyR, keyLEFT, keyRIGHT, keyENTER;

let test;//Not used

//BorderUI and Padding are just like the ones from CMPM 120.
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Global variable accessible for any scene to keep track of the number of players for scaling later.
var number_of_players = 1;

//global health variables that every scene has access to.  
//None were used because we just defined the boss's health in each scene by multiplying 30 or 40 by number_of_players
let angel_health = 0;
let dragon_health = 0;
let traveler_health = 0;
let brute_health = 0;

var currentBossmove = '';

//Global player damage to always allow the player to read and also set the damage number towards the boss
var playerdmg = 0;

//List of bosses and List of clearBosses for future implmentation of random selection of bosses. (Not used yet)
bossList = ['Traveler','Beloved','Brute','Dragon']
clearedBoss = [];