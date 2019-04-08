function questionsMarks(str: string) : string {
    console.log(str)
    return 'true'
}

let testData: string = 'aa6?9'
let testData1: string = 'acc?7??sss?3rr1?????????5'

questionsMarks(testData)
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single 
// digit numbers, letters, and question marks, and check if there are exactly 3 question marks
// between every pair of two numbers that add up to 10. If so, then your program should return the 
// string true, otherwise it should return the string false. If there aren't any two numbers that add up 
// to 10 in the string, then your program should return string false as well.