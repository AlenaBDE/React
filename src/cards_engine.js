import {getRandomInt} from './common';

export default class LoadCards {
    constructor(row_count, column_count, backIndex) {
        this.cards = [];
        this.back1 = new Image().src = 'img/back1.png';
        this.back2 = new Image().src = 'img/back2.png';
        this.row_count = row_count;
        this.colunt_count = column_count;
        this.backIndex = backIndex;

        for (let i = 1; i < 54; i++) {
            let img = new Image();
            img.src = 'img/_(' + i + ').png';
            let image = {};
            image.index = i - 1;
            image.img = img.src;
            this.cards.push(image);
        }
    }

    getCards(rows, columns) {
        let masMain = [];
        for (let i = 0; i < rows; i++) {
            let mas = [];
            masMain.push(mas);
        }

        let j = 0;
        let index = 0;
        let indexCard = 0;

        while (j < rows * columns) {
            index = getRandomInt(0, masMain.length - 1);
            if (j % 2 == 0) {
                indexCard = getRandomInt(0, 52 - 1);
            }
            if (masMain[index].length < columns) {
                masMain[index].splice(getRandomInt(0, masMain[index].length - 1), 0, this.getCard(indexCard));
                j++;
            }
        }
        return masMain;
    }

    getCard(index) {
        return this.cards[index];
    }

    getBack(index) {
        if (index == 1) {
            return this.back1;
        }
        return this.back2;

    }

    setTableSize(row,col){
        this.row_count = row;
        this.colunt_count = col;
    }

}
