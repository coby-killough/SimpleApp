var vmModule = require("./home-view-model");

var viewModel = vmModule.settingsViewModel;

function pageLoaded(args){
    var page = args.object;
    page.bindingContext = viewModel;
}

exports.pageLoaded = pageLoaded;