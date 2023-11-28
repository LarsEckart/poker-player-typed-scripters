// test player's betRequest method
// Path: src/Player.test.ts
import { Player } from './Player';
import { Game } from './types';
// import { Game } from './types';

test('places a bet', () => {
    let player = new Player();
    let gameState: Game = {
        "tournament_id": "656644d316d2b6000275d3a1",
        "game_id": "65665647417b0d0002f4a955",
        "round": 0,
        "players": [
            {
                "name": "Darth Raiser",
                "stack": 1000,
                "status": "active",
                "bet": 0,
                "time_used": 0,
                "version": "Demo player",
                "id": 0
            },
            {
                "name": "Winnie the Pot",
                "stack": 998,
                "status": "active",
                "bet": 2,
                "time_used": 0,
                "version": "Demo player",
                "id": 1
            },
            {
                "name": "Bluffy the Vampire",
                "stack": 996,
                "status": "active",
                "bet": 4,
                "time_used": 0,
                "version": "Demo player",
                "id": 2
            },
            {
                "name": "typed scripters",
                "stack": 1000,
                "status": "active",
                "bet": 0,
                "hole_cards": [
                    { "rank": "K", "suit": "spades" },
                    { "rank": "K", "suit": "diamonds" }
                ],
                "time_used": 0,
                "version": "with algorithm",
                "id": 3
            }
        ],
        "small_blind": 2,
        "big_blind": 4,
        "orbits": 0,
        "dealer": 0,
        "community_cards": [],
        "current_buy_in": 4,
        "pot": 6,
        "in_action": 3,
        "minimum_raise": 2,
        "bet_index": 2
    };  
    
    player.betRequest(gameState, (bet) => {
        expect(bet).toBe(6);
    });
  });