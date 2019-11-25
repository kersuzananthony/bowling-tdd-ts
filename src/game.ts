export default class Game {

  private _rolls: number[] = [];
  private _currentRoll = 0;

  public roll(pins) {
    this._rolls[this._currentRoll] = pins;
    this._currentRoll = this._currentRoll + 1;
  }

  public score() {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this._isSpareFrame(frameIndex)) {
        score += 10 + this._rolls[frameIndex + 2];
      } else {
        score += this._rolls[frameIndex] + this._rolls[frameIndex + 1];
      }

      frameIndex += 2;
    }

    return score;
  }

  private _isSpareFrame(frameIndex: number): boolean {
    if (frameIndex >= this._rolls.length) {
      return false;
    }

    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }
}
