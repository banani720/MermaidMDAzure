"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marked_1 = require("./marked");
VSS.init({
    applyTheme: true,
    usePlatformStyles: true,
    usePlatformScripts: true,
    explicitNotifyLoaded: true,
});
VSS.require('TFS/Dashboards/WidgetHelpers', function (WidgetHelpers) {
    WidgetHelpers.IncludeWidgetStyles();
    VSS.register('marked_mermaid_renderer', marked_1.default);
    VSS.notifyLoadSucceeded();
});
