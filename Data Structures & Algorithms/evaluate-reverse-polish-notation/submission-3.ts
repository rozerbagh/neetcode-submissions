class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let ops = {
            '+': '+',
            '/': '/',
            '-': '-',
            '*': '*',
        }
        const st = [];
        for (let i = 0; i < tokens.length; i++) {
            if(ops[tokens[i]]){
                let n1 = st.pop();
                let n2 = st.pop();
                let res = this.operation(ops[tokens[i]], Number(n2), Number(n1))
                st.push(parseInt(`${res}`))
            } else {
                st.push(Number(tokens[i]))
            }
        }
        return parseInt(st.pop());
    }
    operation(op: string, num1: number, num2: number): number {
        if (op === '+') {
            return num1 + num2;
        } else if (op === '-') {
            return num1 - num2;
        } else if (op === '*'){
            return num1 * num2
        } else {
            return num1 / num2;
        }
    }
}
