function changeLanguage() {
    let select = document.getElementById("language-selector");
    let value = select.value;
    window.location.href = "/path/to/new/page?lang=" + value;
  }
  