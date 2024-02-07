function toggleModal(text) {
  var modal = document.getElementById("myModal");
  var modalText = document.getElementById("modalText");
  if (modal.style.display === "none" || modal.style.display === "") {
    modalText.textContent = text;
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function checkPassword() {
  var passwordInput = document.getElementById("passwordInput").value;
  // Check if the entered password is correct
  if (passwordInput === "070209Pride") {
    document.getElementById("videoContainer").style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

var audio = document.getElementById("myAudio");

    function playMusic() {
        audio.play();
    }

    function stopMusic() {
        audio.pause();
        audio.currentTime = 0;
    }