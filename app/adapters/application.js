import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: "http://www.omdbapi.com"
});
