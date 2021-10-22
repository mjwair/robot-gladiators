var playername = window.prompt("What is your robot's name?")
var playerhealth = 100;
var playerattack = 10;
console.log("player name " + playername, "player helth " + playerhealth, "player attack " + playerattack);
var enemyname = "Roberto";
var enemyhealth = 50;
var enemyattack = 12;
console.log("enemy name " + enemyname, "enemy health" + enemyhealth, "enemy attack " + enemyattack)
var fight = function() {
    window.alert("Welcome to Robot Glidiators!")

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyhealth = enemyhealth - playerattack
        // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // check enemy' s health
    if (enemyhealth <= 0) {
        window.alert(enemyname + " has died!");
    } else {
        window.alert(enemyname + " still has " + enemyhealth + " helth left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerhealth = playerhealth - enemyattack
        // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    // check player's health
    if (playerhealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
fight();