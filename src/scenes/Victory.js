//Scene of the Menu or the menuScene.  
//The Menu has just the title of the game, and also a textfield for the player to click and edit
//The textfield determines the number of players or sets the global variable
//If the player does not enter a number, or the number is less than they will get a warning.
class Victory extends Phaser.Scene {
    
    constructor() {
        super("victoryScene");
    }
    preload() {
    }

    create() {
        let menuConfig = {
            fontFamily: 'fantasy',
            fontSize: '48px',
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
        this.add.text(game.config.width/2, game.config.height/2 - 30, 'You have defeated The Dragon and your party is', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 30, 'VICTORIOUS', menuConfig).setOrigin(0.5).setFontSize('66px').setColor('#ffd700');

        // Lance Dennison
        // Stephanie He
        // Samuel Liao
        // Graham Taylor
        this.credits = "Game Design - Lance Dennison\n"
                        + "Programming - Samuel Liau, Graham Taylor\n"
                        + "Supplimentary Programming - Lance Dennison\n"
                        + "Art - Stephanie He\n"
                        + "Card Art - Lance Dennison";
        this.creditsText = this.add.text(game.config.width - 10, game.config.height - 10, this.credits, menuConfig).setOrigin(1).setFontSize('20px');
        this.creditsText.align = 'right';
    }
}

