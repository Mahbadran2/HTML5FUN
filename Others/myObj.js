var myObj = {
	size:5,
	nestedObj:{
		name:"Ali",
		adress:"aa"
	},
	getCount:function(){
		var count = 0;
		return count;	
	},
	name:"Mahmoud",
	DieRoll: function(){
		var finalResult = Math.ceil(this.size*Math.random());
		return finalResult;
	}
};

exports.mah = myObj;
exports.name = "first";