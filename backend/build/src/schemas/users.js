'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
    'name': {
        type: String,
        require: true
    },
    'lastName': {
        type: String,
        require: true
    },
    'email': {
        type: String,
        require: true
    },
    'password': {
        type: String,
        require: true
    },
    'birthDate': {
        type: Date,
        require: false,
        ref: ''
    },
    'phone': {
        type: String,
        require: true
    },
    'isPremium': {
        type: Boolean,
        default: false,
        require: false
    }
}, { 'collection': 'users', timestamps: true });

UserSchema.pre('save', function (next) {
    var user = this;

    // solo modificamos la contraseñña si se ha modificado o es nueva
    if (!user.isModified('password')) return next();

    //GENERAMOS UN SALT
    _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        //hasheamos la contraseña usando el nuevo salt
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            //hacemos un override de la contraseña con la nueva hasheada
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

exports.default = _mongoose2.default.model('users', UserSchema);