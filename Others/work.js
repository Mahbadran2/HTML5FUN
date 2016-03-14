/*var getDieRoll = function(Size){
	var result = Math.ceil(Size * Math.random());
	return result;
	
};
var sum = function(x,z){
	
	return x+z;
	
};
var s = sum(0,0);
var roll = getDieRoll(6);

if(s > 0){
	console.log("sum = " + s);
}else
	console.log('empty');
/*while(roll > 1)
{
	console.log(roll);

	roll=getDieRoll(6);	
}
console.log(roll); */

/*do{
	console.log(roll);
	roll=getDieRoll(6);	
	
}while(roll>1)
	console.log(roll);

var array = [1,2,3, "mahmoud"];

//console.log(array[0] , array[1]);

for (var i=0 ; i<array.length ; i++){
	console.log(array[i]);
}
console.warn();
console.error(); */

var dice = require("./myObj");
//console.log("the size" + dice.mah.size + "and ali address is :" + dice.mah.nestedObj.adress);
//console.log(dice.mah.DieRoll());

exports	['Can add test'] = function (test){
	var name = "test 1";
	location = "Folder";
	var sum = dice.mah.getCount();
	console.log(sum);
	test.done();
};
//console.log(dice);

var add = function(x,y){
	var sum = x+y;
	return sum;
};
//console.log(add(2,2,2));

function myFun(n,y,t,s){
	var x = 0;
	for(var i=0;i<arguments.length;i++){
		x+=arguments[i];
	}
	return console.log(arguments.length);
};

var add = function add(x,y){
		sum = function(x,y){
			result = x+y;
			return result;
	}
	return sum(x,y);
}
console.log("tt");
console.log(add(9,9));
new add(3,3).sum()
			
//console.log(myFun(1,2,3,3));
//console.log(arguments.length);
/*
var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send('hello');
	
});
app.listen(2000);*/