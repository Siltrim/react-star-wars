/* global gtag */

export const onRouteChange = description => {
  gtag('config', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
    page_title: document.title,
    page_description: description,
  });
};
