import Game from "../src/game";

describe("Bowling game", () => {
  it("should successfully create a bowling game", () => {
    const game = new Game();
    expect(game).not.toBeUndefined();
  });
});
