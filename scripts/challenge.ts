function translateToMorse(morseCode: string): string {
    var morseConverted = []
    morseCode.split("").map(function (code) {
        code.split('').map(function (dot) {
            morseConverted.push(morse[dot]);
        });
        morseConverted.push(" ")
    });
    return morseConverted.join('') 
}
var mCode: string = `i miss japanese ramen`

function testFunc(param: string) {
    var finMessage = []
    return param.split("")
}

// console.log(testFunc(mCode))

// console.log(mCode.split(''))



function translateToEnglish(str: string): string {
    var messageConverted = []
    str.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(alphabet[letter]);
        });
        messageConverted.push(" ");
    });
   return messageConverted.join('')
}

var str: string = '.. / -- .. ... ... / .--- .- .--. .- -. . ... . / .-. .- -- . -. -.-.--'
var alphabet: object = {  
   "-----":"0",
   ".----":"1",
   "..---":"2",
   "...--":"3",
   "....-":"4",
   ".....":"5",
   "-....":"6",
   "--...":"7",
   "---..":"8",
   "----.":"9",
   ".-":"a",
   "-...":"b",
   "-.-.":"c",
   "-..":"d",
   ".":"e",
   "..-.":"f",
   "--.":"g",
   "....":"h",
   "..":"i",
   ".---":"j",
   "-.-":"k",
   ".-..":"l",
   "--":"m",
   "-.":"n",
   "---":"o",
   ".--.":"p",
   "--.-":"q",
   ".-.":"r",
   "...":"s",
   "-":"t",
   "..-":"u",
   "...-":"v",
   ".--":"w",
   "-..-":"x",
   "-.--":"y",
   "--..":"z",
   "/":" ",
   "-·-·--":"!",
   "·-·-·-":".",
   "--··--":","
};
var morse: object = {  
    "0":"-----",
    "1" :".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    " ":"/",
    "!":"-·-·--",
    ".":"·-·-·-",
    ",":"--··--"
 };
// console.log(translateToEnglish(str))
// console.log(translateToMorse(mCode))