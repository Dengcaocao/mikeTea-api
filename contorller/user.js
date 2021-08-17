const { userModel } = require('../model')

// 注册
exports.register = async (req, res, next) => {
  try {
    const user = new userModel(req.body)
    await user.save()
    res.status(200).send(user)
  } catch(err) {
    next(err)
  }
}