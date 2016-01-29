import Ember from 'ember';

const { Route, get } = Ember;

export default Route.extend({
    
    model(params) {
        if (!params.query) {
          return []; // no results;
        }
        return get(this.store.query('movie', params));
    }
});
