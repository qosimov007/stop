function showSignInfo() {
    // Tanlangan belgini olish
    var sign = document.getElementById("signs").value;

    // Belgilar haqida ma'lumotlar
    var signInfo = {
        "Stop": "Bu belgi transport vositalari harakatini to'xtatishni bildiradi.",
        "Yield": "Bu belgi boshqa transport vositalariga yo'l berishni talab qiladi.",
        "Pedestrian Crossing": "Bu belgi piyodalar o'tish joyini bildiradi."
    };

    // Ma'lumotni ko'rsatish
    var infoText = document.getElementById("info-text");

    if (sign) {
        infoText.textContent = signInfo[sign];
    } else {
        infoText.textContent = "Bu yerda tanlangan yo'l belgisining ma'lumotlari paydo bo'ladi.";
    }
}
