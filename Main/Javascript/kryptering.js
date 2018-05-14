var modulus = 1048573,
    kryptering = 999999,
    dekryptering = 387640;

//Krypterer og løser tallet
function krypt(inp) {
    var x = (inp * kryptering) % modulus;
    return x;
}

function solve(inp) {
    var x = (inp * dekryptering) % modulus;
    return x;
}
    
//deler tallet
function getVerificationNumbers(inp) {
    var x = inp % 100000;
    return x;
}

function getDate(inp) {
    var x = (inp - getVerificationNumbers(inp)) / 100000;
    return x;
}


function runKrypt(inp) {
    return [krypt(getVerificationNumbers(inp)), krypt(getDate(inp))].join('-');
}

function runSolve(inp) {
    return Number([solve(inp.split("-")[1]), solve(inp.split("-")[0])].join(''));
}
