import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({

    contentBorder:{
        flex: 1,
        padding: 5
    },
 
    scan:{
        borderWidth: 0.5,
        borderColor: '#a7a6ab',
        borderStyle: 'dashed',
        borderRadius: 16,
        marginTop: 20,
        height: 210,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },


    scanIcon: {
        fontSize: 170
    },

    history: {
        marginTop: 20,
        fontSize: 40,

    },

    historyBlock: {
        borderBottomWidth: 0.3,
        borderBottomColor: '#a7a6ab',
    }
})