var playername = window.prompt("What is your robot's name?")
var playerhealth = 100;
var playerattack = 10;
console.log("player name " + playername, "player helth " + playerhealth, "player attack " + playerattack);


var enemynames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyhealth = 50;
var enemyattack = 12;
var playermoney = 10;

var fight = function(enemyname) {
    while (enemyhealth > 0 && playerhealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmskip = window.confirm("Are you sure you'd like to quit?");
            if (confirmskip) {
                window.alert(playername + " has decided to skip this fight. Goodbye!");
                playermoney = playermoney - 10;
                console.log("player money  ", playermoney)
                break;
            }
        }
        enemyhealth = enemyhealth - playerattack
        console.log(playername + "attacked" + enemyname + " . " + enemyname + "now has" + enemyhealth + " health remaining. ")
        if (enemyhealth <= 0) {
            window.alert(enemyname + " has died!");
            playermoney = playermoney + 20
            break;
        } else {
            window.alert(enemyname + " still has " + enemyhealth + " heath left.");
        }
        playerhealth = playerhealth - enemyattack;
        console.log(enemyhealth + " attacked " + playername + " now has " + playerhealth + " health remaining");
        if (playerhealth <= 0) {
            window.alert(playername + " has died!")
            break;
        } else {
            window.alert(playername + "still has " + playerhealth + " health left")
        }
        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyhealth = enemyhealth - playerattack
                // Log a resulting message to the console so we know that it worked.
            console.log(playername + " attacked " + enemyname + ". " + enemyname + " now has " + enemyhealth + " health remaining.");
            // check enemy' s health
            if (enemyhealth <= 0) {
                window.alert(enemyname + " has died!");
                break;
            } else {
                window.alert(enemyname + " still has " + enemyhealth + " helth left.");
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerhealth = playerhealth - enemyattack
                // Log a resulting message to the console so we know that it worked.
            console.log(enemyname + " attacked " + playername + ". " + playername + " now has " + playerhealth + " health remaining.");
            // check player's health
            if (playerhealth <= 0) {
                window.alert(playername + " has died!");
                break;
            } else {
                window.alert(playername + " still has " + playerhealth + " health left.");
            }
        } else {
            window.alert("You need to choose a valid option . Try again !");

        }
    }
}
for (var i = 0; i < enemynames.length; i++) {
    if (playerhealth > 0) {
        window.alert("Welcome to robot gladiators!" + " Round " + (i + 1));
        var pickedenemyname = enemynames[i];
        enemyhealth = 50;
        fight(pickedenemyname);
    } else {
        window.alert("You lost your robot in battale ! Game over !");
        break;
    }
}