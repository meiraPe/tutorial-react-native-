import { View, Text, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useState, useEffect } from 'react';
import CardUser from '../../components/CardUser';

export default function Contact() {

    const router = useRouter()

    const [ users, setUsers ] = useState([]);

    console.log(users);

    useEffect(() => {
        const listUsers = async () => {
            const response = await fetch('http://localhost:3333/profile');
            if(response.ok) {
                const data = await response.json();
                console.log(data.profile);
                setUsers(data.profile);
            } else {
                console.log('Erro ao buscar usuários');
            }
        } 
        
        listUsers()
    }, [])
        

    return (
        <View style={styles.container}>
            <Text>Página de Contatos</Text>

           {users.map((user) => 
            <CardUser
                key={user.id} 
                name={user.name}
                email={user.email}
            />
           )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})