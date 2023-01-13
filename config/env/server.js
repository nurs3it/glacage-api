// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
  url: env('https://glacage-api.herokuapp.com'),
});
