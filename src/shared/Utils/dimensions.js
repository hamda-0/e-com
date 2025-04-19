import { Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const W_WIDTH = Dimensions.get('window').width;
const W_HEIGHT = Dimensions.get('window').height;
const S_WIDTH = Dimensions.get('screen').width;
const S_HEIGHT = Dimensions.get('screen').height;

const Hp = height => {
  const percentageHeight = (height / S_HEIGHT) * 100;
  const heightInHp = hp(percentageHeight);
  return heightInHp;
};
const Wp = width => {
  const percentageWidth = (width / S_WIDTH) * 100;
  const widthInWp = wp(percentageWidth);
  return widthInWp;
};

export { hp, Hp, S_HEIGHT, S_WIDTH, W_HEIGHT, W_WIDTH, wp, Wp };

