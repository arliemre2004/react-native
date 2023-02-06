import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

function MemberResult({route}){
    
    const {user} = route.params;
    return(
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}> Üye Adı: {user.userName} </Text>
            <Text style={styles.label}> Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}> Üye Yaş: {user.userAge}</Text>
            <Text style={styles.label}> Üye E-posta: {user.userMail}</Text>
            <Text style={styles.label}> Üye Memleketi: {user.userHometown}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    label: {
         fontWeight: 'bold',
         fontSize: 20,
         margin: 5,
         color: 'black' 
    },  
    message: {
        fontWeight:'bold',
        fontSize: 50,
        textAlign: 'center',
        color: 'black',
    },

});
export default MemberResult;