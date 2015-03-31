import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:visible', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('notices blur', function(assert) {
  var visible = this.subject();
  assert.equal(visible.now, true);
  assert.equal(visible.state, "init");
  $(document).blur();
  assert.equal(visible.now, false);
  assert.equal(visible.state, "blur");
  $(document).focus();
  assert.equal(visible.now, true);
});
