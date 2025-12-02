// Q1 – Async Coffee Maker (Promise Chaining)
const delay = () => Math.floor(Math.random() * 1000) + 1000;

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Boiling water...");
            Math.random() > 0.2 ? resolve() : reject("Failed to boil water");
        }, delay());
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Brewing coffee...");
            Math.random() > 0.2 ? resolve() : reject("Failed to brew coffee");
        }, delay());
    });
}

function pourCup() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pouring coffee...");
            Math.random() > 0.2 ? resolve() : reject("Failed to pour coffee");
        }, delay());
    });
}

boilWater()
.then(brewCoffee)
.then(pourCup)
.then(() => console.log("Coffee ready for the team!"))
.catch(err => console.log("Error:", err));