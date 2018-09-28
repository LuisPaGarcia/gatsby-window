"use strict";

var _ = require(".");

test("Returns window object when it's called", function () {
    expect(_.windowGatsby).toBe(typeof window !== 'undefined' && window);
});