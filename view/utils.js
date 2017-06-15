import { Dimensions, PixelRatio } from 'react-native';

const Util = {
	size: {
    	width: Dimensions.get('window').width,
    	height: Dimensions.get('window').height
  },
  pixel: 1 / PixelRatio.get(),
}

export default Util;