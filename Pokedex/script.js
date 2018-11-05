$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            pokemon: '',
            image: '',
            types: [],
            stats: {},
            abilities: [],
            valid: false
        }
    });

    var fetchName = function (num) {
        let name = "";
    };

    var fetchImage = function (num) {
        let image = "";
    };

    var fetchTypes = function (num) {
        let types = [];
    };

    var fetchStats = function (num) {
        let stats = {};
    };

    var fetchAbilities = function (num) {
        let abilities = [];
    };

    var initPokemon = function (num) {
        // app.pokemon =
        axios.get("https://pokeapi.co/api/v2/pokemon/" + num + "/")
            .then(function (res) {
                console.log(res.data);
            })
            .catch(function (err) {
                console.log(err);
            })
    };

    $('#pokeInput').on('input', function (e) {
        let val = $('#pokeInput').val();
        if (val === "" || !(/^[0-9]+$/g).exec(val)) {
            app.valid = false;
        } else {
            app.valid = true;
            initPokemon(parseInt(val));
        }
    });
});
