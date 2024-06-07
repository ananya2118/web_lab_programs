document.getElementById('maxof3').addEventListener('submit',function(event){
    event.preventDefault();

    const n1=parseFloat(document.getElementById('num1').value);
    const n2=parseFloat(document.getElementById('num2').value);
    const n3=parseFloat(document.getElementById('num3').value);

    const max = (a,b,c) =>{
        if(a>=b && a>=c)
            return a;
        else if(b>=a && b>=c)
            return b;
        else
            return c;
    }
    const result = max(n1,n2,n3);

    document.getElementById('result').textContent = `The maximum od 3 numbers is ${result}`;
});