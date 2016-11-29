// Define a double-linked list node.
function listNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

// Define a doubly linked list.
function List() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

// List function: push_back(data) -> O(1) time complexity
List.prototype.push_back = function(data) {
    var node = new listNode(data);
    
    // If the current list is empty...
    if (this.length === 0) {
        this.head = node;
        this.tail = this.head;
        this.length++;
    }
    // If the current list is not empty...
    else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
    }
    
    return true;
};

// List function: push_front(data) -> O(1) time complexity
List.prototype.push_front = function(data) {
    var node = new listNode(data);
    
    // If the current list is empty...
    if (this.length === 0) {
        this.head = node;
        this.tail = node;
        this.length++;
    }
    // If the current list is not empty...
    else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
    }
    
    return true;
};

// List function: pop_back() -> O(1) time complexity
List.prototype.pop_back = function() {
    // If the currentlist is empty...
    if (this.length === 0) {
        return false;
    }
    
    // If the currentlist has only 1 item...
    var node = null;
    if (this.length === 1) {
        node = this.head;
        this.head = this.tail = null;
        this.length = 0;
        
        return true;
    }
    
    // If the currentlist has more than 1 items...
    node = this.tail;
    this.tail = node.prev;
    node.prev.next = null;
    node.prev = null;
    this.length--;
    
    return true;
};

// List function: pop_front() -> O(1) time complexity
List.prototype.pop_front = function() {
    // If the current list is empty...
    if (this.length === 0) {
        return false;
    }
    
    // If the current list has only 1 item...
    var node = null;
    if (this.length === 1) {
        node = this.head;
        this.head = this.tail = null;
        this.length = 0;
        
        return true;
    }
    
    // If the current list has more than 1 items...
    node = this.head;
    this.head = node.next;
    node.next.prev = null;
    node.next = null;
    this.length--;
    
    return true;
};

// List function: empty() -> O(1) time complexity
List.prototype.empty = function() {
    return this.length === 0;
};