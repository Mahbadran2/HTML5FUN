
var calc = function(start){
	var s =this;
	this.add=function(x){
		start += x;
		return s;
	}
	this.multiply=function(x){
		start *= x;
		return this;
	};
	this.equals=function(callback){
		callback(start);
		return this;
	};
	return start;
};

new calc(0)
	.add(1)
	.add(2)
	.multiply(3)
	.equals(function(result){
		console.log(result);
	});
	
var sum = function(x,y){
	this.sum1= function(x,y){
		var result = x+y;
		return result;
	};
	return sum1(x,y);
};	

console.log(sum(1,2));
console.log(window.confirm());