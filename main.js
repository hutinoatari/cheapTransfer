const searchTransfer = () => {
    const {departurePoint, arrivalPoint} = document.forms.locationData.elements;
    const departurePointText = departurePoint.value.trim();
    const arrivalPointText = arrivalPoint.value.trim();
    if(arrivalPointText === "" || departurePointText === ""){
        alert("不正な入力です。");
        return;
    }
    const output = document.querySelector("output");
    const button = document.querySelector("button");
    output.innerText = "検索中...";
    button.disabled = true;
    const necessaryTime = 2000 + Math.random() * 3000;
    setTimeout(() => {
        output.innerText = `[${departurePointText}]\n|\n| (徒歩)\n|\n[${arrivalPointText}]\n\n合計金額0円`;
        button.disabled = false;
        button.textContent = "再検索";
    }, necessaryTime);
}