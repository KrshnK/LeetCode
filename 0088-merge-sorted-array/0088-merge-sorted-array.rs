impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        nums1.splice(m as usize..(m + n) as usize, nums2.iter().cloned());
        
        // Sort nums1 in place
        nums1.sort();
    }
}