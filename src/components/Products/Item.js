
import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View, Image } from "react-native";
import {Thumbnail, ListItem, Text, Left, Content} from 'native-base';

import { StyledText } from "components";


import { List } from "./"
import { Col, Row, Grid } from 'react-native-easy-grid';
import { scale } from "utils/scale";


function Item({ label, id, image, onPress, props, ...others }) {

  let hasChildren = (others.children.length === 0) ? false : true;

  return (
    <ListItem thumbnail onPress={(!hasChildren) ? onPress : null}>
              <View style={{flexDirection: "row"}}>
                <Grid>
                <Row size={7} style={styles.item}>
                  <Col size={2}>
                    <Thumbnail circle large source={{ uri: image }} />
                  </Col>
                  <Col size={4}>
                    <View>
                      <StyledText size={(!hasChildren) ? 14 : 24} style={(!hasChildren) ? styles.textLabel : styles.categoryLabel }>
                            {label}
                      </StyledText>

                      <View>
                        {(!hasChildren)&&
                            <StyledText size={12} color="#F37416">
                                  Price: Php {others.price}
                            </StyledText>
                        }
                          <StyledText size={11} color="#999999" numberOfLines={2}>
                              {others.description}
                          </StyledText>
                      </View>
                    </View>
                  </Col>
                </Row>

                {(hasChildren)&&
                <Row>
                    <List
                        data = {others.children}
                        actionProps={props}
                        onActionPress={(item) => {
                            props.actions.selectProduct(item);
                            props.navigation.navigate("MainScreen", { ...item })
                        }
                      }
                    />
                </Row>
                }
                </Grid>
              </View>
    </ListItem>
  );
}

const styles = StyleSheet.create({
   //If you need style here
   item:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop:scale(5),
        padding:scale(10)
   },
   textLabel:{
      textAlign: 'left',
      fontWeight: 'bold',
      width:'100%'
   },

   categoryLabel:{
        textAlign: 'left',
        fontWeight: 'bold',
   }
});

Item.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  props: PropTypes.object
};

export default Item;
