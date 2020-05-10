module.exports = ({ jwt, config, errorUtil }) => {
  return {
    verifyToken: async (req, res, next) => {
      const { headers, url } = req
      const exceptions = ['/api/login', '/api/create']
      const ex = exceptions.filter((urlex) => url.includes(urlex))
      if (ex.length > 0) return next()
      if (!headers.authorization)
        return res
          .status(401)
          .send(errorUtil.unauthorized('Token not provided'))
      const token = headers.authorization.split(' ')[1]
      await jwt.verify(token, config.secrets.secret, (err, decoded) => {
        if (err) {
          switch (err.name) {
            case 'TokenExpiredError':
              return next(errorUtil.unauthorized('Expired token'))
            default:
              return res
                .status(401)
                .send(errorUtil.unauthorized('Invalid token'))
          }
        }
        req.userId = decoded._id
        return next()
      })
    }
  }
}
