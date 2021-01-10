import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  saleList: {
    paddingVertical: 10
  },

  searchForm: {   
    backgroundColor: '#fbc9e4ad',
    paddingHorizontal: 30,
    paddingBottom: 10,
  },


  touchableOpacityStyle: {
    backgroundColor: '#15c3d6', 
  },

  plusButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    position: 'relative',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center', 
    zIndex:9,
    marginLeft: 10,
    marginBottom: 10,

  },

  label: {
    color: '#5c8599',
    fontFamily: 'Poppins_400Regular',
  },

  inputGroup: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: '#15c3d6',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  filterButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default styles;