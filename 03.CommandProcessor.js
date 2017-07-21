function solve(commands){

    let processor = (function(){
        let text = '';

        return function processor(commandString){
            let commandTokens = commandString.split(' ');

            switch (commandTokens[0]){
                case 'append':
                    text+=commandTokens[1];
                    break;
                case 'removeStart':
                    text = text.slice(Number(commandTokens[1]));
                    break;
                case 'removeEnd':
                    text = text.slice(0,text.length-Number(commandTokens[1]));
                    break;
                case 'print':
                    console.log(text);
                    break;
            }
        }
    })();

    for(let commandString of commands){
        processor(commandString);
    }
}

console.log(solve(['append 123',
        'append 45',
        'removeStart 2',
        'removeEnd 1',
        'print']
));