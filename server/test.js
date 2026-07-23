import { createProfileStats, createStat, isValidProfileStats } from "./src/utiles/statContract.js";

const fake = createProfileStats({
  platform: "github",
  username: "dineshkhichar569",
  displayName: "Dinesh",
  profileUrl: "https://github.com/dineshkhichar569",
  stats: [
    createStat("repos", "Repos", 24),
    createStat("followers", "Followers", 130),
    createStat("stars", "Stars", null),
  ],
});

console.log(fake);
console.log("valid:", isValidProfileStats(fake));