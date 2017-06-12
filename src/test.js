import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'done-css-issues/models/test';

import 'done-css-issues/bundle-css/bundle-css-test';

F.attach(QUnit);

QUnit.module('done-css-issues functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('done-css-issues main page shows up', function() {
  F('title').text('done-css-issues', 'Title is set');
});
