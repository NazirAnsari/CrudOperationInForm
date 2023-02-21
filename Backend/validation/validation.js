const Joi = require('joi');
// const router = require("../router/router.js");

const singupSchema= Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
   
  lastName: Joi.string().min(3).max(30).required(),

  userEmail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  userName: Joi.string().alphanum().required(),

  phoneNo : Joi.string().length(10).pattern(/^\d+$/).required(),

  userPass: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  // userPass: Joi.string().pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$')),
   
  //Minimum three characters, at least one letter and one number:



  
  cUserPass: Joi.ref('userPass')

});
const signUpValidate = (req,res,next) => { 
   
    const{error, value}=singupSchema.validate(req.body);

    if(error){
      const {details} = error;
      const message = details.map(i => i.message).join(',');
      console.log(message);
      console.log(error);
      return res.send(message);
    }
    else{
      next();
    }
  } 


  const loginSchema=Joi.object({
    loginEmail:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    loginPass : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })

  const loginValidate = (req,res,next) => { 
   
    const{error, value}=loginSchema.validate(req.body);

    if(error){
      const {details} = error;
      const message = details.map(i => i.message).join(',');
      console.log(message);
      console.log(error);
      return res.send(message);
    }
    else{
      next();
    }
  }

  const deleteSchema = Joi.object({
    id : Joi.string().pattern(/^\d+$/).required(),
  })

  const deleteValidate = (req,res,next) => { 
   
    const{error, value}=deleteSchema.validate(req.body);

    if(error){
      const {details} = error;
      const message = details.map(i => i.message).join(',');
      console.log(message);
      console.log(error);
      return res.send(message);
    }
    else{
      next();
    }
  }

const updateSchema=Joi.object({
  id: Joi.string().pattern(/^\d+$/).required(),
  userFirsName: Joi.string().min(3).max(30).required(),
   
  userLastName: Joi.string().min(3).max(30).required(),

  // userEmail: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  userName: Joi.string().alphanum().required(),

  userPhone : Joi.string().length(10).pattern(/^\d+$/).required(),

  userPass: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  cUserPass: Joi.ref('userPass')
})

const updateValidate = (req,res,next) => { 
   
  const{error, value}=updateSchema.validate(req.body);

  if(error){
    const {details} = error;
    const message = details.map(i => i.message).join(',');
    console.log(message);
    console.log(error);
    return res.send(message);
  }
  else{
    next();
  }
}

module.exports={
  signUpValidate,
  loginValidate,
  deleteValidate,
  updateValidate
};  

// const Joi = require('joi');

// const schema = Joi.object({
//     first_name: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),

//     last_name: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),

//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

//     repeat_password: Joi.ref('password'),

//     phone_no : Joi.number(10)
//     .pattern(/^\d(10)$/)
//     .required(),

//     gender: Joi.string()
//             .valid('male','female','others')
//             .required(),

    
//     email: Joi.string()
//     .email({minDomainSegments : 3,tids:{allow :['com','net','edu']}})
//     .required(),
//     access_token: [
//         Joi.string(),
//         Joi.number()
//     ],

//     // birth_year: Joi.number()
//     //     .integer()
//     //     .min(1900)
//     //     .max(2013),

//     email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// })
//     .with('first_name', 'last_name','phone_no','gender','email')
//     .xor('password', 'access_token')
//     .with('password', 'repeat_password');


// schema.validate({ username: 'abc', birth_year: 1994 });
// // -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }

// // Also -

// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }

// const loginSchema = Joi.object({
//     email: Joi.string().email().lowercase().required(),
//     password: Joi.string().min(5).required()
// });

// module.exports = loginSchema;