

const trophyData = [
    { image: "png/1.jpeg", title: "2008 Carling Cup" },
    { image: "png/2.jpeg", title: "1961 FA Cup" },
    { image: "png/3.jpeg", title: "1991 FA Cup" },
    { image: "png/4.jpeg", title: "1962 FA Cup" },
    { image: "png/5.jpeg", title: "1961 First Division" },
    { image: "png/6.jpeg", title: "1984 European Cup" },
    { image: "png/7.jpeg", title: "1972 European Cup" },
    { image: "png/8.jpeg", title: "1971 League Cup" },
    { image: "png/9.jpeg", title: "1963 Cup Winner's Cup" },
    { image: "png/11.jpeg", title: "1981 FA Cup" },
    { image: "png/12.jpeg", title: "1967 FA Cup" },
    { image: "png/14.jpeg", title: "Double-Winning Squad" },
    { image: "png/15.jpg", title: "2025 Europa League" }
];

function createFlipCard(image, title) {
    return `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${image}" alt="${title}">
                </div>
                <div class="flip-card-back">
                    <p>${title}</p>
                </div>
            </div>
        </div>
    `;
}

function renderFlipCards() {
    const container = document.getElementById('flipCardsContainer');
    const columns = [[], []]; // Two columns
    
    trophyData.forEach((trophy, index) => {
        const columnIndex = index % 2;
        columns[columnIndex].push(createFlipCard(trophy.image, trophy.title));
    });
    
    container.innerHTML = `
        <div class="column">${columns[0].join('')}</div>
        <div class="column">${columns[1].join('')}</div>
    `;
}


document.addEventListener('DOMContentLoaded', renderFlipCards);
