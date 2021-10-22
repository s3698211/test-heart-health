import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';

export default function withAuth(WrappedComponent) {
  return (props) => {
    const [verified, setVerified] = useState(false);
    const history = useHistory();
    useEffect(() => {
      const accessToken = localStorage.getItem('token');
      console.log(accessToken);
      if (!accessToken) {
        history.replace('/');
      } else {
        // Verified Token
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
}
