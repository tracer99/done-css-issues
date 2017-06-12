import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './bundle-css.less';
import view from './bundle-css.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the bundle-css component. It should be on the right'
  }
});

export default Component.extend({
  tag: 'bundle-css',
  ViewModel,
  view
});
