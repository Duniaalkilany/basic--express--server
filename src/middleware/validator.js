module.exports = (req, res, next) => {
    console.log(req.query);
    if(req.query.name){
        next();
     } else {
         next('Name not provided !!');
     }
}