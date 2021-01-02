import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: '#fbc9e4ad',
    paddingBottom: 14,
    
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
 
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  body:{
    marginLeft: 25,
    marginRight: 25,
  },
  
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'Archivo_400Regular',
    marginBottom: 10,
    paddingBottom: 14,
    borderBottomWidth: 0.8,
    borderBottomColor: '#FFFFFF', 
    marginVertical: 40,
    flex: 1,
    marginLeft: 25,
  },

  headerRight:{
    marginRight: 15,
  },
});

export default styles;