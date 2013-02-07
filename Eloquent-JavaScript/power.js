function power(base, exponent){
	var result = 1;
	for(var count = 0; count < exponent; count++)
		result *= base;
	alert(result);
	return result;
}

power(2,10);

