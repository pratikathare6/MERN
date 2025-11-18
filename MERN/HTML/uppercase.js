
async function toupper(){

    let var1 = document.getElementById("t1").value;

    const response = await fetch('http://localhost:3000/uppertext?t1='+var1);

     const ans = await response.text();

    document.getElementById("dd").innerHTML = ans;  

}

