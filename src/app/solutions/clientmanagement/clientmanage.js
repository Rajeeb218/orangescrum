import CustomForm from '@/components/CustomForm';
import { clientmanagementdata } from '@/components/Data/clientmanagementdata';
import React from 'react';
import Styles from "../../../style/CustomForm.module.css";
import Image from "next/image";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';


function Clientmanage
() {
  return (
   <>
   <Navbar />
      <section className={`${Styles.feature_bnr_hero}`}>
        <div className={`${Styles.container_medium}`}>
        {clientmanagementdata.map((item, index) => (
  <div key={index}>
            <div
              className={`${Styles.width_100_per} ${Styles.d_flex} ${Styles.align_item_center}`}
            
            >
              {/* left side */}
              <aside className={`${Styles.width_60_per}`}>
                <div className={`${Styles.hero_title} ${Styles.cmn_head_font}`}>
                  <h1 className="mb-10">{item.title}</h1>
                </div>
                {item.description}
                <div className="flex-row space-x-4 items-center w-full mt-10">
                  <form className="flex items-center"> 
                    <button
                      type="button"
                      title="Manage your Client"
                      className={` bg-[#ff4876] text-white py-2 text-[15px] font-semibold px-2 w-44 rounded-sm cursor-pointer relative ${Styles.custom_afterclient}`}
                    >
                      Manage your Client
                    </button>
                  </form>
                 <div className="flex gap-2 items-center">      
                  </div>
                </div>
              </aside>

              {/* right side */}
              <aside className={`${Styles.width_40_per}`}>
                <figure>
                  <img
                    src={item.image}
                    alt="Product Management Orangescrum"
                    title="Product Management Orangescrum"
                    width={640}
                    height={528}
                    className="lazy"
                    style={{ display: "inline" }}
                  />
                </figure>
              </aside>
            </div>
            </div>
        ))}
        </div>
      </section>
      <Footer />
   </>
  )
}

export default Clientmanage
