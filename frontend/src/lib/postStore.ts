import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const postStore = writable([]);

export const token = writable('');

if (browser) {
  token.set(localStorage.getItem('token'));
  token.subscribe((v) => {
    localStorage.setItem('token', v);
  });
}

import { readable } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
