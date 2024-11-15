
    let min = null;
    let max = null;
  
    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0) {
        if (min === null || i < min) {
          min = i;
        }
        if (max === null || i > max) {
          max = i;
        }
      }
    }
  
    if (min === null || max === null) {
      console.log('1 ден ' + n + ' аралығында 5-ке бөлінетін сандар жоқ.');
    } else {
      console.log('Ең кіші сан: ' + min);
      console.log('Ең үлкен сан: ' + max);
    }
  

  let userInput = parseInt(prompt("Кез келген оң сан жазыңыз:"));
