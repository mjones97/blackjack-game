let firstCard = getRandomCard()
let secondCard = getRandomCard() 
let cards = [firstCard, secondCard]
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1) 
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
        cardEl.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++) {
            cardEl.textContent += cards[i] + " "
        }
        sumEl.textContent = "Sum: " + sum
        if (sum < 21) {
        message = "Hit?"
        } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
        } else {
        message = "Bust!"
        isAlive = false
        }
        messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}