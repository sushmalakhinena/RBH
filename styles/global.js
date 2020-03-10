import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        borderWidth: 3,
        borderColor: '#ddd',
        padding: 20,
        fontSize: 18,
        borderRadius: 6
    },
    inputText: {
        borderWidth: 1,
        backgroundColor: '#fafafa',
        borderColor: '#000000',
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
        borderRadius: 6,
        minWidth: 120,
        minHeight: 10
    },
    dropDown: {
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 1,

    },
    text: {
        padding: 10,
        color: '#000000',
        fontSize: 17,
        fontWeight: 'bold',
        borderColor: '#000000'
    },
    dateView: {
        flex: 1,
        flexDirection: 'row',
    },
    dateValue: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
        fontSize: 18,
        borderRadius: 6,
        flex: 3,
    },
    dateBtn: {
        marginLeft: 4,
        flex: 2,
        fontSize: 35,
        marginTop: 4
    },
    button: {
        color: 'blue',
        padding: 10,
        borderRadius: 6,
        fontSize: 18,
        position: 'relative',
        paddingTop: 10
    },
    errormsg: {
        padding: 1,
        color: 'crimson',
        fontWeight: 'bold',
        fontSize: 10,
    },
    keyboardavoid: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center'
    },
    formheading: {
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 20
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    homeView: {
        flex:1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    addChildBtn: {
        padding: 30,
        backgroundColor: 'black',
        color: 'black',
    },
    vuChildBtn: {
        padding: 30,
        backgroundColor: 'black',
        color: 'black',
    },
    homeScreenText: {
        padding: 30,
        fontSize: 15,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 150,
        fontSize: 14,
        color: '#333',
        borderWidth: 3,
        borderColor: '#ddd',
        padding: 20,
        fontSize: 18,
        borderRadius: 6
    },
});