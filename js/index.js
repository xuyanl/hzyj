$(function(){
	$('#fullpage').fullpage();

	var myModule = (function(){
	    var var1 = 1;
	    var var2 = 2;

	    function fn1(){
	    	console.log(1)
	    }
	    function fn2(){

	    }

	    return {
	        fn1: fn1,
	        fn2: fn2
	    };
	})();
	myModule.fn1();
	console.log(myModule)
})