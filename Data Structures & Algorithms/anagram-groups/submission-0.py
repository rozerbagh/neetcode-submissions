class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = []
        mp = {}
        
        for i in range(len(strs)):
            s = strs[i]
            
            # Find the key by sorting the string
            s = ''.join(sorted(s))
            
            # If key is not present in the hash map, add
            # an empty group (list) in the result and
            # store the index of the group in hash map
            if s not in mp:
                mp[s] = len(res)
                res.append([])
            
            # Insert the string in its correct group
            res[mp[s]].append(strs[i])
        
        return res
            