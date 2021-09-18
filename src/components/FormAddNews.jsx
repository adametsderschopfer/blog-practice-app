import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import {gStyle} from "../styles/common.style";
import {Formik} from "formik"

export default function FormAddNews({setNewNews, setPopup}) {

    return (
        <View style={[gStyle.main]}>
            <Formik initialValues={{
                title: "",
                anons: "",
                full: "",
                img: "",
                key: Math.random(),
            }} onSubmit={function (values) {
                setNewNews((old) => {
                    return [values, ...old];
                });

                setPopup(false);
            }}>
                {
                    (props) => (
                      <View>
                          <TextInput value={props.values.title} placeholder={'Название'} onChangeText={props.handleChange('title')} />
                          <TextInput value={props.values.anons} placeholder={'Анонс'} multiline onChangeText={props.handleChange('anons')} />
                          <TextInput value={props.values.full} placeholder={'Полный тест'} multiline onChangeText={props.handleChange('full')} />
                          <TextInput value={props.values.img} placeholder={'Ссылка на картинку'} onChangeText={props.handleChange('img')} />
                          <Button title={"Добавить"} onPress={props.handleSubmit} />
                      </View>
                    )
                }
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({

});
