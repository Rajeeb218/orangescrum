import React from 'react';
import Cardbanner from './cardbanner';
import Featuregoal from './featuregoals';
import CustomForm from '@/components/CustomForm';
import { projectmanagementbannerdata } from '@/components/Data/CustomForm';
import Monitor from './monitor';
import Abovestatic from './abovestatics';

function Projectmanagement
() {
  return (
    <>

<section>
        <CustomForm
          title={projectmanagementbannerdata.title}
          image={projectmanagementbannerdata.image}
          description={projectmanagementbannerdata.description}
        />
      </section>

    <section>
      <Cardbanner />
    </section>

    <section><Featuregoal /></section>

    <section><Abovestatic /></section>

    <section>
      <Monitor />
    </section>
    </>
  )
}

export default Projectmanagement
