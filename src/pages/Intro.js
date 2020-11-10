import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
  Button,
} from 'react-native';
import { JobItem, TopicItem } from '../components';
import Axios from 'axios';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Intro = (props) => {
  const [jobsData, setJobsData] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJobs, setSelectedJobs] = useState();

  const fetchData = async () => {
    const { data } = await Axios.get('https://jobs.github.com/positions.json');
    setJobsData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  function selectJob(val) {
    setSelectedJobs(val);
    setModalFlag(true);
  }

  const onJobSave = async () => {
    let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);
    console.log('Intro -> savedJobList', savedJobList);

    const updatedJobList = [...savedJobList, selectedJobs];
    console.log('Intro -> selectedJobsId', selectedJobs.id);
    const indexOfItem = savedJobList.findIndex((i) => i.id === selectedJobs.id);

    indexOfItem == -1
      ? AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList)) &
        setModalFlag(false)
      : Alert.alert('WELCOME JOB LIST', 'Recorded Before');
  };

  function goFavorites() {
    props.navigation.navigate('SavedJobs');
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
          🔥 JOB CENTER 🔥
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView showsHorizontalScrollIndicator={false}>
            {jobsData.map((res) => {
              return (
                <TopicItem key={res.id} response={res} onSelect={selectJob} />
              );
            })}
          </ScrollView>
        )}
      </View>
      <Modal isVisible={modalFlag} onBackdropPress={() => setModalFlag(false)}>
        <JobItem selectedJobs={selectedJobs} onJobSave={onJobSave} />
      </Modal>
     
      <Button
        title="Favorites"
        onPress={() => {
          props.navigation.navigate('Favorites');
        }}
      />

      
     
    </SafeAreaView>
  );
};
