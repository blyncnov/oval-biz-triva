let globalReq;

function storeReq(req, res, next) {
  globalReq = req;
  next();
}
function getReq() {
  console.log('global', globalReq);
  return globalReq;
}

module.exports = {
  storeReq,
  getReq
};
