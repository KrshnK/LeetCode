class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        nums1[m:m+n] = nums2
        
        # Sort nums1 in place
        nums1.sort()
        