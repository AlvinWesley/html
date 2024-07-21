const q = () => {
    var ampm = new Date().getHours() >= 12 ? "pm" : "am",
        hour = new Date().getHours() > 12 ? new Date().getHours() % 12 : new Date().getHours(),
        minute = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
    if (hour < 10) {
        return "0" + hour + ":" + minute + " " + ampm;
    } else {
        return hour + ":" + minute + " " + ampm;
    }
};



