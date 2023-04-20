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

let custom = document.getElementById("custom");
custom.addEventListener('click', checkForm);



/*function checkForm() {
    all_input = document.querySelectorAll('input[type="text"]');
    console.log(all_input);
    for (var i = 0; i < all_input.length; ++i) {
      if (all_input[i].value.trim().match(/\w/) == null) {
        alert('Please enter a word in every box or click "Generate Message for Me"');
        return
      } else {

        let adjone = document.getElementById("adj1");
        let madlibs = document.getElementById("madlib");
        let adjtwo = document.getElementById("adj2");
        let adjthree = document.getElementById("adj3");
        let nounone = document.getElementById("noun1");
        let nountwo = document.getElementById("noun2");
        let animals = document.getElementById("animal");
        let custom = document.getElementById("custom");
        
       
        function checkForms() {
        madlibs.innerHTML = `The Strange Pet <br/> <br/> Yesterday, I went to the pet store to buy a <font color = "red">${adjone.value} ${animals.value} </font> as a gift for my friend's birthday. But as I was looking around, I saw a <font color = "red">${adjtwo.value} ${nounone.value} </font>in one of the cages. I couldn't resist, so I bought the <font color = "red">${nounone.value} </font>instead. My friend was so surprised when I gave it to them, but they loved it! Now, the <font color = "red">${nounone.value} </font>lives in their <font color = "red">${nountwo.value} </font>and is the <font color = "red">${adjthree.value} </font>pet ever.`;
      
        }
    
      }
    }
  }
  custom.addEventListener('click', checkForm);

  /*function checkForm() {
    let adj1 = document.getElementById("adj1").value;
    let adj2 = document.getElementById("adj2").value;
    let adj3 = document.getElementById("adj3").value;
    let noun1 = document.getElementById("noun1").value;
    let noun2 = document.getElementById("noun2").value;
    let animal = document.getElementById("animal").value;
    let custom = document.getElementById("custom");
    let madlibs = document.getElementById("madlib");
   
    const completeMadlib = `The Strange Pet

    Yesterday, I went to the pet store to buy a ${adj1} ${animal} as a gift for my friend's birthday. But as I was looking around, I saw a ${adj2} ${noun1} in one of the cages.
    
    I couldn't resist, so I bought the ${noun1} instead. My friend was so surprised when I gave it to them, but they loved it! Now, the ${noun1} lives in their ${noun2} and is the ${adj5} pet ever.`
   
    console.log("checkForm function called");
    madlibs.innerHTML = completeMadlib;
  
  }
custom.addEventListener('click', checkForm);
*/
 /*function checkForm() {
      let adj1Value = adj1.value;
      let adj2Value = adj2.value;
      let adj3Value = adj3.value;
      let noun1Value = noun1.value;
      let noun2Value = noun2.value;
      let animalValue = animal.value;
    
      const completeMadlib = `The Strange Pet
    
      Yesterday, I went to the pet store to buy a ${adj1Value} ${animalValue} as a gift for my friend's birthday. But as I was looking around, I saw a ${adj2Value} ${noun1Value} in one of the cages.
      
      I couldn't resist, so I bought the ${noun1Value} instead. My friend was so surprised when I gave it to them, but they loved it! Now, the ${noun1Value} lives in their ${noun2Value} and is the ${adj3Value} pet ever.`
    
      madlib.innerHTML = completeMadlib;
    }
  */





