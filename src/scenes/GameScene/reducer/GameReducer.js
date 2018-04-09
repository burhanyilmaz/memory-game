import {
    ACTION_SHUFFLE_CARDS,
    ACTION_SETCHOOSENCARD,
    ACTION_RESETCHOOSENCARD,
    ACTION_SETPREVIOUSCARDS,
    ACTION_RESETALLSTATE,
    ACTION_SETNEWPREVIOUSCARDS,
    ACTION_INCREMENTCOUNTER,
} from '../constant'

const INITIAL_STATE = {
    shuffledCards: {},
    firstCard: null,
    previousCards: {},
    counter: 0,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_SHUFFLE_CARDS:
            return { ...state, shuffledCards: action.payload.shuffledCards }
        case ACTION_SETCHOOSENCARD:
            return { ...state, firstCard: action.payload.card };
        case ACTION_RESETCHOOSENCARD: 
            return { ...state, firstCard: null };
        case ACTION_SETPREVIOUSCARDS:
            return { ...state, shuffledCards: state.previousCards };
        case ACTION_RESETALLSTATE: 
            return { ...state, ...INITIAL_STATE}   
        case ACTION_SETNEWPREVIOUSCARDS:
            return { ...state, previousCards: action.payload.previousCards}
        case ACTION_INCREMENTCOUNTER: 
            return { ...state, counter: state.counter + 1 };          
        default:
            return state;    
    }
}