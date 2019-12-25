async function  _Caesars (op) {
    const strToCaesarize = document.querySelector('#string').value;
    const shiftNumber = document.querySelector('#number').value;
    document.querySelector('#result').textContent ='';
    document.querySelector('#error').textContent ='';
    const url = `api/${op}`;
    const res = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({strToCaesarize, shiftNumber})
    });
    let json;
    try{
        json = await res.json();
    }catch{
    document.querySelector('#error').textContent =
    'Server returned a bad response. Try again later!'
    }
    if(json.status && json.status ==='ok'){
        document.querySelector('#result').textContent = json.result;
    }else{
        document.querySelector('#error').textContent =json.message;
    }

}
document.querySelector('#button').addEventListener('click', ()=>{
    _Caesars(`caesarize`);
});