import React from 'react';
import { StyleSheet,View,Text,TextInput,ScrollView} from 'react-native';
import { Title,Toolbar,ToolbarAction,ToolbarContent,ListAccordion,ListItem,Card,Button } from 'react-native-paper';

export default class HirerPostRequirement extends React.Component {

  render() {

    return (
       <View style={styles.container}>

        <Toolbar style={styles.toolbar}>
          <ToolbarAction icon="menu"/>
          <ToolbarContent
            title="Home"
          />
        </Toolbar>
        <ScrollView>
        <Card style={styles.container}>

          <TextInput
            placeholder='Title type here'
            style={styles.textinput}
            underlineColorAndroid='transparent'
          />

          <ListAccordion
            title='Job Type'>
            <ListItem title='Temporary'/>
            <ListItem title='Part-time'/>
            <ListItem title='Permanent'/>
          </ListAccordion>

          <ListAccordion
            title='Gender'>
            <ListItem title='male'/>
            <ListItem title='female'/>
            <ListItem title='both'/>
          </ListAccordion>
          <View style={styles.contentView}>
            <Text
              style={styles.text}>
              Age
            </Text>
            <TextInput/>
            <Text>
              To
            </Text>
            <TextInput/>
          </View>
          <View style={styles.contentView}>
            <Text
              style={styles.text}>
              Height
            </Text>
            <TextInput/>
            <Text>
              To
            </Text>
            <TextInput/>
          </View>
          <View style={styles.contentView}>
            <Text>
              Expire on
            </Text>
          </View>
          <View style={styles.contentView}>
            <Text
              style={styles.text}>
              Location
            </Text>
            <TextInput
               style={styles.contentTextinput}
               placeholder='Location'
               underlineColorAndroid='transparent'
             />
          </View>
            <ListAccordion
              title='Body Type'>
              <ListItem title='Slim'/>
              <ListItem title='Pituitary'/>
              <ListItem title='Thyroid'/>
              <ListItem title='Gonad'/>
              <ListItem title='Adrenal'/>
            </ListAccordion>
            <View
              style={styles.contentView}>
              <Text
                style={styles.text}>
                Experience
              </Text>
              <TextInput
                style={styles.contentTextinput}
                placeholder='Experience'
                underlineColorAndroid='transparent'/>
            </View>
            <Button>
              Post
            </Button>
        </Card>
        </ScrollView>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{

    backgroundColor:'#96f297'
  },
  contentView:{
    flexDirection:'row',
    padding:20
  },
  text:{
    flex:1,
    fontSize:15
  },
  contentTextinput:{
    flex:1,
    fontSize:15,
    marginLeft:60
  },
  textinput:{
    fontSize:20,
    textAlign:'center',
    color:'black'
  },
  button:{
    backgroundColor:'blue',
  },
  toolbar:{
    backgroundColor:'#3c0589',
  },
});
