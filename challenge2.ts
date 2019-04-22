function questionsMarks(str: string) : string {
    let matches = str.match(/\d[\w\?]*?\d/g);
    let results = 'false';
    if (!matches) return results;
    console.log(matches)
    for ( let match of matches) {
        if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
            if (match.split('').filter(char => char === '?').length === 3) {
                results = 'true';
            } else {
                results = 'false';
            }
        }
    }
    return results
};
let testData: string = 'aa6?a??s4';
let testData1: string = 'acc?7??sss?3rr6???3';
console.log(questionsMarks(testData1));


// notes from mentorship
// regex / regular expressions, can use to make more simple, Search for Regex cheat sheet
// A short hand though -> const num = +"345";

// Have the function QuestionsMarks(str) take the str string parameter, which will contain single 
// digit numbers, letters, and question marks, and check if there are exactly 3 question marks
// between every pair of two numbers that add up to 10. If so, then your program should return the 
// string true, otherwise it should return the string false. If there aren't any two numbers that add up 
// to 10 in the string, then your program should return string false as well.