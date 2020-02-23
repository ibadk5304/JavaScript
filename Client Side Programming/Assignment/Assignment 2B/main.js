


// fetch("https://random.dog/woof.json")
// .then(response => response.json())
// .then(data => 
//   {   
//    document.getElementById("image").innerHTML=`<img src="${alt=data.url}" width="1000px" height="800px">`;
//     console.log(data);
//   })
// .catch(error => console.error(error))

$.get("https://www.amiiboapi.com/api/amiibo", function(data,status){
    // for(var i=0;i<10;i++)
    // {
    //     //var url = data.amiibo[i].image;
    //     document.getElementById("image").innerHTML=`<img src="${data.amiibo[i].image}" width="200px" height="200px">`;

    console.log(data);
    document.getElementById("image").innerHTML=`<img src="${data.amiibo[1].image}" width="200px" height="200px">`;
    document.getElementById("image").innerHTML=`<img src="${data.amiibo[1].image}" width="200px" height="200px">`;
    // }
    
    
});
