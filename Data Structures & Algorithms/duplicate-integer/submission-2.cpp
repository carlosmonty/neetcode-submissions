class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        map<int,bool>seen;
        for(int num : nums){
            seen[num] = false;
        }

        // for(auto num:seen){
        //     cout <<num.first<<" - "<<num.second<<endl;
        // }

        for(auto num:nums){
              cout <<num<<" - "<<seen[num]<<endl;
            if(seen[num]){
                return true;
            }
            seen[num] = true;
        }
        return false;
    }
};