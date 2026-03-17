
import { Input } from "@/components/input";
import { Link } from "expo-router";
import { Button } from "@/components/Button"
import { StyleSheet, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { useState } from "react";
import {Text, View, Alert, Platform, } from 'react-native';
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';


export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSignup() {       Alert.alert("Entrar" , "Função de entrar acionada")}


    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior= {Platform.select({ ios: "padding", android: undefined })}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}keyboardShouldPersistTaps="handled">
                <View style={styles.container}>        
   
              <Image source={require("@/assets/images/illustration of woman character with phone (3).jpg")} style={styles.illustration} />

            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Acesse sua conta com Email e senha.</Text>


                <View style={styles.form}>
                    <Input placeholder="E-mail" keyboardType='email-address' onChangeText={setEmail}/>


                    <Input placeholder="Senha" secureTextEntry  onChangeText={setPassword}/>
                    <LinearGradient
                        colors={["#0A3323", "#0a6b7f"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 8, overflow: "hidden" }}
                    >
                        <Button title="Entrar" onPress={ handleSignup }/>
                    </LinearGradient>
                </View>
                    <Text style={styles.footertext}>
                        Não tem uma conta? {""}
                        <Link href={ "/signup" } style={styles.link}
                        >Cadastre-se</Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: "#fdfdf0",
       padding: 32,
       fontFamily: "Audiowide-Regular",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    subtitle:{
        fontSize: 16,
        marginTop: 8,
    },


    illustration: {
        width: "80%",
        height: 200,
        resizeMode: "contain",
        marginTop: 62,
        alignContent: "center",
        justifyContent: "center",
       
    },
    form: {
        marginTop: 24,
        gap: 12,


    },
  
    footertext: {
        marginTop: 24,
        textAlign: "center",
        color: "#712e91",
    },
    link: {
        color: "#673496",
        fontWeight: "bold",
     
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    }

  });
