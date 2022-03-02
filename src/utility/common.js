function sendSuccess(res, data) {
  res.status(200).send({ status: 200, data });
}

function sendError(res, error) {
  res.status(400).send({
    status: 400,
    error: error,
  });
}

module.exports = {
  sendSuccess,
  sendError,
};
