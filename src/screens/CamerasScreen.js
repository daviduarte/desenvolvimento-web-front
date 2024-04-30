import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CameraList() {
  const [cameras, setCameras] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await axios.get("http://localhost:8080/camera/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "json", // Specify responseType as JSON
        });
        console.log(response.data)
        setCameras(response.data);
        setLoading(0)
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage("Error fetching data. Please try again.");
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // You can perform cleanup here if needed
    };
  }, []);

  if (loading) {return (<div>Carregando...</div>)}else{

  
    return (
      <div>
        <h1>Camera List</h1>
        {errorMessage ? <p>{errorMessage}</p> : ""}
        <ul>
          {cameras.map((camera) => (
            <li key={camera.id}>
              <strong>{camera.name}</strong> - {camera.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}