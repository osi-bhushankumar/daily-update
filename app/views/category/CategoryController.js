'use strict';

/**
 * @ngdoc function
 * @name webadminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webadminApp
 */

(function () {
  var injectParams = ['$http', '$rootScope', '$scope', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder'];
  var factory = function ($http, $rootScope, $scope, $compile, DTOptionsBuilder, DTColumnBuilder) {

    var category = this;
    category.message = '';
    category.edit = edit;
    category.delete = deleteRow;
    category.dtInstance = {};
    category.persons = {};

    category.dtOptions = DTOptionsBuilder.fromSource('data/data.json')
      .withPaginationType('full_numbers')
      .withOption('createdRow', createdRow);
    category.dtColumns = [
      DTColumnBuilder.newColumn('CategoryId').withTitle('CategoryId').notVisible(),
      DTColumnBuilder.newColumn('SubCategoryId').withTitle('SubCategoryId').notVisible(),
      DTColumnBuilder.newColumn('Category').withTitle('Category'),
      DTColumnBuilder.newColumn('SubCategory').withTitle('Sub Category'),
      DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)
    ];

    function edit(person) {
      category.message = 'You are trying to edit the row: ' + JSON.stringify(person);
      // Edit some data and call server to make changes...
      // Then reload the data so that DT is refreshed
      category.dtInstance.reloadData();
    }
    function deleteRow(person) {
      category.message = 'You are trying to remove the row: ' + JSON.stringify(person);
      // Delete some data and call server to make changes...
      // Then reload the data so that DT is refreshed
      category.dtInstance.reloadData();
    }
    function createdRow(row, data, dataIndex) {
      // Recompiling so we can bind Angular directive to the DT
      $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
      category.persons[data.CategoryId] = data;
      return '<button class="btn btn-warning" ng-click="Category.edit(Category.persons[' + data.CategoryId + '])">' +
        '   <i class="glyphicon glyphicon-edit"></i>' +
        '</button>&nbsp;' +
        '<button class="btn btn-danger" ng-click="Category.delete(Category.persons[' + data.CategoryId + '])" )"="">' +
        '   <i class="glyphicon glyphicon-trash"></i>' +
        '</button>';
    }

  };
  factory.$inject = injectParams;
  angular.module(routeApp).controller('CategoryController', factory);
}());
