class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int leftIdx = 0, rightIdx = n - 1, ans = 0;
        int lmax = 0, rmax = 0; 

        while(leftIdx < rightIdx){
            lmax = Math.max(lmax, height[leftIdx]);
            rmax = Math.max(rmax, height[rightIdx]);

            if(lmax < rmax){
                ans += lmax - height[leftIdx];
                leftIdx++;
            } else {
                ans += rmax - height[rightIdx];
                rightIdx--;
            }
        }

        return ans;
    }
}
