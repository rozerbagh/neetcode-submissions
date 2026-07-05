class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const result = new Array(n).fill(0);
        const stack = []; // stores indices

        for (let i = 0; i < n; i++) {
            while (
                stack.length &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                const prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            }

            stack.push(i);
        }

        return result;
    }
}
