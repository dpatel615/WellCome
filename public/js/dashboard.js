var quotes =[
  'Everything that is created begins in the mind',
  'if physical world can affect mind but mind cannot affect physical world, then its the only one-way interaction known in science !!!',
  'Be happy life is full of happiness',
 'I am in charge of how I feel and I choose to feel happy.',
  'Happiness is not the absence of problems, it’s the ability to deal with them.',
  'Be positive. Be true. Be kind.',
  'If you are positive, you’ll see opportunities instead of obstacles.',
  'If you are positive, you’ll see opportunities instead of obstacles.',
  'The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.'
]

 function newQuote() {
   var randonQuotes = Math.floor(Math.random() * (quotes.length));
   document.getElementById('quoteEmotion').innerHTML = quotes[randonQuotes];
  

   var x = document.getElementById("emotion");
   x.style.display= "none";
  
   document.getElementById('quoteEmotion').addEventListener('click', displayImage);
    function displayImage() {
      document.getElementById('quoteEmotion').innerHTML = "";
    x.style.display = "initial";
    }
    
  }
  
//var videoLinks = document.querySelectorAll(".videos-link");


 
