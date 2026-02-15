
function enterPortal() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('portal').classList.remove('hidden');
}

function loginOfficer() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    if (user === "Commander" && pass === "Dynasty2026") {
        message.innerHTML = "Access Granted. Welcome Officer.";
        message.style.color = "green";
    } else {
        message.innerHTML = "Access Denied.";
        message.style.color = "red";
    }
    return false;
}
