class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        let braces = {
            "}": "{",
            ")": "(",
            "]": "["
        }

        for (let i of s) {
            if (i === "{" || i === "(" || i === "[") {
                stack.push(i);
            } else {
                if (stack[stack.length - 1] === braces[i]) {
                    stack.pop();
                } else {
                    stack.push(i);
                }
            }
        }

        return stack.length === 0;
    }
}
