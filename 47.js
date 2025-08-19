// Dado un array de objetos devolver cuales son las aficiones mas comunes de los usuarios

// Input: {aficiones de usuarios}
// Output: {informatica: 6, futbol: 4, cine: 3}

// Objeto mock
const users = [
    {name: 'denu', hobbie: ['cine', 'musica', 'bordado']},
    {name: 'deno', hobbie: ['surf', 'cocina', 'tecnologia']},
    {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
    {name: 'denu', hobbie: ['cocina', 'surf', 'tecnologia']},
    {name: 'denu', hobbie: ['cine', 'bordado', 'cocina']},
    {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
    {name: 'denu', hobbie: ['surf', 'cocina', 'bordado']},
    {name: 'denu', hobbie: ['bordado', 'musica', 'cocina']},
];

const getHobbiesCount = (users) => {
    let hobbiesMap = {};

    // Recorrer cada usuario
    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        // Recorrer cada hobby del usuario actual
        for (let j = 0; j < user.hobbie.length; j++) {
            let hobbie = user.hobbie[j];

            // Si el hobby ya existe en el mapa, incrementar su contador
            if (hobbiesMap[hobbie]) {
                hobbiesMap[hobbie]++;
            }
            // Si no existe, inicializarlo en 1
            else {
                hobbiesMap[hobbie] = 1;
            }
        }
    }

    return hobbiesMap;
};

console.log(getHobbiesCount(users))