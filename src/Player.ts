const util = require('util')
import { Card, Game } from './types';


export class Player {
  public betRequest(gameState: Game, betCallback: (bet: number) => void): void {
    console.log(util.inspect(gameState, false, null, false  ));

    // get our hole cards
    var ourCards = gameState.players[gameState.in_action]?.hole_cards;
    if (ourCards) {
      // if we have a pair, bet 10000
      if (ourCards[0].rank == ourCards[1].rank) {
        betCallback(10000);
      }
      // if we have King or Ace, call
      if (ourCards[0].rank == "K" || ourCards[0].rank == "A" || ourCards[1].rank == "K" || ourCards[1].rank == "A") {
        betCallback(gameState.current_buy_in - gameState.players[gameState.in_action].bet);
      }
    }
    betCallback(0);
  }

  public showdown(gameState: any): void {

  }
};

export default Player;
