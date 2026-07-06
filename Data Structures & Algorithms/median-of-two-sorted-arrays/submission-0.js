class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let smallArr;
        let largeArr;
        if (nums1.length < nums2.length) {
            smallArr = nums1;
            largeArr = nums2;
        } else {
            smallArr = nums2;
            largeArr = nums1;
        }

        let l = 0;
        let r = smallArr.length;

        while (l <= r) {
            const i = Math.floor((l + r) / 2);
            const j = Math.floor((largeArr.length + smallArr.length) / 2) - i;

            const smallLeftBoundary = i === 0 ? -Infinity : smallArr[i -  1];
            const smallRightBoundary = i === smallArr.length ? Infinity : smallArr[i];
            const largeLeftBoundary = j === 0 ? -Infinity : largeArr[j -  1];
            const largeRightBoundary = j === largeArr.length ? Infinity : largeArr[j];
            

            if (smallLeftBoundary > largeRightBoundary) {
                r = i - 1;
            } else if (largeLeftBoundary > smallRightBoundary) {
                l = i + 1;
            } else {
                //we have our answer
                const maxLeft = Math.max(smallLeftBoundary, largeLeftBoundary);
                const minRight = Math.min(smallRightBoundary, largeRightBoundary);

                if ((largeArr.length + smallArr.length) % 2 === 0) {
                    //even
                    return (maxLeft + minRight) / 2;
                } else {
                    //odd
                    return minRight
                }
            }
        }
    }
}