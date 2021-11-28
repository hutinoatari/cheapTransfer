const searchTransfer = () => {
    const points = document.forms.locationData.elements;
    const text = Array.from(points).map((point) => `[${point.value}]`).join("\n| (徒歩)\n");
    const output = document.querySelector("output");
    const button = document.querySelectorAll("button")[1];
    output.innerText = "検索中...";
    button.disabled = true;
    const necessaryTime = 2000 + Math.random() * 3000;
    setTimeout(() => {
        output.innerText = `${text}\n\n合計金額0円`;
        button.disabled = false;
        button.textContent = "再検索";
    }, necessaryTime);
}

const addRelayPoint = () => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const labelText = document.createTextNode("中継地点");
    const input = document.createElement("input");
    label.appendChild(labelText);
    label.appendChild(input);
    div.appendChild(label);
    const relayPoints = document.querySelector("#relayPoints");
    relayPoints.appendChild(div);
}