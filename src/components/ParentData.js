import React, { useState, useEffect } from 'react';
import Profile from './Profile';

function ParentComponent() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:4001/getUserData', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${yourAuthToken}`, // Replace with actual token
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data); 
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return userData ? <Profile data={userData} /> : <p>Loading...</p>;
}

export default ParentComponent;
