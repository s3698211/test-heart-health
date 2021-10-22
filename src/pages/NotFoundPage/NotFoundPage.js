import React from 'react';
import withAuth from '../../HOC/withAuth';

function NotFoundPage() {
  return <div>Protected</div>;
}

export default withAuth(NotFoundPage);
