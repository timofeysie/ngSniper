'use strict';

/**
 * @ngdoc function
 * @name pdddemoApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the pdddemoApp
 */
angular.module('pdddemoApp')
	.controller('CheckoutCtrl', function ($scope, $filter, paginationService) {

		$scope.itemsPerPage = 5;
		$scope.num = 5;

		$scope.shoppingCart = {items: []};

		$scope.addItem = function () {

			$scope.shoppingCart.items.push({
				qty: 1,
				description: '',
				cost: 0
			});

			var instanceId = paginationService.getLastInstanceId();
			if(instanceId) {
				paginationService.setCurrentPage(instanceId, Math.ceil($scope.shoppingCart.items.length/$scope.itemsPerPage));
			}

		};

		$scope.removeItem = function (index) {
			$scope.shoppingCart.items.splice(index, 1);
		};

		$scope.$watch('shoppingCart', function () {
			console.log('shopping cart changed');

			$scope.total = 0;
			angular.forEach($scope.shoppingCart.items, function (item) {
				$scope.total += item.qty * item.cost;
			});

			//$scope.total = $filter('currency')($scope.total, '$');
		}, true);

		/*$scope.$watchCollection('shoppingCart', function () {
			console.log('shopping cart changed');

			$scope.total = 0;
			angular.forEach($scope.shoppingCart.items, function (item) {
				$scope.total += item.qty * item.cost;
			});

			$scope.total = $filter('currency')($scope.total, '$');
		});*/

		$scope.shoppingCart = {
			items: [
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgeta', cost: 59.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgetb', cost: 16.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 4, description: 'widgetc', cost: 18.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 3, description: 'widgetd', cost: 22.44, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 2, description: 'widgete', cost: 5.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 1, description: 'widgetf', cost: 9.99, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 5, description: 'widgetg', cost: 99.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 6, description: 'widgeth', cost: 39.95, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	},
				{qty: 8, description: 'widgeti', cost: 59.00, discounts: [{discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}, {discountlevel: [{level: 'a'}, {level: 'b'}]}],	max: 69.95, colors: [{color: 'blue'}, {color: 'red'}, {color: 'orange'}, {color: 'pink'}, {color: 'white'}], width: 20, height: 30, models: [{model: 'a'}, {model: 'b'}, {model: 'c'}, {model: 'd'}, {model: 'e'}], sku: '5555DFFDFF', relatedskus: [{relatedsku: 'a'}, {relatedsku: 'b'}, {relatedsku: 'c'}, {relatedsku: 'd'}, {relatedsku: 'e'}]	}



			]
		};

		$scope.checkoutStates = [
			{name: 'ALABAMA', abbreviation: 'AL'},
			{name: 'ALASKA', abbreviation: 'AK'},
			{name: 'AMERICAN SAMOA', abbreviation: 'AS'},
			{name: 'ARIZONA', abbreviation: 'AZ'},
			{name: 'ARKANSAS', abbreviation: 'AR'},
			{name: 'CALIFORNIA', abbreviation: 'CA'},
			{name: 'COLORADO', abbreviation: 'CO'},
			{name: 'CONNECTICUT', abbreviation: 'CT'},
			{name: 'DELAWARE', abbreviation: 'DE'},
			{name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
			{name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
			{name: 'FLORIDA', abbreviation: 'FL'},
			{name: 'GEORGIA', abbreviation: 'GA'},
			{name: 'GUAM', abbreviation: 'GU'},
			{name: 'HAWAII', abbreviation: 'HI'},
			{name: 'IDAHO', abbreviation: 'ID'},
			{name: 'ILLINOIS', abbreviation: 'IL'},
			{name: 'INDIANA', abbreviation: 'IN'},
			{name: 'IOWA', abbreviation: 'IA'},
			{name: 'KANSAS', abbreviation: 'KS'},
			{name: 'KENTUCKY', abbreviation: 'KY'},
			{name: 'LOUISIANA', abbreviation: 'LA'},
			{name: 'MAINE', abbreviation: 'ME'},
			{name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
			{name: 'MARYLAND', abbreviation: 'MD'},
			{name: 'MASSACHUSETTS', abbreviation: 'MA'},
			{name: 'MICHIGAN', abbreviation: 'MI'},
			{name: 'MINNESOTA', abbreviation: 'MN'},
			{name: 'MISSISSIPPI', abbreviation: 'MS'},
			{name: 'MISSOURI', abbreviation: 'MO'},
			{name: 'MONTANA', abbreviation: 'MT'},
			{name: 'NEBRASKA', abbreviation: 'NE'},
			{name: 'NEVADA', abbreviation: 'NV'},
			{name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
			{name: 'NEW JERSEY', abbreviation: 'NJ'},
			{name: 'NEW MEXICO', abbreviation: 'NM'},
			{name: 'NEW YORK', abbreviation: 'NY'},
			{name: 'NORTH CAROLINA', abbreviation: 'NC'},
			{name: 'NORTH DAKOTA', abbreviation: 'ND'},
			{name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
			{name: 'OHIO', abbreviation: 'OH'},
			{name: 'OKLAHOMA', abbreviation: 'OK'},
			{name: 'OREGON', abbreviation: 'OR'},
			{name: 'PALAU', abbreviation: 'PW'},
			{name: 'PENNSYLVANIA', abbreviation: 'PA'},
			{name: 'PUERTO RICO', abbreviation: 'PR'},
			{name: 'RHODE ISLAND', abbreviation: 'RI'},
			{name: 'SOUTH CAROLINA', abbreviation: 'SC'},
			{name: 'SOUTH DAKOTA', abbreviation: 'SD'},
			{name: 'TENNESSEE', abbreviation: 'TN'},
			{name: 'TEXAS', abbreviation: 'TX'},
			{name: 'UTAH', abbreviation: 'UT'},
			{name: 'VERMONT', abbreviation: 'VT'},
			{name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
			{name: 'VIRGINIA', abbreviation: 'VA'},
			{name: 'WASHINGTON', abbreviation: 'WA'},
			{name: 'WEST VIRGINIA', abbreviation: 'WV'},
			{name: 'WISCONSIN', abbreviation: 'WI'},
			{name: 'WYOMING', abbreviation: 'WY'}
		];

		$scope.checkoutMonths = [
			{name: 'January', number: '1', abbreviation: 'jan'},
			{name: 'February', number: '2', abbreviation: 'feb'},
			{name: 'March', number: '3', abbreviation: 'mar'},
			{name: 'April', number: '4', abbreviation: 'apr'},
			{name: 'May', number: '5', abbreviation: 'may'},
			{name: 'June', number: '6', abbreviation: 'jun'},
			{name: 'July', number: '7', abbreviation: 'jul'},
			{name: 'August', number: '8', abbreviation: 'aug'},
			{name: 'September', number: '9', abbreviation: 'sep'},
			{name: 'October', number: '10', abbreviation: 'oct'},
			{name: 'November', number: '11', abbreviation: 'nov'},
			{name: 'December', number: '12', abbreviation: 'dec'}
		];

		$scope.checkoutYears = [
			{name: '2015', number: '15', isLeap: 'n'},
			{name: '2016', number: '16', isLeap: 'n'},
			{name: '2017', number: '17', isLeap: 'n'},
			{name: '2018', number: '18', isLeap: 'n'},
			{name: '2019', number: '19', isLeap: 'n'},
			{name: '2020', number: '20', isLeap: 'n'},
			{name: '2021', number: '21', isLeap: 'n'},
			{name: '2022', number: '22', isLeap: 'n'},
			{name: '2023', number: '23', isLeap: 'n'},
			{name: '2024', number: '24', isLeap: 'n'},
			{name: '2025', number: '25', isLeap: 'n'}
		];

		$scope.checkoutCountries = [{
			name: 'Afghanistan',
			alpha2: 'AF',
			alpha3: 'AFG',
			countryCode: '004',
			iso31662: 'ISO 3166-2:AF',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Aland Islands',
			alpha2: 'AX',
			alpha3: 'ALA',
			countryCode: '248',
			iso31662: 'ISO 3166-2:AX',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Albania',
			alpha2: 'AL',
			alpha3: 'ALB',
			countryCode: '008',
			iso31662: 'ISO 3166-2:AL',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Algeria',
			alpha2: 'DZ',
			alpha3: 'DZA',
			countryCode: '012',
			iso31662: 'ISO 3166-2:DZ',
			regionCode: '002',
			subRegionCode: '015'
		}, {
			name: 'American Samoa',
			alpha2: 'AS',
			alpha3: 'ASM',
			countryCode: '016',
			iso31662: 'ISO 3166-2:AS',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Andorra',
			alpha2: 'AD',
			alpha3: 'AND',
			countryCode: '020',
			iso31662: 'ISO 3166-2:AD',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Angola',
			alpha2: 'AO',
			alpha3: 'AGO',
			countryCode: '024',
			iso31662: 'ISO 3166-2:AO',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Anguilla',
			alpha2: 'AI',
			alpha3: 'AIA',
			countryCode: '660',
			iso31662: 'ISO 3166-2:AI',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Antarctica',
			alpha2: 'AQ',
			alpha3: 'ATA',
			countryCode: '010',
			iso31662: 'ISO 3166-2:AQ'
		}, {
			name: 'Antigua and Barbuda',
			alpha2: 'AG',
			alpha3: 'ATG',
			countryCode: '028',
			iso31662: 'ISO 3166-2:AG',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Argentina',
			alpha2: 'AR',
			alpha3: 'ARG',
			countryCode: '032',
			iso31662: 'ISO 3166-2:AR',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Armenia',
			alpha2: 'AM',
			alpha3: 'ARM',
			countryCode: '051',
			iso31662: 'ISO 3166-2:AM',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Aruba',
			alpha2: 'AW',
			alpha3: 'ABW',
			countryCode: '533',
			iso31662: 'ISO 3166-2:AW',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Australia',
			alpha2: 'AU',
			alpha3: 'AUS',
			countryCode: '036',
			iso31662: 'ISO 3166-2:AU',
			regionCode: '009',
			subRegionCode: '053'
		}, {
			name: 'Austria',
			alpha2: 'AT',
			alpha3: 'AUT',
			countryCode: '040',
			iso31662: 'ISO 3166-2:AT',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'Azerbaijan',
			alpha2: 'AZ',
			alpha3: 'AZE',
			countryCode: '031',
			iso31662: 'ISO 3166-2:AZ',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Bahamas',
			alpha2: 'BS',
			alpha3: 'BHS',
			countryCode: '044',
			iso31662: 'ISO 3166-2:BS',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Bahrain',
			alpha2: 'BH',
			alpha3: 'BHR',
			countryCode: '048',
			iso31662: 'ISO 3166-2:BH',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Bangladesh',
			alpha2: 'BD',
			alpha3: 'BGD',
			countryCode: '050',
			iso31662: 'ISO 3166-2:BD',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Barbados',
			alpha2: 'BB',
			alpha3: 'BRB',
			countryCode: '052',
			iso31662: 'ISO 3166-2:BB',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Belarus',
			alpha2: 'BY',
			alpha3: 'BLR',
			countryCode: '112',
			iso31662: 'ISO 3166-2:BY',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Belgium',
			alpha2: 'BE',
			alpha3: 'BEL',
			countryCode: '056',
			iso31662: 'ISO 3166-2:BE',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'Belize',
			alpha2: 'BZ',
			alpha3: 'BLZ',
			countryCode: '084',
			iso31662: 'ISO 3166-2:BZ',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Benin',
			alpha2: 'BJ',
			alpha3: 'BEN',
			countryCode: '204',
			iso31662: 'ISO 3166-2:BJ',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Bermuda',
			alpha2: 'BM',
			alpha3: 'BMU',
			countryCode: '060',
			iso31662: 'ISO 3166-2:BM',
			regionCode: '019',
			subRegionCode: '021'
		}, {
			name: 'Bhutan',
			alpha2: 'BT',
			alpha3: 'BTN',
			countryCode: '064',
			iso31662: 'ISO 3166-2:BT',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Bolivia, Plurinational State of',
			alpha2: 'BO',
			alpha3: 'BOL',
			countryCode: '068',
			iso31662: 'ISO 3166-2:BO',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Bonaire, Sint Eustatius and Saba',
			alpha2: 'BQ',
			alpha3: 'BES',
			countryCode: '535',
			iso31662: 'ISO 3166-2:BQ',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Bosnia and Herzegovina',
			alpha2: 'BA',
			alpha3: 'BIH',
			countryCode: '070',
			iso31662: 'ISO 3166-2:BA',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Botswana',
			alpha2: 'BW',
			alpha3: 'BWA',
			countryCode: '072',
			iso31662: 'ISO 3166-2:BW',
			regionCode: '002',
			subRegionCode: '018'
		}, {
			name: 'Bouvet Island',
			alpha2: 'BV',
			alpha3: 'BVT',
			countryCode: '074',
			iso31662: 'ISO 3166-2:BV'
		}, {
			name: 'Brazil',
			alpha2: 'BR',
			alpha3: 'BRA',
			countryCode: '076',
			iso31662: 'ISO 3166-2:BR',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'British Indian Ocean Territory',
			alpha2: 'IO',
			alpha3: 'IOT',
			countryCode: '086',
			iso31662: 'ISO 3166-2:IO'
		}, {
			name: 'Brunei Darussalam',
			alpha2: 'BN',
			alpha3: 'BRN',
			countryCode: '096',
			iso31662: 'ISO 3166-2:BN',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Bulgaria',
			alpha2: 'BG',
			alpha3: 'BGR',
			countryCode: '100',
			iso31662: 'ISO 3166-2:BG',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Burkina Faso',
			alpha2: 'BF',
			alpha3: 'BFA',
			countryCode: '854',
			iso31662: 'ISO 3166-2:BF',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Burundi',
			alpha2: 'BI',
			alpha3: 'BDI',
			countryCode: '108',
			iso31662: 'ISO 3166-2:BI',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Cambodia',
			alpha2: 'KH',
			alpha3: 'KHM',
			countryCode: '116',
			iso31662: 'ISO 3166-2:KH',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Cameroon',
			alpha2: 'CM',
			alpha3: 'CMR',
			countryCode: '120',
			iso31662: 'ISO 3166-2:CM',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Canada',
			alpha2: 'CA',
			alpha3: 'CAN',
			countryCode: '124',
			iso31662: 'ISO 3166-2:CA',
			regionCode: '019',
			subRegionCode: '021'
		}, {
			name: 'Cape Verde',
			alpha2: 'CV',
			alpha3: 'CPV',
			countryCode: '132',
			iso31662: 'ISO 3166-2:CV',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Cayman Islands',
			alpha2: 'KY',
			alpha3: 'CYM',
			countryCode: '136',
			iso31662: 'ISO 3166-2:KY',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Central African Republic',
			alpha2: 'CF',
			alpha3: 'CAF',
			countryCode: '140',
			iso31662: 'ISO 3166-2:CF',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Chad',
			alpha2: 'TD',
			alpha3: 'TCD',
			countryCode: '148',
			iso31662: 'ISO 3166-2:TD',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Chile',
			alpha2: 'CL',
			alpha3: 'CHL',
			countryCode: '152',
			iso31662: 'ISO 3166-2:CL',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'China',
			alpha2: 'CN',
			alpha3: 'CHN',
			countryCode: '156',
			iso31662: 'ISO 3166-2:CN',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Christmas Island',
			alpha2: 'CX',
			alpha3: 'CXR',
			countryCode: '162',
			iso31662: 'ISO 3166-2:CX'
		}, {
			name: 'Cocos (Keeling) Islands',
			alpha2: 'CC',
			alpha3: 'CCK',
			countryCode: '166',
			iso31662: 'ISO 3166-2:CC'
		}, {
			name: 'Colombia',
			alpha2: 'CO',
			alpha3: 'COL',
			countryCode: '170',
			iso31662: 'ISO 3166-2:CO',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Comoros',
			alpha2: 'KM',
			alpha3: 'COM',
			countryCode: '174',
			iso31662: 'ISO 3166-2:KM',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Congo',
			alpha2: 'CG',
			alpha3: 'COG',
			countryCode: '178',
			iso31662: 'ISO 3166-2:CG',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Congo, the Democratic Republic of the',
			alpha2: 'CD',
			alpha3: 'COD',
			countryCode: '180',
			iso31662: 'ISO 3166-2:CD',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Cook Islands',
			alpha2: 'CK',
			alpha3: 'COK',
			countryCode: '184',
			iso31662: 'ISO 3166-2:CK',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Costa Rica',
			alpha2: 'CR',
			alpha3: 'CRI',
			countryCode: '188',
			iso31662: 'ISO 3166-2:CR',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Cote dIvoire',
			alpha2: 'CI',
			alpha3: 'CIV',
			countryCode: '384',
			iso31662: 'ISO 3166-2:CI',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Croatia',
			alpha2: 'HR',
			alpha3: 'HRV',
			countryCode: '191',
			iso31662: 'ISO 3166-2:HR',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Cuba',
			alpha2: 'CU',
			alpha3: 'CUB',
			countryCode: '192',
			iso31662: 'ISO 3166-2:CU',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Curacao',
			alpha2: 'CW',
			alpha3: 'CUW',
			countryCode: '531',
			iso31662: 'ISO 3166-2:CW',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Cyprus',
			alpha2: 'CY',
			alpha3: 'CYP',
			countryCode: '196',
			iso31662: 'ISO 3166-2:CY',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Czech Republic',
			alpha2: 'CZ',
			alpha3: 'CZE',
			countryCode: '203',
			iso31662: 'ISO 3166-2:CZ',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Denmark',
			alpha2: 'DK',
			alpha3: 'DNK',
			countryCode: '208',
			iso31662: 'ISO 3166-2:DK',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Djibouti',
			alpha2: 'DJ',
			alpha3: 'DJI',
			countryCode: '262',
			iso31662: 'ISO 3166-2:DJ',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Dominica',
			alpha2: 'DM',
			alpha3: 'DMA',
			countryCode: '212',
			iso31662: 'ISO 3166-2:DM',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Dominican Republic',
			alpha2: 'DO',
			alpha3: 'DOM',
			countryCode: '214',
			iso31662: 'ISO 3166-2:DO',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Ecuador',
			alpha2: 'EC',
			alpha3: 'ECU',
			countryCode: '218',
			iso31662: 'ISO 3166-2:EC',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Egypt',
			alpha2: 'EG',
			alpha3: 'EGY',
			countryCode: '818',
			iso31662: 'ISO 3166-2:EG',
			regionCode: '002',
			subRegionCode: '015'
		}, {
			name: 'El Salvador',
			alpha2: 'SV',
			alpha3: 'SLV',
			countryCode: '222',
			iso31662: 'ISO 3166-2:SV',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Equatorial Guinea',
			alpha2: 'GQ',
			alpha3: 'GNQ',
			countryCode: '226',
			iso31662: 'ISO 3166-2:GQ',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Eritrea',
			alpha2: 'ER',
			alpha3: 'ERI',
			countryCode: '232',
			iso31662: 'ISO 3166-2:ER',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Estonia',
			alpha2: 'EE',
			alpha3: 'EST',
			countryCode: '233',
			iso31662: 'ISO 3166-2:EE',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Ethiopia',
			alpha2: 'ET',
			alpha3: 'ETH',
			countryCode: '231',
			iso31662: 'ISO 3166-2:ET',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Falkland Islands (Malvinas)',
			alpha2: 'FK',
			alpha3: 'FLK',
			countryCode: '238',
			iso31662: 'ISO 3166-2:FK',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Faroe Islands',
			alpha2: 'FO',
			alpha3: 'FRO',
			countryCode: '234',
			iso31662: 'ISO 3166-2:FO',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Fiji',
			alpha2: 'FJ',
			alpha3: 'FJI',
			countryCode: '242',
			iso31662: 'ISO 3166-2:FJ',
			regionCode: '009',
			subRegionCode: '054'
		}, {
			name: 'Finland',
			alpha2: 'FI',
			alpha3: 'FIN',
			countryCode: '246',
			iso31662: 'ISO 3166-2:FI',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'France',
			alpha2: 'FR',
			alpha3: 'FRA',
			countryCode: '250',
			iso31662: 'ISO 3166-2:FR',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'French Guiana',
			alpha2: 'GF',
			alpha3: 'GUF',
			countryCode: '254',
			iso31662: 'ISO 3166-2:GF',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'French Polynesia',
			alpha2: 'PF',
			alpha3: 'PYF',
			countryCode: '258',
			iso31662: 'ISO 3166-2:PF',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'French Southern Territories',
			alpha2: 'TF',
			alpha3: 'ATF',
			countryCode: '260',
			iso31662: 'ISO 3166-2:TF'
		}, {
			name: 'Gabon',
			alpha2: 'GA',
			alpha3: 'GAB',
			countryCode: '266',
			iso31662: 'ISO 3166-2:GA',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Gambia',
			alpha2: 'GM',
			alpha3: 'GMB',
			countryCode: '270',
			iso31662: 'ISO 3166-2:GM',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Georgia',
			alpha2: 'GE',
			alpha3: 'GEO',
			countryCode: '268',
			iso31662: 'ISO 3166-2:GE',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Germany',
			alpha2: 'DE',
			alpha3: 'DEU',
			countryCode: '276',
			iso31662: 'ISO 3166-2:DE',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'Ghana',
			alpha2: 'GH',
			alpha3: 'GHA',
			countryCode: '288',
			iso31662: 'ISO 3166-2:GH',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Gibraltar',
			alpha2: 'GI',
			alpha3: 'GIB',
			countryCode: '292',
			iso31662: 'ISO 3166-2:GI',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Greece',
			alpha2: 'GR',
			alpha3: 'GRC',
			countryCode: '300',
			iso31662: 'ISO 3166-2:GR',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Greenland',
			alpha2: 'GL',
			alpha3: 'GRL',
			countryCode: '304',
			iso31662: 'ISO 3166-2:GL',
			regionCode: '019',
			subRegionCode: '021'
		}, {
			name: 'Grenada',
			alpha2: 'GD',
			alpha3: 'GRD',
			countryCode: '308',
			iso31662: 'ISO 3166-2:GD',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Guadeloupe',
			alpha2: 'GP',
			alpha3: 'GLP',
			countryCode: '312',
			iso31662: 'ISO 3166-2:GP',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Guam',
			alpha2: 'GU',
			alpha3: 'GUM',
			countryCode: '316',
			iso31662: 'ISO 3166-2:GU',
			regionCode: '009',
			subRegionCode: '057'
		}, {
			name: 'Guatemala',
			alpha2: 'GT',
			alpha3: 'GTM',
			countryCode: '320',
			iso31662: 'ISO 3166-2:GT',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Guernsey',
			alpha2: 'GG',
			alpha3: 'GGY',
			countryCode: '831',
			iso31662: 'ISO 3166-2:GG',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Guinea',
			alpha2: 'GN',
			alpha3: 'GIN',
			countryCode: '324',
			iso31662: 'ISO 3166-2:GN',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Guinea-Bissau',
			alpha2: 'GW',
			alpha3: 'GNB',
			countryCode: '624',
			iso31662: 'ISO 3166-2:GW',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Guyana',
			alpha2: 'GY',
			alpha3: 'GUY',
			countryCode: '328',
			iso31662: 'ISO 3166-2:GY',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Haiti',
			alpha2: 'HT',
			alpha3: 'HTI',
			countryCode: '332',
			iso31662: 'ISO 3166-2:HT',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Heard Island and McDonald Islands',
			alpha2: 'HM',
			alpha3: 'HMD',
			countryCode: '334',
			iso31662: 'ISO 3166-2:HM'
		}, {
			name: 'Holy See (Vatican City State)',
			alpha2: 'VA',
			alpha3: 'VAT',
			countryCode: '336',
			iso31662: 'ISO 3166-2:VA',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Honduras',
			alpha2: 'HN',
			alpha3: 'HND',
			countryCode: '340',
			iso31662: 'ISO 3166-2:HN',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Hong Kong',
			alpha2: 'HK',
			alpha3: 'HKG',
			countryCode: '344',
			iso31662: 'ISO 3166-2:HK',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Hungary',
			alpha2: 'HU',
			alpha3: 'HUN',
			countryCode: '348',
			iso31662: 'ISO 3166-2:HU',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Iceland',
			alpha2: 'IS',
			alpha3: 'ISL',
			countryCode: '352',
			iso31662: 'ISO 3166-2:IS',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'India',
			alpha2: 'IN',
			alpha3: 'IND',
			countryCode: '356',
			iso31662: 'ISO 3166-2:IN',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Indonesia',
			alpha2: 'ID',
			alpha3: 'IDN',
			countryCode: '360',
			iso31662: 'ISO 3166-2:ID',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Iran, Islamic Republic of',
			alpha2: 'IR',
			alpha3: 'IRN',
			countryCode: '364',
			iso31662: 'ISO 3166-2:IR',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Iraq',
			alpha2: 'IQ',
			alpha3: 'IRQ',
			countryCode: '368',
			iso31662: 'ISO 3166-2:IQ',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Ireland',
			alpha2: 'IE',
			alpha3: 'IRL',
			countryCode: '372',
			iso31662: 'ISO 3166-2:IE',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Isle of Man',
			alpha2: 'IM',
			alpha3: 'IMN',
			countryCode: '833',
			iso31662: 'ISO 3166-2:IM',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Israel',
			alpha2: 'IL',
			alpha3: 'ISR',
			countryCode: '376',
			iso31662: 'ISO 3166-2:IL',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Italy',
			alpha2: 'IT',
			alpha3: 'ITA',
			countryCode: '380',
			iso31662: 'ISO 3166-2:IT',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Jamaica',
			alpha2: 'JM',
			alpha3: 'JAM',
			countryCode: '388',
			iso31662: 'ISO 3166-2:JM',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Japan',
			alpha2: 'JP',
			alpha3: 'JPN',
			countryCode: '392',
			iso31662: 'ISO 3166-2:JP',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Jersey',
			alpha2: 'JE',
			alpha3: 'JEY',
			countryCode: '832',
			iso31662: 'ISO 3166-2:JE',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Jordan',
			alpha2: 'JO',
			alpha3: 'JOR',
			countryCode: '400',
			iso31662: 'ISO 3166-2:JO',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Kazakhstan',
			alpha2: 'KZ',
			alpha3: 'KAZ',
			countryCode: '398',
			iso31662: 'ISO 3166-2:KZ',
			regionCode: '142',
			subRegionCode: '143'
		}, {
			name: 'Kenya',
			alpha2: 'KE',
			alpha3: 'KEN',
			countryCode: '404',
			iso31662: 'ISO 3166-2:KE',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Kiribati',
			alpha2: 'KI',
			alpha3: 'KIR',
			countryCode: '296',
			iso31662: 'ISO 3166-2:KI',
			regionCode: '009',
			subRegionCode: '057'
		}, {
			name: 'Korea, Democratic Peoples Republic of',
			alpha2: 'KP',
			alpha3: 'PRK',
			countryCode: '408',
			iso31662: 'ISO 3166-2:KP',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Korea, Republic of',
			alpha2: 'KR',
			alpha3: 'KOR',
			countryCode: '410',
			iso31662: 'ISO 3166-2:KR',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Kuwait',
			alpha2: 'KW',
			alpha3: 'KWT',
			countryCode: '414',
			iso31662: 'ISO 3166-2:KW',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Kyrgyzstan',
			alpha2: 'KG',
			alpha3: 'KGZ',
			countryCode: '417',
			iso31662: 'ISO 3166-2:KG',
			regionCode: '142',
			subRegionCode: '143'
		}, {
			name: 'Lao Peoples Democratic Republic',
			alpha2: 'LA',
			alpha3: 'LAO',
			countryCode: '418',
			iso31662: 'ISO 3166-2:LA',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Latvia',
			alpha2: 'LV',
			alpha3: 'LVA',
			countryCode: '428',
			iso31662: 'ISO 3166-2:LV',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Lebanon',
			alpha2: 'LB',
			alpha3: 'LBN',
			countryCode: '422',
			iso31662: 'ISO 3166-2:LB',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Lesotho',
			alpha2: 'LS',
			alpha3: 'LSO',
			countryCode: '426',
			iso31662: 'ISO 3166-2:LS',
			regionCode: '002',
			subRegionCode: '018'
		}, {
			name: 'Liberia',
			alpha2: 'LR',
			alpha3: 'LBR',
			countryCode: '430',
			iso31662: 'ISO 3166-2:LR',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Libya',
			alpha2: 'LY',
			alpha3: 'LBY',
			countryCode: '434',
			iso31662: 'ISO 3166-2:LY',
			regionCode: '002',
			subRegionCode: '015'
		}, {
			name: 'Liechtenstein',
			alpha2: 'LI',
			alpha3: 'LIE',
			countryCode: '438',
			iso31662: 'ISO 3166-2:LI',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'Lithuania',
			alpha2: 'LT',
			alpha3: 'LTU',
			countryCode: '440',
			iso31662: 'ISO 3166-2:LT',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Luxembourg',
			alpha2: 'LU',
			alpha3: 'LUX',
			countryCode: '442',
			iso31662: 'ISO 3166-2:LU',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'Macao',
			alpha2: 'MO',
			alpha3: 'MAC',
			countryCode: '446',
			iso31662: 'ISO 3166-2:MO',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Macedonia, the former Yugoslav Republic of',
			alpha2: 'MK',
			alpha3: 'MKD',
			countryCode: '807',
			iso31662: 'ISO 3166-2:MK',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Madagascar',
			alpha2: 'MG',
			alpha3: 'MDG',
			countryCode: '450',
			iso31662: 'ISO 3166-2:MG',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Malawi',
			alpha2: 'MW',
			alpha3: 'MWI',
			countryCode: '454',
			iso31662: 'ISO 3166-2:MW',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Malaysia',
			alpha2: 'MY',
			alpha3: 'MYS',
			countryCode: '458',
			iso31662: 'ISO 3166-2:MY',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Maldives',
			alpha2: 'MV',
			alpha3: 'MDV',
			countryCode: '462',
			iso31662: 'ISO 3166-2:MV',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Mali',
			alpha2: 'ML',
			alpha3: 'MLI',
			countryCode: '466',
			iso31662: 'ISO 3166-2:ML',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Malta',
			alpha2: 'MT',
			alpha3: 'MLT',
			countryCode: '470',
			iso31662: 'ISO 3166-2:MT',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Marshall Islands',
			alpha2: 'MH',
			alpha3: 'MHL',
			countryCode: '584',
			iso31662: 'ISO 3166-2:MH',
			regionCode: '009',
			subRegionCode: '057'
		}, {
			name: 'Martinique',
			alpha2: 'MQ',
			alpha3: 'MTQ',
			countryCode: '474',
			iso31662: 'ISO 3166-2:MQ',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Mauritania',
			alpha2: 'MR',
			alpha3: 'MRT',
			countryCode: '478',
			iso31662: 'ISO 3166-2:MR',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Mauritius',
			alpha2: 'MU',
			alpha3: 'MUS',
			countryCode: '480',
			iso31662: 'ISO 3166-2:MU',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Mayotte',
			alpha2: 'YT',
			alpha3: 'MYT',
			countryCode: '175',
			iso31662: 'ISO 3166-2:YT',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Mexico',
			alpha2: 'MX',
			alpha3: 'MEX',
			countryCode: '484',
			iso31662: 'ISO 3166-2:MX',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Micronesia, Federated States of',
			alpha2: 'FM',
			alpha3: 'FSM',
			countryCode: '583',
			iso31662: 'ISO 3166-2:FM',
			regionCode: '009',
			subRegionCode: '057'
		}, {
			name: 'Moldova, Republic of',
			alpha2: 'MD',
			alpha3: 'MDA',
			countryCode: '498',
			iso31662: 'ISO 3166-2:MD',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Monaco',
			alpha2: 'MC',
			alpha3: 'MCO',
			countryCode: '492',
			iso31662: 'ISO 3166-2:MC',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'Mongolia',
			alpha2: 'MN',
			alpha3: 'MNG',
			countryCode: '496',
			iso31662: 'ISO 3166-2:MN',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Montenegro',
			alpha2: 'ME',
			alpha3: 'MNE',
			countryCode: '499',
			iso31662: 'ISO 3166-2:ME',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Montserrat',
			alpha2: 'MS',
			alpha3: 'MSR',
			countryCode: '500',
			iso31662: 'ISO 3166-2:MS',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Morocco',
			alpha2: 'MA',
			alpha3: 'MAR',
			countryCode: '504',
			iso31662: 'ISO 3166-2:MA',
			regionCode: '002',
			subRegionCode: '015'
		}, {
			name: 'Mozambique',
			alpha2: 'MZ',
			alpha3: 'MOZ',
			countryCode: '508',
			iso31662: 'ISO 3166-2:MZ',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Myanmar',
			alpha2: 'MM',
			alpha3: 'MMR',
			countryCode: '104',
			iso31662: 'ISO 3166-2:MM',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Namibia',
			alpha2: 'NA',
			alpha3: 'NAM',
			countryCode: '516',
			iso31662: 'ISO 3166-2:NA',
			regionCode: '002',
			subRegionCode: '018'
		}, {
			name: 'Nauru',
			alpha2: 'NR',
			alpha3: 'NRU',
			countryCode: '520',
			iso31662: 'ISO 3166-2:NR',
			regionCode: '009',
			subRegionCode: '057'
		}, {
			name: 'Nepal',
			alpha2: 'NP',
			alpha3: 'NPL',
			countryCode: '524',
			iso31662: 'ISO 3166-2:NP',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Netherlands',
			alpha2: 'NL',
			alpha3: 'NLD',
			countryCode: '528',
			iso31662: 'ISO 3166-2:NL',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'New Caledonia',
			alpha2: 'NC',
			alpha3: 'NCL',
			countryCode: '540',
			iso31662: 'ISO 3166-2:NC',
			regionCode: '009',
			subRegionCode: '054'
		}, {
			name: 'New Zealand',
			alpha2: 'NZ',
			alpha3: 'NZL',
			countryCode: '554',
			iso31662: 'ISO 3166-2:NZ',
			regionCode: '009',
			subRegionCode: '053'
		}, {
			name: 'Nicaragua',
			alpha2: 'NI',
			alpha3: 'NIC',
			countryCode: '558',
			iso31662: 'ISO 3166-2:NI',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Niger',
			alpha2: 'NE',
			alpha3: 'NER',
			countryCode: '562',
			iso31662: 'ISO 3166-2:NE',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Nigeria',
			alpha2: 'NG',
			alpha3: 'NGA',
			countryCode: '566',
			iso31662: 'ISO 3166-2:NG',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Niue',
			alpha2: 'NU',
			alpha3: 'NIU',
			countryCode: '570',
			iso31662: 'ISO 3166-2:NU',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Norfolk Island',
			alpha2: 'NF',
			alpha3: 'NFK',
			countryCode: '574',
			iso31662: 'ISO 3166-2:NF',
			regionCode: '009',
			subRegionCode: '053'
		}, {
			name: 'Northern Mariana Islands',
			alpha2: 'MP',
			alpha3: 'MNP',
			countryCode: '580',
			iso31662: 'ISO 3166-2:MP',
			regionCode: '009',
			subRegionCode: '057'
		}, {
			name: 'Norway',
			alpha2: 'NO',
			alpha3: 'NOR',
			countryCode: '578',
			iso31662: 'ISO 3166-2:NO',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Oman',
			alpha2: 'OM',
			alpha3: 'OMN',
			countryCode: '512',
			iso31662: 'ISO 3166-2:OM',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Pakistan',
			alpha2: 'PK',
			alpha3: 'PAK',
			countryCode: '586',
			iso31662: 'ISO 3166-2:PK',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Palau',
			alpha2: 'PW',
			alpha3: 'PLW',
			countryCode: '585',
			iso31662: 'ISO 3166-2:PW',
			regionCode: '009',
			subRegionCode: '057'
		}, {
			name: 'Palestine, State of',
			alpha2: 'PS',
			alpha3: 'PSE',
			countryCode: '275',
			iso31662: 'ISO 3166-2:PS',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Panama',
			alpha2: 'PA',
			alpha3: 'PAN',
			countryCode: '591',
			iso31662: 'ISO 3166-2:PA',
			regionCode: '019',
			subRegionCode: '013'
		}, {
			name: 'Papua New Guinea',
			alpha2: 'PG',
			alpha3: 'PNG',
			countryCode: '598',
			iso31662: 'ISO 3166-2:PG',
			regionCode: '009',
			subRegionCode: '054'
		}, {
			name: 'Paraguay',
			alpha2: 'PY',
			alpha3: 'PRY',
			countryCode: '600',
			iso31662: 'ISO 3166-2:PY',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Peru',
			alpha2: 'PE',
			alpha3: 'PER',
			countryCode: '604',
			iso31662: 'ISO 3166-2:PE',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Philippines',
			alpha2: 'PH',
			alpha3: 'PHL',
			countryCode: '608',
			iso31662: 'ISO 3166-2:PH',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Pitcairn',
			alpha2: 'PN',
			alpha3: 'PCN',
			countryCode: '612',
			iso31662: 'ISO 3166-2:PN',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Poland',
			alpha2: 'PL',
			alpha3: 'POL',
			countryCode: '616',
			iso31662: 'ISO 3166-2:PL',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Portugal',
			alpha2: 'PT',
			alpha3: 'PRT',
			countryCode: '620',
			iso31662: 'ISO 3166-2:PT',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Puerto Rico',
			alpha2: 'PR',
			alpha3: 'PRI',
			countryCode: '630',
			iso31662: 'ISO 3166-2:PR',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Qatar',
			alpha2: 'QA',
			alpha3: 'QAT',
			countryCode: '634',
			iso31662: 'ISO 3166-2:QA',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Reunion',
			alpha2: 'RE',
			alpha3: 'REU',
			countryCode: '638',
			iso31662: 'ISO 3166-2:RE',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Romania',
			alpha2: 'RO',
			alpha3: 'ROU',
			countryCode: '642',
			iso31662: 'ISO 3166-2:RO',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Russian Federation',
			alpha2: 'RU',
			alpha3: 'RUS',
			countryCode: '643',
			iso31662: 'ISO 3166-2:RU',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Rwanda',
			alpha2: 'RW',
			alpha3: 'RWA',
			countryCode: '646',
			iso31662: 'ISO 3166-2:RW',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Saint Barthalemy',
			alpha2: 'BL',
			alpha3: 'BLM',
			countryCode: '652',
			iso31662: 'ISO 3166-2:BL',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Saint Helena, Ascension and Tristan da Cunha',
			alpha2: 'SH',
			alpha3: 'SHN',
			countryCode: '654',
			iso31662: 'ISO 3166-2:SH',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Saint Kitts and Nevis',
			alpha2: 'KN',
			alpha3: 'KNA',
			countryCode: '659',
			iso31662: 'ISO 3166-2:KN',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Saint Lucia',
			alpha2: 'LC',
			alpha3: 'LCA',
			countryCode: '662',
			iso31662: 'ISO 3166-2:LC',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Saint Martin (French part)',
			alpha2: 'MF',
			alpha3: 'MAF',
			countryCode: '663',
			iso31662: 'ISO 3166-2:MF',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Saint Pierre and Miquelon',
			alpha2: 'PM',
			alpha3: 'SPM',
			countryCode: '666',
			iso31662: 'ISO 3166-2:PM',
			regionCode: '019',
			subRegionCode: '021'
		}, {
			name: 'Saint Vincent and the Grenadines',
			alpha2: 'VC',
			alpha3: 'VCT',
			countryCode: '670',
			iso31662: 'ISO 3166-2:VC',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Samoa',
			alpha2: 'WS',
			alpha3: 'WSM',
			countryCode: '882',
			iso31662: 'ISO 3166-2:WS',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'San Marino',
			alpha2: 'SM',
			alpha3: 'SMR',
			countryCode: '674',
			iso31662: 'ISO 3166-2:SM',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Sao Tome and Principe',
			alpha2: 'ST',
			alpha3: 'STP',
			countryCode: '678',
			iso31662: 'ISO 3166-2:ST',
			regionCode: '002',
			subRegionCode: '017'
		}, {
			name: 'Saudi Arabia',
			alpha2: 'SA',
			alpha3: 'SAU',
			countryCode: '682',
			iso31662: 'ISO 3166-2:SA',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Senegal',
			alpha2: 'SN',
			alpha3: 'SEN',
			countryCode: '686',
			iso31662: 'ISO 3166-2:SN',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Serbia',
			alpha2: 'RS',
			alpha3: 'SRB',
			countryCode: '688',
			iso31662: 'ISO 3166-2:RS',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Seychelles',
			alpha2: 'SC',
			alpha3: 'SYC',
			countryCode: '690',
			iso31662: 'ISO 3166-2:SC',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Sierra Leone',
			alpha2: 'SL',
			alpha3: 'SLE',
			countryCode: '694',
			iso31662: 'ISO 3166-2:SL',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Singapore',
			alpha2: 'SG',
			alpha3: 'SGP',
			countryCode: '702',
			iso31662: 'ISO 3166-2:SG',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Sint Maarten (Dutch part)',
			alpha2: 'SX',
			alpha3: 'SXM',
			countryCode: '534',
			iso31662: 'ISO 3166-2:SX',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Slovakia',
			alpha2: 'SK',
			alpha3: 'SVK',
			countryCode: '703',
			iso31662: 'ISO 3166-2:SK',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'Slovenia',
			alpha2: 'SI',
			alpha3: 'SVN',
			countryCode: '705',
			iso31662: 'ISO 3166-2:SI',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Solomon Islands',
			alpha2: 'SB',
			alpha3: 'SLB',
			countryCode: '090',
			iso31662: 'ISO 3166-2:SB',
			regionCode: '009',
			subRegionCode: '054'
		}, {
			name: 'Somalia',
			alpha2: 'SO',
			alpha3: 'SOM',
			countryCode: '706',
			iso31662: 'ISO 3166-2:SO',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'South Africa',
			alpha2: 'ZA',
			alpha3: 'ZAF',
			countryCode: '710',
			iso31662: 'ISO 3166-2:ZA',
			regionCode: '002',
			subRegionCode: '018'
		}, {
			name: 'South Georgia and the South Sandwich Islands',
			alpha2: 'GS',
			alpha3: 'SGS',
			countryCode: '239',
			iso31662: 'ISO 3166-2:GS'
		}, {
			name: 'South Sudan',
			alpha2: 'SS',
			alpha3: 'SSD',
			countryCode: '728',
			iso31662: 'ISO 3166-2:SS',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Spain',
			alpha2: 'ES',
			alpha3: 'ESP',
			countryCode: '724',
			iso31662: 'ISO 3166-2:ES',
			regionCode: '150',
			subRegionCode: '039'
		}, {
			name: 'Sri Lanka',
			alpha2: 'LK',
			alpha3: 'LKA',
			countryCode: '144',
			iso31662: 'ISO 3166-2:LK',
			regionCode: '142',
			subRegionCode: '034'
		}, {
			name: 'Sudan',
			alpha2: 'SD',
			alpha3: 'SDN',
			countryCode: '729',
			iso31662: 'ISO 3166-2:SD',
			regionCode: '002',
			subRegionCode: '015'
		}, {
			name: 'Suriname',
			alpha2: 'SR',
			alpha3: 'SUR',
			countryCode: '740',
			iso31662: 'ISO 3166-2:SR',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Svalbard and Jan Mayen',
			alpha2: 'SJ',
			alpha3: 'SJM',
			countryCode: '744',
			iso31662: 'ISO 3166-2:SJ',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Swaziland',
			alpha2: 'SZ',
			alpha3: 'SWZ',
			countryCode: '748',
			iso31662: 'ISO 3166-2:SZ',
			regionCode: '002',
			subRegionCode: '018'
		}, {
			name: 'Sweden',
			alpha2: 'SE',
			alpha3: 'SWE',
			countryCode: '752',
			iso31662: 'ISO 3166-2:SE',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'Switzerland',
			alpha2: 'CH',
			alpha3: 'CHE',
			countryCode: '756',
			iso31662: 'ISO 3166-2:CH',
			regionCode: '150',
			subRegionCode: '155'
		}, {
			name: 'Syrian Arab Republic',
			alpha2: 'SY',
			alpha3: 'SYR',
			countryCode: '760',
			iso31662: 'ISO 3166-2:SY',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Taiwan, Province of China',
			alpha2: 'TW',
			alpha3: 'TWN',
			countryCode: '158',
			iso31662: 'ISO 3166-2:TW',
			regionCode: '142',
			subRegionCode: '030'
		}, {
			name: 'Tajikistan',
			alpha2: 'TJ',
			alpha3: 'TJK',
			countryCode: '762',
			iso31662: 'ISO 3166-2:TJ',
			regionCode: '142',
			subRegionCode: '143'
		}, {
			name: 'Tanzania, United Republic of',
			alpha2: 'TZ',
			alpha3: 'TZA',
			countryCode: '834',
			iso31662: 'ISO 3166-2:TZ',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Thailand',
			alpha2: 'TH',
			alpha3: 'THA',
			countryCode: '764',
			iso31662: 'ISO 3166-2:TH',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Timor-Leste',
			alpha2: 'TL',
			alpha3: 'TLS',
			countryCode: '626',
			iso31662: 'ISO 3166-2:TL',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Togo',
			alpha2: 'TG',
			alpha3: 'TGO',
			countryCode: '768',
			iso31662: 'ISO 3166-2:TG',
			regionCode: '002',
			subRegionCode: '011'
		}, {
			name: 'Tokelau',
			alpha2: 'TK',
			alpha3: 'TKL',
			countryCode: '772',
			iso31662: 'ISO 3166-2:TK',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Tonga',
			alpha2: 'TO',
			alpha3: 'TON',
			countryCode: '776',
			iso31662: 'ISO 3166-2:TO',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Trinidad and Tobago',
			alpha2: 'TT',
			alpha3: 'TTO',
			countryCode: '780',
			iso31662: 'ISO 3166-2:TT',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Tunisia',
			alpha2: 'TN',
			alpha3: 'TUN',
			countryCode: '788',
			iso31662: 'ISO 3166-2:TN',
			regionCode: '002',
			subRegionCode: '015'
		}, {
			name: 'Turkey',
			alpha2: 'TR',
			alpha3: 'TUR',
			countryCode: '792',
			iso31662: 'ISO 3166-2:TR',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Turkmenistan',
			alpha2: 'TM',
			alpha3: 'TKM',
			countryCode: '795',
			iso31662: 'ISO 3166-2:TM',
			regionCode: '142',
			subRegionCode: '143'
		}, {
			name: 'Turks and Caicos Islands',
			alpha2: 'TC',
			alpha3: 'TCA',
			countryCode: '796',
			iso31662: 'ISO 3166-2:TC',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Tuvalu',
			alpha2: 'TV',
			alpha3: 'TUV',
			countryCode: '798',
			iso31662: 'ISO 3166-2:TV',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Uganda',
			alpha2: 'UG',
			alpha3: 'UGA',
			countryCode: '800',
			iso31662: 'ISO 3166-2:UG',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Ukraine',
			alpha2: 'UA',
			alpha3: 'UKR',
			countryCode: '804',
			iso31662: 'ISO 3166-2:UA',
			regionCode: '150',
			subRegionCode: '151'
		}, {
			name: 'United Arab Emirates',
			alpha2: 'AE',
			alpha3: 'ARE',
			countryCode: '784',
			iso31662: 'ISO 3166-2:AE',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'United Kingdom',
			alpha2: 'GB',
			alpha3: 'GBR',
			countryCode: '826',
			iso31662: 'ISO 3166-2:GB',
			regionCode: '150',
			subRegionCode: '154'
		}, {
			name: 'United States',
			alpha2: 'US',
			alpha3: 'USA',
			countryCode: '840',
			iso31662: 'ISO 3166-2:US',
			regionCode: '019',
			subRegionCode: '021'
		}, {
			name: 'United States Minor Outlying Islands',
			alpha2: 'UM',
			alpha3: 'UMI',
			countryCode: '581',
			iso31662: 'ISO 3166-2:UM'
		}, {
			name: 'Uruguay',
			alpha2: 'UY',
			alpha3: 'URY',
			countryCode: '858',
			iso31662: 'ISO 3166-2:UY',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Uzbekistan',
			alpha2: 'UZ',
			alpha3: 'UZB',
			countryCode: '860',
			iso31662: 'ISO 3166-2:UZ',
			regionCode: '142',
			subRegionCode: '143'
		}, {
			name: 'Vanuatu',
			alpha2: 'VU',
			alpha3: 'VUT',
			countryCode: '548',
			iso31662: 'ISO 3166-2:VU',
			regionCode: '009',
			subRegionCode: '054'
		}, {
			name: 'Venezuela, Bolivarian Republic of',
			alpha2: 'VE',
			alpha3: 'VEN',
			countryCode: '862',
			iso31662: 'ISO 3166-2:VE',
			regionCode: '019',
			subRegionCode: '005'
		}, {
			name: 'Viet Nam',
			alpha2: 'VN',
			alpha3: 'VNM',
			countryCode: '704',
			iso31662: 'ISO 3166-2:VN',
			regionCode: '142',
			subRegionCode: '035'
		}, {
			name: 'Virgin Islands, British',
			alpha2: 'VG',
			alpha3: 'VGB',
			countryCode: '092',
			iso31662: 'ISO 3166-2:VG',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Virgin Islands, U.S.',
			alpha2: 'VI',
			alpha3: 'VIR',
			countryCode: '850',
			iso31662: 'ISO 3166-2:VI',
			regionCode: '019',
			subRegionCode: '029'
		}, {
			name: 'Wallis and Futuna',
			alpha2: 'WF',
			alpha3: 'WLF',
			countryCode: '876',
			iso31662: 'ISO 3166-2:WF',
			regionCode: '009',
			subRegionCode: '061'
		}, {
			name: 'Western Sahara',
			alpha2: 'EH',
			alpha3: 'ESH',
			countryCode: '732',
			iso31662: 'ISO 3166-2:EH',
			regionCode: '002',
			subRegionCode: '015'
		}, {
			name: 'Yemen',
			alpha2: 'YE',
			alpha3: 'YEM',
			countryCode: '887',
			iso31662: 'ISO 3166-2:YE',
			regionCode: '142',
			subRegionCode: '145'
		}, {
			name: 'Zambia',
			alpha2: 'ZM',
			alpha3: 'ZMB',
			countryCode: '894',
			iso31662: 'ISO 3166-2:ZM',
			regionCode: '002',
			subRegionCode: '014'
		}, {
			name: 'Zimbabwe',
			alpha2: 'ZW',
			alpha3: 'ZWE',
			countryCode: '716',
			iso31662: 'ISO 3166-2:ZW',
			regionCode: '002',
			subRegionCode: '014'
		}];


	});
