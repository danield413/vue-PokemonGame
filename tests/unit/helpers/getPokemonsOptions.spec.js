import {getPokemons} from "@/helpers/getPokemonsOptions"
import getPokemonNames from "@/helpers/getPokemonsOptions"

describe('getPokemonsOptions', () => {

    test('debe retornar un arreglo de números', () => {

        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })


    test('debe de retonar un arreglo de 4 elementos con nombres de pokemons', async () => {

        const pokemons = await getPokemonNames([1,2,3,4])
        expect(pokemons.length).toBe(4)
    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', () => {
        
    })

})