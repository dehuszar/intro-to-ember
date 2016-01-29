import Ember from 'ember';

const { Controller, computed, get, set } = Ember;

export default Controller.extend({
    queryParams: ["s, type, y, page"],

    s: null,
    type: null,
    y: null,
    page: null,

    searchField: computed.oneWay('s'),

    actions: {
        search: function() {
            set(this, 's', get(this, 'searchField'));
        }
    }
});
