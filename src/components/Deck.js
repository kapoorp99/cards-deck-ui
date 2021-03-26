import React, { useState, useEffect } from 'react'
import './Deck.css'
import Card from './Card';
import Spinner from 'react-spinkit';
import logo from '../logo.png';

function Deck() {
    let l = 0;
    let h = 5;
    const [siteLoaded, setSiteLoaded] = useState(false);
    const [low, setLow] = useState(l);
    const [high, setHigh] = useState(h);
    const [disabled, setDisabled] = useState(false);
    const [shuffledDeck, setShuffledDeck] = useState([]);
    const [resultDeck, setResultDeck] = useState([]);
    const [deck, setDeck] = useState([]);
    const suits = ['S', 'H', 'D', 'C'];
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const doInitilization = () => {
        let deckp = [];
        console.log("APP INITIALIZED");
        for (let suit in suits) {
            for (let value in values) {
                deckp.push(`c${values[value]}${suits[suit]}`);
                shuffledDeck.push(`c${values[value]}${suits[suit]}`);
            }
        }
        setDeck(deckp);
        for (let i = 51; i >= 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = shuffledDeck[i];
            shuffledDeck[i] = shuffledDeck[j];
            shuffledDeck[j] = temp;
        }
        setResultDeck([]);
        setShuffledDeck(shuffledDeck);
    }
    useEffect(() => {
        doInitilization();
        setSiteLoaded(true);
        // eslint-disable-next-line
    }, [])



    /* ------------------------------------------------------------------------------------------ */

    function drawFiveCards() {
        if (high > 49) {
            setLow(50);
            setHigh(52);
            for (let i = low; i < high; i++) {
                resultDeck[i] = shuffledDeck[i];
                deck[deck.indexOf(shuffledDeck[i])] = false;
            }
        }
        else {
            for (let i = low; i < high; i++) {
                resultDeck[i] = shuffledDeck[i];
                deck[deck.indexOf(shuffledDeck[i])] = false;
            }
            setLow(low + 5);
            setHigh(high + 5);
        }
        if (high === 52) {
            setDisabled(true);
        }
    };
    if (siteLoaded) {
        return (
            <>
                <div className="deck">
                    <div className="deck__header">
                        <div className="deck__headerLeft">
                            <h3>Initial Deck</h3>
                            {deck.length - resultDeck.length}
                        </div>
                        <div className="deck__headerMiddle">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="deck__headerRight">
                            <h3>Final Deck</h3>
                            {resultDeck.length}</div>
                    </div>
                    <div className="deck__container">
                        <div className="deck__containerLeft">
                            {deck.map((sv, index) => {
                                return (
                                    sv ? (<Card cardName={sv} key={index} />) : (<div key={index}></div>)
                                )
                            })}
                        </div>
                        <div className="deck__containerRight">
                            {resultDeck.map((sv, index) => {
                                return (
                                    <Card cardName={sv} key={index} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="deck__footer">
                        <button onClick={drawFiveCards} disabled={disabled}>Draw 5 random cards</button>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="site__loader">
                <div className="site__loader__contents">
                    <Spinner
                        name="ball-spin-fade-loader"
                        color="#6e67d6"
                        fadeIn="none"
                    />
                </div>
            </div>
        </>
    )
}

export default Deck