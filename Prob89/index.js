/*
 * For a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even
 * though the rules allow some numbers to be expressed in more than one way there is always a "best" way of writing a
 * particular number.
 *
 * For example, it would appear that there are at least six ways of writing the number sixteen:
 *
 * IIIIIIIIIIIIIIII
 * VIIIIIIIIIII
 * VVIIIIII
 * XIIIIII
 * VVVI
 * XVI
 *
 * However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most
 * efficient, as it uses the least number of numerals.
 *
 * The 11K text file, roman.txt (right click and 'Save Link/Target As...'), contains one thousand numbers written in
 * valid, but not necessarily minimal, Roman numerals; see About... Roman Numerals for the definitive rules for this
 * problem.
 *
 * Find the number of characters saved by writing each of these in their minimal form.
 *
 * Note: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.
 * 
 * 
 *  *Reference drawn from https://euler.stephan-brumme.com/89/
 * 
 */

// Selected the prob as it was a complex validation yet easy to process the information and understand the crux of it.

//==========
var ROMAN_URL = 'https://projecteuler.net/project/resources/p089_roman.txt';
//Rules for Roaman Numerals
//define the set of available roman numerals and corresponding Decimals
var TODECIMAL = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};
var TOROMAN = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];
//Request to get roman numerals
var request = require('request');
request(ROMAN_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //body contains all the roman numerals from the response of the request
        efficientNumerals(body.trim().split(/[\r\n]+/));
    }
});
//Returns the length of efficient numerals after check
function efficientNumerals(data) {
    var efficient_length = 0;
    var data_length = 0;
    for (var i = 0; i < data.length; i++) {
        data_length += data[i].toString().length;
        var minimal_num = checkRoman(checkDecimal(data[i]));
        efficient_length += minimal_num.toString().length;
    }
    console.log(data_length - efficient_length);
    return data_length - efficient_length;
}

//Takes a valid Roman and converts it to Integer
function checkDecimal(roman) {
    var decimal = 0;
    while (roman.length) {
        if (/^(IV|IX|XL|XC|CD|CM)/.test(roman)) {
            var num1 = roman.substring(0, 1);
            var num2 = roman.substring(1, 2);
            roman = roman.substring(2);
            decimal += TODECIMAL[num2] - TODECIMAL[num1];
        } else {
            var num = roman.substring(0, 1);
            roman = roman.substring(1);
            decimal += TODECIMAL[num];
        }
    }

    return decimal;
}

// Takes valid intiger and coverts to optimal roman numeral
//This method has the conversion rules

function checkRoman(decimal) {
    var roman = '';

    for (var i = 0; i < TOROMAN.length; i++) {
        var quotient = Math.floor(decimal / TOROMAN[i][0]);
        for (var j = 0; j < quotient; j++) {
            roman += TOROMAN[i][1];
        }
        decimal = decimal % TOROMAN[i][0];
    }

    return roman;
}

module.exports = efficientNumerals;
