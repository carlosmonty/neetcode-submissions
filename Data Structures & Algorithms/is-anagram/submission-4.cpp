class Solution {
   public:
    bool isAnagram(string s, string t) {
        // 1. store each char into an array
        // 2. compare arrays
        map<char, int> s_seen;
        map<char, int> t_seen;

        if(size(s)!= size(t)){
            return false;
        }

        for (auto s_in : s) {
            int ascii_val = s_in;
            s_seen[ascii_val] = s_seen[ascii_val] + 1;
        }

        for (auto t_in : t) {
            int ascii_val = t_in;
            t_seen[ascii_val] = t_seen[ascii_val] + 1;
        }

        for(int i = 0;i<s_seen.size();i++){
            if(s_seen[i] != t_seen[i]){
                return false;
            }
        }



        return true;
    }
};
