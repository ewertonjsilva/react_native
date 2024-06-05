import { useState } from 'react';
import { View, FlatList } from 'react-native';
import uuid from 'react-native-uuid';

import Header from './header';
import ItemLista from './itemLista'; 
import AddItem from './addItem';

import styles from './styles';

export default function Exemplo8() {

    const [itens, setItens] = useState([
        { id: uuid.v4(), nome: 'Leite' },
        { id: uuid.v4(), nome: 'Ovos' },
        { id: uuid.v4(), nome: 'Mamão' },
        { id: uuid.v4(), nome: 'Banana' },
        { id: uuid.v4(), nome: 'Alface' }
    ]);

    function deleteItem(id) {
        setItens(
            prevItens => {
                return prevItens.filter(
                    (item) => item.id != id
                );
            }
        );
    }

    function addItem(item) {
        if (item === '') {
            alert('Insira um texto para adicionar na lista', [{text: 'Ok'}]);
        } else {
            setItens(
                (prevItens) => {
                    return [{ id: uuid.v4(), nome: item }, ...prevItens];
                }
            );
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <AddItem adicionar={addItem} />
            <FlatList
                data={itens}
                renderItem={(objeto) => 
                    <ItemLista 
                        dados={objeto.item} 
                        deleteItem={deleteItem}
                    />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}