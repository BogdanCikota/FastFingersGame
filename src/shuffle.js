
const shuffle = (arr, randomArr, letters) => {
    while (randomArr.length < arr.length) {
        const mathRandom = Math.floor(Math.random() * arr.length);
      
        if (!randomArr.some((element) => element === mathRandom)) {
          randomArr.push(mathRandom);
        }
      }

      setTimeout(function () {

        for (let i = 0; i < letters.length; i++) {
      
          letters[i].style = `order: ${randomArr[i]}`;
          
      
          if (letters[i].style.order === '1') {
            letters[i].style.animationDelay = `0.5s`;
          } else if (letters[i].style.order === '2') {
            letters[i].style.animationDelay = `1s`;
          } else if (letters[i].style.order === '3') {
            letters[i].style.animationDelay = `1.5s`;
          } else if (letters[i].style.order === '4') {
            letters[i].style.animationDelay = `2s`;
          }
      
          letters[i].setAttribute("disabled", "true");
          
        }
      }, 2000);
      
      
      setTimeout(function () {
      
        for (let i = 0; i < letters.length; i++) {
          letters[i].removeAttribute("disabled");
        }
      
      }, 5000);
      return {randomArr, letters};
};

export default shuffle;