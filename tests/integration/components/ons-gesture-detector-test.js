import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ons-gesture-detector', 'Integration | Component | ons gesture detector', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ons-gesture-detector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ons-gesture-detector}}
      template block text
    {{/ons-gesture-detector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
