function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Server A done") : reject("Server A failed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Server B done") : reject("Server B failed");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(err => console.log("Error:", err));

Promise.race([serverA(), serverB()])
    .then(res => console.log("Fastest response:", res))
    .catch(err => console.log("Race error:", err));