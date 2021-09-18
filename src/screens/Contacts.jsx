import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {gStyle} from "../styles/common.style";

export default function Contacts({ navigation }) {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>
                Таб 2
            </Text>
            <Text>
                +7 900 000 00 00
            </Text>
            <Text>
                Gmail: "test@exmple,tab"
            </Text>
        </View>
    );
}
