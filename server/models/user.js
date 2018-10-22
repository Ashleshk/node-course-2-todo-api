var mongoose = require('mongoose');

//another model Users
//  email -requrei --trim --string set min length
var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

module.exports = {User};