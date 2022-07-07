// I  - création du tableau

// a - Les proportions
let nbOfColumns = 7;
let nbOfRows = 6;

// b - Départ-arrivée
const S = {"x": 0, "y": 0};
const G = {"x": 4, "y": 2};

// c - Les murs
const blocks = [{"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 4}, {"x": 3, "y": 1}, {
    "x": 3,
    "y": 2
}, {"x": 3, "y": 4}, {"x": 4, "y": 1}, {"x": 4, "y": 4}, {"x": 5, "y": 3}, {"x": 5, "y": 5}, {"x": 6, "y": 1}];

// Mise en place du labyrinthe
const createLabyrinth = (start, goal, nbOfColumns, nbOfRows, blocksTab) => {
    let labyrinth = [];
    // Nombre de lignes:
    for (let y = 0; y < nbOfRows; y++) {
        let row = [];
        // Nombre de colonnes sur chaque ligne:
        for (let x = 0; x < nbOfColumns; x++) {
            // Nombre de case sur la ligne
            let square = {"x": x, "y": y, "clear": true, "visited": false};
            // a - Si les coordonnées de la case correspondent à celles du départ ou du but:
            if (square.x === start.x && square.y === start.y) {
                square = "S";
            } else if (square.x === goal.x && square.y === goal.y) {
                square = "G";
            }
            // b - si les coordonnées de la case correspondent à celle d'un block:
            blocksTab.forEach(element => {
                if ((element.x === square.x) && (element.y === square.y)) {
                    square="######";
                    //square.clear = false;
                }
            });
            row.push(square);
        }
        labyrinth.push(row);
    }
    return labyrinth;
}
const labyrinth = createLabyrinth(S, G, nbOfColumns, nbOfRows, blocks);

let blocktest = labyrinth[1][1];

console.log("coordonnées de S -> ", S);
console.log("coordonnées de G -> ", G);
console.log("coordonnées d'un bloc -> ", blocktest);

const findPath = (labyrinth, start, goal) => {
}

console.table(labyrinth);
