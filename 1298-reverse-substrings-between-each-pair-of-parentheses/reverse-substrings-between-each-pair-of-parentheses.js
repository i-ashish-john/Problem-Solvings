var reverseParentheses = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ")") {
            let arr = [];
         for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j] === "(") {
                      stack.pop();
                stack.push(...arr);
                    break;
                } else {
                    arr.push(stack[j]);
                    stack.pop();
                }
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join("");
}