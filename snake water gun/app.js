let user = prompt("Enter S, W, and G");
let cpu1 = Math.floor(Math.random() * 2);
let cpu = ["s", "w", "g"][cpu1]

const match = (cpu, user) => {
    if (cpu === user) {
        return "Nobody."
    } else if( cpu === "s" && user === "w") {
        return "cpu"
    } else if( cpu === "s" && user === "g") {
        return "user"
    } else if( cpu === "g" && user === "w") {
        return "user"
    } else if( cpu === "g" && user === "s") {
        return "cpu"
    } else if( cpu === "w" && user === "s") {
        return "user"
    } else if( cpu === "w" && user === "g") {
        return "cpu"
    }
}
let result = match (cpu, user)
console.log(`cpu: ${cpu} and user:${user} \n The Winner is :  ${result.toUpperCase()}`)