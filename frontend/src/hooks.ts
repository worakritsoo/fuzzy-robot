/** @type {import('@sveltejs/kit').ServerFetch} */
export async function serverFetch(request) {
  if (request.url.startsWith('http://localhost:3000')) {
    // clone the original request, but change the URL
    request = new Request(
      request.url.replace(
        'http://localhost:3000',
        'https://pboxapi.herokuapp.com'
      ),
      request
    );
  }

  return fetch(request);
}
