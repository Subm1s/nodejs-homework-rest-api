const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};
const errorHandler = (controller) => {};

module.exports = {
  asyncWrapper,
  errorHandler,
};
