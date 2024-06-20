/* global gtag */

export const onRouteChange = description => {
  gtag('config', 'G-LGCNLB68LD', {
    page_path: window.location.pathname,
    page_title: document.title,
    page_description: description,
  });
};
