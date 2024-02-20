document.getElementById('flip-button').addEventListener('click', function() {
    var result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    document.getElementById('result').textContent = 'Result: ' + result;
});