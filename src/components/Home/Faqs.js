import { Add, Card, Minus } from 'iconsax-react';
import React, { useState } from 'react';


function Faqs() {
    const [open, setOpen] = useState(false);
    const handleToggle = () => { setOpen(!open); };

    return (
        <div className="container flex flex-wrap justify-center w-[900px] mx-auto">
            <div className={`shadow-md bg-white border border-solid border-gray-300 rounded-lg text-left p-5 mt-5 ${open ? 'transition-all duration-300 ease-in-out' : 'transition-none'}`}  onClick={handleToggle}>
                <div className='flex'>
                    <div className=''> {open ?
                        <Minus size="32" color="#1C6AE4" /> : <Add size="32" color="#1C6AE4" />}</div>
                    <p className='text-#2b2d3f text-xl flex align items-center pl-10 relative font-semibold min-h-[50px]'>Is Orangescrum suitable for both small and large NGOs?</p>
                </div>
                <div onClick={handleToggle}>
                    {open && (<p className="text-lg leading-7 text-#2b2d3f overflow-hidden mt-5 border-t border-solid border-gray-300 pt-5">
                        Yes, Orangescrum is scalable and adaptable, making it suitable for NGOs of all sizes. Whether you're a small grassroots organization or a large international NGO, Orangescrum can cater to your needs.
                    </p>)}
                </div>

            </div>
        </div >
    )
}

export default Faqs