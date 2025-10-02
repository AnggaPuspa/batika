import Image from "next/image";
import RightArrow from "../public/icons/rightArrow.svg";
import RightArrowUp from "../public/icons/rightArrowUp.svg";
import RightArrowUpBlack from "../public/icons/RightArrowUpBlack.svg";
import Minus from "../public/icons/minus.svg";
import Add from "../public/icons/add.svg";
import StarOrnament from "../public/icons/star.svg";
import KiteOrnament from "../public/ornaments/kite.svg";
import ImageOne from "../public/images/1.webp";
import ImageTwo from "../public/images/2.webp";
import ImageThree from "../public/images/3.webp";
import ImageFour from "../public/images/4.webp";
import ImageFive from "../public/images/5.webp";
import ImageSix from "../public/images/6.webp";
import rightArrowUpWhite from "../public/icons/rightArrowUpWhite.svg";

import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="mx-20 gap-y-10 flex flex-col font-poppins">
      <Navbar />
      {/* Section 1 */}
      <section className="flex gap-10 mt-5 min-h-[80vh]">
        <div className="w-[60%] flex flex-col relative">
          <p className="text-[16px] opacity-80">
            Everyday comfort • Timeless design
          </p>
          <div className="text-[52px] font-outline-4 ">
            <p className="font-[600]">
              Indonesian <br></br>heritage,{" "}
              <>
                <span className="text-transparent font-outline-sans relative w-fit font-black font-sans">
                  Designed
                  <Image
                    src={KiteOrnament}
                    alt="Ornament"
                    className="absolute top-5 -right-11"
                  />
                </span>
              </>
              <br></br>for today's world
            </p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <Image src={RightArrow} alt="Right Arrow" />
            <button className="text-[24px] text-white border-2 border-black bg-black font-[300] py-2 px-10 rounded-full">
              Explore Collection
            </button>
          </div>
          <div className="absolute bottom-10 flex items-center gap-5">
            <div className="w-14 h-14 bg-background-color rounded-full"></div>
            <div>
              <p className="text-[20px] font-bold">70k+</p>
              <p className="text-[20px] text-[#000000B2]">
                Satisfied Costumers
              </p>
            </div>
          </div>
        </div>
        <div className="w-[20%] relative">
          <div className="flex w-[7rem] justify-between items-center absolute bottom-10 right-10">
            <button className="border-2 border-[#00000033] rounded-full p-2 w-13 h-13">
              <Image src={RightArrowUpBlack} alt="Left Arrow" />
            </button>
            <button className="border-2 border-[#00000033] rounded-full p-2 w-13 h-13">
              <Image
                src={RightArrowUpBlack}
                alt="Right Arrow"
                className="rotate-180"
              />
            </button>
          </div>
        </div>
        <div className="w-[40%] bg-gradient-to-br from-sky-300 via-blue-500 to-sky-600 rounded-[3rem] relative">
          <Image
            src={ImageOne}
            alt="Image One"
            className="absolute bottom-[59px] scale-120 -left-13"
          />
        </div>
      </section>
      {/* Section 2 */}
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <div className="w-fit">
              <div className="text-[16px] font-semibold border-1 py-2 px-5 rounded-full border-gray-400">
                See More Products
              </div>
            </div>
            <div className="text-[42px] font-outline-4">
              Top Selling Product <br></br>of the Year Collection
            </div>
          </div>
          <div className="flex flex-col w-[22%] items-start gap-5">
            <div className="text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </div>
            <button className="text-[16px] font-semibold border-1 py-2 px-5 rounded-full border-gray-400">
              Shop Now
            </button>
          </div>
        </div>

        <div className="w-full h-[39rem] mt-20 flex justify-between gap-7 items-end">
          <div className="h-[70%] w-[25%] bg-[#EEEDED] rounded-3xl relative">
            <Image
              src={ImageTwo}
              alt="Image Two"
              className="absolute bottom-5 scale-110"
            />
          </div>
          <div className="h-[100%] w-[25%] bg-[#1E3A5F] rounded-3xl relative">
            <Image
              src={ImageOne}
              alt="Image One"
              className="absolute bottom-14 right-5 scale-125"
            />
          </div>
          <div className="h-[90%] w-[25%] bg-gradient-to-br from-blue-200 to-sky-500 rounded-3xl relative">
            <Image
              src={ImageThree}
              alt="Image Three"
              className="absolute bottom-8 scale-115"
            />
          </div>
          <div className="h-[70%] w-[25%] bg-[#EFEEEE] rounded-3xl relative">
            <Image
              src={ImageFour}
              alt="Image Four"
              className="absolute bottom-5 scale-110"
            />
          </div>
        </div>

        <div className="w-full mt-5 flex justify-between gap-7">
          <div className="w-[25%] flex flex-col gap-1">
            <div className="w-full justify-between flex items-center text-[16px] font-[600]">
              <p>Batik Dress</p>
              <p>$140</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={StarOrnament} alt="Star" />
              <p className="text-[16px] text-[#00000060] font-medium">(4,2)</p>
            </div>
          </div>
          <div className="w-[25%] flex flex-col gap-1">
            <div className="w-full justify-between flex items-center text-[16px] font-[600]">
              <p>Batik T-Shirt</p>
              <p>$140</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={StarOrnament} alt="Star" />
              <p className="text-[16px] text-[#00000060] font-medium">(4,2)</p>
            </div>
          </div>
          <div className="w-[25%] flex flex-col gap-1">
            <div className="w-full justify-between flex items-center text-[16px] font-[600]">
              <p>Batik T-Shirt</p>
              <p>$140</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={StarOrnament} alt="Star" />
              <p className="text-[16px] text-[#00000060] font-medium">(4,2)</p>
            </div>
          </div>
          <div className="w-[25%] flex flex-col gap-1">
            <div className="w-full justify-between flex items-center text-[16px] font-[600]">
              <p>Batik T-Shirt</p>
              <p>$140</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={StarOrnament} alt="Star" />
              <p className="text-[16px] text-[#00000060] font-medium">(4,2)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex items-center justify-between gap-10 mt-20">
        <div className="w-[50%] h-[45rem] bg-gradient-to-br from-indigo-400 via-blue-200 to-blue-400 rounded-3xl relative flex items-end justify-center">
          <Image src={ImageThree} alt="Image Three" className="w-[75%]" />
        </div>
        <div className="w-[50%] min-h-[45rem] bg-background-color pl-25 py-10 pr-30 rounded-3xl">
          <div className="flex flex-col gap-10">
            <p className="text-[42px] font-outline-4">
              Where Timeless <br></br> Heritage Meets <br></br> Everyday Style
            </p>
            <p>
              We blend timeless Indonesian heritage with modern <br></br>{" "}
              minimalist design—made for the global stage.
            </p>
          </div>
          {/* FAQ Section */}
          <div className="mt-10">
            <div className="flex flex-col border-b-2 pb-5 border-b-[#0000001A]">
              <div className="flex items-center justify-between text-[16px] font-semibold">
                <p>Uncompromised Quality</p>
                <Image src={Minus} alt="Minus Icon" className="w-[24px]" />
              </div>
              <p className="mt-5 text-[16px]">
                We blend timeless Indonesian heritage with modern <br></br>{" "}
                minimalist design—made for the global stage.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-col border-b-2 pb-5 border-b-[#0000001A]">
              <div className="flex items-center justify-between text-[16px] font-semibold">
                <p>Timeless Variety</p>
                <Image src={Add} alt="Add Icon" className="w-[24px]" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-col border-b-2 pb-5 border-b-[#0000001A]">
              <div className="flex items-center justify-between text-[16px] font-semibold">
                <p>Heritage of Excellence</p>
                <Image src={Add} alt="Add Icon" className="w-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-7 w-full min-h-[17rem] justify-around">
        <div className="w-[20%] bg-[#68B4F64D] p-5 rounded-2xl">
          <div className="flex flex-col gap-5 h-full">
            <p className="text-[24px] font-black font-outline-1">
              Authentic <br />
              Batik
            </p>
            <p className="text-[16px] text-[#00000099]">
              100% crafted by Indonesian <br></br> artisans
            </p>
            <div className="flex-grow" />
            <Image
              src={RightArrowUp}
              alt="Right Arrow Up"
              className="self-end"
            />
          </div>
        </div>
        <div className="w-[20%] bg-background-color p-5 rounded-2xl">
          <div className="flex flex-col gap-5 h-full">
            <p className="text-[24px] font-black font-outline-1">
              Worldwide <br />
              Shipping
            </p>
            <p className="text-[16px] text-[#00000099]">
              Fast & reliable delivery <br></br> anywhere
            </p>
            <div className="flex-grow" />
            <Image
              src={RightArrowUp}
              alt="Right Arrow Up"
              className="self-end"
            />
          </div>
        </div>
        <div className="w-[20%] bg-background-color p-5 rounded-2xl">
          <div className="flex flex-col gap-5 h-full">
            <p className="text-[24px] font-black font-outline-1">
              Secure <br />
              Payments
            </p>
            <p className="text-[16px] text-[#00000099]">
              Safe, trusted, and protected
            </p>
            <div className="flex-grow" />
            <Image
              src={RightArrowUp}
              alt="Right Arrow Up"
              className="self-end"
            />
          </div>
        </div>
        <div className="w-[30%] rounded-4xl bg-gradient-to-br from-blue-400 to-blue-200 relative flex justify-around">
          <div className="flex flex-col p-5 border-white relative h-full">
            <p className="text-[24px] font-black text-white">
              Limited <br></br>Edition<br></br> Batik
            </p>
            <Image
              src={rightArrowUpWhite}
              alt="Right Arrow Up"
              className="absolute left-5 bottom-5"
            />
          </div>
          <Image
            src={ImageFive}
            alt="Image Five"
            className="self-end bottom-0 w-[21.1rem] right-5"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full min-h-[32rem] border-2 mt-10 rounded-4xl p-10 bg-background-color relative">
        <div className="text-[42px] font-outline-4">
          Discover Our New <br></br>Batik Collection
        </div>
        <p className="text-[16px] text-[#00000099] mt-5">
          Heritage redefined with modern elegance
        </p>
        <button className="text-[16px] font-semibold border-1 py-2 px-5 rounded-full border-gray-400 mt-5 ">
          Shop Now
        </button>
        <Image
          src={ImageSix}
          alt="Image Six"
          className="self-end bottom-0 w-[21.1rem] right-5"
        />
      </div>

      {/* Section 5 */}
      <div className="mt-10">
        <div className="text-[42px] font-outline-4">Our All Products</div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[16px] text-[#00000099]">
            We blend timeless Indonesian heritage with modern <br></br>{" "}
            minimalist design—made for the global stage.
          </p>
          <button className="text-[16px] font-semibold border-1 py-2 px-5 rounded-full border-gray-400 mt-5 ">
            See All Products
          </button>
        </div>
        <div className="w-full min-h-[50rem] border-2 mt-10"></div>
      </div>

      {/* Section 6 */}
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="border-2">
            <div className="text-[42px] font-outline-4">
              Trusted by Over <br></br>
              70k+ Customers
            </div>
          </div>
          <div className="border-2 w-[22%]">
            <div className="text-[16px]">
              We blend timeless Indonesian heritage with modern minimalist
              design—made for the global stage.
            </div>
          </div>
        </div>
        <div className="w-full min-h-[20rem] border-2 mt-10"></div>
      </div>

      {/* Section 7 */}
      <section className="mt-10 border-2 p-10 w-full flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-[42px] font-outline-4">From Tradition To Today</p>
          <div className="text-[16px]">
            We blend timeless Indonesian heritage with modern minimalist
            design—made for the global stage.
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-4 gap-5 h-[50rem] w-full">
          <div className="row-span-4 border-2 col-start-1 col-span-1 rounded-4xl"></div>
          <div className="row-span-2 border-2 col-start-2 col-span-1 rounded-4xl"></div>
          <div className="row-span-2 col-start-2 row-start-3 border-2 col-span-1 rounded-4xl"></div>
          <div className="row-span-3 col-start-3 row-start-1 border-2 rounded-4xl"></div>
          <div className="col-start-3 row-start-4 border-2 rounded-4xl"></div>
        </div>

        <button className="text-[16px] font-semibold border-1 py-2 px-5 rounded-full border-gray-400 mt-5">
          See More
        </button>
      </section>

      {/* Section 8 */}
      <div className="w-full min-h-[34rem] border-2 mt-10 rounded-4xl p-10 bg-background-color"></div>
    </div>
  );
}
