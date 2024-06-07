document.getElementById('vorc').addEventListener('submit',function(event){
    event.preventDefault();

    const ch=document.getElementById('cha').value;

    const findw = (ch) =>
    {
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
       return true;
        else
        return false;
    }
    const result=findw(ch);
    if(result == true)
    document.getElementById('result').textContent = `it is a vowel`;
    if(result == false)
        document.getElementById('result').textContent = `it is a consonant`;
});