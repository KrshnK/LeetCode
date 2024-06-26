class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
       System.arraycopy(nums2, 0, nums1, m, n);
        
        // Sort nums1 in place
        Arrays.sort(nums1); 
    }
}