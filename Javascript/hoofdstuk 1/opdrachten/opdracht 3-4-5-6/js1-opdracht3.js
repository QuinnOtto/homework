var regel_1 = "de zee die bruist";
var regel_1_length = regel_1.length;

var regel_2 = "je stortte je in m'n zee en we waren gelukkig";
var regel_2_length = regel_2.length;

var regel_3 = "zinnen van de zee";
var regel_3_length = regel_3.length;

var regel_4 = "maar wat zo'n zin zee";
var regel_4_length = regel_4.length;

var regel_5 = "dat zegt de zee mij niet";
var regel_5_length = regel_5.length;

var regel_6 = "een zalig gevoel";
var regel_6_length = regel_6.length;

var regel_7 = "de zee die ruist";
var regel_7_length = regel_7.length;

var regel_8 = "dan betekent";
var regel_8_length = regel_8.length;

var regel_9 = "m'n hart was een rustige zee";
var regel_9_length = regel_9.length;

var regel_10 = "de zee ruist zinnen";
var regel_10_length = regel_10.length;

let gedicht = document.createElement('p');
gedicht.innerHTML = (
    regel_1.toUpperCase() + "<br>" + 
    regel_10 + "<br>" +              
    regel_3.toUpperCase() + "<br>" + 
    regel_5 + "<br>" +                
    regel_7.toUpperCase() + "<br>" +  
    regel_9 + "<br>" +                
    regel_7.toUpperCase() + "<br>" +  
    regel_2 + "<br>" +                
    regel_6 + "<br>" +                
    regel_4 + "<br>" +                  
    regel_8                          
);
document.body.appendChild(gedicht);
// we maken hier een gedicht met verschillende regels en voegen deze toe aan de body
// we maken kennis met regel.length en regel.toUpperCase()