import React,{Component} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../style.js';

class WatchFace extends Component {
	static propTypes = {
    	sectionTime: PropTypes.string.isRequired,
    	totalTime: PropTypes.string.isRequired,
  	}; 
  	
	render() {
		return(
			<View style={styles.watchFaceContainer}>
				<Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
				<Text style={styles.totalTime}>{this.props.totalTime}</Text>
			</View>
		);

	}
}


export default WatchFace;