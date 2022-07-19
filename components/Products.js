import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, MinusIcon, PlusCircleIcon } from "react-native-heroicons/outline";
import { useDispatch,useSelector } from 'react-redux';
import { addToBacket, removeFromBasket, selectItemWIthItemId } from '../features/backstSlicer';
export default function Products({ value }) {

    const item= useSelector((state)=>selectItemWIthItemId(state,value.id));
    const dispatch = useDispatch();
    const addItemToBacket = ()=>{
        dispatch(addToBacket(value));
    }
    
    const removeItemFromBacket = ()=>{
        if(!item.length >0) return ;
        let id = value.id;
        console.log(id);
        dispatch(removeFromBasket({id}));
    }
    const [isPressed, setIsPressed] = useState("");
    return (
        <TouchableOpacity onPress={() => { setIsPressed(!isPressed) }} style={styles.touchableStyle}>
            <View>
                <Text>{value.name}</Text>
                <Text>{value.price}</Text>
                <Text>{value.desc}</Text>
            </View>
            {isPressed && (
                <View style={styles.cart}>
                    <TouchableOpacity disabled={!item.length} onPress={removeItemFromBacket}>
                        <MinusCircleIcon color={item.length? '#00CCBB' :'gray'} size={40} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20}}>{item.length}</Text>
                    <TouchableOpacity onPress={addItemToBacket}> 
                        <PlusCircleIcon size={40} color="#00CCBB"/>
                    </TouchableOpacity>
                </View>
            )}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    touchableStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    elevation: {
        elevation: 5,
        shadowColor: '#52006A',
    },
    cart: {
        margin: 10,
        flexDirection: 'row'
    }
})