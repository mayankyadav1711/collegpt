// module.exports = {
//     MONGOURI: "mongodb+srv://database_user:database_user123@cluster0.0xzovmi.mongodb.net/",
//     JWT_SECRET:"shfgiahoiauhroiuha"
// }

if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}
