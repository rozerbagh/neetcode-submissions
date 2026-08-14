class Solution {
    public String minWindow(String s, String t){
        int minLen = Integer.MAX_VALUE;
        Map<Character, Integer> charNeeded = new HashMap<>();
        for (char c : t.toCharArray()) {
            charNeeded.put(c, charNeeded.getOrDefault(c, 0) + 1);
        }

        Map<Character, Integer> window = new HashMap<>();
        int requiredCharLen = charNeeded.size();
        int formedCharLen = 0;
        int left = 0;
        int start = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            window.put(ch, window.getOrDefault(ch, 0) + 1);

            if (charNeeded.containsKey(ch) &&
                    window.get(ch).intValue() == charNeeded.get(ch).intValue()) {
                formedCharLen++;
            }

            while (formedCharLen == requiredCharLen) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                char leftChar = s.charAt(left);
                window.put(leftChar, window.get(leftChar) - 1);

                if (charNeeded.containsKey(leftChar) &&
                        window.get(leftChar) < charNeeded.get(leftChar)) {
                    formedCharLen--;
                }

                left++;
            }
        }

        return minLen == Integer.MAX_VALUE
                ? ""
                : s.substring(start, start + minLen);
    }
}
