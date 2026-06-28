class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const s = target - nums[i]
            if (map.has(s)) {
                return [map.get(s), i]
            }
            map.set(nums[i],i)
        }
        return []
    }
}
