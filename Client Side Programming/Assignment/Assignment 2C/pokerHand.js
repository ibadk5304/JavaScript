var suits=["SPADE","SPADE","SPADE","SPADE","SPADE"];
//var value=[10,"J","Q","K","A"];

//var value=[5,6,7,8,9];
var value=["ACE","ACE","ACE","ACE",2];

let isEqual = suits.every(suit => suit = suits[0]);

console.log(isEqual);


var sortedValue =value.sort();
console.log(sortedValue);


var valueforRoyalFlush =[10,"A","J","K","Q"];

let deepEquals = (a,b) => JSON.stringify(a) === JSON.stringify(b);


console.log(deepEquals(valueforRoyalFlush,sortedValue));


// Straight Flush
 function isConsecutive(arr)
 {
    var isCons=true;
  
    for(var i= 0; i<arr.length -1;i++)
    {
        if((arr[i])+1 !== arr[i+1])
        {
            isCons = false;
            break;
        }
    }
    return isCons;
 }

console.log(sortedValue);
var countFourKind= 1;
for(var i=0;i<sortedValue.length-1;i++)
{
    if(sortedValue[i]==sortedValue[i+1])
    {
        countFourKind= countFourKind +1;
    }
}
// ************************

 console.log(sortedValue);

 console.log(isConsecutive(sortedValue));

if(isEqual ==true && deepEquals(valueforRoyalFlush,sortedValue)==true)
{
    console.log("royal Flush")
}
else if(isEqual ==true && isConsecutive(sortedValue) == true)
{
    console.log("Straight Flush");
}
else if(countFourKind=4)
{
    console.log("Four of a kind");
}
// Full house
else if(sortedValue[0] === sortedValue[1] && sortedValue[1] == sortedValue[2])
{
    if(sortedValue[3] === sortedValue[4])
    {
        console.log("Full House");
    }
}
else if(sortedValue[0] === sortedValue[1])
{
    if(sortedValue[2] === sortedValue[4] && sortedValue[3] === sortedValue[4])
    {
        console.log("Full House");
    } 
}
else if(isEqual ==true && isConsecutive(sortedValue) !== true)
{
    console.log("Flush");
}
else if(isEqual == false && isConsecutive(sortedValue) !== true)
{
    console.log("Straight")
}
else if(countFourKind=3)
{
    console.log("Three of a kind");
}
else if((sortedValue[0] === sortedValue[1] && sortedValue[2] == sortedValue[3]) || (sortedValue[1] === sortedValue[2] && sortedValue[3] == sortedValue[4]))
{
    console.log("Two pair")
}
else if(countFourKind=2)
{
    console.log("Pair");
}
else
{
    console.log("High card")
}







