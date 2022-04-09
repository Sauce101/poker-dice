// Poker Dice
import Ace from "../assets/pokerdices/ace.svg"
import King from "../assets/pokerdices/king.svg"
import Queen from "../assets/pokerdices/queen.svg"
import Jack from "../assets/pokerdices/jack.svg"
import Ten from "../assets/pokerdices/ten.svg"
import Nine from "../assets/pokerdices/nine.svg"

const SPADES = [Ace, King, Queen, Jack, Ten, Nine]

const freshDeck = SPADES

export default class Deck {
  constructor(cards = freshDeck) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}
