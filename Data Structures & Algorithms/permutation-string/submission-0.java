class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) {
            return false;
        }

        Map<Character, Integer> targetMap = new HashMap<>();
        Map<Character, Integer> windowMap = new HashMap<>();

        // 1. Build frequency map for s1
        for (char c : s1.toCharArray()) {
            targetMap.put(c, targetMap.getOrDefault(c, 0) + 1);
        }

        int windowSize = s1.length();

        // 2. Build first window
        for (int i = 0; i < windowSize; i++) {
            char c = s2.charAt(i);

            windowMap.put(
                    c,
                    windowMap.getOrDefault(c, 0) + 1
            );
        }

        // 3. Compare first window
        if (targetMap.equals(windowMap)) {
            return true;
        }

        // 4. Slide the window
        for (int right = windowSize; right < s2.length(); right++) {

            // -------------------------
            // REMOVE character leaving
            // -------------------------
            int left = right - windowSize;
            char leftChar = s2.charAt(left);

            windowMap.put(
                    leftChar,
                    windowMap.get(leftChar) - 1
            );

            // If frequency becomes 0, remove it
            if (windowMap.get(leftChar) == 0) {
                windowMap.remove(leftChar);
            }


            // -------------------------
            // ADD character entering
            // -------------------------
            char rightChar = s2.charAt(right);

            windowMap.put(
                    rightChar,
                    windowMap.getOrDefault(rightChar, 0) + 1
            );


            // -------------------------
            // COMPARE
            // -------------------------
            if (targetMap.equals(windowMap)) {
                return true;
            }
        }

        return false;
    }
}
