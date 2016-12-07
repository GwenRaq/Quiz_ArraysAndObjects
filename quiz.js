/*
Gwyneth Raquepo
Arrays and Objects
December 7, 2016
*/

var myArray = ["rabbit", "coco", 10, true];

myArray[2];

console.log(10)

function okay(myArray) {
	if(myArray==10){
		console.log("I have "+ myArray[3]+ " apples.")
	}else{
		console.log("You Shall Not Pass!")
	}
}
okay(10);

var myObject = {
	man: true,
	utilityBelt: ["sword", "bow","gun"],
	vehicle: "batmobile",
	sidekick: "robin"
}

function lol(hero){
	if(hero == man){
		console.log("He has a "+ myObject.utilityBelt +".")
	}else{
		console.log("No, Im the Bat!")
	}
}

lol(man);