const util = require('util')


export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    console.log(util.inspect(gameState, false, null, false  ));
    betCallback(1000);
  }

  public showdown(gameState: any): void {

  }
};

export default Player;
