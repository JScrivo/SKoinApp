import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
    loginPageButton: {
        marginTop: 10,
        width: '90%',
        justifyContent:'center',   
        borderRadius: 5
    },

    loginPageInput: {
        marginTop: 10, 
        borderColor: "#000", 
        borderRadius: 4
    },

    loginPageHeader: {
        textAlign: 'center', 
        fontSize: 50,
    },

    loginPageContainer: {
        flex: 1, 
        justifyContent: 'center'
    }, 

    contentBorder: {
        padding: 5,
    },

    textRegistration: {
        textAlign: 'center',
        fontSize: 22,
    },

    description: {
        borderRadius: 5,
        marginTop: 10,
        borderColor: "#000",
        width: "100%",
    }, 

    imageOptions: {
        flexDirection: "row",
    },

    imageStyling:{
        width:200, 
        height:200, 
        marginTop: 20
    } 
})