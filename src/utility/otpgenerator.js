function generateOtp(length) {
    var result = '';
    var characters = '0123456879';
    var charactersLength = characters.length;
    for (var i = 1; i <= length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result
}


module.exports = {
    generateOtp,
}