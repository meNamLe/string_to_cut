exports.string_cut = function(req, res) {
    const string = req.body.string_to_cut;
    let ret = "";
    
    // to get every third letter
    for(let i = 2; i < string.length; i += 3) {
        ret += string[i];
    }

    res.send({return_string: ret});
};