function translate(word) {
  let lower = word.toLowerCase();
  const letters = lower.split("");
  console.log(letters);
  let way = "way";
  let ay = "ay";
  
  if (
    letters[0] === "a" ||
    letters[0] === "e" ||
    letters[0] === "i" ||
    letters[0] === "o" ||
    letters[0] === "u"
  ) {
    let pig = letters.join("");
    pig = pig + way;
    return pig;
    
  } else {
    //let first = letters[0];
    //console.log("this is it" + letters);
    //do {
    //  letters.push(letters.shift());
    //  console.log (letters);
    //  i++;
    //  first = letters[i];
    while (
      letters[0] != "a" &&
      letters[0] != "e" &&
      letters[0] != "i" &&
      letters[0] != "o" &&
      letters[0] != "u"
    ) {
       letters.push(letters.shift());
       console.log (letters);
    };
    let pig = letters.join("");
    pig = pig + ay;
    return pig;
  }
}
  
  
  
  
  
//  else {
  //  let i = 0;
  //  let first = letters[0];
  //  let word;
    //console.log("this is it" + letters);
    //
    //  i++;
    //  first = letters[i];
 //   while (
   //   letters[i] != "a" ||
   //   letters[i] != "e" ||
   //   letters[i] != "i" ||
   //   letters[i] != "o" ||
   //   letters[i] != "u"
   // ) {
   //     let removedLetter = letters.shift();
   //     letters.push(removedLetter);
    //    console.log(letters);        
   // };
    
   // let pig = letters.join("");
   // pig = pig + ay;
   // return pig;
 // }

//}
