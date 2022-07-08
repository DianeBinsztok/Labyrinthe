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
            let square = {"x": x, "y": y, "clear": true, "visited": 0};
            // a - Si les coordonnées de la case correspondent à celles du départ ou du but:
            if (square.x === start.x && square.y === start.y) {
                square = "S";
            } else if (square.x === goal.x && square.y === goal.y) {
                square = "G";
            }
            // b - si les coordonnées de la case correspondent à celle d'un block:
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
const labyrinth = createLabyrinth(S, G, nbOfColumns, nbOfRows, blocks);


const checkAroundAndMove = (position) => {
    let steps = 0;
    if (position !== "G") {
        if (rightClear(position)) {
            console.log("Option droite ok");
            steps ++;
            position = moveRight(position, steps);
        }

        if (leftClear(position)) {
            console.log("Option gauche ok");
            steps ++;
            position = moveLeft(position, steps);
        }
        if (downClear(position)) {
            console.log("Option bas ok");
            steps ++;
            position = moveDown(position, steps);
        }
        if (upClear(position)) {
            console.log("Option haut ok");
            steps ++;
            position = moveUp(position, steps);
        }

    }else {
        console.log("Vous êtes arrivés à la position ", position)
    }

    return position;

}
// Tester les directions disponibles
const rightClear = (position) => {
    if (position.x !== 6) {
        if (labyrinth[position.y][position.x + 1].clear || labyrinth[position.y][position.x + 1] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
const leftClear = (position) => {
    if (position.x !== 0) {
        if (labyrinth[position.y][position.x - 1].clear || labyrinth[position.y][position.x - 1] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
const upClear = (position) => {
    if (position.y !== 0) {
        if (labyrinth[position.y - 1][position.x].clear || labyrinth[position.y - 1][position.x] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
const downClear = (position) => {
    if (position.y !== 6) {
        if (labyrinth[position.y + 1][position.x].clear || labyrinth[position.y + 1][position.x] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}

// Se déplacer:
const moveRight = (position, step) => {
    position = labyrinth[position.y][position.x + 1];
    position.visited = step;
    console.log("Nouvelle position: ", position);
    return position;
}
const moveLeft = (position, step) => {
    position = labyrinth[position.y][position.x - 1];
    position.visited = step;
    console.log("Nouvelle position: ", position);
    return position;
}
const moveUp = (position, step) => {
    position = labyrinth[position.y - 1][position.x];
    position.visited = step;
    console.log("Nouvelle position: ", position);
    return position;
}
const moveDown = (position, step) => {
    position = labyrinth[position.y + 1][position.x];
    position.visited = step;
    console.log("Nouvelle position: ", position);
    return position;
}


const findPath = (labyrinth, position, goal) => {
    while (position != goal) {
        let options = checkAroundAndMove(position);
        //console.log("Mes options: ",options);
        // tester les possibilités autour
        // pour toutes les options trouvées: avancer où je peux
        // recommencer

        //ou en profondeur:
        // si culdesac = reculer jusqu'à la prochaine intersection
        // reprendre dans une autre directioçn
    }
    console.log("Gagné");
}

console.table(labyrinth);
checkAroundAndMove(S);
