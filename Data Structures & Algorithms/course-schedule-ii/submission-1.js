class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const preReqMap = new Map();
        const output = [];

        for (let i = 0; i < numCourses; i++) {
            preReqMap.set(i, []);
        }
        for (let [course, preReq] of prerequisites) {
            preReqMap.get(course).push(preReq);
        }

        const seen = new Set();
        const added = new Set();

        function dfs(course) {
            if (seen.has(course)) return false;
            if (added.has(course)) return true;

            seen.add(course);
            for (let preReq of preReqMap.get(course)) {
                if (!dfs(preReq)) return false;
            }
            seen.delete(course);
            added.add(course);
            output.push(course);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }
        
        return output;
    }
}
