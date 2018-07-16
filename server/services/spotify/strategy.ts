import { HOST, PORT } from '../../config';

const SpotifyStrategy: any = require('passport-spotify').Strategy;

export default new SpotifyStrategy({
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: `${HOST}:${PORT}${process.env.SPOTIFY_REDIRECT}`,
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      done(null, Object.assign({}, profile, { accessToken }));
    });
  }
);
