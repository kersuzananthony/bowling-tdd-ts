import Game from "../src/game";

describe("Bowling game", () => {
  it("should successfully create a bowling game", () => {
    const game = new Game();
    expect(game).not.toBeUndefined();
  });

  it("should return a score equals to 0 when all balls go to gutter", () => {
    const game = new Game();

    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }

    expect(game.score()).toEqual(0);
  });

  it("should return a score equals to 20 because all roll hit one pin", () => {
    const game = new Game();

    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }

    expect(game.score()).toEqual(20);
  });
});
