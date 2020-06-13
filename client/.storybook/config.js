// in .storybook/config.js
import * as storybook from "@storybook/react";
// import the options function
import { setOptions } from "@storybook/addon-options";

// set option to show panel in right side
setOptions({
    downPanelInRight: true,
});

const loaderFn = () => {
    const allExports = [require("../src/stories/0-Welcome.stories.js")];
    const req = require.context("../src/components", true, /\.stories\.js$/);
    req.keys().forEach((fname) => allExports.push(req(fname)));
    return allExports;
};

storybook.configure(() => loaderFn, module);
