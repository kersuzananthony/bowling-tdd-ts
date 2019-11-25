import Game from "../src/game";

describe("Bowling game", () => {

  let game: Game | undefined;

  const rollMany = (quantity: number, pinsHit: number) => {
    for (let i = 0; i < quantity; i++) {
      game.roll(pinsHit);
    }
  };

  beforeEach(() => {
    game = new Game();
  });

  it("should successfully create a bowling game", () => {
    expect(game).not.toBeUndefined();
  });

  it("should return a score equals to 0 when all balls go to gutter", () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("should return a score equals to 20 because all roll hit one pin", () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  // it("should calculate the score with one spare", () => {
  //   game.roll(5);
  //   game.roll(5);
  //   game.roll(3);
  //
  //   rollMany(17, 0);
  //   expect(game.score()).toEqual(16);
  // });
});
