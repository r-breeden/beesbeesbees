var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++; 
};

HoneyMakerBee.prototype.giveHoney = function() {
  //if give honey without any thing in the pot, we could run into a bug!!!!!!!!!!!!!!!
  this.honeyPot--; 
};
