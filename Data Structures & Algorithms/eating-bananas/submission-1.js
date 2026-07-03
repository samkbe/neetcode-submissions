class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a, b) => a - b);
        let l = 1;
        let r = piles[piles.length - 1];
        let leastNum = r;

        while (l <= r) {
            const midNum = Math.floor((l + r) / 2);
            let accumulator = 0;
            for (let pile of piles) {
                accumulator += Math.ceil(pile / midNum);
                if (accumulator > h) {
                    break;
                }
            }
            if (accumulator <= h) {
                leastNum = midNum;
                r = midNum - 1;
            } else {
                l = midNum + 1;
            }
        }
        return leastNum;
    }
}

//leastNum=25
//h=4



//[4,10,23,24]
