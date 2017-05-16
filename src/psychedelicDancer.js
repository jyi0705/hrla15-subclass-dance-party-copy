
var makePsychedelicDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

};

makePsychedelicDancer.prototype = Object.create(makeDancer.prototype);
makePsychedelicDancer.prototype.constructor = makePsychedelicDancer;


makePsychedelicDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};