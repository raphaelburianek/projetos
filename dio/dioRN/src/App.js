import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable,Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkGithub = '#4F565E';
const imageGithub = 'https://avatars.githubusercontent.com/u/72053412?v=4';
const urlGithub = 'https://github.com/raphaelburianek';

const App = () => {

    const handlePressGoToGithub = async () =>{
        console.log('verificando')
     const res = await  Linking.canOpenURL(urlGithub);
     
     if(res){
        console.log('aprovado')
        console.log('abrindo')
       await Linking.openURL(urlGithub)
     }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel='Raphael com fundo branco' style={style.avatar} source={{ uri: imageGithub }} />
                <Text accessibilityLabel='nome: Rafael Burianek' style={[style.defautText, style.name]}>Rafael Burianek</Text>
                <Text accessibilityLabel='nickname: raphaelburianek ' style={[style.defautText, style.nickname]}>raphaelburianek</Text>
                <Text accessibilityLabel='descrição: Estudo Análise e desenvolvimento de sistemas na UNINTER, estou focando no estudo de Front-end ( HTML5, CSS3, Javascript, Reactjs).' style={[style.defautText, style.descricao]}>Estudo Análise e desenvolvimento de sistemas na UNINTER, estou focando no estudo de Front-end ( HTML5, CSS3, Javascript, Reactjs).</Text>
                <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defautText, style.textButton]}> Abrir no Github</Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};



export default App;

const style = StyleSheet.create({
    container: {
        // Colunas
        backgroundColor: colorGithub,
        flex: 1, //Expandir p background para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defautText: {
        color: colorFontGithub,
    },

    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },

    nickname: {
        fontSize: 18,
        color: colorDarkGithub,
    },

    descricao: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    button: {
        marginTop: 20,
        backgroundColor: colorDarkGithub,
        borderRadius: 10,
        padding: 20,

    },

    textButton: {
        fontSize: 14,
        fontWeight: 'bold',
    },

});