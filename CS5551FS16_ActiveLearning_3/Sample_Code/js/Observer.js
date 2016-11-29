class Observer {
    constructor(electricField) {
        this.E = electricField;
    }
}

class xObserver extends Observer {
    constructor(electricField) {
        super(electricField);
        this.x = electricField.x;
    }
    
    get Value() {
        return this.x;
    }
}

class yObserver extends Observer {
    constructor(electricField) {
        super(electricField);
        this.y = electricField.y;
    }
    
    get Value() {
        return this.y;
    }
}

class zObserver extends Observer {
    constructor(electricField) {
        super(electricField);
        this.z = electricField.z;
    }
    
    get Value() {
        return this.z;
    }
}