import Ember from 'ember';

const { Mixin, get, tryInvoke } = Ember;

export default Mixin.create({
  NON_ATTRIBUTE_BOUND_PROPS: ['class', 'classNames'],
  concatenatedProperties: ['NON_ATTRIBUTE_BOUND_PROPS'],

  _updateDynamicBoundProperties() {
    this._super(...arguments);
    let $element = tryInvoke(this, '$element') || this.$();

    for (let key in this.attrs) {
      if (this.NON_ATTRIBUTE_BOUND_PROPS.indexOf(key) === -1) {
        $element.attr(key, get(this, key));
      }
    }
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this._updateDynamicBoundProperties();
  },

  didInsertElement() {
    this._super(...arguments);
    this._updateDynamicBoundProperties();
  }
});
