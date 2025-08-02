document.addEventListener("DOMContentLoaded", function () {
  // Show stored name when page loads
  const savedName = localStorage.getItem("visitorName");
  if (savedName) {
    showWelcomeName(savedName);
  }

  // Store Name Button
  const storeButton = document.getElementById("storeNameButton");
  if (storeButton) {
    storeButton.addEventListener("click", storeName);
  }

  // Form Submission
  const form = document.getElementById("messageForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const dob = document.getElementById("dob").value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const message = document.getElementById("messageText").value;

      if (!name || !dob || !gender || !message) {
        alert("Semua data harus diisi!");
        return;
      }

      document.getElementById("visitorName").textContent = name;
      localStorage.setItem("visitorName", name);

      const output = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `;

      document.getElementById("outputBox").innerHTML = output;
      form.reset();
    });
  }
});

function storeName() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (name) {
    localStorage.setItem("visitorName", name);
    showWelcomeName(name);
  }
}

function showWelcomeName(name) {
  const welcome = document.getElementById("visitorName");
  if (welcome) {
    welcome.textContent = name;
  }
}
