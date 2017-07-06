/* If this method is called, the default action of the event will not be triggered. */
export default (fn) => (event) => {
  event.preventDefault();
  if (fn) {
    fn(event);
  }
};

export const stopPropagation = (fn) => (event) => {
  event.stopPropagation();
  if (fn) {
    fn(event);
  }
};
