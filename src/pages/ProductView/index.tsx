import React from 'react'; 
import { StyleSheet,  View} from 'react-native'; 
    
   
   const ProductView: React.FC = () => { 
 
   
       return(    
        <View style={styles.container}>
        
        </View>
       )

       
   }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoPlayer: {
        position: 'relative',
        width: '100%',
        aspectRatio:3/2,
    },
});

export default ProductView;