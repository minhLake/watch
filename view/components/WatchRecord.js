import React,{Component} from 'react';
import { Text, View, ListView } from 'react-native';
import styles from '../style.js';

class WatchRecord extends Component{
  static propTypes = {
      
    }; 

  render() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    theDataSource = ds.cloneWithRows(this.props.record);
    return (
      <ListView
        style={styles.recordList}
        dataSource={theDataSource}
        renderRow={(rowData) => 
          <View style={styles.recordItem}>
            <Text style={styles.recordItemTitle}>{rowData.title}</Text>
            <View style={{alignItems: "center"}}>
              <Text style={styles.recordItemTime}>{rowData.time}</Text>
            </View>
          </View>}/>
    );
  }
}

export default WatchRecord;