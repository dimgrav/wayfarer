// Base imports
// eslint-disable-line no-unused-vars
import React from "react";

// Mobx
import { action, observable } from "mobx";
import { create, persist } from "mobx-persist";

// Storage
import AsyncStorage from "@react-native-community/async-storage";


class AppStore {
    constructor() {

    }
}

const hydrate = create({
    storage: AsyncStorage,
    jsonify: true
});


export const appStore = new AppStore();
// eslint-disable-next-line no-console
hydrate("app", appStore).then(() => console.log("appStore hydrated"));
