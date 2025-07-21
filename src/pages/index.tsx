import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#1f4b46]/95 to-[#4ca59b]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-8">

        {/* Mobile View - Circular Photo (Top) */}
        <div className="w-full flex justify-center md:hidden">
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-white/30 to-white/10 p-1 shadow-xl mb-6 overflow-hidden">
            <Image
              src="/images/luckyAI.jpeg"
              alt="Harishankar Giri"
              fill
              className="object-cover rounded-full border-4 border-white"
              priority
            />
          </div>
        </div>

        {/* Left Section */}
        <div className="w-full md:w-2/3 space-y-4 sm:space-y-5">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Harishankar Giri
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-white/90 mt-2">
              Developing Data Engineer 🚀
            </p>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-white/80 text-justify">
            Hey! I’m Harishankar — currently working in the NetSuite ERP space, but deeply interested in Data Engineering. Over the past few months, I’ve spent time learning and building end-to-end data pipelines using tools like Azure Data Factory, Databricks, Synapse, and ADLS Gen2. I love working with Python and PySpark, and have also explored tools like Apache Airflow, Kafka, and Docker in my personal projects. I may be early in my data journey, but I’m all in — constantly learning and excited to break into the DE world.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4 flex-wrap">
            <Link href="https://www.linkedin.com/in/hsg15/" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/linkedin.svg.webp" alt="LinkedIn" width={28} height={28} />
            </Link>
            <Link href="https://github.com/HSG15" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/github.png" alt="GitHub" width={33} height={33} />
            </Link>
            <Link href="/files/resume-cv.pdf" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/download.png" alt="Download Resume" width={28} height={28} />
            </Link>
            <Link href="https://leetcode.com/u/HarishankarGiri/" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/leetcode.webp" alt="LeetCode Profile" width={30} height={30} />
            </Link>
          </div>
        </div>

        {/* Desktop View - Original Rectangular Photo (Right) */}
        {/* Right Section - Profile Image (for desktop) */}
        <div className="hidden md:flex md:w-1/3 justify-center items-center">
          <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-white/30 to-white/10 p-1 flex items-center justify-center shadow-xl">
            <Image
              src="/images/luckyAI.jpeg"
              alt="Harishankar Giri"
              width={180}
              height={180}
              className="rounded-full border-4 border-white object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
