const NowViewModel = require("./now-view-model");

function onLoaded(args) {
    const component = args.object;
    component.bindingContext = new NowViewModel();
}

exports.onLoaded = onLoaded;