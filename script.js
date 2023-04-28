$(function () {
    // initialiser i18n
    i18next.init({
        lng: 'fr', // langue par défaut
        debug: true,
        resources: {
            en: {
                translation: {
                    // clés de traduction en anglais
                    "navbar": {
                        "home": "Home",
                        "driver": "I am a taxi",
                        "info": "TaxiFy info",
                        "contact": "Contact"
                    }
                }
            },
            fr: {
                translation: {
                    // clés de traduction en français

                    "navbar":{
                        "home": "Accueil",
                        "driver": "Je suis un taxi",
                        "info": "TaxiFy info",
                        "contact": "Contact"
                      }

                }
            }
        }
    }, function (err, t) {
        // traduire le menu
        $('body').i18n();

        console.log(body);
    });

    // changer la langue lorsque l'utilisateur sélectionne une option dans le menu déroulant
    $('.language-selector').change(function () {
        var lang = $(this).val();
        i18next.changeLanguage(lang, function (err, t) {
            $('body').i18n();
        });
    });
});
