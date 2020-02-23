

(function(){

  var deckid="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

  fetch(deckid)
  .then(response => response.json())
  .then(data =>
  {
    console.log(data.deck_id);
  
    //fetch('https://www.mikecaines.com/cards/royalflush.json')
    //fetch('https://www.mikecaines.com/cards/straightflush.json')
    //fetch('https://www.mikecaines.com/cards/fourofakind.json')
    fetch('https://www.mikecaines.com/cards/fullhouse.json')
    //fetch('https://www.mikecaines.com/cards/flush.json')
    //fetch('https://www.mikecaines.com/cards/highstraight.json')
    //fetch('https://www.mikecaines.com/cards/lowstraight.json')
    //fetch('https://www.mikecaines.com/cards/threeofakind.json')
    //fetch('https://www.mikecaines.com/cards/twopair.json')
    //fetch('https://www.mikecaines.com/cards/pair.json')
    //fetch('https://www.mikecaines.com/cards/acehigh.json')
    //fetch("https://deckofcardsapi.com/api/deck/"+data.deck_id+"/draw/?count=5")
    .then(response => response.json())
    .then(data => 
      {   
  
        console.log(data);
  
      document.getElementById("image1").innerHTML=`<h1>${data.cards[0].suit}</h1><br><img src="${data.cards[0].image}" width="200px" height="300px">`;
      document.getElementById("image2").innerHTML=`<h1>${data.cards[1].suit}</h1><br><img src="${data.cards[1].image}" width="200px" height="300px">`;
      document.getElementById("image3").innerHTML=`<h1>${data.cards[2].suit}</h1><br><img src="${data.cards[2].image}" width="200px" height="300px">`;
      document.getElementById("image4").innerHTML=`<h1>${data.cards[3].suit}</h1><br><img src="${data.cards[3].image}" width="200px" height="300px">`;
      document.getElementById("image5").innerHTML=`<h1>${data.cards[4].suit}</h1><br><img src="${data.cards[4].image}" width="200px" height="300px">`;
  
      var cards= data.cards;
  
      var suits=[];
      var value=[];
      
      
      for(let i=0; i<cards.length;i++)
      {
        suits.push(cards[i].suit);
        if(cards[i].value == "JACK")
        {
          value.push(11);
        }
        else if(cards[i].value == "QUEEN")
        {
          value.push(12);
        }
        else if(cards[i].value == "KING")
        {
          value.push(13);
        }
        else if(cards[i].value == "ACE")
        {
          value.push(14);
        }
        else
        {
          value.push(parseInt(cards[i].value,10));
        }      
      }
      var isEqual = true;
      var sortedValue = value.sort((a,b)=>a-b);
  
      // checke all card are same or not
      for(var i=0;i<suits.length-1;i++)
      {
        if(suits[i]!=suits[i+1])
        {
          isEqual = false;
          break;
        }
      }
  
  //var valueforRoyalFlush =[10,"A","J","K","Q"];
  
  //let deepEquals = (a,b) => JSON.stringify(a) === JSON.stringify(b);
  
  // Straight Flush
   function isConsecutive(arr)
   {
      var isCons=true;
      for(var i= 0; i<arr.length -1;i++)
      {
          if( arr[i]+1 != arr[i+1])
          {
              isCons = false;
              break;
          }
      }
      console.log("-----------------------------------------------"+isCons);
      return isCons;
   }
  
  console.log(sortedValue);
  
  var countofaKind = 1;
  var count = 1;
  
  for(var i=0;i<sortedValue.length-1;i++)
  { 
      if(sortedValue[i]==sortedValue[i+1])
      {
        count++;
      }
      else
      {
        count = 1;
      }
  
      if(countofaKind<count)
      {
        countofaKind = count;
      }
  }
  // ************************
  
   console.log(sortedValue);
    var x = document.getElementById("pokerHand");
   console.log(isConsecutive(sortedValue));
  
  if(isEqual == true && isConsecutive(sortedValue) == true && sortedValue[4] == "14")
  {
      
        document.getElementById("pokerHand").innerHTML = "Royal Flash";
        //console.log("Royal Flash");
       
  }

  else if(isEqual == true && isConsecutive(sortedValue) == true)
  {
    document.getElementById("pokerHand").innerHTML = "Straight Flush"
    console.log("Straight Flush");
  }   
  else if(countofaKind == 4)
  {
    document.getElementById("pokerHand").innerHTML = "Four of a kind"  
    console.log("Four of a kind");
  }
  // Full house
  else if(sortedValue[0] == sortedValue[1] && sortedValue[1] == sortedValue[2] && sortedValue[3] == sortedValue[4])
  {          
        document.getElementById("pokerHand").innerHTML = "Full House"  
        console.log("Full House");
    
  }
  else if(sortedValue[0] == sortedValue[1] && sortedValue[2] == sortedValue[4] && sortedValue[3] == sortedValue[4])
  {
      
        document.getElementById("pokerHand").innerHTML = "Full House"  
        console.log("Full House");

  }
  else if(isEqual == true && isConsecutive(sortedValue) == false)
  {
    document.getElementById("pokerHand").innerHTML = "Flush"  
    console.log("Flush");
  }
  else if(isEqual == false && isConsecutive(sortedValue) == true)
  {
    document.getElementById("pokerHand").innerHTML = "Straight"  
    console.log("Straight")
  }
  else if(countofaKind==3)
  {
    document.getElementById("pokerHand").innerHTML = "Three of a kind"  
    console.log("Three of a kind");
  }
  else if( (sortedValue[0] == sortedValue[1] && sortedValue[3] == sortedValue[4]) || (sortedValue[0] == sortedValue[1] && sortedValue[2] == sortedValue[3]) || (sortedValue[1] == sortedValue[2] && sortedValue[3] == sortedValue[4]))
  {
    document.getElementById("pokerHand").innerHTML = "Two pair";  
    console.log("Two pair")
  }
  else if(countofaKind==2)
  {
    document.getElementById("pokerHand").innerHTML = "Pair";  
    console.log("Pair");
  }
  else
  {
    document.getElementById("pokerHand").innerHTML = "High card"  
    console.log("High card")
  }
  })
      .catch(error => console.error(error))
  
  })

  
})();





