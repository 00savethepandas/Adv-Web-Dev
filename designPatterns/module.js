/* DEMONSTRATES THE MODULE PATTERN
- Encapsulates "privacy", state and organization using closures.
- only the public API is returned, keeping everything else
  within closure private.
- provides a clean solution for shielding logic by doing all the
  heavy lifting while only exposing an interface we want other
  parts of the application to use. 
- there isn't real privacy in javascript, no access modifiers
- function scope simulates this concept
- variabl or methods declared are only available inside the
  module itself because of closure.
- variables or methods defined within returning object are 
  available to everyone.
*/

var aModule = {
    myProperty: "aValue",
    // Module configuration
    myConfig: {
        useCaching: true,
        language: "en"
    },
    // A method:
    myMethod: function(){
        console.log("What happens now?");
    },
    
    // Output a value based on the current configuration
    myMethod2: function(){
        console.log("Caching is:" + (this.myConfig.useCaching)? "enabled": "disabled"); 
        // conditional operator: enabled or disabled.
    },
    
    // override the current configuration: 
    myMethod3: function(newConfig){
        if(typeof newConfig ==="object"){
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
            }
    }
};
    
    // Outputs: What happens now? 
    aModule.myMethod();
    
    // Outputs: enabled
    aModule.myMethod2();
    
    // Outputs: fr
    aModule.myMethod3({
        language: "fr",
        useCaching: false
    });


//PUBLIC AND PRIVATE
    
/* LAYOUT

var myNameSpace = (function() {
    var myPrivateVar, myPrivateMethod;
    
    // A private counter variable
    myPrivateMethod = function(foo){
        console.log(foo);
    };
    
    return {
        // Public Variable:
        myPublicVar: "foo",
        
        // Public Function:
        myPublicFunction: function(bar){
            // Increment private counter
            myPrivateVar++;
            myPrivateMathod(bar); // Call private method
        }
    };
})();
*/
// BASKET EXAMPLE
var basketModule = (function(){   // note open (
    // private
    
    var basket = [];
    
    function doSomethingPrivate() {
        // ...
    }
    
    function doSomthingElsePrivate() {
        //...
    }
    
    // Return an object exposed to the public
    return {
        // Add items to our basket
        addItem: function(values) {
            basket.push(values);
        },
        
        // Get the count of items in the basket
        getItemCount: function(){
            return basket.length(){
        },
        
        // Public alias to a private function
        doSomthing: doSomethingPrivate,
        
        // Get the total value of items in the basket
        getTotal: function () {
            var q = this.getItemCount(),
                p = 0;
            while(q--) {
                p += basket[q].price;
            }
            return p;
            }
        };
    };
}());
