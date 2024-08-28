import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';  
import Profile from '../pages/Profile';

function ParentComponent() {
  const [userData, setUserData] = useState(null);

  const accessToken = useSelector((state) => state.token.accessToken);  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!accessToken) {
          console.error('No access token found');
          return;
        }

        const response = await fetch('http://localhost:4001/getUserData', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
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
  }, [accessToken]);  // Re-fetch user data when the accessToken changes

  return userData ? <Profile data={userData} /> : <p>Loading...</p>;
}

export default ParentComponent;
