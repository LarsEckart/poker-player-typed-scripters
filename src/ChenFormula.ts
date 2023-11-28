/*
The Chen formula.

    Score your highest card only. Do not add any points for your lower card.
        A = 10 points.
        K = 8 points.
        Q = 7 points.
        J = 6 points.
        10 to 2 = 1/2 of card value. (e.g. a 6 would be worth 3 points)
    Multiply pairs by 2 of one card’s value. However, minimum score for a pair is 5.
        (e.g. KK = 16 points, 77 = 7 points, 22 = 5 points)
    Add 2 points if cards are suited.
    Subtract points if their is a gap between the two cards.
        No gap = -0 points.
        1 card gap = -1 points.
        2 card gap = -2 points.
        3 card gap = -4 points.
        4 card gap or more = -5 points. (Aces are high this step, so hands like A2, A3 etc. have a 4+ gap.)
    Add 1 point if there is a 0 or 1 card gap and both cards are lower than a Q. (e.g. JT, 75, 32 etc, this bonus point does not apply to pocket pairs)
    Round half point scores up. (e.g. 7.5 rounds up to 8)

*/

import {  Card } from './types';

function chenValue(card1: Card, card2: Card) {
    let card1Value = 0;
    let card2Value = 0;
    let chenScore = 0;
    // assign a value to card1 based on its rank
    if (card1.rank == "A") {
        card1Value = 10;
    } else if (card1.rank == "K") {
        card1Value = 8;
    } else if (card1.rank == "Q") {
        card1Value = 7;
    } else if (card1.rank == "J") {
        card1Value = 6;
    } else if (card1.rank == "T") {
        card1Value = 5;
    } else if (card1.rank == "9") {
        card1Value = 4;
    } else if (card1.rank == "8") {
        card1Value = 3;
    } else if (card1.rank == "7") {
        card1Value = 2;
    } else if (card1.rank == "6") {
        card1Value = 1;
    } else if (card1.rank == "5") {
        card1Value = 0;
    } else if (card1.rank == "4") {
        card1Value = 0;
    } else if (card1.rank == "3") {
        card1Value = 0;
    } else if (card1.rank == "2") {
        card1Value = 0;
    }
    // assign a value to card2 based on its rank
    if (card2.rank == "A") {
        card2Value = 10;
    } else if (card2.rank == "K") {
        card2Value = 8;
    } else if (card2.rank == "Q") {
        card2Value = 7;
    } else if (card2.rank == "J") {
        card2Value = 6;
    } else if (card2.rank == "T") {
        card2Value = 5;
    } else if (card2.rank == "9") {
        card2Value = 4;
    } else if (card2.rank == "8") {
        card2Value = 3;
    } else if (card2.rank == "7") {
        card2Value = 2;
    } else if (card2
}
    