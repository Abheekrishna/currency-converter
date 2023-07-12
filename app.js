const getData = (symbol) => {
    const url = `https://v6.exchangerate-api.com/v6/b9467f7847a6c8a5f6ce9bad/latest/${symbol}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.conversion_rates)
    })
}
getData('USD')