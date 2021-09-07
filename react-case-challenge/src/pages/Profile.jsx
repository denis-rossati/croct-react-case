import React, { useState, useEffect } from 'react';
import { useCroct } from '@croct/plug-react';

export default function Profile() {
  const croct = useCroct();
  const [email, setEmail] = useState('Loading...');
  const [areaInterests, setAreaInterests] = useState([]);

  useEffect(async () => {
    const loadEmail = async () => {
      await croct.evaluate('user\'s email').then((loadedEmail) => setEmail(loadedEmail));
    };
    const foodInterests = async () => {
      const interests = await croct.evaluate('user\'s interests');
      setAreaInterests(interests);
    };
    await foodInterests();
    await loadEmail();
  }, []);

  const renderInterests = () => {
    const result = areaInterests
      .reduce((acc, area) => {
        if (acc.indexOf(area) === -1) {
          acc.push(area);
        }
        return acc;
      }, [])
      .map((foodArea) => <li>{foodArea}</li>);
    return result;
  };

  return (
    <div>
      {email}
      <p>
        De acordo com as comidas que você deu like, você gosta de:
      </p>
      <ul>
        { renderInterests() }
      </ul>

      <p>As comidas em que você deu like foram:</p>
    </div>
  );
}
