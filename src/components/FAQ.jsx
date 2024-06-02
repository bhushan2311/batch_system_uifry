import React from 'react';
import Image from 'next/image';

function FAQ() {
  return (
    <div className='flex flex-col items-center'>
      <div className='absolute top-14 right-8'>
        <Image
          src='/Assets/Images/bigstar.png'
          alt='Big Star'
          width={50}
          height={50}
        />
      </div>
      <div className='w-full md:w-4/5 lg:w-3/5'>
        <div className='flex flex-col items-center'>
          <div className='text-red-500 text-xl font-semibold mb-2'>FAQ</div>
          <div className='text-3xl font-bold mb-8'>
            Frequently Asked Questions
          </div>
        </div>
        {/* <div className='flex flex-row gap-8'>
                    <div className=' text-white rounded-lg p-6'>
                        <div className='text-2xl font-semibold mb-4'>The Best Financial Accounting App Ever!</div>
                        <div className='text-base'>&quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.&apos;</div>
                    </div>
                    <div className='bg-white text-gray-500 rounded-lg p-6'>
                        <div className='text-2xl font-semibold mb-4'>The Best Financial Accounting App Ever!</div>
                        <div className='text-base'>&quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.&apos;</div>
                    </div>
                    <div className='bg-white text-gray-500 rounded-lg p-6'>
                        <div className='text-2xl font-semibold mb-4'>The Best Financial Accounting App Ever!</div>
                        <div className='text-base'>&quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.&apos;</div>
                    </div>
                    <div className=' text-white rounded-lg p-6'>
                        <div className='text-2xl font-semibold mb-4'>The Best Financial Accounting App Ever!</div>
                        <div className='text-base'>&quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.&apos;</div>
                    </div>
                    <div className='bg-white text-gray-500 rounded-lg p-6'>
                        <div className='text-2xl font-semibold mb-4'>The Best Financial Accounting App Ever!</div>
                        <div className='text-base'>&quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.&apos;</div>
                    </div>
                    <div className=' text-white rounded-lg p-6'>
                        <div className='text-2xl font-semibold mb-4'>The Best Financial Accounting App Ever!</div>
                        <div className='text-base'>&quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.&apos;</div>
                    </div>
                </div> */}
        <div className='flex flex-col md:flex-row gap-8' style={{width: '79rem',marginLeft: '-12rem'}}>
          <div className='flex flex-col'>
            <div className=' text-white rounded-lg p-6' style={{ backgroundColor: '#f55' }}>
              <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
                &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
            <div className='bg-white text-gray-500 rounded-lg p-6 mt-8 md:mt-0'>
              <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
                &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='bg-white text-gray-500 rounded-lg p-6'>
              <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
                &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
            <div className=' text-white rounded-lg p-6 mt-8 md:mt-0' style={{ backgroundColor: '#f55' }}>
               <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
                &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8' style={{width: '79rem',marginLeft: '-12rem'}}>
          <div className='flex flex-col'>
            <div className=' text-white rounded-lg p-6' style={{ backgroundColor: '#f55' }}>
              <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
                &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
            <div className='bg-white text-gray-500 rounded-lg p-6 mt-8 md:mt-0'>
              <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
                &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='bg-white text-gray-500 rounded-lg p-6'>
              <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
              &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
            <div className=' text-white rounded-lg p-6 mt-8 md:mt-0' style={{ backgroundColor: '#f55' }}>
               <div className='text-2xl font-semibold mb-4'>
                The Best Financial Accounting App Ever!
              </div>
              <div className='text-base'>
              &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.&apos;
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FAQ;
