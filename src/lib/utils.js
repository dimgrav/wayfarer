import { isEqual } from "lodash";
import Chance from "chance";


const DiceRandom = new Chance();

const DiceExpression = /^\d*d\d{1,20}$/img;
const BasicMathDelimeters = /([\+\-\*\/])/g;

/**
 * Rolls the expression and returns a single result.
 *
 * @param {String} expression A dice roll expression like 2D6+3
 */
export const Roll = (expression) => {
    // Split by + - * / but keep the delimeter
    const split = expression.split(BasicMathDelimeters);

    // Resolve all XdX e.g. 2d8 expressions using Chance library
    let resolveRolls = [];

    for(let p of split) {
        if (DiceExpression.test(p)) {
            resolveRolls.push(DiceRandom.rpg(p.toLowerCase(), {sum: true}));
        } else {
            resolveRolls.push(p);
        }
    }

    // Evaluate the fixed expression that remains (with rolls resolved)
    // TODO: Replace eval with something that evaulates only math expressions for security reasons.
    return eval(resolveRolls.join(''));
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