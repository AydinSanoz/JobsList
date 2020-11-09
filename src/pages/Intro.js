import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, Alert } from 'react-native';
import { TopicItem } from '../components';
import Axios from 'axios';

const topics = [
  {
    id: 0,
    name: 'Java',
    color: 'fb5607',
  },
  {
    id: 1,
    name: 'Python',
    color: '007f5f',
  },
  {
    id: 2,
    name: 'Javascript',
    color: 'ffb703',
  },
  {
    id: 3,
    name: '.NET',
    color: '023e7d',
  },
  {
    id: 4,
    name: 'Dart',
    color: '001845',
  },
  {
    id: 5,
    name: 'Go',
    color: 'f8961e',
  },
  {
    id: 6,
    name: 'Ruby',
    color: 'e63946',
  },
  {
    id: 7,
    name: 'C',
    color: 'fb8b24',
  },
  {
    id: 8,
    name: 'C++',
    color: '06d6a0',
  },
];

export const Intro = (props) => {
  const [jobsData, setJobsData] = useState([]);
  
  const fetchData = async () => {
    const { data } = await Axios.get('https://jobs.github.com/positions.json');
    setJobsData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  
  console.log("Intro -> jobsData", jobsData)
  function onSelect(res){
  console.log("onSelect -> res", res)
    
    alert(res.id)
  }
  return (
    <SafeAreaView style = {{backgroundColor: 'black'}}>
      <View>
        <Text style = {{fontSize : 25, textAlign : 'center', fontWeight :'bold',color:'white'}}>JOBS LIST</Text>
        <ScrollView showsHorizontalScrollIndicator={false} >
          {jobsData.map((res) => {
            return <TopicItem key={res.id} item={res.title} onSelect = {()=>{onSelect(res)}}/>;
          })}
          <TopicItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
