import React from 'react';
import Image from 'next/image';

function Navbar() {
    return (
        <div className='navbar flex justify-center py-10 bg-transparent'>
            <div className='innav flex items-center w-full max-w-7xl px-4 mx-auto'>
                <div className='brandlogo flex-shrink-0 w-24'>
                    <Image src='/Assets/Images/uilogo.png' alt='UI Logo' width={100} height={100} />
                </div>
                <div className='navtabs flex-grow'>
                    <div className='innavtabs flex justify-center gap-6 text-[20px] font-bold leading-[26px]'>
                        <div className='home text-[#FF5555]'>Home</div>
                        <div>About Us</div>
                        <div>Pricing</div>
                        <div>Features</div>
                    </div>
                </div>
                <div className='navbutton hidden sm:block'>
                    <button className='text-white text-[18px] font-medium leading-[28px] bg-black border-none rounded-[4px] py-[16px] px-[48px]'>
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
