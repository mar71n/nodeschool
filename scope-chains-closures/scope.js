function foo(){
    var bar = false;
    quux = 2;
    function zip(){
        bar = true;
        var quux=3;
    }
    return zip;
}