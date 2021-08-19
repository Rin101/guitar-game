import { useRef } from "react"
import { mondaiNote } from "./game-data"
import "./main.css"

export const Main = () => {
    return(
        <div className="main">
            <div className="countdown-game-container">
                <CountdownGame></CountdownGame>
            </div>
        </div>
    )
}

const CountdownGame = () => {

    const countDownNumber = useRef()
    const mondai = useRef()
    const gameButton = useRef()

    const startTimer = (duration, display) => {
        // to compensate the initial interval ------------
        display.textContent = duration
        duration--
        //------------------------------------------------
        let timer = duration, seconds;
        const intervalID = setInterval(function () {
            seconds = timer
            if (timer >= 1) {
                display.textContent = seconds;
            }
            if (--timer < 0) {
                clearInterval(intervalID)
            }
        }, 1000);
    }

    const game = () => {
        mondai.current.textContent = mondaiNote()
        startTimer(5, countDownNumber.current);
    }

    const startGame = () => {
        startTimer(3, countDownNumber.current);
        setTimeout(() => {
            game()
            setInterval(() => {
                game()
            }, 5000)
        }, 3000)
    }

    const stopGame = () => {
        window.location.reload()
    }

    const toggleGame = () => {
        let isPlaying = gameButton.current.classList.contains("playing")
        if (isPlaying) {
            stopGame()
            gameButton.current.classList.remove("playing")
            gameButton.current.querySelector("p").textContent = "Start"
        } else {
            startGame()
            gameButton.current.classList.add("playing")
            gameButton.current.querySelector("p").textContent = "Stop"
        }
    }

    return(
        <div className="countdown-game">
            <div className="countdown">
                <p className="countdown-number" ref={countDownNumber}></p>
            </div>
            <div className="mondai-container">
                <p className="mondai" ref={mondai}></p>
            </div>
            <div className="game-button-container">
                <div className="game-button" onClick={() => toggleGame()} ref={gameButton}>
                    <p className="game-button-text">Start</p>
                </div>
            </div>
        </div>
    )
}