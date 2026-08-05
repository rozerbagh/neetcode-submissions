class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const vistited_map = new Map();
        let longestConSwq = 0;
        for (let n of nums) {
            vistited_map.set(n, false);
        }

        for (let n of nums) {
            let currentLength = 1;
            let nxtNum = n + 1;
            while(vistited_map.has(nxtNum) && !vistited_map.get(nxtNum)){
                currentLength++;
                vistited_map.set(nxtNum, true);
                nxtNum++
            }
            
            let prevNum = n - 1;
            while(vistited_map.has(prevNum) && !vistited_map.get(prevNum)){
                currentLength++;
                vistited_map.set(prevNum, true);
                prevNum--;
            }

            longestConSwq = Math.max(longestConSwq, currentLength)
        }

        return longestConSwq;
    }
}
