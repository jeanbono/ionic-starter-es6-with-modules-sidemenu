import {onReady} from './bootstrap';
import {router} from './router';
import {AppCtrl} from './controllers/AppCtrl';
import {PlaylistsCtrl} from './controllers/PlaylistsCtrl';
import {PlaylistCtrl} from './controllers/PlaylistCtrl';

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .config(router)
  .run(onReady);

angular.module('starter.controllers', [])
  .controller('AppCtrl', AppCtrl)
  .controller('PlaylistsCtrl', PlaylistsCtrl)
  .controller('PlaylistCtrl', PlaylistCtrl);

angular.module('starter.services', []);
