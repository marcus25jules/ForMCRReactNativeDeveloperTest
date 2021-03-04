// React Modules
import React, {useState, useEffect} from "react";
import {
  View
} from "react-native";


// Third party libraries
import moment from "moment";
import {Header, Body, Right, Button, Icon} from 'native-base';

//Customized component
import { StyledText } from "components";

// Utils
import { scale } from "utils/scale";


const PopUpBlocker = (props) => {

  const { onPressClose } = props;
  const [dateTime, setDate] = useState(); //Hooks

  useEffect(() => {
    var today = moment().format('MMM D, YYYY h:m:s a'); //today
    setDate(today);
  });

  return (
      <View style={{width:scale(350), height:scale(300)}}>
            <Header>
             <Body>
              <StyledText size={14} style={{color:'#ffffff'}}>Created By: Mark Bayona</StyledText>
             </Body>
            <Right>
              <Button transparent onPress={onPressClose}>
                <Icon name='close' />
              </Button>
            </Right>
           </Header>
           <Body style={{justifyContent:'center'}}>
              <StyledText size={20}>This function is not available.</StyledText>
              <StyledText size={12} style={{padding:10}}>The time now is: {dateTime}</StyledText>
              <Button full bordered transparent onPress={onPressClose}>
                 <StyledText>CLOSE</StyledText>
              </Button>
           </Body>
      </View>
  );
};

PopUpBlocker.propTypes = {

};


export default (PopUpBlocker);
