import React, { useState } from 'react'; 
import {useNavigation} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { Modal, Text, View } from 'react-native';
import styles from './styles';
import {  TextInput, TouchableOpacity } from 'react-native-gesture-handler'; 

interface Props {
    show: boolean
    setShow: any
  }
  
const ProductModal: React.FC<Props> = ({show, setShow}) => {
    
    const navigation = useNavigation();
    const [product, setProduct] = useState(''); 
 
    const handleCloseButton = () => {
        setShow(false);
    }

    const handleFinishClick = async () => { 
       navigation.goBack();
 
    }

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType={'slide'}
            onRequestClose={()=> {
                setShow(false);
            }}
        >
            <View style={styles.modalArea}>
                <View style={styles.modalBody}>

                    <TouchableOpacity onPress={() => { setShow(false) }} style={styles.closeButton}> 
                        <MaterialIcons name="expand-more" size={40} color="#000000" />
                    </TouchableOpacity>                    

                    <Text style={styles.label}>Id ou Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={product}
                        onChangeText={text => setProduct(text)}  
                    />

                    <View style={styles.modalItem}>
                        
                    </View>
                    
                    <TouchableOpacity onPress={() => { setShow(false) }} style={styles.finishButton}>
                        <Text  style={styles.finishButtonText}>Finalizar</Text>
                    </TouchableOpacity>


                </View>
            </View>

        </Modal>
    )
} 

export default ProductModal;