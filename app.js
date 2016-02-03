(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.product = gems;
  });

  var gems = [
  {name: 'Azurite', price: 110.50},
	  {name: 'Bloodstone', price 5.95 },
		  {name: 'Zircon', price 3.95 }

	];
  };
})();
