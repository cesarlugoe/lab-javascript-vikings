// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
    return this.strength;
  }
  
Soldier.prototype.receiveDamage = function (damage){
    this.health -= damage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg ) {
    Soldier.call(this, healthArg, strengthArg)
    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
    this.health -= damage;
        if(this.health > 0){ 
            return this.name + ' has received ' + damage + ' points of damage';
        }
        else {
            return this.name + " has died in act of combat";
        }
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}

// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg,);
    
} 
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){ 
        return 'A Saxon has received ' + damage + ' points of damage';
    }
    else {
        return 'A Saxon has died in combat';
    }

}

// War


function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];

}
War.prototype.constructor = War;

War.prototype.addViking = function(viking){
    this.vikingArmy.push(viking);
}
War.prototype.addSaxon = function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack = function(){ 
    var randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);
    return attack; 
}

War.prototype.saxonAttack = function(){
    var randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);
    var randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    var attack = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
    return attack;
}

War.prototype.showStatus = function(){
    return this.saxonArmy.length<1 ? "Vikings have won the war of the century!"
         : this.vikingArmy.length<1 ? "Saxons have fought for their lives and survive another day..."
         :                            "Vikings and Saxons are still in the thick of battle."
}


// Methods










