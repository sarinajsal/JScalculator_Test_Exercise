const sum = function(a, b){
    return a + b;
};

const subtract = function (a, b){     //const sub = (a, b) => a-b;
    return a - b;
};

const multiply = function(a,b){
    return a*b;
};

const divide = function(a,b){
    return a/b;
};

const modulus = function(a,b){
    return a%b;
};

const even = function (a)
{
    if(a%2 == 0){
    return true;
    }
}

const odd = function (a){

    if(a%2 != 0){
        return true;
    }

}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
