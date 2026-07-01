class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Count frequency of each element
        let freq = new Map();
        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        // Find the maximum frequency
        let maxFreq = Math.max(...freq.values());

        // Create buckets based on frequencies
        // Each bucket index represents frequency
        let buckets = Array.from({ length: maxFreq + 1 }, () => []);

        for (let [num, count] of freq.entries()) {
            console.log(num, count)
            buckets[count].push(num);
        }

        // Collect top k frequent elements
        let res = [];
        for (let i = maxFreq; i >= 1; --i) {
            buckets[i].sort((a, b) => b - a);

            for (let num of buckets[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
