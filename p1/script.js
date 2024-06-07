document.getElementById('maxForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    
    const max = (a, b) => a > b ? a : b;
    
    const result = max(input1, input2);
    
    document.getElementById('result').textContent = `The maximum value is: ${result}`;
});
