document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        '大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)]; 

    const resultElement = document.getElementById('result');

    switch(result){
        case '大吉':
            resultElement.style.color = "deeppink";
            break;
        case '吉':
            resultElement.style.color = "orangered";
            break;
        case '中吉':
            resultElement.style.color = "green";
            break;
        case '小吉':
            resultElement.style.color = "lawngreen";
            break;
        case '末吉':
            resultElement.style.color = "deepskyblue";
            break;
        case '凶':
            resultElement.style.color = "mediumblue";
            break;
        case '大凶':
            resultElement.style.color = "darkmagenta";
            break;
        default:
            break;
    }

    //document.getElementById('result').textContent = `あなたの運勢は... ${result}!`;
    resultElement.textContent = `あなたの運勢は... ${result}!`;
});