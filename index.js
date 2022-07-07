// I création du tableau
let nbOfColumns = 7;
let nbOfRows = 6;

// Placement des murs
const blocks = [{"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 4}, {"x": 3, "y": 1}, {
    "x": 3,
    "y": 2
}, {"x": 3, "y": 4}, {"x": 4, "y": 1}, {"x": 4, "y": 4}, {"x": 5, "y": 3}, {"x": 5, "y": 5}, {"x": 6, "y": 1}];
// Mise en place du labyrinthe
const createLabyrinth = (x, y, blocksTab) => {
    let labyrinth = [];
    // Nombre de lignes:
    for (let nbOfRows = 0; nbOfRows < y; nbOfRows++) {
        let row = [];
        // Nombre de colonnes sur chaque ligne:
        for (let nbOfColumns = 0; nbOfColumns < x; nbOfColumns++) {

            let square = {"x": nbOfColumns, "y": nbOfRows, "clear": true, "visited": false};
            // si les coordonnées de la case correspondent à celle d'un block
            blocksTab.forEach(element => {
                if ((element.x === square.x) && (element.y === square.y)) {
                    square.clear = false;
                }
            });


            row.push(square);
        }


        labyrinth.push(row);
    }

    return labyrinth;
}
const labyrinth = createLabyrinth(nbOfColumns, nbOfRows, blocks);


const S = labyrinth[0][0];
const G = labyrinth[2][4];
let blocktest = labyrinth[1][1];

console.log("coordonnées de S -> ", S);
console.log("coordonnées de G -> ", G);
console.log("coordonnées d'un bloc -> ", blocktest);

const findPath = (labyrinth, start, goal) => {
}

console.table(labyrinth);
