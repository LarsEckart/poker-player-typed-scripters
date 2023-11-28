interface Player {
    name: string;
    stack: number;
    status: string;
    bet: number;
    time_used: number;
    version: string;
    id: number;
    hole_cards?: Card[];
}

interface Card {
    rank: string;
    suit: string;
    getCardValue?(): number;
}

interface Game {
    tournament_id: string;
    game_id: string;
    round: number;
    players: Player[];
    small_blind: number;
    big_blind: number;
    orbits: number;
    dealer: number;
    community_cards: Card[];
    current_buy_in: number;
    pot: number;
    in_action: number;
    minimum_raise: number;
    bet_index: number;
}

class PlayingCard implements Card {
    rank: string;
    suit: string;

    constructor(rank: string, suit: string) {
        this.rank = rank;
        this.suit = suit;
    }

    /*
    A = 10 points.
    K = 8 points.
    Q = 7 points.
    J = 6 points.
    10 to 2 = 1/2 of card value. (e.g. a 6 would be worth 3 points)
    */
    public getCardValue(): number {
        if (this.rank == "A") {
            return 10;
        } else if (this.rank == "K") {
            return 8;
        } else if (this.rank == "Q") {
            return 7;
        } else if (this.rank == "J") {
            return 6;
        } else {
            return parseInt(this.rank) / 2;
        }
    }
}

export { Player, Card, Game, PlayingCard };