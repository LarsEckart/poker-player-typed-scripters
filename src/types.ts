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
}

interface Game {
    tournament_id: string;
    game_id: string;
    round: number;
    players: Player[];
    small_blind: number;
    orbits: number;
    dealer: number;
    community_cards: Card[];
    current_buy_in: number;
    pot: number;
    in_action: number;
    minimum_raise: number;
    bet_index: number;
    bet: number;
    
}

export { Player, Card, Game };