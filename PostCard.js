import React from "react"
import {Text,View,StyleSheet,Image} from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { FlatList, Platform, StatusBar } from "react-native-web"
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

export default class PostCard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.cardContainer}>
              <View style={styles.authorContainer}>
                <View style={styles.authorImageContainer}>
                <Image
                source={require("./assets1/assets/profile_img.png")}
                style={styles.profileImage}
                >

                </Image>
                  </View>
              <View style={styles.authorNameContainer}>
                  <Text style={styles.authorNameText}>{this.props.post.author}</Text>
              </View>
              </View>
            <Image source={require("./assets1/assets/post.jpeg")}
            style={styles.styles.PostImage}
            />
            <View style={styles.captionContainer}>
             <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color="white" />
              <Text style={styles.likeText}>12k</Text>
             </View>
            </View>
            
              
              </View>
              
             </View>
            
        );
    }
        
    
        
    
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight: RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color:"white",
        fontSize:RFValue(28),
    },
    cardContainer:{
        flex:0.85
    }
});
    