function saqlash() {
    const ism = document.getElementById("ism").value;
    const yosh = document.getElementById("yosh").value;
    const email = document.getElementById("email").value;
    const malumotlar = "Ism: " + ism + "Yosh: "+ yosh + "Email: " + email;
    document.getElementById("malumotlar").innerHTML = malumotlar;

  }

btn.addEventListener('click', function() {
    
   if (ism.value && yosh.value && email.value) {
    
    saqlash();

    ism.value = '';
    yosh.value = '';
    email.value = '';
   }

});

