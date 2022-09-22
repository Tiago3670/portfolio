import React, { useState, useEffect } from 'react';

export default function ()
{
  const axios = require('axios');
  const [ligas,setLigas]=useState("");
  var i=1;
  useEffect(() => {
    teste();
  });


  function teste()
  {
    axios.get('')
    .then(response => setLigas(response.data));
     console.log(ligas);
  }

  return (
    <>
        <img src='https://picsum.photos/id/+{$i}+/400/500' ></img>
    </>
    );
}
 

  
