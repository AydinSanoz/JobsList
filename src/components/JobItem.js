import React from 'react';
import { View, Text, Button } from 'react-native';
import { jobItem } from '../styles';
import { WebView } from 'react-native-webview';

export const JobItem = (props) => {
  return (
    <View style={jobItem.container}>
      <Text style={jobItem.textTitle}>{props.selectedJobs.title}</Text>
      <Text style={jobItem.textLocation}>
        {props.selectedJobs.type} / {props.selectedJobs.location}
      </Text>
      <WebView source={{ html: props.selectedJobs.description }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="Add to Favorites" onPress={props.onJobSave} />
      </View>
    </View>
  );
};

// company: "Whizora"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXFPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--94b63c0e0dad2b2e629084ab364343eeb1052511/Whizora%20logo.png"
// company_url: "http://Whizora"
// created_at: "Mon Nov 09 03:40:15 UTC 2020"
// description: "<p><strong>Exciting new opportunity to lead the development of a consumer and product oriented application to MVP stage and beyond</strong></p>↵<p><strong>Contract opportunity, starting ASAP</strong></p>↵<p>We are a new and exciting startup based in Melbourne seeking an experienced Full Stack Application developer to come in at the start of the project and take on full responsibility as our sole developer.↵You must be entirely comfortable being the only developer on the project as you will be responsible for making some crucial architectural decisions as well as building the whole product from start to finish.↵We need a well-rounded developer who loves to take on the challenge of taking a new product idea from concept to mvp whilst also being able to work under tight deadlines.</p>↵<p>As a developer you should specialise in mobile apps, but also be comfortable standing up all the essentials from scratch using cloud services and best practices, (devops, auth, db, api).</p>↵<p>Reporting to the business owner and tech advisors you will have a range of responsibilities from shaping and implementing our new application to ensuring that we stay on the leading edge of technology.</p>↵<p>The successful candidate will have experience with similar technologies;</p>↵<ul>↵<li>Extensive experience as a Full Stack Development</li>↵<li>One or more iOS/Android frameworks: Xamarin, Blazor, Flutter, React.</li>↵<li>Experience with test automation</li>↵<li>Experience with hosting and devops, Azure or AWS</li>↵<li>Extensive knowledge of software engineering practices and methodologies, i.e. agile,</li>↵<li>Experience with JSON Schema and validation processes</li>↵<li>Strong stakeholder management and communication skills with non-technical individuals</li>↵<li>Strong understanding of continuous integration and continuous deployment</li>↵<li>Outstanding problem solving and analytical skills</li>↵</ul>↵<p>Highly desirable:</p>↵<ul>↵<li>Experience with Amazon and Facebook oriented APIs and processes</li>↵<li>Familiarity with calendar and SMS integration</li>↵<li>Familiarity with document oriented databasing (eg Mongo DB)</li>↵</ul>↵<p>To be successful you should be passionate about application and web technology, staying abreast of the latest innovations in the industry and be able to articulate your understanding of technology.↵key attributes we are looking for are the ability to work autonomously and coming in with fresh ideas↵This is a great opportunity for someone to come in on the ground floor and shape the future of our mobile application.</p>↵"
// how_to_apply: "<p>Please email;↵<a href="mailto:info@whizora.com">info@whizora.com</a></p>↵"
// id: "b915a744-6f60-4f7b-a8b3-ea8086124ef1"
// location: "Remote"
// title: " Full-Stack Application Developer"
// type: "Full Time"
// url: "https://jobs.github.com/positions/b915a744-6f60-4f7b-a8b3-ea8086124ef1"
