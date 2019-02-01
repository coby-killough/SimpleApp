var observable = require("data/observable");
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");

var NAME ="settings-name";
var HEIGHT ="settings-height";
var WEIGHT ="settings-weight";

var settings = new observable.Observable();
    Object.defineProperty(settings, "name", {
        get:function() {return appSettings.getString(NAME, "Johnny Appleseed"); },
        sest:function (value) {appSettings.setString(NAME, value); },
        enumerable:true,
        configurable:true
    });

    Object.defineProperty(settings,"height", {
        get:function() {return appSettings.getString(HEIGHT, "72"); },
        set:function(value) { appSettings.setString(HEIGHT, value); },
        enumerable:true,
        configurable:true
    });

    Object.defineProperty(settings,"weight", {
        get:function() {return appSettings.getString(WEIGHT, "160"); },
        set:function(value) { appSettings.setString(WEIGHT, value); },
        enumerable:true,
        configurable:true
    });

    settings.promptName = function(args){
        dialogs.prompt("Enter your name:", settings.name).then(function (promptResult) {
            console.log("prompt result:" + promptResult.result);
            if (promptResult.result) {
                settings.set("name", promptResult.text);
            }
        });
}
    exports.settingsViewModel = settings;