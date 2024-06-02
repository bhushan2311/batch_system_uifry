import React from 'react';

function Started() {
    return (
        <div className='started relative text-white flex justify-center top-2 mt-14'>
            <div className='absolute left-12 top-40'>
                <img src='/Assets/Images/smallstar.png' alt='Small Star' width={50} height={50} />
            </div>
            <div className='absolute left-0 top-20 z-10'>
                <img src='/Assets/Images/whitebig.png' alt='White Big' width={150} height={150} />
            </div>
            <div className='absolute top-0 left-0 z-10'>
                <img src='/Assets/Images/ytored.png' alt='Y to Red' width={200} height={200} />
            </div>
            <div className='flex w-11/12 bg-black justify-between items-center z-20'>
                <div className='flex flex-col w-1/2 justify-center items-center ml-8'>
                    <div className='text-4xl font-semibold mb-6'>Ready To Get Started?</div>
                    <div className='text-lg mb-6'>
                        Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
                    </div>
                    <div className='mb-8'>
                        <button className='bg-red-500 text-white px-6 py-3 rounded-full flex items-center'>
                            Download App
                            <img src='/Assets/Images/apple.png' alt='Apple' width={20} height={20} />
                        </button>
                    </div>
                </div>
                <div className='hidden md:flex w-1/2 justify-center items-center'>
                    <img src='/Assets/Images/iphone13.png' alt='iPhone 13' width={400} height={600} />
                </div>
            </div>
        </div>
    );
}

export default Started;
