import promptSync from "prompt-sync";

const prompt = promptSync();



function menu() {
    let exit = false;

    while(!exit) {
        //display menu and prompt
        let choice = parseInt(prompt(`=== Main Menu ===
        1. Greet Me
        2. Tell a Joke
        3. Show Current Time
        4. Reverse a Word
        5. Check if a Number is Even or Odd
        6. Calculate the Square of a Number
        7. Repeat a Phrase
        8. Convert Celsius to Fahrenheit
        9. Count Down from a Number
        10. Exit

        Choose an option (1-10):`));

        //excecute corresponding action
        switch (choice) {
            case 1:
                const fname = prompt(`What's your name?`)
                console.log(`Hello ${fname}!It's a pleasure to have you!`);
                break;

            case 2:
                console.log(`How many programmers does it take to change a light bulb? \n None.That's a hardware problem.`);
                break;
            
            case 3:
                const now = new Date();
                console.log(`It is currently ${now.toLocaleTimeString()}`);
                break;

            case 4:
                const word = prompt(`Enter a word: `);
                const reversed = word.split(``).reverse().join(``);
                console.log(reversed);

            case 5:
                const number = parseInt(prompt(`Enter a number: `));
                if (number % 2 === 0) {
                    console.log(`${number} is an even number`);

                }else if (number % 2 !== 0) {
                    console.log(`${number} is an odd number`);

                }else {
                    console.log(`Invalid input`);

                }
                break;

            case 6:
                const number2 = parseInt(prompt(`Enter a number: `));
                if (isNaN(number2)) {
                    console.log(`Invalid input`);

                }else {
                    square = number2 * number2;
                    console.log(`The square of ${number2} is ${square}`);

                }
                break;

            case 7:
                const phrase = prompt(`Enter a phrase: `);
                const repeat = parseInt(prompt(`How many times would you like it to be reprated?`));

                let result = ``;
                for (let i = 0; i < repeat; i++) {
                    result = result + phrase;
                }

                console.log(result);
                break;

            case 8:
                const celsius = parseInt(prompt(`Enter temperature in celsius: `));
                if (isNaN(celsius)) {
                    console.log(`Invalid Input`);

                }else {
                    const fahrenheit = (celsius * 9) / 5 + 32;
                    console.log(`${celsius} degrees celcius is ${fahrenheit.toFixed(2)}Kelvin.`);
                }
                break;

            case 9:
                const number3 = parseInt(prompt(`Count down from what number?`));
                if (isNaN(celsius)) {
                    console.log(`Invalid Input`);

                }else {
                    let countdown = ``;
                    while (number3 >= 0) {
                        countdown = countdown + number3;
                        number3--;
                    }

                    console.log(countdown);
                }
                break;

            case 10:
                console.log(`Bye!`);
                let exit = true;
                break;
            
            default:
                console.log(`Invalid Input.PLease enter a number between 1-10.`);
        }
    }
}

menu();