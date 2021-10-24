var randomnumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;

}


var playerinfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillhealth: function() {
        if (this.money >= 7) {
            widoow.alert("Refilling player's health by 20 for 7 dollars.")
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }

    },
    upgradeattack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }

};


var enemyinfo = [{
        name: "roberto",
        attack: 12
    },
    {
        name: "Amy Android",
        attack: 13
    },
    {
        name: "robo trumble",
        attack: 14
    }
];
var fight = function(enemy) {
    console.log(enemy);
    while (enemy.health > 0 && playerinfo.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmskip = window.confirm("Are you sure you'd like to quit?");
            if (confirmskip) {
                window.alert(playerinfo.name + " has decided to skip this fight. Goodbye!");
                playerinfo.money = Math.max(playerinfo.money - 10, 0);
                console.log("player money  ", playerinfo.money)
                break;
            }
        }
        var damage = randomnumber(playerinfo.attack - 3, playerinfo.attack)
        enemy.health = Math.max(enemy.health - damage, 0);
        console.log(playerinfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health + " health remaining. ")
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerinfo.money = playerinfo.money + 20
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " heath left.");
        }
        var damage = randomnumber(enemy.attack - 3, enemy.attack)
        playerinfo.health = Math.max(0, playerinfo.health - damage);
        console.log(enemy.health + " attacked " + playerinfo.name + " now has " + playerinfo.health + " health remaining");
        if (playerinfo.health <= 0) {
            window.alert(playerinfo.name + " has died!")
            break;
        } else {
            window.alert(playerinfo.name + " still has " + playerinfo.health + " health left")
        }
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of `playerinfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
            enemy.health = enemy.health - playerinfo.attack
                // Log a resulting message to the console so we know that it worked.
            console.log(playerinfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
            // check enemy' s health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " helth left.");
            }
            // Subtract the value of `enemy.attack` from the value of `playerinfo.health` and use that result to update the value in the `playerinfo.health` variable.
            playerinfo.health = playerinfo.health - enemy.attack
                // Log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerinfo.name + ". " + playerinfo.name + " now has " + playerinfo.health + " health remaining.");
            // check player's health
            if (playerinfo.health <= 0) {
                window.alert(playerinfo.name + " has died!");
                break;
            } else {
                window.alert(playerinfo.name + " still has " + playerinfo.health + " health left.");
            }
        } else {
            window.alert("You need to choose a valid option . Try again !");

        }
    }
}

var startgame = function() {
    playerinfo.reset();
    for (var i = 0; i < enemyinfo.length; i++) {
        if (playerinfo.health > 0) {
            window.alert("Welcome to robot gladiators!" + " Round " + (i + 1));
            var pickedenemyobj = enemyinfo[i];
            pickedenemyobj.health = randomnumber(40, 60);
            fight(pickedenemyobj);
            if (i < enemyinfo.length - 1 && playerinfo.health > 0) {
                var confirmshop = window.confirm("The fight is over, visit the store before the next round?")
                if (confirmshop) {
                    shop();
                }
            }
        } else {
            window.alert("You lost your robot in battale ! Game over !");
            break;
        }
    }
    endgame();
};
var endgame = function() {
    window.alert("The game has now ended. let's see how you did!");
    if (playerinfo.health > 0) {
        window.alert("Great job, you've survived the game! you now have score of " + playerinfo.money + " .");
    } else {
        window.alert("You've lost your robot in battle. ")
    }
    var playagainconfirm = window.confirm("would you like to play again?");
    if (playagainconfirm) {
        startgame()
    } else {
        window.alert("Thank you for playing Robot Gladiators! come back soon!");
    }
}
var shop = function() {
    var shopoptianpromot = window.prompt("Would you like to Refill your health,Upgrade your attack ,or Leave the shop ");
    switch (shopoptianpromot) {
        case "refill":
        case "REFILL":
            playerinfo.refillhealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerinfo.upgradeattack();
            break;
        case "leave":
        case "LEAVE":
            {
                widoow.alert("Leaving the store. ")
                break;

            }
        default:
            window.alert("You did not pick a valid option. try again.");
            shop();
            break;

    }

}
startgame()