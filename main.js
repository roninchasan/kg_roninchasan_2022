// take in arguments from command line
let args = process.argv;

//trim files from array, rename
let nums = args.slice(2);

var wordString = "";
var i = 0;
nums.forEach(num => {
    currentString = "";

    for (j=0;j<num.length; j++){

        switch (num[j]){
            case '0':
                currentString += 'Zero';
                break;
            case '1':
                currentString += 'One';
                break;
            case '2':
                currentString += 'Two';
                break;
            case '3':
                currentString += 'Three';
                break;
            case '4':
                currentString += 'Four';
                break;
            case '5':
                currentString += 'Five';
                break;
            case '6':
                currentString += 'Six';
                break;
            case '7':
                currentString += 'Seven';
                break;
            case '8':
                currentString += 'Eight';
                break;
            case '9':
                currentString += 'Nine';
                break;
            default:
                break;
        }
    }
    //add comma for formatting
    if ((i !== (nums.length))&&(i!==0)){
        wordString += ",";
    }
    wordString+=currentString;
    i++;
})

console.log(wordString); 
