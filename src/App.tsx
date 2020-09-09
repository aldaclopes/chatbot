import React, { useEffect } from 'react';

import axios from 'axios';
import aws4 from 'aws4';

// Tutorial usado: 
// https://medium.com/@joshua.a.kahn/calling-amazon-api-gateway-authenticated-methods-with-axios-and-aws4-6eeda1aa8696


function App() {


  useEffect(() => {
    let request = {
      host: '',
      method: 'POST',
      url: '',
      body: '{"inputText": "prazo"}',
      headers: {
        'content-type': 'application/json',
      }
    }

    let signedRequest = aws4.sign(request,
      {
        secretAccessKey: '',
        accessKeyId: '',
      })

    delete signedRequest.headers['Host']
    delete signedRequest.headers['Content-Length']

    console.log(signedRequest);

    axios(signedRequest).then((response) => {
      console.log(response);
    }
    );
  }, []);


  return (
    <div>
    </div>
  );
}

export default App;
