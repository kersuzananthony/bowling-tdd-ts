export default class Game {

  private _rolls: number[] = [];
  private _currentRoll = 0;

  public roll(pins: number) {
    this._rolls[this._currentRoll] = pins;
    this._currentRoll = this._currentRoll + 1;
  }

  public score() {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this._isStrike(frameIndex)) {
        score += 10 + this._strikeBonus(frameIndex);
        frameIndex += 1;
      } else if (this._isSpareFrame(frameIndex)) {
        score += 10 + this._spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this._sumOfPinsInFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  private _strikeBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
  }

  private _spareBonus(frameIndex: number): number {
    return this._rolls[frameIndex + 2];
  }

  private _sumOfPinsInFrame(frameIndex: number): number {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
  }

  private _isStrike(frameIndex: number): boolean {
    return this._rolls[frameIndex] === 10;
  }

  private _isSpareFrame(frameIndex: number): boolean {
    if (frameIndex >= this._rolls.length) {
      return false;
    }

    return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
  }
}
