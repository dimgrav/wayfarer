// Base imports
import React from "react";

// Helpers
import { mapPropsToNavOptions } from "../lib/utils";


export const withTranslatableTitle = (WrappedComponent, title) => {
    
    return class extends React.Component {

        static navigationOptions = ({ navigation }) => {
            const { params } = navigation.state;
            const title = params ? params.title : null;

            return { title };
        }

        constructor(props) {
            super(props);

            this.setTranslatableTitle = this.setTranslatableTitle.bind(this);
        }

        setTranslatableTitle() {
            const { t } = this.props;
    
            return { title: t(`${title}`) };
        }

        componentDidMount() {
            mapPropsToNavOptions(this.props, null, this.setTranslatableTitle);
        }
    
        componentDidUpdate(prevProps) {
            mapPropsToNavOptions(this.props, prevProps, this.setTranslatableTitle);
        }

        render() {
            return <WrappedComponent title={title} {...this.props} />;
        }

    };

};