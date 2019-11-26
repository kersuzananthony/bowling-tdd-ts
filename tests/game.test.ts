import Game from "../src/game";

describe("Bowling game", () => {

  let game: Game | undefined;

  const rollMany = (quantity: number, pinsHit: number) => {
    for (let i = 0; i < quantity; i++) {
      game.roll(pinsHit);
    }
  };

  const rollStrike = () => {
    game.roll(10);
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

  it("should calculate the score with one spare", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);

    rollMany(17, 0);
    expect(game.score()).toEqual(16);
  });

  it("should calculate the score with two spares", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);

    rollMany(13, 0);

    game.roll(5);
    game.roll(5);
    game.roll(4);
    game.roll(0);
    expect(game.score()).toEqual(34);
  });

  it("should calculate the score with one strike", () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toEqual(24);
  });

  it("should calculate the perfect game score", () => {
    rollMany(12, 10);
    expect(game.score()).toEqual(300);
  });

  it("should calculate score for final spare + strike", () => {
    rollMany(18, 0);
    game.roll(5);
    game.roll(5);
    rollStrike();
    expect(game.score()).toEqual(20);
  });

  it("should calculate score for final 3 strikes", () => {
    rollMany(18, 0);
    rollMany(3, 10);
    expect(game.score()).toEqual(30);
  });
});
