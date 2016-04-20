$( document ).ready(function(){
var countries ={
    Guinea:{
        Capital: "conakry", 
        Animal: "lion", 
        Language: "french",
        Population: "11.75 million"
        
    },    
jamaica:{
        Capital: "kingstone", 
        Animal: "Red-billed streamertail", 
        Language: "english",
        Population: "2.715 million"
        
},
Austalia:{
            Capital:"caperra", 
             Animal:"red kangaroo",
            Language: "english", 
            Population:"23.13 million"
            
},  
};    
    
  $("#enter").click(function(){
    $("#okay").val() 
    
var answer= $("#okay").val()

alert (countries[answer].Capital);
alert (countries[answer].Population);

$("#Population").text(countries[answer].Population);
    
   
   
      
      
  });     
  }); 



    