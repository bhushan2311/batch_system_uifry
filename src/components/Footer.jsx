import React from 'react';
import Image from 'next/image';

function Footer() {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="footer flex justify-center mt-24">
            <div className="infoot flex flex-col w-4/5">
                <div className="foottop flex justify-between">
                    <div className="footone">
                        <div className="footlogo mb-4">
                            <Image src="/Assets/Images/uilogo.png" alt="Logo" width={150} height={50} />
                        </div>
                        <div className="helpdesk flex items-center mb-2">
                            <div className="minilogo mr-2">
                                <Image src="/Assets/Images/message.png" alt="Message" width={20} height={20} />
                            </div>
                            <div className="logodetail">help@frybix.com</div>
                        </div>
                        <div className="phoneno flex items-center">
                            <div className="minilogo mr-2">
                                <Image src="/Assets/Images/phone.png" alt="Phone" width={20} height={20} />
                            </div>
                            <div className="logodetail">+1 234 456 678 89</div>
                        </div>
                    </div>
                    <div className="foottwo">
                        <div className="foothead text-2xl font-semibold mb-4">Links</div>
                        <div className="foottabs text-base font-medium mb-2">Home</div>
                        <div className="foottabs text-base font-medium mb-2">About Us</div>
                        <div className="foottabs text-base font-medium mb-2">Bookings</div>
                        <div className="foottabs text-base font-medium mb-2">Blog</div>
                    </div>
                    <div className="footthree">
                        <div className="foothead text-2xl font-semibold mb-4">Legal</div>
                        <div className="foottabs text-base font-medium mb-2">Terms of use</div>
                        <div className="foottabs text-base font-medium mb-2">Privacy policy</div>
                        <div className="foottabs text-base font-medium mb-2">Cookie policy</div>
                    </div>
                    <div className="footfour">
                        <div className="foothead text-2xl font-semibold mb-4">Product</div>
                        <div className="foottabs text-base font-medium mb-2">Take tour</div>
                        <div className="foottabs text-base font-medium mb-2">Live chat</div>
                        <div className="foottabs text-base font-medium mb-2">Reviews</div>
                    </div>
                    <div className="footfive">
                        <div className="foothead text-2xl font-semibold mb-4">Newsletter</div>
                        <div className="foottabs text-base font-medium mb-2">Stay up to date</div>
                        <div className="flex items-center">
                            <input placeholder="Your email" className="border p-2 rounded mr-4" />
                            <button className="bg-black text-white text-base font-medium px-6 py-3 rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="footbottom mt-16 py-10 text-center border-t border-gray-300">
                    <div>Copyright {year} Uifry.com All Rights Reserved</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
