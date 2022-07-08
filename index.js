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



const checkAround = (position) => {
    console.log("Ma position de départ: ", position);
    let options = [];
    if (rightClear(position)) {
        console.log("option droite: ", labyrinth[position.y][position.x+1]);
        options.push(labyrinth[position.y][position.x+1]);
    }
    if (leftClear(position)) {
        console.log("option gauche: ", labyrinth[position.y][position.x-1]);
        options.push(labyrinth[position.y][position.x-1]);
    }
    if (downClear(position)) {
        console.log("option bas: ", labyrinth[position.y+1][position.x]);
        options.push(labyrinth[position.y+1][position.x]);
    }
    if (upClear(position)) {
        console.log("option haut: ", labyrinth[position.y-1][position.x]);
        options.push(labyrinth[position.y-1][position.x]);
    }
    console.log("Résultat de checkaround : mes options -> ", options);
}
const rightClear = (position) => {
    if (position.x !== 6) {
        if (labyrinth[position.y][position.x+1].clear || labyrinth[position.y][position.x+1] === "G") {
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
        if (labyrinth[position.y][position.x-1].clear|| labyrinth[position.y][position.x-1] === "G") {
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
        if (labyrinth[position.y-1][position.x].clear|| labyrinth[position.y-1][position.x] === "G") {
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
        if (labyrinth[position.y+1][position.x].clear || labyrinth[position.y+1][position.x] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}


const move = (position, newPosition) => {
    return position = newPosition;
}
const findPath = (labyrinth, position, goal) => {
    while (position != goal) {
        let options = checkAround(position);
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
checkAround(S);


// Essais avec juste des chaines de caractère
/*
const createLabyrinth2 = (start, goal, nbOfColumns, nbOfRows, blocksTab) => {
    let labyrinth = [];
    // Nombre de lignes:
    for (let y = 0; y < nbOfRows; y++) {
        let row = [];
        // Nombre de colonnes sur chaque ligne:
        for (let x = 0; x < nbOfColumns; x++) {
            // Nombre de case sur la ligne
            let square = "_";
            // a - Si les coordonnées de la case correspondent à celles du départ ou du but:
            if (x === start.x && y === start.y) {
                square = "S";
            } else if (x === goal.x && y === goal.y) {
                square = "G";
            }
            // b - si les coordonnées de la case correspondent à celle d'un block:
            blocksTab.forEach(element => {
                if ((element.x === x) && (element.y === y)) {
                    square = "###";
                }
            });
            row.push(square);
        }
        labyrinth.push(row);
    }
    return labyrinth;
}
const checkAround2 = (position) => {
    console.log("Ma position de départ: ", position);
    let options = [];
    if (rightClear2(position)) {
        console.log("option droite: ", labyrinth[position.y][position.x+1]);
        options.push(labyrinth[position.y][position.x+1]);
    }
    if (leftClear2(position)) {
        console.log("option gauche: ", labyrinth[position.y][position.x-1]);
        options.push(labyrinth[position.y][position.x-1]);
    }
    if (downClear2(position)) {
        console.log("option bas: ", labyrinth[position.y+1][position.x]);
        options.push(labyrinth[position.y+1][position.x]);
    }
    if (upClear2(position)) {
        console.log("option haut: ", labyrinth[position.y-1][position.x]);
        options.push(labyrinth[position.y-1][position.x]);
    }
    console.log("Résultat de checkaround : mes options -> ", options);
}
const rightClear2 = (position) => {
    if (position.x !== 6) {
        if (labyrinth[position.y][position.x+1] === "_" || labyrinth[position.y][position.x+1] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
const leftClear2 = (position) => {
    if (position.x !== 0) {
        if (labyrinth[position.y][position.x-1] === "_" || labyrinth[position.y][position.x-1] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
const upClear2 = (position) => {
    if (position.y !== 0) {
        if (labyrinth[position.y-1][position.x] === "_" || labyrinth[position.y-1][position.x] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
const downClear2 = (position) => {
    if (position.y !== 6) {
        if (labyrinth[position.y+1][position.x] === "_" || labyrinth[position.y+1][position.x] === "G") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}
*/