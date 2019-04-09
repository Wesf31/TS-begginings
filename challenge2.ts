function questionsMarks(str: string) : string {
    // let arr = str.split('')
    // let checkArr = arr.map(x => x * 1).filter(x => x)
    //     console.log (checkArr)
    // if (!checkArr[1]){
    //     return 'false' 
    // }else{
    //     let counter1 = 0
    //     let digit
    //     let i
    //     for ( i = 0; i < arr.length; counter1 === 2) {
    //         if (arr[i] === '?'){
    //             counter1++
    //         }
    //         // another if 
    //     }

    // }
    const matches = str.match(/\d[\w\?]*?\d/g)
    console.log(matches)
}
let testData: string = 'aa6??a?s3'
let testData1: string = 'acc?7??sss?3rr1?????????5'
console.log(questionsMarks(testData))


// notes from mentorship
// regex / regular expressions, can use to make more simple, Search for Regex cheat sheet
// const matches = str.match(/\d[\w\?]*?\d/g), run original str through this and then console log it, work from there
// Number("345")
// Google how to change a string into a number JS, there is a short hand though -> const num = +"345";






// Have the function QuestionsMarks(str) take the str string parameter, which will contain single 
// digit numbers, letters, and question marks, and check if there are exactly 3 question marks
// between every pair of two numbers that add up to 10. If so, then your program should return the 
// string true, otherwise it should return the string false. If there aren't any two numbers that add up 
// to 10 in the string, then your program should return string false as well.

// 1) check and make sure there are two digits
// 2) find the first digit, save on variable
// 3) from that digit check and see if there are exactly 3 question marks, for loop and increment counter
// 4) if there is and the first digit and last when summed should equal 10 then return 'true', else 'false' 