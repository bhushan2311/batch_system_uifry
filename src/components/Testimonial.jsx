import Image from 'next/image';

function Testimonial() {
    return (
        <div className='testimonial flex flex-col items-center'>
            <div className='usersplash absolute top-1/4 left-1/3 z-0'>
                <img src='/Assets/Images/ytored.png' alt='Y to Red' width={500} height={500} />
            </div>
            <div className='userstar absolute top-96 left-12'>
                <img src='/Assets/Images/smallstar.png' alt='Small Star' width={50} height={50} />
            </div>
            <div className='intest w-full flex flex-col items-center'>
                <div className='testtop flex flex-col items-center'>
                    <div className='testimo font-semibold text-red-500 text-xl mb-2'>TESTIMONIAL</div>
                    <div className='users font-bold text-3xl text-center md:text-left'>What Our Users Say About Us?</div>
                </div>
                <div className='testdetail flex flex-col md:flex-row items-center justify-center gap-8 mt-10'>
                    <div className='testleft w-full md:w-1/2'>
                        <img src='/Assets/Images/five.png' alt='Five' width={800} height={150} />
                    </div>
                    <div className='testright w-full md:w-1/2'>
                        <div className='testhead font-semibold text-2xl md:text-3xl mb-4'>The Best Financial Accounting App Ever!</div>
                        <div className='testpara text-gray-500 text-base md:text-lg mb-6 md:mb-10'>
                            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                        </div>
                        <div className='testimg'>
                            <Image src='/Assets/Images/fivepeople.png' alt='Five People' width={200} height={100} />
                        </div>
                        <div className='nick font-semibold text-lg'>Nick Jonas</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
