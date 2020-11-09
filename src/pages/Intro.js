import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { JobItem, TopicItem } from '../components';
import Axios from 'axios';
import Modal from 'react-native-modal';

export const Intro = (props) => {
  const [jobsData, setJobsData] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJobs, setSelectedJobs] = useState()

  const fetchData = async () => {
    const { data } = await Axios.get('https://jobs.github.com/positions.json');
    setJobsData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  function selectJob(res){
    console.log("selectJob -> res", res)
    setModalFlag(true)
    setSelectedJobs(res)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          🔥 JOB LIST 🔥
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView showsHorizontalScrollIndicator={false}>
            {jobsData.map((res) => {
            
            
              return (
                <TopicItem
                  
                  response = {res}
                  // onSelect={(res)=> console.log(res)}
                />
              );
            })}

            
          </ScrollView>
        )}
      </View>
      <Modal 
        isVisible={modalFlag}
        onBackdropPress = {()=> setModalFlag(false)}

      >
        <JobItem  selectedJobs = {selectedJobs}/>
      </Modal>
    </SafeAreaView>
  );
};
