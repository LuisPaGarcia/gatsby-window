import { windowGatsby } from "."

test("Returns window object when it's called", () => {
    expect(windowGatsby).toBe(typeof window !== 'undefined' && window)
});