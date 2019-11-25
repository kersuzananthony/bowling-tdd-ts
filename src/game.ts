export default class Game {

  private _rolls: number[] = [];
  private _currentRoll = 0;

  public roll(pins) {
    this._rolls[this._currentRoll] = pins;
    this._currentRoll = this._currentRoll + 1;
  }

  public score() {
    let score = 0;

    for (let i = 0; i < this._rolls.length; i++) {
      score += this._rolls[i];
    }

    return score;
  }
}
