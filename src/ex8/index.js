import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import Header from './header';
import ItemLista from './itemLista'; 
import AddItem from './addItem';

import styles from './styles';

export default function Exemplo8() {

    const [itens, setItens] = useState([
        { id: 1, nome: 'Leite' },
        { id: 2, nome: 'Ovos' },
        { id: 3, nome: 'Mamão' },
        { id: 4, nome: 'Banana' },
        { id: 5, nome: 'Alface' }
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
                    return [{ id: 999, nome: item }, ...prevItens];
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