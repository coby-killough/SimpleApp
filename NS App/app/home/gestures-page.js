var vmModule = require("./home-view-model");

var viewModel = vmModule.settingsViewModel;

function pageLoaded(args){
    var page = args.object;
    page.bindingContext = viewModel;
}

function onLongPress(){
    alert(`${viewModel.height}`);
}

function onDoubleTap(){
    alert(`${viewModel.weight}`);
}

function onSwipe(args){
    alert(`${args.eventName} event ${args.direction}`);
}

exports.pageLoaded =  pageLoaded;
exports.onSwipe = onSwipe;
exports.onDoubleTap = onDoubleTap;
exports.onLongPress = onLongPress;