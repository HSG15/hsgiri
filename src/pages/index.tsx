import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-4xl bg-gradient-to-r from-[#1f4b46]/95 to-[#4ca59b]/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl flex flex-col md:flex-row items-center">

        {/* Left Section */}
        <div className="md:w-2/3 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Harishankar Giri</h1>
          <p className="text-2xl font-semibold text-white/90">Developing Data Engineer 🚀</p>
          <p className="text-lg leading-relaxed text-white/80 text-justify">
            Hey! I’m Harishankar — currently working in the NetSuite ERP space, but deeply interested in data engineering. Over the past few months, I’ve spent time learning and building end-to-end data pipelines using tools like Azure Data Factory, Databricks, Synapse, and ADLS Gen2. I love working with Python and PySpark, and have also explored tools like Apache Airflow, Kafka, and Docker in my personal projects. I may be early in my data journey, but I’m all in — constantly learning and excited to break into the DE world.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <Link href="https://www.linkedin.com/in/hsg15/" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/linkedin.svg.webp" alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link href="https://github.com/HSG15" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/github.png" alt="GitHub" width={37} height={35} />
            </Link>
            <Link href="/files/resume-cv.pdf" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/download.png" alt="Download Resume" width={32} height={32} />
            </Link>
            <Link href="https://leetcode.com/u/HarishankarGiri/" target="_blank" className="hover:scale-110 transition-transform duration-200">
              <Image src="/images/leetcode.webp" alt="LeetCode Profile" width={33} height={33} />
            </Link>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="md:w-1/3 flex justify-center items-center">
          <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-white/30 to-white/10 p-1 flex items-center justify-center shadow-xl">
            <Image
              src="/images/luckyAI.jpeg"
              alt="Harishankar Giri"
              width={170}
              height={170}
              className="rounded-full border-4 border-white object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
