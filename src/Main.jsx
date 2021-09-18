import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {gStyle} from "./styles/common.style";
import {MainNavigatorStack} from "./controllers/Navigation";
                  
export default function Main() {
    return (
        <MainNavigatorStack />
    );
}
