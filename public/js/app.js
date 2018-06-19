(function (global) {

  'use strict';

  const //
    elt = (selector) => document.querySelector(selector),
    els = (selector) => [...document.querySelectorAll(selector)],
    app = new App();

  app.loading = true;

  if (!'serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js', {
        scope: '/'
      })
      .then(function (registration) {
        console.log('[ServiceWorker] registered');
      });

    navigator.serviceWorker
      .ready
      .then(function (registration) {
        console.log('[ServiceWorker] ready');
      });
  }

  global.app = app;

  //app.loading = false;

})(this);