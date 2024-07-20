import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SideBar from '../components/SideBar';

export default function Dashboard() {
  return (
      <>
        <Navbar />
        <SideBar/>
        <Hero/>
      </>
  );
}
