<template>
    <h1 v-if="!pokemon">
        Espera por favor... 
    </h1>
    <div v-else="pokemon">
        <h1>¿Quién es este pokémon?</h1>

        <PokemonPicture 
            v-bind:pokemonId="pokemon.id"
            v-bind:showPokemon="showPokemon" 
        />

        <PokemonsOptions 
            v-bind:pokemons="pokemonArr" 
            @selection-pokemon="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </template>
       
    </div>
   
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonsOptions from '@/components/PokemonsOptions';

import getPokemonOptions from '@/helpers/getPokemonsOptions'


export default {
    components: { PokemonsOptions, PokemonPicture },
    // data que el componente va a manejar - componente reactivo.
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( selectedId ) {
            this.showPokemon = true
            this.showAnswer = true

            if(selectedId === this.pokemon.id) {
                this.message = `¡Correcto! ${this.pokemon.name}`
            } else {
                this.message = `¡Oops! era ${this.pokemon.name}`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    // Ciclo de vida de Vue
    // Cuando el componente se monta en el DOM
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
