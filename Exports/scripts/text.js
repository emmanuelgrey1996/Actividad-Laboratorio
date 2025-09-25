const capitalize = (str) => {
    const words = str.split (" ");
    
    words.forEach((word, index) => {
        const subword = word.slice(1);
        words[index] = word[0].toUpperCase() + subword;
    } )

    return words.join(" ");
}
//trabaja con frases 
const capitalizeEvenLetters = (str) => {
const words = str.toLowerCase().split(" ");
const wordsCapitalized = [];
for(let i = 0; i < words.lenght; i++ ){
    for(let j = 0; j < words[i].lenght; j++){
        if(j % 2 === 0){
            word += words[i][j].toUpperCase();
        }else{
           word += words[i][j];
    }
}
 wordsCapitalized.push(words)
}
return wordsCapitalized.join(" ");
}
export {capitalize, capitalizeEvenLetters};