document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        '大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)]; 

    const resultElement = document.getElementById('result');

    const resultColors = {
        '大吉': 'deeppink',
        '吉': 'orangered',
        '中吉': 'green',
        '小吉': 'lawngreen',
        '末吉': 'deepskyblue',
        '凶': 'mediumblue',
        '大凶': 'darkmagenta',
    }

    resultElement.style.color = resultColors[result] || 'black';
    
    resultElement.textContent = `あなたの運勢は... ${result}!`;
});