class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;   
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }    

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.timeRemaining = this.timerValue;
        if(this.onStart) this.onStart();

        this.tick();
        this.intervalId = setInterval(this.tick, 50);
    };
    tick = () => {                      

        if(this.timeRemaining <= 0){
            clearInterval(this.intervalId);
            this.timerValue = 0;
            if(this.onComplete) this.onComplete();
        }
        else{
            this.timerValue = this.timeRemaining;
            if(this.onTick) this.onTick();
            this.timeRemaining -= 0.05;
        }
    };
    pause = () => {
        clearInterval(this.intervalId);
    };

    get timerValue() {
        return parseFloat(this.durationInput.value);
    };
    set timerValue(time) {
        this.durationInput.value = time.toFixed(2);
    };

}