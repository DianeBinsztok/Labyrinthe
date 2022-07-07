// I création du tableau
let nbOfColumns = 7;
let nbOfRows = 6;
const createLabyrinth = (x, y) => {


    let labyrinth = [];
    /*
    for (let i = 0; i < x; i++) {
        let box = {"x": i, "y": 0};
        row.push(box);
    }

    for (let j = 0; j < y; j++) {
        labyrinth.push(row);
        //labyrinth[j].y = j;
        console.log( labyrinth[j]);
    }
     */
    for (let i = 0; i < x; i++) {
        let row = [];
        for (let j = 0; j < y; j++) {
            let box = {"x": i, "y": j};
            row.push(box);
        }
        labyrinth.push(row);
    }
    return labyrinth;
}
const labyrinth = createLabyrinth(nbOfColumns, nbOfRows);

// Placement des murs
const placeWalls = () => {
}
const start = labyrinth[0][0];
const S = {"x": 0, "y": 0};
const G = {"x": 4, "y": 2};

console.log(start);
console.table(labyrinth);
