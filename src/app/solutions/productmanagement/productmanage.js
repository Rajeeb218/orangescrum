import React from "react";
import CustomForm from "./Firstbanner";
import Baneer2img from "../../../assets/solution/productmanage/orangescrum-world-team.webp";
import Image from "next/image";
import baneer3img from "../../../assets/solution/productmanage/Realize-ideas-faster.webp";
import banner4img from "../../../assets/solution/productmanage/Develop-seamlessly-from-backlog-to-launch.webp";
import banner5img from "../../../assets/solution/productmanage/Custom-pre-built-templates.webp"
import banner5aimg from "../../../assets/solution/productmanage/Go-Agile.webp"
import banner5bimg from "../../../assets/solution/productmanage/Define-your-flow.webp"
import banner5cimg from "../../../assets/solution/productmanage/Minimize-Bugs.webp"

function Productmanage() {
  return (
    <>
      <section>
        <CustomForm />
      </section>

      <section className="team_sec text-center py-20">
        <h4 className='text-2xl'>Trusted by the World's best teams</h4>
        <figure className="flex justify-center pt-10"><Image src={Baneer2img} alt="" width="914" height="38" /></figure>
        <div className="flex justify-center pt-8">
         <div className='pl-5 pr-5'><a href="" className='hover:text-[#00acff] font-semibold text-lg'><span className='bst_spn hw_spn'></span>How Orangescrum works</a></div>
         <div className='pl-5 pr-5'><a href="" className='hover:text-[#00acff] font-semibold text-lg'><span className='bst_spn ty_spn'></span>Try it free</a></div>
         <div className='pl-5 pr-5'><a href="" className='hover:text-[#00acff] font-semibold text-lg'><span className='bst_spn bk_spn'></span>Book a demo</a></div>
        </div>
      </section>

      <section className="py-[100px] relative bg-[#f6f6f7] text-center block ">
        <div className="w-[100%] m-auto box-border ">
          <div className="mx-20 ">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
              From Product Ideation to Market <br></br> Launch - Manage in a Single Platform 
              </h2>
            </div>
            <div className="flex">
				<aside className="w-[33.33%] px-[60px] block text-center">
				<figure className="flex justify-center transition-all duration-200 ease-linear hover:scale-110">
						<Image src={baneer3img} alt="Product Management Concepts"/>
					</figure>
					<h5 className="text-2xl leading-8 font-semibold pt-[30px] pb-[15px]">Ideate Projects Faster</h5>
					<p className="text-lg leading-[30px] font-normal p-0 m-0">Brainstorm project ideas and identify opportunities</p>
				</aside>
				<aside className="w-[33.33%] px-[60px] block text-center">
                <figure className="flex justify-center transition-all duration-200 ease-linear hover:scale-110">
                <Image src={baneer3img} alt="Product Management Concepts"/>
					</figure>
					<h5 className="text-2xl leading-8 font-semibold pt-[30px] pb-[15px]">Collaborate for Project Success</h5>
					<p className="text-lg leading-[30px] font-normal p-0 m-0">Turn product concept into a concrete plan with cross-functional team collaboration.</p>
				</aside>
				<aside className="w-[33.33%] px-[60px] block text-center">
                <figure className="flex justify-center transition-all duration-200 ease-linear hover:scale-110">
                <Image src={baneer3img} alt="Product Management Concepts"/>
					</figure>
					<h5 className="text-2xl leading-8 font-semibold pt-[30px] pb-[15px]">Launch Product to Market</h5>
					<p className="text-lg leading-[30px] font-normal p-0 m-0">Develop your product, refine and launch to the market faster.</p>
				</aside>
			</div>
          </div>
        </div>
      </section>

      <section className="py-[100px] relative bg-white text-center block ">
        <div className="w-[100%] m-auto box-border ">
          <div className="mx-20 ">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
              Streamline Workflows From Backlog Management to Product Launch
              </h2>
            </div>
			<div className="flex text-left box-border">
				<aside className="block w-1/2 pr-[30px]">
					<figure className="relative top-[20px] -left-[30px]">
						<Image src={banner4img} alt="Develop Seamlessly Product Management Backlog" width="500" height="479"/>
					</figure>
				</aside>
				<aside className="block w-1/2">
					<ul className="text-sm pb-[30px] leading-6">
						<li className="flex relative bg-white mb-[30px] rounded-[10px] pt-5 px-5 pb-5 border-solid border-[1px] border-[#eee] transition-all duration-200 ease-linear  text-sm leading-7 hover:shadow-2xl ">
							<a href="https://www.orangescrum.com/agile-project-management" title="Groom Backlogs">
								<span className="develop_sp icon_1"></span>
								<span class="develop_sp hover icon_a"></span>
								<div>
									<h6 className="text-[#433a65] text-2xl leading-7 font-semibold mb-[10px]">Backlog grooming</h6>
									<p className="text-lg leading-[30px] font-normal p-0 m-0 text-[#24292f]">Prioritize and refine user stories in the backlog for sprint planning.</p>
								</div>
							</a>
						</li>
						<li className="flex relative bg-white mb-[30px] rounded-[10px] pt-5 px-5 pb-5 border-solid border-[1px] border-[#eee] transition-all duration-200 ease-linear  text-sm leading-7 hover:shadow-2xl ">
							<a href="https://www.orangescrum.com/agile-project-management" title="Run Sprints">
								<span class="develop_sp icon_2"></span>
								<span class="develop_sp hover icon_b"></span>
								<div>
                                <h6 className="text-[#433a65] text-2xl leading-7 font-semibold mb-[10px]">Sprint execution</h6>
                                <p className="text-lg leading-[30px] font-normal p-0 m-0 text-[#24292f]">Execute tasks and user-stories in a sprint to achieve project goals.</p>
								</div>
							</a>
						</li>
						<li className="flex relative bg-white mb-[30px] rounded-[10px] pt-5 px-5 pb-5 border-solid border-[1px] border-[#eee] transition-all duration-200 ease-linear  text-sm leading-7 hover:shadow-2xl ">
							<a href="https://www.orangescrum.com/agile-project-management" title="Measure Team Velocity">
								<span class="develop_sp icon_3"></span>
								<span class="develop_sp hover icon_c"></span>
								<div>
                                <h6 className="text-[#433a65] text-2xl leading-7 font-semibold mb-[10px]">Velocity measurement</h6>
                                <p className="text-lg leading-[30px] font-normal p-0 m-0 text-[#24292f]">Measure team capacity to enhance sprint planning and predictability.</p>
								</div>
							</a>
						</li>
					</ul>
				</aside>
			</div>
		</div>
        
		</div>
	</section>

    <section class="product_template">
    <div className="w-[100%] m-auto box-border ">
          <div className="mx-20 ">
            <div className="text-center mb-[80px] box-border">
              <h2 className="text-[55px] font-bold leading-[65px] text-[#24292f] font-sans">
              Custom Project Templates to Simplify Product Development Roadmap
              </h2>
            <p className="text-xl leading-[40px] mt-5">Employ pre-built project templates to manage your product development flow</p></div>
			<div className="flex">
				<aside className="w-[33.33%] px-[30px]">
					<a href="https://www.orangescrum.com/project-template/agile-scrum" title="Go Agile" className="template_card">
						<figure>
							<Image src={banner5aimg} alt="Go Agile" width="115" height="104"/>
						</figure>
						<h5 className="text-2xl leading-[30px] mb-5 font-semibold text-[#433a65]">Go Agile Development</h5>
						<p className="text-[#24292f] text-[17px] font-normal leading-[28px] mb-10" >Streamline agile development by utilizing scrum project templates</p>
						<div class="start_template"><span>Start with this template</span></div>
					</a>
				</aside>
				<aside className="w-[33.33%] px-[30px]">
					<a href="https://www.orangescrum.com/project-template/kanban" title="Define your flow" className="template_card">
						<figure>
							<Image src={banner5bimg} alt="Define your flow" width="115" height="104"/>
						</figure>
						<h5 className="text-2xl leading-[30px] mb-5 font-semibold text-[#433a65]">Define Project Workflow</h5>
						<p className="text-[#24292f] text-[17px] font-normal leading-[28px] mb-10" >Automate custom workflows, ensuring consistency and efficiency</p>
						<div class="start_template"><span>Start with this template</span></div>
					</a>
				</aside>
                <aside className="w-[33.33%] px-[30px]">
					<a href="https://www.orangescrum.com/project-template/bug-tracking" title="Minimize Bugs" className="template_card">
						<figure>
							<Image src={banner5cimg} alt="Minimize Bugs" width="115" height="104"/>
						</figure>
						<h5 className="text-2xl leading-[30px] mb-5 font-semibold text-[#433a65]">Identify and fix Bugs</h5>
						<p className="text-[#24292f] text-[17px] font-normal leading-[28px] mb-10" >Identify, prioritize and resolve issues swiftly with bug tracking workflow</p>
						<div class="start_template"><span>Start with this template</span></div>
					</a>
				</aside>
			</div>
		</div>
        </div>
	</section>

     </>
  );
}

export default Productmanage;
