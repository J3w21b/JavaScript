window.onload= function() {
    alert("Kişisel web siteme hoş geldiniz!");
};

document.getElementById("selamBtn").addEventListener("click", function() {
    alert("Merhaba! Hoş Geldin!");
});

document.getElementById("iletisimForm").addEventListener("submit",function(event) {
    event.preventDefault();
    let isim = document.getElementById("isim").value;
    let email= document.getElementById("email").value;

    document.getElementById("formSonuc").innerText =
        `Teşekkürler ${isim}! Mesajınız (${email}) başarıyla alındı.`;

    document.getElementById("iletisimForm").reset();
});
