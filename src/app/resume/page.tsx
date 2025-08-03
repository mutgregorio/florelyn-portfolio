"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Download, Printer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handlePrint = () => {
        window.print()
    }

    const handleDownloadPDF = async () => {
        if (typeof window !== "undefined") {
            try {
                // Dynamic import to avoid SSR issues
                const html2canvas = (await import("html2canvas")).default
                const jsPDF = (await import("jspdf")).jsPDF

                const element = document.getElementById("resume-content")
                if (element) {
                    // Configure html2canvas for A4 dimensions
                    const canvas = await html2canvas(element, {
                        scale: 3, // Higher scale for better quality
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: "#ffffff",
                        scrollX: 0,
                        scrollY: 0,
                    })

                    const imgData = canvas.toDataURL("image/png", 1.0)

                    // Create PDF with exact A4 dimensions
                    const pdf = new jsPDF({
                        orientation: "portrait",
                        unit: "mm",
                        format: "a4",
                    })

                    // A4 dimensions in mm
                    const pageWidth = 210
                    const pageHeight = 297

                    // Add image to fill entire A4 page
                    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight)
                    pdf.save("Florelyn_Gregorio_Resume.pdf")
                }
            } catch (error) {
                console.error("Error generating PDF:", error)
                // Fallback: try to download a pre-made PDF
                const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
                const link = document.createElement("a");
                link.href = `${basePath}/Florelyn_Gregorio_Resume.pdf`;
                link.download = "Florelyn_Gregorio_Resume.pdf"
                link.click()
            }
        }
    }

    if (!isClient) {
        return <div>Loading...</div>
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation Header - Hidden in print */}
            <div className="print:hidden bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                </div>
            </div>

            {/* Resume Content Container */}
            <div className="flex justify-center py-8 print:py-0 print:justify-start">
                {/* A4 Paper Container */}
                <div className="print:w-full print:h-screen">
                    <div
                        id="resume-content"
                        className="bg-white flex shadow-lg print:shadow-none"
                        style={{
                            width: "210mm", // A4 width
                            height: "297mm", // A4 height
                            margin: "0 auto",
                        }}
                    >
                        {/* Left Side - Main Content (70% width) */}
                        <div className="flex-1 p-8 print:p-6" style={{ width: "70%" }}>
                            {/* Header with Profile Picture */}
                            <div className="flex items-center mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-900 mr-4 flex-shrink-0 p-0.5">
                                    <Image
                                        src="/profile.png"
                                        alt="Florelyn C. Gregorio"
                                        width={88}
                                        height={88}
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Florelyn C. Gregorio</h1>
                                    <p className="text-gray-600 text-base">ANY POSITION RELATED TO IT</p>
                                </div>
                            </div>

                            {/* Profile Section */}
                            <section className="mb-5">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">Profile</h2>
                                <p className="text-xs text-gray-700 leading-relaxed">
                                    Dynamic OJT professional with a strong foundation in data management and project collaboration,
                                    bringing hands-on experience in encoding and presentation design. Skilled in adapting to various
                                    project needs while effectively communicating complex ideas through visually engaging materials.
                                    Proficient in database management and software logic, with a keen interest in developing innovative IT
                                    solutions. Committed to optimizing workflows and enhancing team productivity, ready to contribute to
                                    any IT-related position. Passionate about leveraging academic knowledge and practical skills to tackle
                                    real-world challenges.
                                </p>
                            </section>

                            {/* Employment History */}
                            <section className="mb-5">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">
                                    Employment History
                                </h2>
                                <div className="mb-3">
                                    <h3 className="font-bold text-gray-800 text-base">OJT Secretary</h3>
                                    <p className="text-xs text-gray-500 mb-2">March 2025 – July 2025</p>
                                    <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                                        <li>Encoded data for various projects, ensuring accuracy and efficiency.</li>
                                        <li>Designed layouts for presentations, enhancing visual appeal and clarity.</li>
                                        <li>Created PowerPoint presentations, effectively communicating ideas and information.</li>
                                        <li>Collaborated with team members to gather content and feedback.</li>
                                        <li>Assisted in organizing and prioritizing project tasks for optimal workflow.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Education */}
                            <section className="mb-5">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">Education</h2>
                                <div className="mb-3">
                                    <h3 className="font-bold text-gray-800 text-base">
                                        Zamboanga Peninsula Polytechnic State University
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-1">August 2022 – June 2025</p>
                                    <p className="text-xs text-gray-700 font-medium">Graduated with Proficiency Award</p>
                                </div>
                            </section>

                            {/* Courses */}
                            <section>
                                <h2 className="text-lg font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">Courses</h2>
                                <ul className="space-y-1 text-xs text-gray-700">
                                    <li>
                                        <span className="font-bold">BS Criminology</span>
                                        <span className="text-gray-500 ml-2">(August 2021 – September 2025)</span>
                                    </li>
                                    <li>
                                        <span className="font-bold">DT-Information Technology</span>
                                        <span className="text-gray-500 ml-2">(August 2022 – June 2025)</span>
                                    </li>
                                </ul>
                            </section>
                        </div>

                        {/* Right Side - Sidebar (30% width) */}
                        <div className="bg-blue-900 text-white p-6 print:p-4 flex flex-col" style={{ width: "30%" }}>
                            {/* Details */}
                            <section className="mb-6">
                                <h3 className="font-semibold text-base mb-3">Details</h3>
                                <div className="space-y-1 text-xs">
                                    <p>Cacao Zamboanga City</p>
                                    <p>Zamboanga</p>
                                    <p>Philippines</p>
                                    <p className="mt-3">09058822711</p>
                                    <p className="break-all">gregorioflorelyn413@gmail.com</p>
                                </div>
                            </section>

                            {/* Skills */}
                            <section className="mb-6 flex-1">
                                <h3 className="font-semibold text-base mb-3">Skills</h3>
                                <div className="space-y-3">
                                    {[
                                        { skill: "Adaptability", level: 90 },
                                        { skill: "Database Management", level: 85 },
                                        { skill: "Software Logic", level: 80 },
                                        { skill: "Programming", level: 75 },
                                        { skill: "Encoding", level: 90 },
                                        { skill: "Developing a Mobile application", level: 60 },
                                        { skill: "Developing a Website", level: 60 },
                                        { skill: "UI designer", level: 30 },
                                    ].map((item, index) => (
                                        <div key={index} className="space-y-1">
                                            <p className="text-xs font-medium">{item.skill}</p>
                                            <div className="w-full bg-blue-800 rounded-full h-1.5">
                                                <div className="bg-white h-1.5 rounded-full" style={{ width: `${item.level}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Languages */}
                                <section>
                                    <br />
                                    <h3 className="font-semibold text-base mb-3">Languages</h3>
                                    <ul className="space-y-1 text-xs">
                                        <li>Chavacano</li>
                                        <li>Tagalog</li>
                                        <li>English</li>
                                    </ul>
                                </section>
                            </section>


                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Buttons - Hidden in print */}
            <div className="print:hidden fixed bottom-8 right-8 flex flex-col gap-4 z-20">
                <Button
                    onClick={handlePrint}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                    <Printer className="h-5 w-5 mr-2" />
                    Print
                </Button>
            </div>

            {/* Print and PDF Styles */}
            <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          
          .print\\:p-4 {
            padding: 1rem !important;
          }
          
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          
          .print\\:justify-start {
            justify-content: flex-start !important;
          }
          
          .print\\:w-full {
            width: 100% !important;
          }
          
          .print\\:h-screen {
            height: 100vh !important;
          }
          
          #resume-content {
            box-shadow: none !important;
            margin: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            max-width: none !important;
            display: flex !important;
          }
          
          @page {
            size: A4;
            margin: 0;
          }
        }
        
        /* Ensure colors print correctly */
        .bg-blue-900 {
          background-color: #1e3a8a !important;
        }
        
        .text-white {
          color: white !important;
        }
        
        .bg-white {
          background-color: white !important;
        }
      `}</style>
        </div>
    )
}
