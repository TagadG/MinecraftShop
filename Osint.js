function verifierCode() {
    var codeCorrect = "FREAKY";
    var codeSaisi = document.getElementById("codeInput").value;
    
    var messageDiv = document.getElementById("message1");

    if (codeSaisi === codeCorrect) {
        messageDiv.textContent = "Votre coupon est: asqjqlqwaqvb@ouiqt.kwu";
        messageDiv.style.color = "green";
        messageDiv.style.display = "block";
    } else {
        messageDiv.textContent = "Code incorrect, essayez à nouveau.";
        messageDiv.style.color = "red";
        messageDiv.style.display = "block";
    }
}

function AfficherCle() {
	var messageDiv = document.getElementById("message2");
	messageDiv.textContent = "Clé du cryptage César:8";
    messageDiv.style.color = "white";
    messageDiv.style.display = "block";
}