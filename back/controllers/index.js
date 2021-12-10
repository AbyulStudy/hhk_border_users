module.exports = {
    index: {
        indexhello: require('./index/hello'),
    },
    users:{
        usershello: require('./users/hello'),
        login: require('./users/login'),
        logout: require('./users/logout'),
        signup: require('./users/signup'),
    },
    border:{
        borderhello: require('./border/hello'),
        list:require('./border/list'),
        view:require('./border/view'),
        write:require('./border/write'),
        modify:require('./border/modify'),
    }
}