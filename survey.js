const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ans = ``;

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
    console.log(`Name/Nickname: ${answer}`);
    ans = ans +`Name/Nickname: ${answer} \n`;
    rl.question(`What's an activity you like doing? `, (answer) => {
        console.log(`Fav activity: ${answer}`);
        ans = ans + `Fav activity: ${answer} \n`;
        rl.question(`What do you listen to while doing that? `, (answer) => {
            console.log(`Music for fav activity: ${answer}`);
            ans = ans + `Music for fav activity: ${answer} \n`;
            rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
                console.log(`Fav meal: ${answer}`);
                ans = ans + `Fav meal: ${answer} \n`;
                rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
                    console.log(`Fav thing to eat for that meal: ${answer}`);
                    ans = ans + `Fav thing to eat for that meal: ${answer} \n`;
                    rl.question(`Which sport is your absolute favourite? `, (answer) => {
                        console.log(`Absolute fav sport: ${answer}`);
                        ans = ans + `Absolute fav sport: ${answer} \n`;
                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
                            console.log(`Your superpower: ${answer}`);
                            console.log(`Summary:`)
                            ans = ans + `Your superpower: ${answer} \n`;
                            console.log(ans);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});






