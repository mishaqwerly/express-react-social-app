const db = require('../services/db')
module.exports = function validator(validatorSchema) {
  return async (req, res, next) => {
    const errors = []
    for ([fieldName, rules] of Object.entries(validatorSchema)) {
      for (rule of rules) {
        const [ruleName, ...params] = rule.split(':')
        switch (ruleName) {
          case 'required':
            if (!req.body[fieldName]) {
              errors.push({
                [fieldName]: `${fieldName} field is missing`
              })
            }
            break;
          case 'min':
            if (req.body[fieldName]) {
              const min = parseInt(params[0])
              if (req.body[fieldName].length < min) {
                errors.push({
                  [fieldName]: `${fieldName} is too short. Min value is ${min}`
                })
              } 
            }
            break;
          case 'max':
            if (req.body[fieldName]) {
              const max = parseInt(params[0])
              if (req.body[fieldName].length > max) {
                errors.push({
                  [fieldName]: `${fieldName} is too long. Max value is ${max}`
                })
              } 
            }
            break;
          case 'email':
            const regExpEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!regExpEmail.test(req.body[fieldName])) {
              errors.push({ 
                [fieldName]: `${fieldName} is not valid email`
              });
            }
            break;
          case 'unique':
            if (req.body[fieldName]) {
              const field = await db.select("*").from(params[0]).where(params[1], req.body[fieldName]).first();
              if (field) {
                errors.push({ 
                  [fieldName]: `${fieldName} is already exist`
                });
              }
            }
            break;
          default:
        }
      }
    }
    if (!errors.length) {
      return next();
    }
    return res.status(422).send(errors)
  }
}