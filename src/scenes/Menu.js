//Scene of the Menu or the menuScene.  
//The Menu has just the title of the game, and also a textfield for the player to click and edit
//The textfield determines the number of players or sets the global variable
//If the player does not enter a number, or the number is less than they will get a warning.
class Menu extends Phaser.Scene {
    
    constructor() {
        super("menuScene");
    }
    preload() {
        //Loading or installing the REXUI texfield plugin by link from github
        this.load.image('startbutton', './assets/Start Button.png');
        var url;
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';
        this.load.plugin('rexbbcodetextplugin', url, true);
      
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js';
        this.load.plugin('rextexteditplugin', url, true);
    }

    create() {
        currentBossmove = '';
        //The start of making a the textfield with the plugin
        //This one is for taking in the number of players.
        game.config.dom = true;
        game.config.parent = this;
        var printText = this.add.rexBBCodeText(game.config.width/2, game.config.height/2 + borderUISize + borderPadding*2, '1', {
            color: 'white',
            fontSize: '24px',
            //fontFamily: 'fantasy',
            align: 'center',
            fixedWidth: 200,
            fixedHeight: 40,
            backgroundColor: '#333333',
            valign: 'center'
        }).setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', function () {
            var config = {
                type: 'number',
                onTextChanged: function (textObject, text) {
                    // Check input text here.
                    textObject.text = text;
                }
            };               
            this.plugins.get('rextexteditplugin').edit(printText, config);
        }, this);
        this.warning = this.add.text(game.config.width/2, game.config.height/2 + borderUISize +80, '').setOrigin(0.5);
        this.plugins.get('rextexteditplugin').add(printText, {
            onOpen: function (textObject) {
                console.log('Open text editor');
            },
            onTextChanged: function (textObject, text) {
                textObject.text = text;
                console.log(`Text: ${text}`);
                //Most important part that reads what the player wrote and changes it to int
                //Global number_of_players turns into that value.
                number_of_players = parseInt(text);
            },
            onClose: function (textObject) {
                console.log('Close text editor');
            },
            selectAll: true,
            // enterClose: false
        });

        //Text on the bottom-left of the Menu screen telling the player what to do.
        //this.add.text(20, 665, "Use the text box below to enter damage on the players' turn");
        
        let menuConfig = {
            fontFamily: 'fantasy',
            fontSize: '48px',
            backgroundColor: '#000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        //Adds text or tile of the game.
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'A Journey of Fate', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';

        //Text right above the textfield in the Menu, below Game title.
        this.add.text(game.config.width/2, game.config.height/2, 'Enter the number of players below.', menuConfig).setOrigin(0.5);

        this.add.text(20, 20, "First the boss will make an annoucement for what they will do on their turn.\nNext is the players' turn.\nThe players will strategize according to the boss' next action.\nEach player uses one of their Hero's actions and any damage\ndealt to the boss is entered into the entry box.\nNext is the boss' turn where they complete the action that was announced.\nThen a new round begins.\n\nThe players are responsible for keeping track of their own health (20 MAX)\nand any active statuses with the help of tokens.");
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }
    
    update() {
        ////The keyLeft input is not actually needed, just some debugging or for future credits and tutorial scene
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            
            
            console.log("hello");
            console.log(number_of_players);
   
        }
        //On Enter keyDown, this will check number_of_players and decide what to do
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
   
            //just some Debugging for print statements.
            console.log("hello");
            console.log(number_of_players);

            //If the value of the parsed text from the textfield or number_of_players is NaN (not a number)
            //or if it is less than 1, the warning.text will appear with the message "Enter a number no less than 1!"
            if (isNaN(number_of_players) || number_of_players < 1){
                console.log("please enter a number no less than 1");
                this.warning.text = 'Enter a number no less than 1!';
            }
            //If number_of_players is not NaN and greater or equal to 1, we can go to the traveler
            else if (!isNaN(number_of_players) && number_of_players >= 1) {
                this.scene.start("travelerScene");
            }    
        }
        //The keyRight input is not actually needed, just some debugging or for future credits and tutorial scene
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            console.log("bye");
          
        }
    }
    
}

