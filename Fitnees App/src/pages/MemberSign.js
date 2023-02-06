import React, {useState} from "react";
import { SafeAreaView, Alert} from "react-native";

import Input from '../components/Input';
import Button from '../components/Button'; 

function MemberSign({navigation}) {

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    function handleSubmit() {

        if (!userName || !userSurname || !userAge || !userMail || !userHometown ) {
        Alert.alert('Kebap Fitnees Salonu', 'Bilgiler Boş Bırakılamaz'); {/*Herhangi biri boş bırakılırsa uyarı veriyor*/}
        return; {/*Return burada 2. sayfa hariç alert vermemesini sağlıyor*/}
        }
        const user ={
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown,
        };
        navigation.navigate('MemberResultScreen', {user});
    }
    return(
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Üye İsmini Giriniz..." onChangeText={setUserName}/>
            <Input label="Üye Soyadı" placeholder="Üye Soyismini Giriniz..." onChangeText={setUserSurname}/>
            <Input label="Üye Yaşı" placeholder="Üye Yaşını Giriniz..."  onChangeText={setUserAge}/>
            <Input label="Üye E-posta" placeholder="Üye E-posta Adresini Giriniz..." onChangeText={setUserMail}/>
            <Input label="Üye Memleketi" placeholder="Üyenin Memleketini Giriniz" onChangeText={setUserHometown}/>
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default MemberSign;