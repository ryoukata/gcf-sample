import {cloudEvent} from '@google-cloud/functions-framework';

// data definition from Cloud PubSub published.
interface PubsubData {
  subscription: string
  message: Message
}

// message data definition in recieved data.
interface Message {
  messageId: string
  attributes: JSON
  data: string
}

// data definition in user data.
interface UserData {
  event: string
  eventData: EventData
}

// eventData in user data
interface EventData {
  ID: string
  Title: string
}

// entry point function of Cloud Functions
export const testCloudEvent = cloudEvent('testCloudEvent', (cloudEvent) => {
  // Header Info of Cloud Event Request.
  console.log("header-specversion: " + cloudEvent.specversion);
  console.log("header-type: " + cloudEvent.type);
  console.log("header-source: " + cloudEvent.source);
  console.log("header-subject: " + cloudEvent.subject);
  console.log("header-id: " + cloudEvent.id);
  console.log("header-time: " + cloudEvent.time);
  console.log("header-datacontenttype: " + cloudEvent.datacontenttype);

  const pubsubdata = cloudEvent.data as PubsubData;
  // get data decoded by base64.
  // this data is set by another application.
  const data = Buffer.from(pubsubdata.message.data, 'base64').toString();
  console.log("eventdata: " + data? data: 'UnKnown...');

  // convert JSON string to JSON Object.
  const jsonData = JSON.parse(data) as UserData;
  console.log("data.event: " + jsonData.event);
  console.log("data.eventData.ID: " + jsonData.eventData.ID);
  console.log("data.eventData.Title: " + jsonData.eventData.Title);
});