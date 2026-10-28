export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);

  if (url.hostname.endsWith('.pages.dev')) {
    url.hostname = 'dhafa.dev';
    return Response.redirect(url.toString(), 301);
  }

  // Otherwise serve the site normally
  return next();
};