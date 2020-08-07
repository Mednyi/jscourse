'use strict';
class Vector {
    constructor(p1 = {x:0, y:0}, p2 = {x:1, y:1}) {
        this.x = p2.x - p1.x;
        this.y = p2.y - p1.y;
    }
    get length () {
        return Math.hypot(this.x, this.y) // return (x**2 + y**2)**0.5
    }
}

/*export*/ const createVector = (p1, p2) => new Vector(p1, p2);

/*export*/ const add = (vect1, vect2) => {
    let x = vect1.x + vect2.x;
    let y = vect1.y + vect2.y;
    return new Vector(undefined, {x, y});
};

/*export*/ const sub = (vect1, vect2) => {
    let x = vect1.x - vect2.x;
    let y = vect1.y - vect2.y;
    return new Vector(undefined, {x, y});
};

export default {
    createVector,
    add,
    sub
}


