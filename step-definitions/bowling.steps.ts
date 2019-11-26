import { binding, given, then, when } from "cucumber-tsflow";
import { assert } from "chai";
import Game from '../src/game';

@binding()
export class BowlingSteps {

  private _game: Game | undefined;

  @given(/^a new bowling game$/)
  public givenANewBowlingGame() {
    this._game = new Game();
  }

  @when(/^I play with the following frame (.*)$/)
  public IPlayWithTheFollowingFrames(rawFrame: string) {
    const frames = rawFrame.split("] [")
      .map(frame => {
        const extraBeginIndex = frame.indexOf("[");
        const extraEndIndex = frame.indexOf("]");

        if (extraBeginIndex > -1) {
          return frame.slice(extraBeginIndex + 1);
        } else if (extraEndIndex > -1) {
          return frame.slice(0, extraEndIndex);
        } else {
          return frame;
        }
      });

    for (const frame of frames) {
      const rolls = frame.split(" ");

      for (const roll of rolls) {
        this._game!.roll(parseInt(roll));
      }
    }
  }

  @then(/^My score should be (\d*)$/)
  public myScoreShouldBe(value: number) {
    assert.equal(this._game!.score(), value);
  }
}
