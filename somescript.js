//import exports from "./module.mjs"

async function logHello() {
    console.log('Hello');
    await new Promise(r => setTimeout(r, 2000));
    console.log('Waited for 2000 ms, calling Kotlin...')
    const exports = import("./composeApp.mjs");
    exports.logHelloInKotlin();
}