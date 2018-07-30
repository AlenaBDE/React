
export class Timer {
    constructor() {
        this.start = 0;
        this.deltaTime = 0;
        this.intervalId = 0;
        this.hour = 0;
        this.min = 0;
        this.second = 0;
        this.getTime = this.getTime.bind(this);
        this.format = function (num) {
            return num < 10 ? '0' + num : num;
        }
    }

    setDOM() {
        $('#hour').text(this.format(this.hour));
        $('#minute').text(this.format(this.min));
        $('#second').text(this.format(this.second));
    }

    getTime() {
        this.deltaTime = new Date().getTime();
        this.hour = (this.deltaTime - this.start) / 1000 / 3600 >> 0;
        this.min = (this.deltaTime - this.start - this.hour * 1000 * 3600) / 1000 / 60 >> 0;
        this.second = (this.deltaTime - this.start - this.hour * 1000 * 3600 - this.min * 1000 * 60) / 1000 >> 0;
        this.setDOM();
    }

    startTimer() {
        this.deltaTime = 0;
        this.start = new Date().getTime();
        this.intervalId = setInterval(() => {
            this.getTime();
        }, 1000);


    }

    stopTimer() {
        clearInterval(this.intervalId);
        return this.format(this.hour) + ':' + this.format(this.min) + ':' + this.format(this.second);
    }
}

let timer = new  Timer();

export {timer};