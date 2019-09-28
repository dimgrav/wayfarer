import { isEqual, sum, get } from "lodash";
import Chance from "chance";


const DiceRandom = new Chance();

const DiceExpression = /^\d*d\d{1,20}$/img;
const BasicMathDelimeters = /([\+\-\*\/])/g;

/**
 * Rolls the expression and returns a single result.
 *
 * @param {String} expression A dice roll expression like 2D6+3
 * @returns {Number|Object} The final total if *detailed* opt is off, Object with details if it's on
 */
export const Roll = (expression, opts) => {
    const detailed = get(opts, "detailed", false);

    // Split by + - * / but keep the delimeter
    const split = expression.split(BasicMathDelimeters);

    // Resolve all XdX e.g. 2d8 expressions using Chance library
    let resolveRolls = [];
    let resultsPerRoll = [];

    for(let p of split) {
        if (DiceExpression.test(p)) {
            const results = DiceRandom.rpg(p.toLowerCase());
            resultsPerRoll.push(results);
            resolveRolls.push(`(${sum(results)})`); // * Adding a parens
            // ... so that it can be displayed properly if detailed
            // results are request but also not interfere with the final
            // evaluation.
        } else {
            resolveRolls.push(p);
        }
    }

    // Evaluate the fixed expression that remains (with rolls resolved)
    // TODO: Replace eval with something that evaulates only math expressions for security reasons.

    if (detailed) {
        //Example, given expression was 3D6+5

        return {
            resultsPerRoll,    // e.g. [4, 1, 1] -- The three dice rolls of 3d6
            rollDetailed: resolveRolls.join(' '), // e.g. (6) + 5  -- The resolved rolls
            total: eval(resolveRolls.join('')) // e.g. 11 -- The final total
        };
    } else {
        return eval(resolveRolls.join('')); // e.g. 11 -- Only the final total
    }
};


export const mapPropsToNavOptions = (props, prevProps, getPropsToMap) => {

    if (!props) {
        return;
    }

    const propsToMap = getPropsToMap(props);

    if (!prevProps || !isEqual(getPropsToMap(prevProps), propsToMap)) {
        props.navigation.setParams(propsToMap);
    }

};