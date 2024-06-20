/* global gtag */

export const onRouteChange = description => {
  gtag('page_view', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
    page_title: document.title,
    page_description: description,
  });
};
