import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  "Title": attr('string'),
  "Year": attr('string'),
  "Released": attr('string'),
  "Runtime": attr('string'),
  "Genre": attr('string'),
  "Director": attr('string'),
  "Writer": attr('string'),
  "Actors": attr('string'),
  "Plot": attr('string'),
  "Language": attr('string'),
  "Country": attr('string'),
  "Awards": attr('string'),
  "Poster": attr('string'),
  "Metascore": attr('string'),
  "imdbRating": attr('string'),
  "imdbVotes": attr('string'),
  "imdbID": attr('string'),
  "Type": attr('string'),
  "Response": attr('string')
});
