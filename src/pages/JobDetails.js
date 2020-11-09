import React, { Component } from 'react';
import { View } from 'react-native';
import  WebView  from 'react-native-webview';

export const JobDetails = (props) => {
  console.log('JobDetails -> props', props);

  const { selectedJobData } = props.route.params;
  console.log('JobDetails -> selectedJobData', selectedJobData);

  return (
      <View style = {{flex:1}}>

      <WebView
         style = {{flex:1}}
        // originWhitelist={['*']}
        source={{ html: '<h1>  Hello world</h1>' }}
      />
      </View>
      

    
  );
};

// import React from 'react';
// import { View, Text } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import WebView from 'react-native-webview';

// }
// export const JobDetails = (props) => {
//   console.log('JobDetails -> props', props);
//   const { selectedJobData } = props.route.params;
//   return (
//     <View>

//         <Text>{selectedJobData.title}</Text>

//     </View>
//   );
// };
