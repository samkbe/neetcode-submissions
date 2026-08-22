class Twitter {
    constructor() {
        this.feed = [];
        this.followerMap = {};
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.feed.push([userId, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        if (!this.followerMap[userId]) this.followerMap[userId] = {};
        const newsFeed = [];
        let i = this.feed.length - 1;
        while (i >= 0 && newsFeed.length < 10) {
            if (this.feed[i][0] === userId || this.followerMap[userId][this.feed[i][0]] === true) {
               newsFeed.push(this.feed[i][1]);
            }
            i--;
        }
        return newsFeed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followerMap[followerId]) {
            this.followerMap[followerId] = {};
        }
        this.followerMap[followerId][followeeId] = true;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (!this.followerMap[followerId]) {
            this.followerMap[followerId] = {};
        }
        this.followerMap[followerId][followeeId] = false;
    }
}
