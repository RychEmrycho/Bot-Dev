const HistoryViewModel = require("./history-view-model");

function onLoaded(args) {
    const component = args.object;
    component.bindingContext = new HistoryViewModel();
}

exports.onLoaded = onLoaded;