class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const deque = [];
        const result: number[] = [];
        for (let i = 0; i < k; i++) {
            while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
                console.log("nums[deque[deque.length - 1]] value:::", nums[deque[deque.length - 1]])
                deque.pop()
            }
            deque.push(i)
        }
        for (let i = k; i < nums.length; i++) {
            result.push(nums[deque[0]])

            while (deque.length && deque[0] <= Math.abs(i - k)) {
                deque.shift();
            }

            while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop();
            }
            deque.push(i)
        }
        result.push(nums[deque[0]])
        return result
    }
}
