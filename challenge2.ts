function questionsMarks(str: string) : string {
    let arr = str.split('')
    console.log(arr)
    let checkArr = arr.map(x => x * 1).filter(x => x)
        console.log (checkArr)
    if (!checkArr[2]){
        return 'false'
    }else{
        let indexOne = []
        let indexTwo = []
        let counter = 0
        let i
        for ( i = 0; i < arr.length; counter === 3) {
            if (arr[i] == '?'){
                counter++
            }
        }

    }
}
let testData: string = 'aa6??a?4'
let testData1: string = 'acc?7??sss?3rr1?????????5'

console.log(questionsMarks(testData))
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single 
// digit numbers, letters, and question marks, and check if there are exactly 3 question marks
// between every pair of two numbers that add up to 10. If so, then your program should return the 
// string true, otherwise it should return the string false. If there aren't any two numbers that add up 
// to 10 in the string, then your program should return string false as well.