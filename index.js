function checkForm() {
  let adjone = document.getElementById("adj1");
  let adjtwo = document.getElementById("adj2");
  let adjthree = document.getElementById("adj3");
  let nounone = document.getElementById("noun1");
  let nountwo = document.getElementById("noun2");
  let animals = document.getElementById("animal");
  let madlibs = document.getElementById("madlib");
  let custom = document.getElementById("custom");
  
  if (adjone.value && adjtwo.value && adjthree.value && nounone.value && nountwo.value && animals.value) {
    madlibs.innerHTML = `The Strange Pet <br/> <br/> Yesterday, I went to the pet store to buy a <font color = "red">${adjone.value} ${animals.value} </font> as a gift for my friend's birthday. But as I was looking around, I saw a <font color = "red">${adjtwo.value} ${nounone.value} </font>in one of the cages. I couldn't resist, so I bought the <font color = "red">${nounone.value} </font>instead. My friend was so surprised when I gave it to them, but they loved it! Now, the <font color = "red">${nounone.value} </font>lives in their <font color = "red">${nountwo.value} </font>and is the <font color = "red">${adjthree.value} </font>pet ever.`;
  } else {
    madlibs.innerHTML = 'Please fill out all the textboxes <br/>or click <br/>"Generate Message for Me".';
  }
}


custom.addEventListener('click', checkForm);


function randomForm() {
  let adjone = ["beautiful", "sleepy", "colorful"][Math.floor(Math.random()*3)];
  let adjtwo = ["tired","cheerful","long"][Math.floor(Math.random()*3)];
  let adjthree = ["best","smallest","loudest"][Math.floor(Math.random()*3)];
  let nounone = ["snake","rock","tree"][Math.floor(Math.random()*3)];
  let nountwo = ["truck","garage","basement"][Math.floor(Math.random()*3)];
  let animals = ["tiger","elephant","lion"][Math.floor(Math.random()*3)];
  let madlibs = document.getElementById("madlib");
  let random = document.getElementById("random");
  
 
    madlibs.innerHTML = `The Strange Pet <br/> <br/> Yesterday, I went to the pet store to buy a <font color = "red">${adjone} ${animals} </font> as a gift for my friend's birthday. But as I was looking around, I saw a <font color = "red">${adjtwo} ${nounone} </font>in one of the cages. I couldn't resist, so I bought the <font color = "red">${nounone} </font>instead. My friend was so surprised when I gave it to them, but they loved it! Now, the <font color = "red">${nounone} </font>lives in their <font color = "red">${nountwo} </font>and is the <font color = "red">${adjthree} </font>pet ever.`;
  
}


random.addEventListener('click', randomForm);
