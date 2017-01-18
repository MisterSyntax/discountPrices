/**
*@Descripton: Iterate through a string of prices, and return a string of all those that are 25% discounts of other prices in the string
*@SampleInputs:"15 20 60 75 80 100"   
*@SampleOutput:"15 60 75"
*@SampleInput:"9 9 12 12 12 15 16 20"
*@SampleOutput:"9 9 12 15"
*/
function findDiscounted(prices) {
	//init vars
	var jumbledPrices = [];
	var discountPrices = "";
	var priceObj = {};
	jumbledPrices = prices.split(" ");

	//iterate through the prices and create an Obj of each price so we can search with a O(1)
	jumbledPrices.forEach(function (currentPrice) {
		if (priceObj[currentPrice] > 0) {
			priceObj[currentPrice] += 1;
		} else {
			priceObj[currentPrice] = 1;
		}
	});

	//iterate through the prices
	//for each price. check to see if you've any left that you haven't flagged as either a full or discounted price
	//if you h
	jumbledPrices.forEach(function (currentPrice) {
		var fullPrice = currentPrice * (4 / 3);
		//check to see if you have any of the currentPrice that you haven't already flagged as a full or discounted price
		//and check to see if you have any at this currentPrice's corresponding full price
		if (priceObj[currentPrice] > 0 && priceObj[fullPrice] !== null && priceObj[fullPrice] > 0) {
			priceObj[fullPrice] -= 1;
			priceObj[currentPrice] -= 1;
			discountPrices += currentPrice + " ";
		}
	});

	//Trim any whitespace
	discountPrices = discountPrices.trim();

	return discountPrices;
}
