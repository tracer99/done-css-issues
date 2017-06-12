import QUnit from 'steal-qunit';
import { ViewModel } from './bundle-css';

// ViewModel unit tests
QUnit.module('done-css-issues/bundle-css');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the bundle-css component');
});
