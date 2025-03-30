/*
module.export = {
    sayHello: function()  {
        return 'hello';
    }
} */

/*
    function sayHello() {
    
    
            return 'hello';
        }
    
        module.export = sayHello; */

        var sayHello = function(){    
            return 'hello';  
        };
        
        module.exports = {
            sayHello: sayHello
        };
    