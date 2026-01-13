let debug = false;
let count = 0;
for (let i = 0; i < process.argv.length; i++) {
    debug = process.argv[i] == "--debug";
}

process.stdout.write("\x1B[?25l");


setInterval(update, 1000);

function update() {
    if (debug) {
        process.stdout.write("\u001b[2K\u001b[0G" + count);
    }
    count++;


}

process.on("exit", (code) => {
    process.stdout.write("\x1B[?25h");
})