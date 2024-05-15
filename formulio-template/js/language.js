var languageData = {
        en: {
            heading: "Welcome",
        },
        es: {
            heading: "Bienvenido",
        },
        // Agrega más idiomas según sea necesario
    };

    function changeLanguage(language) {
        var data = languageData[language];
        if (data) {
            document.getElementById('heading').textContent = data.heading;
        }
    }