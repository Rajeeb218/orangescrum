"use client"
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Navbar/Banner'
import CustomForm from '@/components/CustomForm'

const page = () => {

  const data = {
    title: "All-in-One Work Management Solution",
    image:
      "https://www.orangescrum.com/img/webp/Work-Management.webp",
    description:
      "Simplify your work with Orangescrum work management software. Single platform to organize tasks, collaborate efficiently, and track progress.",
  }
  return (
    <>
      <Banner />
      <Navbar />
      <CustomForm title={data.title} image={data.image} description={data.description} />
      <section className="team_sec text-center py-20">
        <h4 className='text-2xl'>Trusted by the World's best teams</h4>
        <figure className="flex justify-center pt-10"><img src="https://www.orangescrum.com/img/webp/optimize/orangescrum-world-team.webp?v=5913" alt="" width="914" height="38" /></figure>
        <div className="flex justify-center pt-8">
         <div className='pl-5 pr-5'><a href="" className='hover:text-[#00acff] font-semibold text-lg'><span className='bst_spn hw_spn'></span>How Orangescrum works</a></div>
         <div className='pl-5 pr-5'><a href="" className='hover:text-[#00acff] font-semibold text-lg'><span className='bst_spn ty_spn'></span>Try it free</a></div>
         <div className='pl-5 pr-5'><a href="" className='hover:text-[#00acff] font-semibold text-lg'><span className='bst_spn bk_spn'></span>Book a demo</a></div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default page

