// Base imports
// eslint-disable-next-line no-unused-vars
import React from "react";

// App registry
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

// Store
import { Provider } from "mobx-react";
import store from "./src/store/index";

// Translations
import "./src/config/i18n/i18n";


const PersistentApp = () => (
    <Provider {...store}>
        <App />
    </Provider>
);


AppRegistry.registerComponent(appName, () => PersistentApp);
