export type Pokemon = {
    name: string;
    url: string;
};

// interface IPokemon {
//     name: string;
//     url: string;
// };

export type PokemonDetails = {
    id: number;
    name: string;
    ability: string;
    baseExperience: number;
    height: number;
    sprite: string;
    type: string;
}