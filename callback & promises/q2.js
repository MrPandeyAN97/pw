function manipulateString(inputString,callback){
    const manipulateString=inputString.toUpperCase();

    callback(manipulateString);
}

function logString(manipulatedString){
    console.log(`the manipulated string is: ${manipulatedString}`);
}

manipulateString("hello,world!",logString);