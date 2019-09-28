/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const expect = chai.expect;


import { Roll } from "../utils";


describe("Utilities - Roll", function () {

    it("should use the test seed", function() {
        expect(Roll("1D6")).to.equal(4);
        // If DEFAULT_SEED for tests is changed in utils
        // this should break!
    });

    it("should be able to evaluate fixed expressions", function () {
        expect(Roll("1+1")).to.equal(2);
    });

    it("should be able to roll single die and add fixed number", function() {
        const roll = Roll("1D8+1", {detailed: true});

        expect(roll).to.eql({
            resultsPerRoll: [[7]],
            rollDetailed: "(7) + 1",
            total: 8
        })
    });

    it("should be able to roll single die and add fixed number (without dice amount prefix)", function() {
        const roll = Roll("D8+1", {detailed: true});

        expect(roll).to.eql({
            resultsPerRoll: [[3]],
            rollDetailed: "(3) + 1",
            total: 4
        });
    });

    it("should be able to roll multiple dice of the same type", function() {
        const roll = Roll("2D12+3", {detailed: true});

        expect(roll).to.eql({
            resultsPerRoll: [[3, 8]],
            rollDetailed: "(11) + 3",
            total: 14
        });
    });

    it("should be able to roll multiple dice of different type", function() {
        const roll = Roll("d6+2d8+2", {detailed: true});

        expect(roll).to.eql({
            resultsPerRoll: [[5], [3, 5]],
            rollDetailed: "(5) + (8) + 2",
            total: 15
        });
    });

});
