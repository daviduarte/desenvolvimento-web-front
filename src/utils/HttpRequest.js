import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HttpRequest({ method, url, params, data }) {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;
        switch (method) {
          case 'GET':
            response = await axios.get(url, { params });
            break;
          case 'POST':
            response = await axios.post(url, data);
            break;
          case 'PUT':
            response = await axios.put(url, data);
            break;
          case 'DELETE':
            response = await axios.delete(url);
            break;
          default:
            throw new Error(`Unsupported HTTP method: ${method}`);
        }
        setResponseData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url, params, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Response Data</h1>
      <pre>{JSON.stringify(responseData, null, 2)}</pre>
    </div>
  );
}

export default HttpRequest;