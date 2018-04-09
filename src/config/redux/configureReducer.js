import { combineReducers } from 'redux';
import { STATE_GAME } from '../../scenes/GameScene/constant';
import GameReducer from '../../scenes/GameScene/reducer/GameReducer';

export default combineReducers({
    [STATE_GAME]: GameReducer,
})


/**
 * 
 * let sayi = 0;
cards.map((data, index) => {
    // console.log(index);
    // console.log(data);
    let number = 0;
    let randNum = [];
    let uniqNum = {};
    while(number < 2) {
        const randomNumber = Math.floor((Math.random() * 12) + 1);
        recentNumber = randomNumber;
        if (!mixed[randomNumber]) {
            mixed = Object.assign(mixed, {[randomNumber]: { icon: data, display: false} });
            number++; 
        }
    }
    number = 0;
});
 */