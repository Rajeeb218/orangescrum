import Getademobanner from '@/app/product/selfhostedproject/getademobanner'
import CustomForm from '@/components/CustomForm'
import { nonprofitbannerdata } from '@/components/Data/CustomForm'
import React from 'react'

function Nonprofit() {
  return (
    <>
      <section>
        <CustomForm
          title={nonprofitbannerdata.title}
          image={nonprofitbannerdata.image}
          description={nonprofitbannerdata.description}
        />
      </section>

<section><Getademobanner /></section>
    </>
  )
}

export default Nonprofit