const moment = require("moment");

const dateLibraries = {
    getTime: ()=>{
        return moment().format("hh:mm a");
    }
}

module.exports = dateLibraries;