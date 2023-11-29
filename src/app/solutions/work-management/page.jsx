"use client"
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Navbar/Banner'
import CustomForm from '@/components/CustomForm'
import { workmanagementbannerdata } from '@/components/Data/CustomForm'
import Trustedbythe from '../businessoperation/trustedbtthe'

const page = () => {

 
  return (
    <>
      <Banner />
      <Navbar />
      <CustomForm title={workmanagementbannerdata.title} image={workmanagementbannerdata.image} description={workmanagementbannerdata.description} />

      <section>
        <Trustedbythe />
    </section>

      <Footer />
    </>
  )
}

export default page

