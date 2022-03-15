
module.exports.getDATE = function getDate(){
const today = new Date();
const currentDay = today.getDay();
var options = {
    weeday: "long",
    day: "numeric",
    month : "long"
}
var day = today.toLocaleDateString("en-US",options);
return day;

}

module.exports.getDAY = function getday(){
    let day = new Date();
    let options = {
weekday:"long"
    }
    return day.toLocaleDateString("en-US",options);
}