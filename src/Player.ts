const util = require('util')
import { Card, Game } from './types';


export class Player {
  public betRequest(gameState: Game, betCallback: (bet: number) => void): void {
    console.log(util.inspect(gameState, false, null, false  ));

    // get our hole cards
    var ourCards = gameState.players[gameState.in_action]?.hole_cards;
    if (ourCards) {
      // get the value of our hole cards
      let chenScore = this.chenValue(ourCards[0], ourCards[1]);
      console.log("chenScore: " + chenScore);
      if (chenScore > 7) {
        betCallback(gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise);
        return;
      }
    }
    betCallback(0);
  }

  private chenValue(card1: Card, card2: Card) {
    let result = 0;
    let higherCard: Card = this.determineHigherCard(card1, card2);
    result += higherCard.getCardValue();

    // Multiply pairs by 2 of one card’s value. However, minimum score for a pair is 5.
    // (e.g. KK = 16 points, 77 = 7 points, 22 = 5 points)
    if (card1.rank == card2.rank) {
      result *= 2;
    }
    //Add 2 points if cards are suited.
    if (card1.suit == card2.suit) {
      result += 2;
    }
    /*
    Subtract points if their is a gap between the two cards.

    No gap = -0 points.
    1 card gap = -1 points.
    2 card gap = -2 points.
    3 card gap = -4 points.
    4 card gap or more = -5 points. (Aces are high this step, so hands like A2, A3 etc. have a 4+ gap.)

    */
    let card1Value = this.getCardValue(card1);
    let card2Value = this.getCardValue(card2);
    let gap = Math.abs(card1Value - card2Value) - 1;
    if (gap > 4) {
      gap = 4;
    }
    result -= gap;
    // Add 1 point if there is a 0 or 1 card gap and both cards are lower than a Q. (e.g. JT, 75, 32 etc, this bonus point does not apply to pocket pairs)
    if (gap <= 1 && card1Value < 12 && card2Value < 12) {
      result += 1;
    }
    //Round half point scores up. (e.g. 7.5 rounds up to 8)
    return Math.ceil(result);
  }

  // returns the higher card, or the first card if both cards are equal
  private determineHigherCard(card1: Card, card2: Card): Card {
    return card1.getCardValue() > card2.getCardValue() ? card1 : card2;
  }

  public showdown(gameState: any): void {

  }
};

export default Player;
