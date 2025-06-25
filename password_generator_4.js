function gen(){
    const upp=document.querySelector("#uppercase").checked;
    const low=document.querySelector("#lowercase").checked;
    const num=document.querySelector("#numbers").checked;
    const sym=document.querySelector("#symbols").checked;
    const len=parseInt(document.querySelector("#length").value);
    let pass=document.querySelector("#password");
    let all="";
    let a=0;
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+[]{}|;:,.<>?"; 
    if(len<8 || len===""){
        alert("Password length should be at least 8 characters.");
    return;
    }
    else{
        let password=[];
        if(upp){
            all+=upper[Math.floor(Math.random()*upper.length)];
            a++;
            password.push(upper[Math.floor(Math.random()*upper.length)]);
        }
        if(low){
            all+=lower[Math.floor(Math.random()*lower.length)];
            a++;
            password.push(lower[Math.floor(Math.random()*lower.length)]);
        }
        if(num){
            all+=numbers[Math.floor(Math.random()*numbers.length)];
            a++;
            password.push(numbers[Math.floor(Math.random()*numbers.length)]);
        }
        if(sym){
            all+=symbols[Math.floor(Math.random()*symbols.length)];
            a++;
            password.push(symbols[Math.floor(Math.random()*symbols.length)]);
        }
        if(a<=1){
            alert("Please select at least two character types.");
            return;
        }
        else{
        for(let i=password.length;i<len;i++){
            password.push(all[Math.floor(Math.random()*all.length)]);
            // pass.value=password;
        }
        password.sort(() => Math.random() - 0.5); //It shuffles the characters.
        pass.value=password.join("");
        }
    }
}
function copy(){
    event.preventDefault(); //Prevents from loading the page.
    let pass=document.querySelector("#password");
    pass.select();
    document.execCommand("copy");

    let form=document.querySelector(".card form");
    form.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        form.classList.remove("active");
    }, 1500);
}