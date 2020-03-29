export const disableDocumentScroll = (className = 'overflow-hidden') => {
  document.body.classList.add(className);
};

export const enableDocumentScroll = (className = 'overflow-hidden') => {
  document.body.classList.remove(className);
};

export const disableTab = (event) => {
  if (event.key === 'Tab') event.preventDefault();
};

export const isDocumentBottomReached = () => {
  const currentScrollY = window.pageYOffset;
  const viewHeight = document.documentElement.clientHeight;
  const maxScrollY = document.documentElement.scrollHeight;

  return (currentScrollY + viewHeight >= maxScrollY);
};
