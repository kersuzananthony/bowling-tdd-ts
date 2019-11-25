export default class Game {

  private _rolls: number[] = [];
  private _currentRoll = 0;

  public roll(pins) {
    this._rolls[this._currentRoll] = pins;
    this._currentRoll = this._currentRoll + 1;
  }

  public score() {
    let score = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this._rolls[i] + this._rolls[i + 1] === 10) {
        score += 10 + this._rolls[i + 2];
      } else {
        score += this._rolls[i] + this._rolls[i + 1];
      }

      i += 2;
    }

    return score;
  }
}
