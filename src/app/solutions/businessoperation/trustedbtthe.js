import React from 'react';
import Baneer2img from "../../../assets/solution/productmanage/orangescrum-world-team.webp";
import Image from "next/image"; 

function Trustedbythe
() {
  return (
    <>
    <section className="team_sec  text-center py-20 bg-[#f7f5f5]">
        <div className="container">
          <h4 className="text-2xl">Trusted by the World's best teams</h4>
          <figure className="flex justify-center pt-10">
            <Image src={Baneer2img} alt="" width="914" height="38" />
          </figure>
          <div className="flex justify-center pt-8">
            <div className="pl-5 pr-5">
              <a href="" className="hover:text-[#00acff] font-semibold text-lg">
                <span className="bst_spn hw_spn"></span>How Orangescrum works
              </a>
            </div>
            <div className="pl-5 pr-5">
              <a href="" className="hover:text-[#00acff] font-semibold text-lg">
                <span className="bst_spn ty_spn"></span>Try it free
              </a>
            </div>
            <div className="pl-5 pr-5">
              <a href="" className="hover:text-[#00acff] font-semibold text-lg">
                <span className="bst_spn bk_spn"></span>Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trustedbythe
