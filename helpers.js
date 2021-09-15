function successfullMessage(msg) {
    return "✅ *CBot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *CBot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *CBot :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
