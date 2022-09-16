
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  var config = {
    method: 'get',
    url: 'https://api.brawlstars.com/v1/players/%23Q982Q8QQ',
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA1ZTk2MmVlLTNlZGUtNDRmZC1iNzg5LTUzMDMzNDZmNmMyYiIsImlhdCI6MTY2MzM3MTQ4Niwic3ViIjoiZGV2ZWxvcGVyL2M4YjM5ODIwLTZhZTMtMWFkYy1mM2JmLTE0YTY0MTQyNDI2OSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNTIuMjIyLjEzOS4xMDMiXSwidHlwZSI6ImNsaWVudCJ9XX0.yCB8FuaSQIFPrVUxPXTzkNZESKb-Ub4P0rTXVf9uUnlW0mKlQGC44OyKJLCssbME6deiFp9av90A7-IsdpoNWQ'
    }
  };
  axios(config)
  .then(function (response) {
    
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
    <div> try 
    </div>
  );
}

export default App;
