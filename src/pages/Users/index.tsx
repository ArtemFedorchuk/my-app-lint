import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface RouteParams {
  slug: string;
}

const Users = () => {
  const { slug } = useParams<RouteParams>();
  const location = useLocation();

  console.log('location -> ', location);
  console.log('slug -> ', slug);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
