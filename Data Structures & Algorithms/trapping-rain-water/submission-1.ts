class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let ans = 0;
        let leftIdx = 0, rightIdx = height.length-1;
        let lmax = 0, rmax = 0;

        while(leftIdx<rightIdx){
            lmax = Math.max(lmax, height[leftIdx]);
            rmax = Math.max(rmax, height[rightIdx]);

            if(lmax < rmax){
                ans += lmax - height[leftIdx]
                leftIdx++;
            } else {
                ans += rmax - height[rightIdx]
                rightIdx--
            }
        }
        return ans
    }
}
