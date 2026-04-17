// Higher Order Function and Callback
function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add (3,7, function(val){
    console.log(val);
}) 