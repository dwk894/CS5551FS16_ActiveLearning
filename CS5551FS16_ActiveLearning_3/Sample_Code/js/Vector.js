function vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

var vectorPlus = function(v1, v2) {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y,
        z: v1.z + v2.z
    };
}

var vectorNegation = function(v) {
    return {
        x: 0 - v.x,
        y: 0 - v.y,
        z: 0 - v.z
    };
}

var vectorMinus = function (v1, v2) {
    return vectorPlus(v1, vectorNegation(v2));
}

var vectorMultiplication = function (v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}

var vectorScalarMultiplication = function (v, s) {
    return {
        x: v.x * s,
        y: v.y * s,
        z: v.z * s
    };
}

var magnitude = function(v) {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2) + Math.pow(v.z, 2));
}