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

    var toTitleCase = function (txt) {
        return txt.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    }

    var getName = function (data) {
        let name = "";

        name = toTitleCase(data.name);

        return name;
    };

    var getImage = function (data) {
        let image = "";

        image = data.sprites.front_default;

        return image;
    };

    var getTypes = function (data) {
        let types = [];

        data.types.forEach(type => {
            types.push(toTitleCase(type.type.name));
        });

        return types;
    };

    var getStats = function (data) {
        let stats = {};

        data.stats.forEach(stat => {
            stats[toTitleCase(stat.stat.name.replace("-", " "))] = stat.base_stat;
        });

        return stats;
    };

    var getAbilities = function (data) {
        let abilities = [];

        data.abilities.forEach(ability => {
            abilities.push(toTitleCase(ability.ability.name.replace("-", " ")));
        });

        return abilities;
    };

    var fetchPokemon = function (num, callback) {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + num + "/")
            .then(function (res) {
                callback(res.data);
            })
            .catch(function (err) {
                app.valid = false;
            })
    }

    var initPokemon = function (num) {
        fetchPokemon(num, function (data) {
            app.pokemon = getName(data);
            app.image = getImage(data);
            app.types = getTypes(data);
            app.stats = getStats(data);
            app.abilities = getAbilities(data);
        });
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
