import React from 'react'
import Selfhosted from './self-hosted'
import Banner from '@/components/Navbar/Banner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function page() {
  return (
    <>
     <Banner />
      <Navbar />
    <Selfhosted />
    <Footer />
    </>
  )
}

export default page