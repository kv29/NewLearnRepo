var events= require('events');
var util = require('util');






function Employee(name,employeeId) {
	this.name=name;
	this.employeeId=employeeId;
}

util.inherits(Employee, events.EventEmitter);

//var eventEmitter = new events.EventEmitter();
//Employee.prototype = Object.create(events.EventEmitter.prototype);
//Employee.prototype.__proto__ = events.EventEmitter.prototype;

var emp1= new Employee('kailash', 'INC00641')
var emp2= new Employee('rakesh', 'INC00642')
var emp3= new Employee('suresh', 'INC00643') 
var employee=[emp1,emp2,emp3];



employee.forEach(function (element) {


element.on('myevent',function (msg) {
	console.log('employee name: '+element.name+' and employee ID : '+element.employeeId +'  said :'+msg)
})
});


emp1.emit('myevent' , 'do your best to achive goal');
emp1.emit('myevent' , 'u can do whterver u want');
emp1.emit('myevent' , 'rdxctfgbhjni');

