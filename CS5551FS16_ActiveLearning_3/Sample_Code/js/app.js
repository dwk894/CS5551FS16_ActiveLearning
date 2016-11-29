var pointCharges;
var targetPoint;
var chargeIndex;

$(
    function() {
        $('#add').click(
            function() {
                $('#addCharge').show();
            }
        );
    }
);

$(
    function() {
        $('#set').click(
            function() {
                $('#setTarget').show();
            }
        );
    }
);

$(
    function() {
        $('#cancelAdd').click(
            function() {
                $('#add_x').val('');
                $('#add_y').val('');
                $('#add_z').val('');
                $('#add_c').val('');
                $('#addCharge').hide();
            }
        );
    }
);

$(
    function() {
        $('#cancelSet').click(
            function() {
                $('#set_x').val('');
                $('#set_y').val('');
                $('#set_z').val('');
                $('#setTarget').hide();
            }
        );
    }
);

$(document).ready(
    function() {
        $('#addCharge').hide();
        $('#setTarget').hide();
        chargeIndex = 0;
        pointCharges = new List();
        $('#e_result').append('<p>E<sub>x</sub>(0, 0, 0) = 0<br>E<sub>y</sub>(0, 0, 0) = 0<br>E<sub>z</sub>(0, 0, 0) = 0');
        targetPoint = {
            x: 0,
            y: 0,
            z: 0
        };
    }
);

$(
    function() {
        $('#add2').click(
            function() {
                var x = $('#add_x').val();
                x = x.length === 0 || x === null ? 0 : parseFloat(x);
                var y = $('#add_y').val();
                y = y.length === 0 || y === null ? 0 : parseFloat(y);
                var z = $('#add_z').val();
                z = z.length === 0 || z === null ? 0 : parseFloat(z);
                var c = $('#add_c').val();
                c = c.length === 0 || c === null ? 1 : parseInt(c); // Acknowledge that charge can only be multiple of unit charge c.
                
                var charge = {
                    x: x,
                    y: y,
                    z: z,
                    c: c,
                    index: chargeIndex
                };
                
                if (pointCharges.push_back(charge)) {
                    $('#chargeResult').replaceWith('<div id = \'chargeResult\'></div>');
                    for (var node = pointCharges.head; node !== null; node = node.next) {
                        $('#chargeResult').append(
                            '<p id = \'' + node.data.index + '\'>' +
                            '(' + node.data.x + ', ' + node.data.y + ', ' + node.data.z + ') = ' + node.data.c + ' e\t' +
                            '<button onclick = \'del(' + node.data.index + ');\'>Delete</button>'
                        );
                    }
                    chargeIndex++;
                    
                    // Update results.
                    var electriField = new E_Field(pointCharges, targetPoint);
                    var xResult = new xObserver(electriField.target_E_field),
                        yResult = new yObserver(electriField.target_E_field),
                        zResult = new zObserver(electriField.target_E_field);
                    
                    $('#e_result').replaceWith('<div id = \'e_result\'></div>');
                    $('#e_result').append(
                        '<p>E<sub>x</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + xResult.Value + '<br>' + 
                        'E<sub>y</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + yResult.Value + '<br>' + 
                        'E<sub>z</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + zResult.Value + '</p>'
                    );
                }
            }
        );
    }
);

function del(i) {
    for (var node = pointCharges.head; node !== null; node = node.next) {
        if (node.data.index === i) {
            if (node === pointCharges.head) {
                pointCharges.pop_front();
            }
            else if (node === pointCharges.tail) {
                pointCharges.pop_back();
            }
            else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
                node.next = node.prev = null;
                pointCharges.length--;
            }
            
            break;
        }
    }
    
    if (pointCharges.empty()) {
        $('#chargeResult').replaceWith('<div id = \'chargeResult\' style = \'color: gray;\'><p>Currently no charge...</p></div>');
        
        $('#e_result').replaceWith('<div id = \'e_result\'></div>');
        $('#e_result').append(
            '<p>E<sub>x</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = 0<br>' + 
            'E<sub>y</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = 0<br>' + 
            'E<sub>z</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = 0</p>'
        );
    }
    else {
        $('#chargeResult').replaceWith('<div id = \'chargeResult\'></div>');
        for (var node = pointCharges.head; node !== null; node = node.next) {
            $('#chargeResult').append(
                '<p id = \'' + node.data.index + '\'>' +
                '(' + node.data.x + ', ' + node.data.y + ', ' + node.data.z + ') = ' + node.data.c + ' e\t' +
                '<button onclick = \'del(' + node.data.index + ');\'>Delete</button>'
            );
        }
        
        // Update results.
        var electriField = new E_Field(pointCharges, targetPoint);
        var xResult = new xObserver(electriField.target_E_field),
            yResult = new yObserver(electriField.target_E_field),
            zResult = new zObserver(electriField.target_E_field);

        $('#e_result').replaceWith('<div id = \'e_result\'></div>');
        $('#e_result').append(
            '<p>E<sub>x</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + xResult.Value + '<br>' + 
            'E<sub>y</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + yResult.Value + '<br>' + 
            'E<sub>z</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + zResult.Value + '</p>'
        );
    }
}

$(
    function() {
        $('#set2').click(
            function() {
                var x = $('#set_x').val();
                x = x.length === 0 || x === null ? 0 : parseFloat(x);
                var y = $('#set_y').val();
                y = y.length === 0 || y === null ? 0 : parseFloat(y);
                var z = $('#set_z').val();
                z = z.length === 0 || z === null ? 0 : parseFloat(z);
                
                targetPoint = {
                    x: x,
                    y: y,
                    z: z
                };
                
                if (pointCharges.empty()) {
                    $('#e_result').replaceWith('<div id = \'e_result\'></div>');
                    $('#e_result').append(
                        '<p>E<sub>x</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = 0<br>' + 
                        'E<sub>y</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = 0<br>' + 
                        'E<sub>z</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = 0</p>'
                    );
                }
                else {
                    // Update results.
                    var electriField = new E_Field(pointCharges, targetPoint);
                    var xResult = new xObserver(electriField.target_E_field),
                        yResult = new yObserver(electriField.target_E_field),
                        zResult = new zObserver(electriField.target_E_field);
                    
                    $('#e_result').replaceWith('<div id = \'e_result\'></div>');
                    $('#e_result').append(
                        '<p>E<sub>x</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + xResult.Value + '<br>' + 
                        'E<sub>y</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + yResult.Value + '<br>' + 
                        'E<sub>z</sub>(' + targetPoint.x + ', ' + targetPoint.y + ', ' + targetPoint.z + ') = ' + zResult.Value + '</p>'
                    );
                }
            }
        );
    }
);