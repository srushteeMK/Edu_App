  import React, { Component } from 'react';
  import { View, Text,StyleSheet ,TextInput} from 'react-native';
  import db from "../config";
  import firebase from "firebase";

  import MyHeader from "../components/MyHeader";
  import CustomButton from "../components/CustomButton";
  import CustomInput from "../components/CustomInput";
  import { SafeAreaProvider } from 'react-native-safe-area-context';
  import Icon from 'react-native-vector-icons/Feather';

  import DropdownMenu from 'react-native-dropdown-menu';
  class UploadDocument extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        topic:""
      };
    }
    
    render() {
      var data = [["Algebra", "Biology", "Chemistry", "Computer","Economics","English","Geography","Geometry","History","Physics"]];
      return (
        <View style={{flex: 1}}>
          <View style={{height: 64}} />
          <Text>Select the Subject</Text>
          <DropdownMenu
            style={{flex: 1}}
            bgColor={'white'}
            tintColor={'#666666'}
            activityTintColor={'green'}
            // arrowImg={}      
            // checkImage={}   
            // optionTextStyle={{color: '#333333'}}
            // titleStyle={{color: '#333333'}} 
            // maxHeight={300} 
            handler={(selection, row) => this.setState({text: data[selection][row]})}
            data={data}
          >
  
            <View style={{flex: 1}}>
            <CustomInput
              style={styles.input}
              placeholder={"Enter the Topic"}
            
              onChangeText={text => {
                this.setState({
                  topic: text
                });
              }}
              value={this.state.topic}
            />
            <CustomButton
              title={"Submit"}
              style={styles.button}
              titleStyle={styles.buttonTitle}
            // onPress={() => this.updateUserDetails()}
            />
            </View>
  
          </DropdownMenu>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
      selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      },
      imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
      },
      progressBarContainer: {
        marginTop: 20
      },
      imageBox: {
        width: 300,
        height: 300
      },
      input: {
        width: "75%",
        height: 55,
        borderColor: "#6fc0b8",
        marginTop: 20
      },
      button: {
        marginTop: 20,
        backgroundColor: "#6fc0b8"
      },
      buttonTitle: {
        color: "#fff"
      }
    });
  export default UploadDocument;
