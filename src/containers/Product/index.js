import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";


import { scale } from "utils/scale";

//components
import { ScreensHeader } from "components/Headers";
import { List } from "components/Products"

//
import { Container, Icon, Spinner, Button, Text, Toast} from 'native-base';

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

/* Bind all the actions from authActions, deviceActions and globalActions */

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({...productActions}, dispatch)
  }
}


const ProductListScreen = (props) => {

    const {navigation, product, actions} = props;
    const [productList, setProducts] = useState([]);


    useEffect(() => {
     if(product.form.isFetching){
        actions.getProductList()
     }else{
        setProducts(product.form.fields.data)
     }
    });


    return (
        <Container>
            <ScreensHeader
              navigation={props.navigation}
              headerName="Product List"
              rightContainer={
                <Button
                  onPress={() =>{
                      alert("Function not available!");
                  }}
                >
                  <Icon name='cart'/>
                </Button>
              }
            />
            <View style={styles.container}>
              <List
                  data = {productList}
                  actionProps = {props}
                  onActionPress={(item) => {
                    actions.selectProduct(item);
                    props.navigation.navigate("MainScreen", { ...item })
                  }
                }
              />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: scale(10),
    marginBottom:scale(50)
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen);
