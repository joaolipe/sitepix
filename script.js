const countElement = document.getElementById('count');

function updateCount() {
    let count = parseInt(getCookie('accessCount')) || 0;
    count++;
    setCookie('accessCount', count, 365);
    countElement.textContent = `Acessos: ${count}`;
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

updateCount();