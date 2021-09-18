import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import {gStyle} from "../styles/common.style";
import { AntDesign } from '@expo/vector-icons';
import FormAddNews from "../components/FormAddNews";

export default function Home({navigation}) {
    const [news, setNews] = React.useState([
        {
            title: "Котик в рамке",
            key: 1,
            img: "http://placekitten.com/g/300/203",
            anons: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, provident.",
            full: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum."
        },
        {
            title: "Котик обыкновенный",
            key: 2,
            img: "http://placekitten.com/g/300/202",
            anons: "Lorem ipsum dolor sit amet",
            full: "Lorem ipsum dolor sit amet, consectetur aLorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum.dipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum."
        },
        {
            title: "Котик тестовый",
            key: 3,
            img: "http://placekitten.com/g/300/201",
            anons: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            full: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet culpa cupiditate deleniti doloremque iure magnam modi, repellendus velit voluptatum."
        },
    ]);

    const [popup, setPopup] = React.useState(false);

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity style={styles.addButton} onPress={() => setPopup(true)}>
                <AntDesign style={styles.addButtonIcon} name="addfile" size={24} color="#ffffff" />
            </TouchableOpacity>
        )
    });

    return (
        <View style={gStyle.main}>
            <Modal
                visible={popup}
                animationType="slide"
            >
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.modalClose} onPress={() => setPopup(false)}>
                        <AntDesign name="closecircle" size={24} color="red" />
                    </TouchableOpacity>
                    
                    <Text style={gStyle.title}>Добавить запись</Text>

                    <FormAddNews setNewNews={setNews} setPopup={setPopup} />
                </View>
            </Modal>

            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => loadNews(item)}>
                    <Image source={{
                        width: "100%",
                        height: 200,
                        url: item.img
                    }}/>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.anons}>{item.anons}</Text>
                </TouchableOpacity>
            )}/>
        </View>
    );

    function loadNews(data) {
        navigation.navigate("DetailNews", data);
    }
}

const styles = StyleSheet.create({
    addButtonIcon: {
        marginRight: 10,
    },
    modalClose: {
        position: "absolute",
        top: 58,
        right: 25
    },
    modal: {
        position: "relative",
        padding: 60,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: "center",
        marginRight: 5
    },
    item: {
        width: '100%',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "#cccccc",
        paddingBottom: 10,
    },
    title: {
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 24,
        fontFamily: "Roboto-Bold"
    },
    anons: {
        textAlign: 'center',
        fontSize: 16,
    }
});
