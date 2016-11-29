const PI = Math.PI;
const e0 = 8.854 * Math.pow(10, -12);

class E_Field {
    constructor(source, target) {
        this.source = source; // List of source point charges
        this.target = {
            x: inchToMeter(target.x),
            y: inchToMeter(target.y),
            z: inchToMeter(target.z)
        }; // Target point.
    }
    
    get target_E_field() {
        return this.calculate();
    }
    
    calculate() {
        var addVector = {
            x: 0,
            y: 0,
            z: 0
        };
        
        for (var node = this.source.head; node !== null; node = node.next) {
            var sourceVector = {
                x: inchToMeter(node.data.x),
                y: inchToMeter(node.data.y),
                z: inchToMeter(node.data.z)
            };
            
            addVector = vectorPlus(
                addVector,
                vectorScalarMultiplication(
                    vectorMinus(this.target, sourceVector),
                    eToCoulomb(parseFloat(node.data.c)) / Math.pow(
                        magnitude(vectorMinus(this.target, sourceVector)),
                        3
                    )
                )
            );
        }
        
        var resultVector = vectorScalarMultiplication(addVector, (1 / (4 * PI * e0)));
        
        return resultVector;
    }
}