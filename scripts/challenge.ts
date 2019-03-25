function translateToMorse(str: string): string {
return 'string'
}

function translateToEnglish(str: string): string {
    var messageConverted = []
    str.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(alphabet[letter]);
        });
        messageConverted.push(" ")
    });
    return messageConverted.join('') 
}

var str: string = '.. - .----. ... / .-- . -.. -. . ... -.. .- -.-- / -- -.-- / -.. ..- -.. . -.-.--'
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
console.log(translateToEnglish(str))