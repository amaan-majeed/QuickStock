import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import ProfileTile from '../components/ProfileTile';

export default function UserProfile() {
  return (
      <>
          <Navbar />
          <SideBar />
          <ProfileTile/>
      </>
  );
}
