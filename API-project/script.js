$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            languages: ["yoda", "pirate", "valspeak", "minion", "ferblatin", "piglatin", "dothraki", "valyrian", "sindarin", "quenya", "sith", "cheunh", "gungan", "mandalorian", "huttese", "chef", "catalan", "oldenglish", "shakespeare", "vulcan", "klingon", "romulan", "jive", "dolan", "fudd", "cockney", "morse", "us2uk", "uk2us", "leetspeak", "brooklyn", "ermahgerd", "australian", "boston", "austrian", "article_rewrite", "braille", "numbers", "emoji"],
            original: '',
            language: '',
            translation: '',
            valid: false
        },
        methods: {
            setLang: function (e) {
                app.language = e.target.innerText;
                $('#funInput').attr('placeholder', 'Enter text');
            }
        }
    });

    var fetchTranslation = function (text, callback) {
        var uri = "https://api.funtranslations.com/translate/";
        uri += app.language.toLowerCase() + ".json";
        uri += "?text=" + encodeURI(text);
        axios.get(uri)
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (err) {
                app.valid = false;
            })
    }

    var translate = function (text) {
        app.original = text;
        fetchTranslation(text, function (data) {
            app.valid = true;
            app.translation = data.contents.translated;
        });
    };

    $('#funInput').keypress(function (e) {
        if (app.language === "") {
            app.valid = false;
            return false;
        }
        if (e.which == 13) {
            e.preventDefault();
            translate($('#funInput').val());
            return false;
        }
    });
});
