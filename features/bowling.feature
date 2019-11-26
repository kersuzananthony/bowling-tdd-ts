Feature: Bowling game
  As a bowling gamer
  I want my score to be calculated correctly

  Scenario Outline:
    Given a new bowling game
    When I play with the following frame <frames>
    Then My score should be <score>

    Examples:
      | frames                                                      | score |
      | [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] | 0     |
      | [1 1] [1 1] [1 1] [1 1] [1 1] [1 1] [1 1] [1 1] [1 1] [1 1] | 20    |
      | [5 5] [3 1] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] | 17    |
      | [10] [3 1] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0] [0 0]  | 18    |
      | [10] [10] [10] [10] [10] [10] [10] [10] [10] [10] [10] [10] | 300   |
