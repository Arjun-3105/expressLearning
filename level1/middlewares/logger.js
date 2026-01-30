function logger(req, res, next){
    let time = Date.now();
    console.log("time");
    next();
}

