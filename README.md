# gcf-sample
Google Cloud Function of CloudEvents sample.  
(This function recieves Request of CloudEvents format.)  
This app suppose to recieve request from Cloud PubSub of GCP Serivce.  

## develop environment
Node ver: `v18.0.0`  
Yarn ver: `1.22.19`  

## package install
`yarn install`

## build to compile Typescript code to JS code.
`yarn tsc`

## start
`yarn start`

## test request command in another console
encode data by base64  
`echo '{"event": "REQUESTED", "eventData": {"ID": "9999", "Title" :"Hello!"}}' | base64`

specify encoded data to message.data in request body JSON and request by curl command  
```
curl -X POST -H 'Content-Type: application/json' -H 'ce-id: 1234' -H 'ce-source: my-project/my-topic' -H 'ce-specversion: 1.0' -H 'ce-type: my-event' -H 'ce-time: 2023-03-19T00:00:00.000Z' -d '{"subscription": "projects/my-project/subscriptions/my-sub", "message": {"messageId": "2070443601311540", "data": "eyJldmVudCI6ICJSRVFVRVNURUQiLCAiZXZlbnREYXRhIjogeyJJRCI6ICI5OTk5IiwgIlRpdGxlIiA6IkhlbGxvISJ9fQo=", "attributes": {"attr": "attr1-value"}}}' http://localhost:8080/ 

```

### Reference
[Functions Framework of Node.js](https://github.com/GoogleCloudPlatform/functions-framework-nodejs)  
  
[Cloud PubSub](https://cloud.google.com/functions/docs/tutorials/pubsub?hl=ja)  
  
[CloudEvents HTTP Format](https://cloud.google.com/eventarc/docs/cloudevents?hl=ja)  
  
[CloudEvents JSON Event Format](https://cloud.google.com/eventarc/docs/workflows/cloudevents?hl=ja)