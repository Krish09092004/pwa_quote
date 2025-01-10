const quotes =[
    "The beauty of life is in its unpredictability, not its certainty.",
"What you seek is seeking you, even when you don't know where to look.",
"Sometimes the quietest voices speak the loudest truths.",
"In every moment, there's a chance to begin again.",
"You can't change the past, but you can always shape the future.",
"Strength isn't measured by how much you carry, but by how much you let go.",
"Life is not about finding yourself, it's about creating yourself.",
"The universe whispers in the winds of change, listen carefully.",
"The hardest paths often lead to the most beautiful destinations.",
"Don't be afraid of the unknown; it's the space where possibilities are born.",
"What matters isn't how fast you go, but whether you're moving in the right direction.",
"If you want to go far, go together. If you want to go fast, go alone.",
"Hope is the bridge between today and tomorrow.",
"We are the architects of our own stories, even in the chapters we didn't write.",
"When you embrace the unexpected, life becomes an adventure.",
"True courage is not the absence of fear, but the will to act despite it.",
"You are not your failures; you are the lessons you've learned from them.",
"A kind word can change someone's entire day.",
"Growth happens when you step outside your comfort zone, even when it's uncomfortable.",
"The only way to truly see the world is through the lens of wonder."
]

const quoteelement = document.getElementById('quote');
const genbtn = document.getElementById('gen-btn');
const copybtn = document.getElementById('copy-btn');
const resetbtn = document.getElementById('reset');

//for display
function toggleresetbutton(visibility) {
    resetbtn.style.display = visibility ? '' : 'none';
  }
  toggleresetbutton(false);
  
  function togglecopybutton(visibility) {
    copybtn.style.display = visibility ? '' : 'none';
  }
  togglecopybutton(false);

  //for quote
genbtn.addEventListener('click',()=>{
    const random = Math.floor(Math.random()*quotes.length);
    quoteelement.textContent = quotes[random];
    toggleresetbutton(true);
    togglecopybutton(true);

});

//for copy
copybtn.addEventListener('click',()=>{
    const quote = quoteelement.textContent;
    navigator.clipboard.writeText(quote).then(()=>{
        alert('Quote copied to clipboard');
    });
});

//for reset 
resetbtn.addEventListener('click',()=>{
    const quote = 'Click Generate button to see the quote !';
    quoteelement.textContent = quote;
    toggleresetbutton(false);
    togglecopybutton(false);
})



if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered: ', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }