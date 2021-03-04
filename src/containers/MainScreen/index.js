import React, { Component, useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//components
import { ScreensHeader } from "components/Headers";
import { PopUpBlocker } from "components";
import { StyledText } from "components";

//
import { Container, Body, Input, Item, Icon, Spinner, Button, Text} from 'native-base';
import { Overlay } from 'react-native-elements';
import UserInactivity from "react-native-user-inactivity";
import BackgroundTimer from "react-native-user-inactivity/lib/BackgroundTimer";


import { scale } from "utils/scale";

//actions
import * as productActions from '@reducers/product/productActions'

/*
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    product: state.product
  }
}


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({...productActions}, dispatch)
  }
}


const MainScreen = (props) => {

   const {navigation, actions, product} = props;
   const [isPopUpVisible, setPopupVisible] = useState(false); //Hooks


   const onOpenOverlay = () => {
       setPopupVisible(true);
   };

   const onCloseOverlay = () => {
       setPopupVisible(false);
   };


   let selected = product.form.fields.selectedProduct;

    return (
        <Container>

             <Overlay
               overlayStyle={{ padding: 0 }}
               isVisible={isPopUpVisible}>
                <PopUpBlocker onPressClose = {onCloseOverlay}/>
             </Overlay>


            <ScreensHeader
              navigation={props.navigation}
              headerName="Back"
              onPressInfor={onOpenOverlay}
              leftContainer={
                <Button transparent onPress={() => {
                  props.navigation.navigate("ProductListScreen")
                }}>
                  <Icon name='arrow-back' style={{color:'#ffffff'}}/>
                </Button>
              }
            />
            <Body>
              <Item style={styles.noBorder}>
                <Image
                  style={{width: scale(300), height: scale(300)}}
                  source={{uri: selected.image}}
                />
              </Item>


              <Item style={styles.noBorder}>
                      <StyledText size={24} style={{textAlign:'center', padding:5}}>
                            {selected.label}
                      </StyledText>
              </Item>

              <Item>
                      <StyledText size={14} color="#F37416" style={{fontWeight:'bold'}}>
                            Price: Php {selected.price}
                      </StyledText>
              </Item>

              <Item style={styles.noBorder}>
                      <StyledText size={14} style={{padding:10, textAlign:'center'}}>
                            {selected.description}
                      </StyledText>
              </Item>


              <Button full iconLeft bordered style={{margin:20, marginTop:5}}
                onPress={onOpenOverlay}
              >
                  <Icon name='cart' />
                  <Text>Add To Cart</Text>
              </Button>

            </Body>
        </Container>
    );
}


const styles = StyleSheet.create({
  noBorder:{
    borderBottomWidth:0
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
