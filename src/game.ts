export default class Game {

  private _score = 0;

  public roll(pins) {
    this._score += pins;
  }

  public score() {
    return this._score;
  }
}
