import React from "react";
import Image from 'next/image';
function Advantages() {
  return (
    <div className="why flex flex-col items-center w-full relative p-8">
    <div className="whystar absolute top-16 right-8">
        <img src="/Assets/Images/bigstar.png" alt="Star" width={50} height={50} />
    </div>
    {/* <div className="onhold absolute top-64 right-32">
        <img src="/Assets/Images/onhold.png" alt="On Hold" width={200} height={200} />
    </div> */}
    <div className="whysplash absolute top-48 right-48 z-10">
        <img src="/Assets/Images/ytored.png" alt="Splash" width={200} height={200} />
    </div>
    <div className="inwhy flex items-center w-4/5">
        <div className="whyleft flex flex-col w-2/3">
            <div className="advantages text-red-500 font-semibold text-lg mb-2">ADVANTAGES</div>
            <div className="whyhead font-bold text-3xl mb-4">Why choose Uifry?</div>
            <div className="whydetail flex flex-col">
                <div className="subwhy flex items-center mb-6">
                    <div className="bellimg mr-2">
                        <img src="/Assets/Images/bell.png" alt="Bell" width={50} height={50} />
                    </div>
                    <div className="clever font-semibold text-xl">Clever notifications</div>
                </div>
                <div className="whypara text-lg opacity-50 mb-8">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                </div>
            </div>
        </div>
        <div className="whyright w-1/3 z-20">
            <div className="whyimg">
                <img src="/Assets/Images/whyphone.png" alt="Phone" width={400} height={400} />
            </div>
        </div>
    </div>
    <div className="infully flex items-center w-full">
        <div className="whyright w-1/3">
            <div className="whyimg">
                <img src="/Assets/Images/fullyphone.png" alt="Fully Phone" width={400} height={400} />
            </div>
        </div>
        <div className="whyleft flex flex-col w-2/3 relative">
            {/* <div className="visa absolute top-48 left-60">
                <img src="/Assets/Images/visa.png" alt="Visa" width={150} height={100} />
            </div> */}
            <div className="visastar absolute top-64 left-80">
                <img src="/Assets/Images/smallstar.png" alt="Visa Star" width={50} height={50} />
            </div>
            {/* <div className="fullysplash absolute top-48 left-0 z-0">
                <img src="/Assets/Images/fullysplash.png" alt="Fully Splash" width={200} height={200} />
            </div> */}
            <div className="visastar2 absolute top-96 right-16">
                <img src="/Assets/Images/bigstar.png" alt="Visa Star 2" width={50} height={50} />
            </div>
            <div className="whydetail flex flex-col">
                <div className="subwhy flex items-center mb-6">
                    <div className="bellimg mr-2">
                        <img src="/Assets/Images/bell.png" alt="Bell" width={50} height={50} />
                    </div>
                    <div className="clever font-semibold text-xl">Fully customizable</div>
                </div>
                <div className="whypara text-lg opacity-50 mb-8">
                    Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Advantages;
