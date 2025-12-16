function showTab(id) {
document.querySelectorAll('.tab').forEach(t => t.style.display='none');
document.getElementById(id).style.display='block';
}


function calculateForex() {
fetch('/calculate/forex', {
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify({
lot: lot.value,
price: price.value,
leverage: leverage.value,
cover: cover.value
})
})
.then(res => res.json())
.then(data => result.innerText = JSON.stringify(data, null, 2));
}