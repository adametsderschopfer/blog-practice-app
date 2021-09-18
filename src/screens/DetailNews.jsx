import React from 'react';
import {StyleSheet, Text, View, Button, Image, StatusBar, ScrollView} from 'react-native';
import {gStyle} from "../styles/common.style";

export default function DetailNews({route}) {
    return (
        <>
            <StatusBar barStyle={"dark-content"}/>
            <ScrollView style={[gStyle.main]}>
                <Image source={{
                    width: "100%",
                    height: 200,
                    url: route.params.img
                }}/>
                <Text style={[gStyle.title, styles.title]}>
                    {route.params.title}
                </Text>
                <Text style={styles.anons}>
                    {route.params.anons}
                </Text>
                <Text style={styles.full}>
                    {route.params.full}
                </Text>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 25,
        marginBottom: 10,
        fontSize: 35
    },
    anons: {
        color: '#6b6b6b',
        textAlign: 'center',
        marginBottom: 20
    },
    full: {
        textAlign: "justify",
        fontSize: 19,
        marginBottom: 50
    },
});
