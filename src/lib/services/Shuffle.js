export const Shuffle = (data) => {
    let mixedCards = {};
    let recentNumber = null;
    const dataCount = data.length;

    data.map((item, index) => {
      let number = 0;
      let randNum = [];
      let uniqNum = {};

      while (number < 2) {
        const randomNumber = Math.floor(Math.random() * dataCount * 2 + 1);
        recentNumber = randomNumber;

        if (!mixedCards[randomNumber]) {
          mixedCards = Object.assign(mixedCards, {
            [randomNumber]: { icon: item, display: false }
          });
          number++;
        }
      }
      number = 0;
    });

    return mixedCards;
}