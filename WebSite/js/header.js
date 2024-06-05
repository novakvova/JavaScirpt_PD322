let xhr = new XMLHttpRequest();
xhr.open("GET", "/_header.html", false); //запит буде синхроний
xhr.send();
document.write(xhr.response);