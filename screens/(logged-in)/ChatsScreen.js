import React, { useState, useEffect } from 'react';
import { Layout, Text } from '@ui-kitten/components';

import Chat from '../../components/Chat';

export default function ChatsScreen({ navigation }) {
    const [chats, setChats] = useState([])
    useEffect(() => {
        fetch('http://146.59.44.77:8080/getAllChats')
        .then(e => e.json())
        .then(e => {
            setChats(e)
            console.log(e.length)
        })
        .catch(e => console.error(e))
    
    }, [])
  return (
    <Layout style={{ flex: 1, padding: 10}}>
        {
            chats.length > 0 ? (
            chats.map(e => (
                <Chat title={e.chatName} ID={e.chatID} key={e.chatID} navigation={navigation} date={e.chatDate}/>
            ))
            ) : <Text>{"Tu nic nie ma"}</Text>
        }
        <Text appearance='hint' style={{margin: 10}}>Przed kartkówką/sprawdzianem utworzy się w tym miejscu nowy chat do nauki</Text>
    </Layout>
  );
}
