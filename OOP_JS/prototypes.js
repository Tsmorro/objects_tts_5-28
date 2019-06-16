function Person(){
	this.brain = true;
};
function Student(){
	this.computer = true;
};
function Graduate(){
	this.skillz = 'Mad'
};

var p = new Person();
Student.prototype = p;

var s = new Student();
Graduate.prototype = s;

var g = new Graduate();

console.log(g.skillz, g.computer, g.brain);