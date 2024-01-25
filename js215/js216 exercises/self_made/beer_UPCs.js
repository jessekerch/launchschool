/*
Take a list of beverage item info and return an object of any craft beer or beer item including any ales, and its associated UPC. Returned object UPCs should have 12 digits only.

*/

const list1 = ["Dales Pale Ale 8 19942 00003 6", undefined, , "Tour Water Sparkling 1/192C 8 61645 00042 4"];

const list2 = ["Pumpkin Ale	4/6/12 Cans	120 days	5.0%		0-15203-19301-5	15203-19301",
"Wonderful Winter Ale	4/6/12 Cans	120 days	7.1%		0-15203-42101-9	15203-42101",
"Evolution Amber Ale	2/12/12 Cans	120 days	5.0%		0-15203-61216-5",
"Wonderful Winter Ale	4/6/12 Cans	120 days	7.1%		0-15203-61212-7	15203-42101"];

const list3 = ["810117130329	Nasty Beast Hard Tea Variety 12/12C	FMB/PAB",
"810117130350	Nasty Beast Hard Tea Original 1/24C	FMB/PAB",
"810117130343	Nasty Beast Hard Tea + Lemonade 1/24C	FMB/PAB",
"810117130336	Nasty Beast Hard Green Tea 1/24C	FMB/PAB",
"810117130268	The Beast Unleashed Mean Green 1/24C	FMB/PAB",
"810117130282	The Beast Unleashed White Haze 1/24C	FMB/PAB",
"810117130305	The Beast Unleashed Peach Perfect 1/24C	FMB/PAB",
"810117130046	The Beast Unleashed Variety 12/12C	FMB/PAB",
"856662005767	Jai Alai IPA 12/12C	CRAFT",
"850005189909	Jai Alai Mixed Pack 12/12C	CRAFT",
"897853002936	Jai Alai IPA 6/12C	CRAFT",
"850005189725	Jai Alai IPA 1/19C	CRAFT",
"819942001972	Dale's Pale Ale 15/12C	CRAFT",
"819942000036	Dale's Pale Ale 6/12C	CRAFT",
"819942000166	Dale's Pale Ale 1/19C	CRAFT",
"850005189152	Florida Man Double IPA 6/12C	CRAFT",
"850005189954	Florida Man Double IPA 1/19C	CRAFT"];

function beerUPCs(list) {
  let beers = list.filter(item => /(beer|ale|craft)/gi.match(item));
  console.log(beers);
}

beerUPCs(list1); // { 'DALES PALE ALE': '819942000036' }
