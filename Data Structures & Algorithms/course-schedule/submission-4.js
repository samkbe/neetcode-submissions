class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        //Create hashmap
        const courses = new Map();

        for (let i = 0; i < numCourses; i++) {
            courses.set(i, []);
        }
        for (let [course, preReq] of prerequisites) {
            courses.get(course).push(preReq);
        }

        const seen = new Set();

        function dfs(course) {
            if (seen.has(course)) return false;
            if (courses.get(course).length === 0) return true;

            seen.add(course);
            for (let preReq of courses.get(course)) {
                if (!dfs(preReq)) return false;
            }
            seen.delete(course);
            courses.set(course, []);
            return true;
        }

        for (let crs = 0; crs < numCourses; crs++) {
            if (!dfs(crs)) return false;
        }
        return true;
    }
}
