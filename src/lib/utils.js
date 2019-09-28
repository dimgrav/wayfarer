import { isEqual } from "lodash";
import Chance from "chance";


const DiceRandom = new Chance();

/**
 * Rolls the expression and returns a single result.
 *
 * @param {String} expression A dice roll expression like 2D6+3
 */
export const Roll = (expression) => {
    // Split by + - * / but keep the delimeter
    const split = expression.split(/([\+\-\*\/])/g);

    // Resolve all XdX e.g. 2d8 expressions using Change library
    let resolveRolls = [];

    for(let p of split) {
        if (/^\d*d\d{1,20}$/img.test(p)) {
            resolveRolls.push(DiceRandom.rpg(p.toLowerCase(), {sum: true}));
        } else {
            resolveRolls.push(p); // ... else we keep it
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