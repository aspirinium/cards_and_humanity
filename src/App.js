import img1 from "./contents/bat_card.png"
import img2 from "./contents/kangaroo_card.png"
import img3 from "./contents/cockatoo_card.png"
import img4 from "./contents/frog_card.png"
import img5 from "./contents/koala_card.png"
import img6 from "./contents/spider_card.png"
import img7 from "./contents/jellyfish_card.png"
import sorryBroCard from "./contents/sorryBro_card.png"
import arrayShuffle from "array-shuffle";
import questions from "./contents/Questions.js"
import './App.css';
import React, {useRef, useState} from "react";
import ActionAreaCard from "./components/ActionAreaCard";
import { useStackState } from "rooks";
import SorryBro from "./components/SorryBro";
import { CSSTransition } from 'react-transition-group';

function App() {
    const img_srcs = [img1, img2, img3, img4, img5, img6, img7]
    const [shuffled, setShuffled] = useState(arrayShuffle(questions))
    const cards = shuffled.map((q, i) => [q, img_srcs[i % img_srcs.length], i])
    const numberToPushRef = useRef(0);
    const [list, { push, pop, peek, length },
        listInReverse] = useStackState([cards[0]]);
    const [end, setEnd] = useState(true)
    const nQuestions = questions.length
    const sorryBro = ["placeholder", sorryBroCard, 420]

    const [isVisible, setIsVisible] = useState(true);

    const [inProp, setInProp] = useState(true);
    const nodeRef = useRef(null);

    const addToStack = () => {
        numberToPushRef.current = numberToPushRef.current + 1;
        if (numberToPushRef.current === cards.length) {
            setEnd(false)
        }
        push(cards[numberToPushRef.current]);
        setIsVisible((isVisible) => !isVisible)
        setInProp(true)
    }

    const handlePrevious = () => {
        if (numberToPushRef.current !== 0) {
            numberToPushRef.current = numberToPushRef.current - 1
            pop();
        }
        setIsVisible((isVisible) => !isVisible)
    }

    const startAgain = () => {
        const shuffledCards = arrayShuffle(questions);
        setEnd(true);
        numberToPushRef.current = 0;
        list.splice(0, list.length, shuffledCards[0]);
        setShuffled(arrayShuffle(questions));
        setIsVisible(true);
    };

    return (
        end ?
            <div className="App">
                <i class="arrow left" onClick={handlePrevious}></i>
                <div className="container">
                    {listInReverse.map((item) => {
                    return <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} classNames="my-node"><ActionAreaCard zIndex={item[2]} item={item} action={addToStack} isVisible={isVisible}
                    ></ActionAreaCard>
                    </CSSTransition>
                })}
                </div>
                <i className="arrow right" onClick={addToStack}></i>
            </div> : <div className="App"> <SorryBro item={sorryBro} startAgain={startAgain}></SorryBro> </div>
    );
}

export default App;