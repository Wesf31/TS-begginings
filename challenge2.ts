function questionsMarks(str: string) : string {
    let matches = str.match(/\d[\w\?]*?\d/g);
    let results = 'false';
    if (!matches) return results;
    console.log(matches)
    for ( let match of matches)
    for ( let i = 0; i < matches.length; i++) {
        console.log(matches[i])
        if(matches[i].match(/\?/).length === 3){
            // filter instead of matches, filter to get only ? and then check for 3
            //regex on 8 isn't working right
            console.log(matches[i])
            let testString = matches.toString().split('') /* this line is straight garbage */
            if (Number(testString[0]) + Number(testString[testString.length - 1]) === 10){
                results = 'true';
            }
            else{
                results = 'false';
            }
        }else {
            results = 'false';
        }
    }
    return results
};
let testData: string = 'aa6?a???s4';
let testData1: string = 'acc?7??sss?3rr7???3';
console.log(questionsMarks(testData));


// notes from mentorship
// regex / regular expressions, can use to make more simple, Search for Regex cheat sheet
// A short hand though -> const num = +"345";

// Have the function QuestionsMarks(str) take the str string parameter, which will contain single 
// digit numbers, letters, and question marks, and check if there are exactly 3 question marks
// between every pair of two numbers that add up to 10. If so, then your program should return the 
// string true, otherwise it should return the string false. If there aren't any two numbers that add up 
// to 10 in the string, then your program should return string false as well.