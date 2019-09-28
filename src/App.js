/**
 * -------------- Wayfarer --------------
 * The Open Source adventuring companion!
 * --------------------------------------
 *
 * contact: <dimgrav@gmail.com>
 * contribute: https://github.com/dimgrav/wayfarer
 */

// Base imports
import React from "react";

// Navigation
import { createAppContainer } from "react-navigation";
import AppNavigator from "./config/navigator";


const AppContainer = createAppContainer(AppNavigator);


class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}


export default App;