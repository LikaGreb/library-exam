var resultVisitors = [];

visitors = JSON.parse(window.localStorage.getItem("visitors"));
cards = JSON.parse(window.localStorage.getItem("cards"));

for (let i = 0; i < visitors.length; i++){
    for (let j = 0; j < cards.length; j++){
        let match = 0;
        
        if (visitors[i].visitorName == cards[j].visitorName) {
            
            match++;
            let b = { name: cards[j].visitorName, m:match};
            resultVisitors.push(b);
            console.log(match);
        }
            
    }
}
console.log(resultVisitors);
var counter=0;
for (let i = 1; i < resultVisitors.length; i++){
    if (resultVisitors[0].name = resultVisitors[i].name) {
        counter++;
        console.log(counter)
    }console.log(counter)
}