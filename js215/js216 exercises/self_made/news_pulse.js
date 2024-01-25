/*
We'd like to know if today's Market Brief is overall "positive", "negative", or "neutral".
Based on the market brief text, return a string with one of the three options above. Using the given positiveWords or negativeWords arrays, score the market brief text either +1 for each positive word, or -1 for each negative word. Calculate the total and return either positive for +, negative for -, or neutral for 0.

"Markets: Stocks had a rough hump day, pulled down by Google parent Alphabet’s biggest plunge since March 2020 as investors took in the news that the company’s cloud division fell short of estimates, even though its overall revenue numbers were high. Several other tech stocks fell with it, but not Microsoft, which rose because its cloud numbers looked good."

*/

const marketBrief = "Markets: Stocks had a rough hump day, pulled down by Google parent Alphabet’s biggest plunge since March 2020 as investors took in the news that the company’s cloud division fell short of estimates, even though its overall revenue numbers were high. Several other tech stocks fell with it, but not Microsoft, which rose because its cloud numbers looked good.";

const positiveWords = ['happy', 'lift', 'jump', 'up', 'rise', 'rose', 'high', 'exceed', 'good', 'bull'];

const negativeWords = ['rough', 'tough', 'down', 'drop', 'plunge', 'fall', 'fell', 'low', 'bottom', 'bear'];

function marketPulse(brief) {

}

marketPulse(marketBrief); // "negative"
