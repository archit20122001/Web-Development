// let name = "Hindi";
function outerFunction() {
    // {
    //     let name = "German";
    // }
    let name = "English";
    function innerFunction() {
        // let name = "Mandarin"
        console.log(name);
    }
    // innerFunction();
    return innerFunction;
}
let inner = outerFunction();
inner();