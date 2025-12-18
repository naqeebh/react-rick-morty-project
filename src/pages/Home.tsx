

const profile: {
    name: string, 
    country: string, 
    goals: number,
    isLearningTS: boolean,
} = {
    name: "Naq",
    country: "UK",
    goals: 808,
    isLearningTS: true,
}


function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string, greeting?: string) {
    return greeting ? `${greeting}, ${name}` : `Hello, ${name}`:
}

function calculateIncome(base: number, bonus: number, taxRate: number): number {
    return (base + bonus) * (1 - taxRate);
}

let score: number | string; 
score = 10;
score = "ten";

function formatCurrency(amount: number | string) {
    if (typeof amoun"t === "string") {
    return "£" + amount;
} else {
    return "£" + amount.toFixed(2);
    }
}


interface VideoConfig {
    title: string, 
    duration: "720p" | "1080p" | "4K", 
    quality: string, 
    isPublic: boolean, 
}

const myVideo: VideoConfig = {
    title: "Hello",
    duration: 25,
    quality: "1080p",
    isPuiblic: true,
};
    
