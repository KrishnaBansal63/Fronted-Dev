function design(cb) {
    setTimeout(() => { console.log("Design"); cb(); }, 1000);
}
function build(cb) {
    setTimeout(() => { console.log("Build"); cb(); }, 1000);
}
function test(cb) {
    setTimeout(() => { console.log("Test"); cb(); }, 1000);
}
function deploy(cb) {
    setTimeout(() => { console.log("Deploy"); cb(); }, 1000);
}
function celebrate(cb) {
    setTimeout(() => { console.log("Celebrate"); cb(); }, 1000);
}

console.log("Callback Hell Start");
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => console.log("Done!"));
            });
        });
    });
});

function wait(msg) {
    return new Promise(resolve =>
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, 1000)
    );
}

async function processPipeline() {
    console.log("\nAsync/Await Start");
    await wait("Design");
    await wait("Build");
    await wait("Test");
    await wait("Deploy");
    await wait("Celebrate");
}

processPipeline();