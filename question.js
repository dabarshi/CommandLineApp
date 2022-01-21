const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preffered programming language?"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

const answer = []
process.stdin.on("data", data => {
    answer.push(`${data.toString().trim()}`);
    if (answer.length < questions.length) {
        ask(answer.length);
    } else {
        process.stdout.write(`Hi, ${answer[0]} stop doing ${answer[2]} and go ${answer[1]}`);
        process.exit();
    }
    
});

