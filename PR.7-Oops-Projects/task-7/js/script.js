const games = ["minecraft", "fortnite", "pubg", "overwatch"];

Array.prototype.convertToUppercase = function () {
  return this.map((game) => game.toUpperCase());
};

const uppercaseGames = games.convertToUppercase();

console.log("Original Games:", games);
console.log("Uppercase Games:", uppercaseGames);
