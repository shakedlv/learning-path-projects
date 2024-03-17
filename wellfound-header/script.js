// list of elements 
const topics = ['DevOps', 'Front-End', 'Back-End'
    , 'Android', 'IOS', 'Mobile', 'Web',
    'NOC', 'IT', 'GOOGLE', 'META', 'MICROSOFT']

function getRandomTopics(array, n) {
    const topicsList = new Set();
    while (topicsList.size < n) {
      topicsList.add(array[Math.floor(Math.random() * array.length)]);
    }
    return Array.from(topicsList);
}

const randomElements = getRandomTopics(topics, 7)

const contentHolder = document.getElementById("content-holder");
const childElements = contentHolder.children;
const maxWidth = contentHolder.clientWidth;
const maxHeight = 300;

contentHolder.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    for (let i = 0; i < childElements.length; i++) {
        const childElement = childElements[i];
        let deltaX = (contentHolder.clientWidth / 2) - x;
        let deltaY = (contentHolder.clientHeight / 2) - y;
        let _x = Number.parseInt(childElement.dataset.x);
        let _y = Number.parseInt(childElement.dataset.y);
        childElement.animate({
            top: `${(_y + ((_y + deltaY) / 10)) / maxHeight * 100}%`,
            left: `${(_x + ((_x + deltaX) / 10)) / maxWidth * 100}%`,
        }, { duration: 2000 + Math.floor(Math.random() * 2000) })



    }
});

contentHolder.addEventListener('mouseout', () => {
    for (let i = 0; i < childElements.length; i++) {
        const childElement = childElements[i];
        let x = childElement.dataset.x;
        let y = childElement.dataset.y;

        childElement.animate({
            top: `${y / maxHeight * 100}%`,
            left:`${x / maxWidth * 100}%`,
        }, { duration: 5000  })

    }
});

let positions = new Array();

randomElements.forEach(element => {
    let randomX = Math.random() * maxWidth;
    let randomY = Math.random() * maxHeight;
    let maxX = Math.round(Math.min(Math.max(randomX, 32), maxWidth - 164));
    let maxY = Math.round(Math.min(Math.max(randomY, 16), maxHeight - 192));
    contentHolder.innerHTML += `<span data-type="topic" id="${element}" data-x="${maxX}" data-y="${maxY}">x ${maxX} , y ${maxY}</span>`
    let elementHtml = document.getElementById(element)
    elementHtml.style.top = `${maxY / maxHeight * 100}%`;
    elementHtml.style.left = `${maxX / maxWidth * 100}%`;
});

// element on pointer move in header
// element reset position on point exit header