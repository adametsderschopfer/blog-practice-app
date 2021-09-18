import React from 'react';
import Main from "./src/Main";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadFont = () => Font.loadAsync({
    "Roboto-Bold": require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
});

export default function App() {
    const [isFontLoaded, setFontLoaded] = React.useState(false);

    if (isFontLoaded) {
        return (
            <Main />
        )                                           
    } else {
        return (
            <AppLoading onError={AppLoadingErrorHandler} startAsync={loadFont} onFinish={AppLoadingFinishHandler} />
        );
    }

    function AppLoadingErrorHandler(e) {
        console.trace(e);
    }

    function AppLoadingFinishHandler() {
        setFontLoaded(true);
    }
}
                                              
                                    
