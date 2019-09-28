import { isEqual } from "lodash";


export const mapPropsToNavOptions = (props, prevProps, getPropsToMap) => {

    if (!props) {
        return;
    }

    const propsToMap = getPropsToMap(props);

    if (!prevProps || !isEqual(getPropsToMap(prevProps), propsToMap)) {
        props.navigation.setParams(propsToMap);
    }

};