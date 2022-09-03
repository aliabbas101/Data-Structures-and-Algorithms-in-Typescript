import { Stack } from "./stack-with-array";

export class StringBuilder {
    
    public stringReverse(text: string): string {
        let stringArray: string[] = text.split('');
        let reversedString : string = '';
        
        /** Reusing array based implementation of stack of type string */
        let stack: Stack<string> = new Stack();

        stringArray.forEach(char=>{
            stack.push(char);
        });

        for(let i=0; i<stringArray.length; i++){
            let charPopped: string = stack.pop();
            stringArray[i] = charPopped;
            reversedString += charPopped;
        }

        return reversedString;
    }

}


let strBuilder: StringBuilder = new StringBuilder();
console.log(strBuilder.stringReverse("Hello world"));
