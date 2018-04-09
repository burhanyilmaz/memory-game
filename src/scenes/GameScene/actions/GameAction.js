import { 
  ACTION_SHUFFLE_CARDS,
  STATE_GAME,
  ACTION_SETPREVIOUSCARDS,
  ACTION_SETCHOOSENCARD,
  ACTION_RESETCHOOSENCARD,
  ACTION_RESETALLSTATE,
  ACTION_SETNEWPREVIOUSCARDS,
  ACTION_INCREMENTCOUNTER
} from "../constant";
import { Shuffle } from "../../../lib/services/Shuffle";

const cards = [
  "fab fa-btc",
  "fas fa-dollar-sign",
  "fas fa-euro-sign",
  "fas fa-lira-sign",
  "fas fa-pound-sign",
  "fas fa-ruble-sign",
  "fas fa-rupee-sign",
  "fas fa-yen-sign",
  "fas fa-won-sign",
  "fab fa-gg-circle"
];

export const shufle = () => dispatch => {
  dispatch(resetAllState());
  dispatch({
    type: ACTION_SHUFFLE_CARDS,
    payload: {
      shuffledCards: Shuffle(cards)
    }
  });
  dispatch(setNewPreviousCards());
  
};

export const chooseCard = id => (dispatch, getState) => {
  const { shuffledCards } = getState()[STATE_GAME];
  const newShuffledCards = Object.assign(
    { ...shuffledCards },
    { [id]: { icon: shuffledCards[id].icon, display: true } }
  );

  dispatch({
    type: ACTION_SHUFFLE_CARDS,
    payload: {
      shuffledCards: newShuffledCards
    }
  });
};

export const checkCards = (id) => (dispatch, getState) => {
  const { firstCard, shuffledCards } = getState()[STATE_GAME]
  dispatch(incrementCounter());
  dispatch(chooseCard(id));

  if (firstCard === null) {
     return dispatch(setChoosenCard(id));
  }

  if (shuffledCards[firstCard].icon === shuffledCards[id].icon) {
    dispatch(resetChoosenCard());
    return dispatch(setNewPreviousCards());
  }

  setTimeout(() => {
    dispatch(resetChoosenCard());
    dispatch(setPreviousCards());
  }, 200);
}


export const setPreviousCards = () => (dispatch) => {
  dispatch({
    type: ACTION_SETPREVIOUSCARDS,
    payload: {},
  });
}

export const setChoosenCard = card => (dispatch, getState) => {
  dispatch({
    type: ACTION_SETCHOOSENCARD,
    payload: { card },
  })
}

export const resetChoosenCard = () => (dispatch, getState) => {
  dispatch({
    type: ACTION_RESETCHOOSENCARD,
    payload: {},
  })
}

export const resetAllState = () => (dispatch, getState) => {
  dispatch({
    type: ACTION_RESETALLSTATE,
    payload: {},
  })
}

export const setNewPreviousCards = () => (dispatch, getState) => {
  const { shuffledCards } = getState()[STATE_GAME];

  dispatch({
    type: ACTION_SETNEWPREVIOUSCARDS,
    payload: { previousCards: shuffledCards },
  })  
}

export const incrementCounter = () => (dispatch) => {
  dispatch({
    type: ACTION_INCREMENTCOUNTER,
    payload: {}
  })
}