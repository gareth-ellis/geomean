var math = require('mathjs');
module.exports = {

geomean: function(numberseries) {

if (numberseries.length <=1){
	return null
}
var product=1.0;
var error=false;
var count=numberseries.length;
numberseries.forEach(function(number){
	if (number === 0){
		count--;
	}else{
		product=product*number;
	}
});
var exp=1/count;
var geomean_result=math.pow(product,exp);
return geomean_result;


},

}
