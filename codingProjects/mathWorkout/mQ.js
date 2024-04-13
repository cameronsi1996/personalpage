function randRange(l, h) {
    let result = Math.floor(Math.random() * (h - l + 1))+l;
    return result;
};

function multiply() {
    num1 = randRange(11, 100);
    num2 = randRange(11, 100);
    ans = num1 * num2;
    result = {type: 'multiply', num1: num1, num2: num2, ans: ans, equation: String(num1) + ' &#215; ' + String(num2) + ' &#61; '};
    return (result);
};

function sum() {
    num1 = randRange(1001, 99999);
    num2 = randRange(1001, 99999);
    ans = num1 + num2;
    result = {type: 'sum', num1: num1, num2: num2, ans: ans, equation: String(num1) + ' &#43; ' + String(num2) + ' &#61; '};
    return (result);
};

function deduct() {
    num1 = randRange(1001, 99999);
    num2 = randRange(101, 99999);
    nums = [];
    nums.push(num1);
    nums.push(num2);
    nums.sort((a, b) => a - b);
    ans = nums[1] - nums[0];
    result = {type: 'deduct', num1: nums[1], num2: nums[0], ans: ans, equation: String(num1) + ' &#8722; ' + String(num2) + ' &#61; '};
    return (result);
};

function divide() {
    num1 = randRange(1001, 9999);
    num2 = randRange(11, 999);
    let nums = [];
    nums.push(num1);
    nums.push(num2);
    nums.sort((a, b) => a - b);
    ans = (nums[1] - nums[1] % nums[0]) / nums[0];
    result = {type: 'divide', num1: (nums[1] - nums[1] % nums[0]), num2: nums[0], ans: ans, equation: String((nums[1] - nums[1] % nums[0])) + ' &#247; ' + String(num2) + ' &#61; '};
    return (result);
};

function runQuiz() {
    rand = Math.floor((Math.random() * 4))
    if (rand == 0) {
        return sum();
    } else if (rand == 1) {
        return multiply();
    } else if (rand == 2) {
        return deduct();
    } else {
        return divide();
    }
    return null;
};

function shakeBox() {
    document.getElementById("answer").animate([
        { transform: 'translate(1px, 1px) rotate(0deg)'},
        { transform: 'translate(-1px, -2px) rotate(-1deg)'},
        { transform: 'translate(-3px, 0px) rotate(1deg)'},
        { transform: 'translate(3px, 2px) rotate(0deg)'},
        { transform: 'translate(1px, -1px) rotate(1deg)'},
        { transform: 'translate(-1px, 2px) rotate(-1deg)'},
        { transform: 'translate(-3px, 1px) rotate(0deg)'},
        { transform: 'translate(3px, 1px) rotate(-1deg)'},
        { transform: 'translate(-1px, -1px) rotate(1deg)'},
        { transform: 'translate(1px, 2px) rotate(0deg)'},
        { transform: 'translate(1px, -2px) rotate(-1deg)'}
        ], 
        {duration: 50, iterations: 1})
};

function calculate() {
    if (document.getElementById("answer").value == String(run.ans)) {
        document.getElementById("answer").value = null;
        run = runQuiz();
        console.log(run);
        document.getElementById("question").innerHTML = run.equation;
    } else {
        shakeBox();
        document.getElementById("answer").value = null;
    };
    return null;
};


window.onload = function() {
    run = runQuiz();
    document.getElementById("question").innerHTML = run.equation;
    console.log(run);
};

