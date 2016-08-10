var math = require('mathjs');
module.exports = {

geomean: function(numberseries) {

if (numberseries.length <=1){
	return null
}
var total=1.0;
var count=numberseries.length;
numberseries.forEach(function(number){
	if (number === 0){
		count--;
	}else{
		total=total*number;
	}
});
var exp=1/count;
var geomean_result=math.pow(total,exp);
return geomean_result;


},

}
