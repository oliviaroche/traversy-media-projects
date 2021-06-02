const container = document.getElementsByClassName('container');
const text = document.getElementById('text');

const totalTime = 7500; // 7.5s
const breatheTime = (totalTime / 5) * 2; // 1.5s * 2 = 3s
const holdTime = totalTime / 5; // 1.5s

breatheAnimation();

// conatiner grows during 'breathe in' and shrinks during 'breathe out'
function breatheAnimation() {
    text.innerHTML = 'Breathe In';
    container.className = 'conatiner grow';

    // waits amount of breatheTime/holdTime before executing function which changes text
    // waits 3s before changng inner circle text from 'Breathe In' to 'Hold'
    setTimeout(() => {
        text.innerText = 'Hold';

        // waits 1.5 before changing 'Hold to 'Breathe Out'
        setTimeout(() => {
            text.innerText = 'Breathe Out';
            container.className = 'container shrink';
        }, holdTime);

    }, breatheTime);
}

//runs breatheAnimation function every 7.5s
setInterval(breatheAnimation, totalTime);