import backgroundImage from "./assets/images/bg.jpg";
import logo from "./assets/images/logo.png";
import ellipse from "./assets/images/Ellipse-120.png.png";
import whatsapp from "./assets/images/Whatsapp.png";
import objects from "./assets/images/OBJECTS.png";
import starImg from "./assets/images/Star.png.png";
import containerImg from "./assets/images/Container.png";
import container1Img from "./assets/images/Container-1.png";
import container2Img from "./assets/images/Container-2.png";
import marginImg from "./assets/images/Margin.png";
import praveenImg from "./assets/images/praveen.png";
import vamsiImg from "./assets/images/vamsi.png";
import maniImg from "./assets/images/mani.png";
import googleImg from "./assets/images/google.png";

import {
  ChevronDown,
  ArrowUpRight,
  Gavel,
  FileText,
  Search,
  Monitor,
} from "lucide-react";

export default function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-white">

      {/* ══════════ HERO BACKGROUND WRAPPER ══════════ */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="w-full max-w-[74%] mx-auto">

          {/* NAVBAR */}
          <nav className="h-[8vh] flex items-center justify-between pt-3">
            <img src={logo} alt="logo" className="w-[140px] object-contain" />

            <div className="flex items-center gap-12 text-[14px] font-medium text-black">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Services</span>
                <ChevronDown size={14} />
              </div>
              <a href="#">Pricing</a>
              <a href="#">Contact Us</a>
            </div>

            <button className="bg-[#2D328F] text-white rounded-full flex items-center gap-2 pl-6 pr-2 py-[6px] shadow-md">
              <span className="font-semibold text-[14px]">Get Started</span>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight size={14} className="text-black" />
              </div>
            </button>
          </nav>

          {/* HERO SECTION */}
          <section className="relative mt-[8vh] flex items-start justify-between pb-16">
            {/* FLOATING BALL */}
            <img src={ellipse} alt="ellipse" className="absolute -left-[10%] top-[2%] w-[95px]" />

            {/* LEFT CONTENT */}
            <div className="w-[520px]">
              <div className="inline-flex bg-[#DDD6FF] text-[#4B45B5] px-5 py-[8px] rounded-[10px] text-[12px] font-medium">
                Legal & Tax infrastructure for Scaling Companies
              </div>

              <h1 className="mt-5 text-[34px] leading-[44px] font-semibold tracking-[-1px] text-black">
                Your company's legal & tax
                <br />
                <span className="italic font-bold text-[#2D328F]">
                  infrastructure. Fully managed.
                </span>
              </h1>

              <p className="mt-5 w-[490px] text-[14px] leading-[24px] font-normal text-[#4A4A4A]">
                Jurea LLP manages compliance, taxation, contracts, and legal structuring — so your leadership team stays focused on growth, not paperwork. Designed for scaling Indian businesses.Built for Indian businesses between ₹1Cr and ₹50Cr revenue.
              </p>

              {/* FEATURE BOXES */}
              <div className="mt-7 flex items-start gap-[12px]">
                <div className="w-[120px] h-[118px] border border-[#2A3276] rounded-[10px] flex flex-col items-center justify-center text-center px-3">
                  <div className="w-[22px] h-[22px] rounded-[4px] border border-red-500 flex items-center justify-center">
                    <span className="text-red-500 text-[11px] font-bold">✕</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-[18px] text-black font-normal">Not a<br />traditional<br />law firm</p>
                </div>

                <div className="w-[120px] h-[118px] border border-[#2A3276] rounded-[10px] flex flex-col items-center justify-center text-center px-3">
                  <div className="w-[22px] h-[22px] rounded-[4px] border border-red-500 flex items-center justify-center">
                    <span className="text-red-500 text-[11px] font-bold">✕</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-[18px] text-black font-normal">Not a<br />standalone<br />CA firm</p>
                </div>

                <div className="w-[120px] h-[118px] border border-[#2A3276] rounded-[10px] flex flex-col items-center justify-center text-center px-3">
                  <div className="w-[22px] h-[22px] rounded-[4px] border border-red-500 flex items-center justify-center">
                    <span className="text-red-500 text-[11px] font-bold">✕</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-[18px] text-black font-normal">Not a<br />fragmented<br />service agency</p>
                </div>

                <div className="w-[120px] h-[118px] border border-[#2A3276] rounded-[10px] flex flex-col items-center justify-center text-center px-3">
                  <div className="w-[22px] h-[22px] rounded-[4px] border border-[#2D328F] flex items-center justify-center">
                    <span className="text-[#2D328F] text-[11px] font-bold">✓</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-[18px] text-black font-normal">Your dedicated legal<br />& compliance<br />infrastructure team...</p>
                </div>
              </div>

              {/* WHATSAPP BUTTON */}
              <button className="mt-7 bg-[#2D328F] text-white rounded-full flex items-center gap-3 pl-6 pr-2 py-2 shadow-md">
                <span className="font-semibold text-[14px]">Talk to us on WhatsApp</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img src={whatsapp} alt="whatsapp" className="w-4 h-4 object-contain" />
                </div>
              </button>

              <p className="mt-5 text-[13px] text-[#4A4A4A]">
                Free compliance audit call · 30 minutes · No obligation · We respond within 2 hours
              </p>
            </div>

            {/* RIGHT SIDE — JUREA ECOSYSTEM */}
            <div className="relative w-[420px] h-[420px] mt-[-10px]">
              {/* Concentric ring borders */}
              <div className="absolute inset-[30px] rounded-full border border-[#E8E0F0]"></div>
              <div className="absolute inset-[70px] rounded-full border border-[#E8E0F0]"></div>
              <div className="absolute inset-[110px] rounded-full border border-[#E8E0F0]"></div>

              {/* Background gradient blobs */}
              <div className="absolute top-[50px] left-[50px] w-[140px] h-[140px] rounded-full bg-[#EDE8FC] opacity-40"></div>
              <div className="absolute top-[120px] right-[60px] w-[120px] h-[120px] rounded-full bg-[#F5E0EF] opacity-35"></div>
              <div className="absolute bottom-[80px] left-[120px] w-[160px] h-[160px] rounded-full bg-[#E0E8FC] opacity-30"></div>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                <span className="text-[36px] font-bold text-[#1E2259] leading-[42px]">Jurea</span>
                <span className="text-[36px] font-bold text-[#1E2259] leading-[42px]">Ecosystem</span>
              </div>

              {/* Spinning orbit — 6 nodes */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* CA — top-left */}
                <div className="absolute top-[20px] left-[120px] w-[55px] h-[55px] rounded-full bg-[#2D328F] flex items-center justify-center z-20">
                  <span className="text-white text-[11px] font-semibold">CA</span>
                </div>
                {/* Jurea Global — top-right */}
                <div className="absolute top-[15px] right-[55px] w-[65px] h-[65px] rounded-full bg-[#2D328F] flex items-center justify-center z-20">
                  <span className="text-white text-[9px] font-semibold text-center leading-[12px]">Jurea<br />Global</span>
                </div>
                {/* CS — right */}
                <div className="absolute top-[170px] right-[5px] w-[55px] h-[55px] rounded-full bg-[#2D328F] flex items-center justify-center z-20">
                  <span className="text-white text-[11px] font-semibold">CS</span>
                </div>
                {/* Digital Marketing — bottom-right */}
                <div className="absolute bottom-[50px] right-[40px] w-[65px] h-[65px] rounded-full bg-[#2D328F] flex items-center justify-center z-20">
                  <span className="text-white text-[8px] font-semibold text-center leading-[11px]">Digital<br />Marketing</span>
                </div>
                {/* Website — bottom-left */}
                <div className="absolute bottom-[55px] left-[70px] w-[58px] h-[58px] rounded-full bg-[#2D328F] flex items-center justify-center z-20">
                  <span className="text-white text-[10px] font-semibold">Website</span>
                </div>
                {/* HR & Payroll — left */}
                <div className="absolute top-[140px] left-[10px] w-[60px] h-[60px] rounded-full bg-[#2D328F] flex items-center justify-center z-20">
                  <span className="text-white text-[9px] font-semibold text-center leading-[12px]">HR &<br />Payroll</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ══════════ STATS BAR ══════════ */}
      <div className="w-full bg-white py-6">
        <div className="w-full max-w-[74%] mx-auto">
          <div className="bg-white border border-[#E5E7EB] rounded-[20px] py-8 flex items-center justify-around">
            <div className="flex flex-col items-center text-center">
              <Gavel size={22} className="text-[#1E2259]" />
              <span className="text-[#1E2259] text-[32px] font-bold mt-3">03</span>
              <span className="text-[#6B7280] text-[13px] mt-2 leading-[20px]">Qualified professionals<br />(CA, CS, Advocate)</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FileText size={22} className="text-[#1E2259]" />
              <span className="text-[#1E2259] text-[32px] font-bold mt-3">01</span>
              <span className="text-[#6B7280] text-[13px] mt-2 leading-[20px]">Dedicated account<br />manager per client</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Search size={22} className="text-[#1E2259]" />
              <span className="text-[#1E2259] text-[32px] font-bold mt-3">48 hr</span>
              <span className="text-[#6B7280] text-[13px] mt-2 leading-[20px]">Onboarding<br />turnaround</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Monitor size={22} className="text-[#1E2259]" />
              <span className="text-[#1E2259] text-[32px] font-bold mt-3">00</span>
              <span className="text-[#6B7280] text-[13px] mt-2 leading-[20px]">Missed deadlines<br />tolerance</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ SECTION 2 — YOUR BUSINESS IS GROWING ══════════ */}
      <div className="w-full bg-[#F4F7FF]">
        <div className="w-full max-w-[74%] mx-auto pt-16 pb-16">
          <div className="flex items-start justify-between relative">
            {/* Left text */}
            <div className="w-[520px]">
              <h2 className="text-[32px] leading-[42px] font-bold text-black">
                Your business is growing.<br />
                Your backend <em className="text-[#2D328F]">isn't keeping up.</em>
              </h2>

              <p className="mt-6 text-[14px] leading-[26px] text-[#4A4A4A]">
                Once your company crosses ₹1 crore in revenue and 10 employees, compliance stops being a minor task and starts being a full-time job. GST, TDS, payroll, ROC filings, vendor contracts, employee agreements, IP protection — it compounds every month. Most founders are doing this themselves, or chasing a part-time CA who handles 200 other clients.
              </p>

              <p className="mt-5 text-[14px] leading-[26px] text-[#4A4A4A]">
                The result? Things fall through the cracks. Penalties get paid. Contracts go unsigned. And you — the founder — are spending 20% of your week on work that has nothing to do with your actual business.
              </p>
            </div>

            {/* Right illustration */}
            <div className="relative w-[400px]">
              <img src={starImg} alt="star" className="absolute -top-[20px] right-[10px] w-[28px]" />
              <img src={objects} alt="illustration" className="w-full object-contain" />
            </div>
          </div>

          {/* PAIN POINT CARDS */}
          <div className="mt-14 grid grid-cols-4 gap-5">
            <div className="border border-[#E0E0E0] rounded-[12px] p-5 bg-white">
              <h3 className="text-[15px] font-semibold text-black leading-[20px]">Your CA files. But does he advise?</h3>
              <p className="mt-3 text-[13px] leading-[22px] text-[#4A4A4A]">
                Most SME CAs are transactional — they file what you give them. Nobody is proactively structuring your taxes, flagging risks, or helping you make better financial decisions.
              </p>
            </div>

            <div className="border border-[#E0E0E0] rounded-[12px] p-5 bg-white">
              <h3 className="text-[15px] font-semibold text-black leading-[20px]">Contracts are being signed blindly</h3>
              <p className="mt-3 text-[13px] leading-[22px] text-[#4A4A4A]">
                Vendor agreements, client MSAs, employee NDAs — most growing companies sign these without proper legal review because calling a lawyer every time feels too expensive and slow.
              </p>
            </div>

            <div className="border border-[#E0E0E0] rounded-[12px] p-5 bg-white">
              <h3 className="text-[15px] font-semibold text-black leading-[20px]">ROC filings are always last-minute</h3>
              <p className="mt-3 text-[13px] leading-[22px] text-[#4A4A4A]">
                Annual returns, board resolutions, director KYC — they come due and someone scrambles. One missed filing is a penalty. Two missed filings can trigger strike-off proceedings.
              </p>
            </div>

            <div className="border border-[#E0E0E0] rounded-[12px] p-5 bg-white">
              <h3 className="text-[15px] font-semibold text-black leading-[20px]">Payroll is a monthly fire drill</h3>
              <p className="mt-3 text-[13px] leading-[22px] text-[#4A4A4A]">
                PF, ESI, TDS on salary, professional tax — getting payroll right for 15+ employees requires a system, not a spreadsheet. Most companies get it wrong and don't find out until an inspection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ SECTION 3 — WE RUN YOUR BACKEND ══════════ */}
      <div className="w-full bg-white">
        <div className="w-full max-w-[74%] mx-auto pt-16 pb-16">
          <h2 className="text-center text-[32px] leading-[42px] font-bold text-black">
            We run your legal & tax <em className="text-[#2D328F]">backend. End to end.</em>
          </h2>
          <p className="mt-4 text-center text-[14px] leading-[24px] text-[#4A4A4A] max-w-[700px] mx-auto">
            Think of Jurea as your outsourced legal, compliance and finance department. You get a qualified CA, a Company Secretary and a Business Advocate — working together as one integrated team on your account. Not three separate vendors. One coordinated team with one account manager who knows your business.
          </p>

          {/* SERVICE CARDS */}
          <div className="mt-12 flex flex-col gap-5">
            {/* Card 01 */}
            <div className="border border-[#E8E8F0] rounded-[14px] px-8 py-7 bg-[#FAFAFF] flex items-start gap-6">
              <span className="text-[60px] font-bold text-[#E8E8F0] leading-[60px] select-none">01</span>
              <div>
                <h3 className="text-[20px] font-bold text-[#2D328F]">Compliance infrastructure</h3>
                <p className="mt-2 text-[14px] leading-[24px] text-[#4A4A4A]">
                  GST filing, TDS returns, ROC annual compliance, director KYC, board resolutions, statutory registers. Every deadline tracked, filed, and confirmed to you on WhatsApp. You never have to remember a due date again.
                </p>
                <div className="mt-3 flex items-center gap-4 text-[13px] font-semibold text-[#1E2259]">
                  <span>GST</span><span>TDS</span><span>ROC</span><span>MCA filings</span><span>Annual returns</span>
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="border border-[#E8E8F0] rounded-[14px] px-8 py-7 bg-[#FAFAFF] flex items-start gap-6">
              <span className="text-[60px] font-bold text-[#E8E8F0] leading-[60px] select-none">02</span>
              <div>
                <h3 className="text-[20px] font-bold text-[#2D328F]">Tax infrastructure</h3>
                <p className="mt-2 text-[14px] leading-[24px] text-[#4A4A4A]">
                  Corporate tax planning, advance tax computation, ITR filing, financial statements, CA-certified accounts. Not just filing — proactive structuring to reduce your tax liability legally and keep your books investor-ready.
                </p>
                <div className="mt-3 flex items-center gap-4 text-[13px] font-semibold text-[#1E2259]">
                  <span>Corporate ITR</span><span>Tax planning</span><span>Bookkeeping</span><span>Financial statements</span>
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className="border border-[#E8E8F0] rounded-[14px] px-8 py-7 bg-[#FAFAFF] flex items-start gap-6">
              <span className="text-[60px] font-bold text-[#E8E8F0] leading-[60px] select-none">03</span>
              <div>
                <h3 className="text-[20px] font-bold text-[#2D328F]">Contracts infrastructure</h3>
                <p className="mt-2 text-[14px] leading-[24px] text-[#4A4A4A]">
                  Client agreements, vendor MSAs, NDA templates, employee contracts, founder agreements, IP assignments. We draft, review, and maintain your standard contract templates so you never sign a risky document again.
                </p>
                <div className="mt-3 flex items-center gap-4 text-[13px] font-semibold text-[#1E2259]">
                  <span>MSAs</span><span>NDAs</span><span>Employment contracts</span><span>Vendor agreements</span>
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className="border border-[#E8E8F0] rounded-[14px] px-8 py-7 bg-[#FAFAFF] flex items-start gap-6">
              <span className="text-[60px] font-bold text-[#E8E8F0] leading-[60px] select-none">04</span>
              <div>
                <h3 className="text-[20px] font-bold text-[#2D328F]">Business structuring</h3>
                <p className="mt-2 text-[14px] leading-[24px] text-[#4A4A4A]">
                  Trademark registration, ESOP policy, shareholding structure, Startup India recognition, MSME registration, restructuring for funding readiness. We make sure your company's foundation is solid before investors look at it.
                </p>
                <div className="mt-3 flex items-center gap-4 text-[13px] font-semibold text-[#1E2259]">
                  <span>Trademark</span><span>ESOP</span><span>Startup India</span><span>Fundraising prep</span>
                </div>
              </div>
            </div>
          </div>

          {/* EXTRA SERVICE CARDS */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="border border-[#E8E8F0] rounded-[14px] p-6 bg-white">
              <span className="inline-block bg-[#2D328F] text-white text-[12px] font-semibold px-4 py-[5px] rounded-full">Legal Service</span>
              <p className="mt-4 text-[14px] leading-[24px] text-[#4A4A4A]">
                Before you invest in property, ensure the legal foundation is verified. Property legal Opinions across India - Title Search, encumbrance, risk assessment
              </p>
              <div className="mt-3 flex justify-end">
                <div className="w-8 h-8 rounded-full bg-[#2D328F] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-[14px]">→</span>
                </div>
              </div>
            </div>

            <div className="border border-[#E8E8F0] rounded-[14px] p-6 bg-white">
              <span className="inline-block bg-[#2D328F] text-white text-[12px] font-semibold px-4 py-[5px] rounded-full">Add - On services</span>
              <p className="mt-4 text-[14px] leading-[24px] text-[#4A4A4A]">
                Payroll, HR & Recruitment, website development and digital marketing available as add-ons for retainer clients. Exclusively for existing Jurea compliance Clients.
              </p>
              <div className="mt-3 flex justify-end">
                <div className="w-8 h-8 rounded-full bg-[#2D328F] flex items-center justify-center cursor-pointer">
                  <span className="text-white text-[14px]">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ SECTION 4 — THE ALTERNATIVE COSTS 10X MORE ══════════ */}
      <div className="w-full bg-white">
        <div className="w-full max-w-[74%] mx-auto pt-16 pb-8">
          <h2 className="text-center text-[34px] leading-[44px] font-bold text-[#1E2259]">
            The alternative costs 10x more.
          </h2>
          <p className="mt-4 text-center text-[14px] leading-[24px] text-[#4A4A4A] max-w-[600px] mx-auto">
            Most companies at ₹3–10 crore revenue eventually hire in-house for these functions. Here's what that actually costs versus what Jurea costs.
          </p>
        </div>
      </div>

      {/* ══════════ SECTION 5 — COST COMPARISON ══════════ */}
      <div className="w-full" style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #F0FFF4 50%, #EEF2FF 100%)' }}>
        <div className="w-full max-w-[74%] mx-auto py-14">
          <h3 className="text-center text-[26px] font-bold text-[#2D328F] mb-10">
            Cost comparison for a ₹5Cr revenue company
          </h3>

          {/* 3 PRICING CARDS */}
          <div className="flex items-stretch justify-center gap-0">
            {/* Card 1 */}
            <div className="w-[280px] border border-[#E0E0E0] rounded-[14px] p-6 bg-white">
              <h4 className="text-[16px] font-semibold text-[#1E2259]">In-house Legal Head</h4>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Starting from</p>
              <p className="mt-2 text-[28px] font-bold text-[#1E2259]">₹10L - ₹15L <span className="text-[18px] font-normal">/Year</span></p>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Salary + PF + benefits</p>
              <button className="mt-5 w-full bg-[#1E2259] text-white text-[14px] font-semibold py-3 rounded-full">Get Started</button>
            </div>

            {/* Plus sign */}
            <div className="flex items-center px-4">
              <span className="text-[28px] font-bold text-[#4A4A4A]">+</span>
            </div>

            {/* Card 2 */}
            <div className="w-[280px] border border-[#E0E0E0] rounded-[14px] p-6 bg-white">
              <h4 className="text-[16px] font-semibold text-[#1E2259]">Part-time CA firm</h4>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Starting from</p>
              <p className="mt-2 text-[28px] font-bold text-[#1E2259]">₹3L - ₹6L <span className="text-[18px] font-normal">/Year</span></p>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Limited scope, reactive</p>
              <button className="mt-5 w-full bg-[#1E2259] text-white text-[14px] font-semibold py-3 rounded-full">Get Started</button>
            </div>

            {/* Plus sign */}
            <div className="flex items-center px-4">
              <span className="text-[28px] font-bold text-[#4A4A4A]">+</span>
            </div>

            {/* Card 3 */}
            <div className="w-[280px] border border-[#E0E0E0] rounded-[14px] p-6 bg-white">
              <h4 className="text-[16px] font-semibold text-[#1E2259]">CS retainer</h4>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Starting from</p>
              <p className="mt-2 text-[28px] font-bold text-[#1E2259]">₹2L - 4L <span className="text-[18px] font-normal">/Year</span></p>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Annual filings only</p>
              <button className="mt-5 w-full bg-[#1E2259] text-white text-[14px] font-semibold py-3 rounded-full">Get Started</button>
            </div>
          </div>

          {/* VS COMPARISON */}
          <div className="mt-10 flex items-stretch justify-center gap-0">
            {/* Total in-house */}
            <div className="w-[380px] border border-[#E0E0E0] rounded-[14px] p-6 bg-white">
              <h4 className="text-[16px] font-semibold text-[#1E2259]">Total in-house cost</h4>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Starting from</p>
              <p className="mt-2 text-[28px] font-bold text-[#1E2259]">₹15L - ₹25L <span className="text-[18px] font-normal">/Year</span></p>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Fragmented, reactive, and you still manage 3 different people</p>
              <button className="mt-5 w-full bg-[#1E2259] text-white text-[14px] font-semibold py-3 rounded-full">Get Started</button>
            </div>

            {/* VS */}
            <div className="flex items-center px-6">
              <span className="text-[24px] font-bold text-[#4A4A4A]">VS</span>
            </div>

            {/* Jurea */}
            <div className="w-[380px] border border-[#E0E0E0] rounded-[14px] p-6 bg-white">
              <h4 className="text-[16px] font-semibold text-[#1E2259]">Jurea LLP — full infrastructure</h4>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">Starting from</p>
              <p className="mt-2 text-[28px] font-bold text-[#1E2259]">₹1.8L - ₹3.6L <span className="text-[18px] font-normal">/Year</span></p>
              <p className="mt-1 text-[12px] text-[#4A4A4A]">CA + CS + Legal, integrated, proactive, one contact</p>
              <button className="mt-5 w-full bg-[#1E2259] text-white text-[14px] font-semibold py-3 rounded-full">Get Started</button>
            </div>
          </div>

          <p className="mt-8 text-center text-[14px] text-[#4A4A4A]">
            Same outcome. One-eighth the cost. Zero management overhead on your end.
          </p>
        </div>
      </div>

      {/* ══════════ SECTION 6 — FROM CONVERSATION TO FULLY RUNNING ══════════ */}
      <div className="w-full bg-white">
        <div className="w-full max-w-[74%] mx-auto pt-16 pb-10">
          <h2 className="text-center text-[32px] leading-[42px] font-bold text-black">
            From conversation to <em className="text-[#2D328F]">fully running in 48 hours.</em>
          </h2>

          {/* PROCESS STEPS */}
          <div className="mt-10 flex items-stretch gap-4 h-[320px]">
            {/* Step 1 — wide card */}
            <div className="w-[40%] rounded-[16px] overflow-hidden relative flex flex-col justify-end p-6">
              <img src={containerImg} alt="Audit" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent"></div>
              <div className="relative z-10">
                <h4 className="text-white text-[18px] font-bold leading-[24px]">Free compliance audit call<br />(30 minutes)</h4>
                <p className="mt-2 text-white/90 text-[13px] leading-[20px]">
                  We review your current compliance status, identify gaps, and tell you exactly what your business needs. You'll get a clear picture of your compliance health — even if you decide not to work with us.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 rounded-[16px] overflow-hidden relative flex items-end p-4">
              <img src={container1Img} alt="Proposal" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent"></div>
              <p className="relative z-10 text-white text-[15px] font-semibold leading-[22px] [writing-mode:vertical-rl] rotate-180 mx-auto">We send a fixed-price<br />proposal (same day)</p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 rounded-[16px] overflow-hidden relative flex items-end p-4">
              <img src={container2Img} alt="Account Manager" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent"></div>
              <p className="relative z-10 text-white text-[15px] font-semibold leading-[22px] [writing-mode:vertical-rl] rotate-180 mx-auto">Sign, pay, meet your<br />account manager</p>
            </div>

            {/* Step 4 */}
            <div className="flex-1 rounded-[16px] overflow-hidden relative flex items-end p-4">
              <img src={marginImg} alt="Run Backend" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent"></div>
              <p className="relative z-10 text-white text-[15px] font-semibold leading-[22px] [writing-mode:vertical-rl] rotate-180 mx-auto">We run your backend.<br />You get WhatsApp updates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ SECTION 8 — TEAM ══════════ */}
      <div className="w-full bg-[#2D328F] pt-20 pb-0 flex flex-col items-center">
        <h2 className="text-white text-[42px] font-bold text-center">Three specialists. One coordinated team.</h2>
        <p className="text-white/80 mt-4 text-[14px] leading-[22px] text-center max-w-[800px]">
          Unlike most compliance firms where work gets passed to a junior or outsourced, your account is handled by three qualified professionals who work together as a unit — a Chartered Accountant, a Company Secretary, and a Business Advocate.
        </p>

        <div className="w-full max-w-[1000px] mt-12 grid grid-cols-3 rounded-[24px] overflow-hidden bg-[#454B94]">
          {/* Praveen */}
          <div className="p-8 pb-10 border-r border-[#ffffff20]">
            <div className="flex items-center gap-4">
              <img src={praveenImg} alt="Praveen" className="w-[60px] h-[60px] rounded-[10px] object-cover" />
              <span className="text-white text-[18px] font-bold">Praveen</span>
            </div>
            <h4 className="text-white font-bold text-[18px] mt-6">Business Advocate & Founder</h4>
            <div className="mt-4 text-[12px] leading-[20px] text-white/70 space-y-1">
              <p>Bar Council Enrolment No. [XXX]</p>
              <p>[X] years in corporate & business law</p>
              <p>Specialisation: contracts, IP, business structuring</p>
            </div>
          </div>

          {/* Mani - center */}
          <div className="p-8 pb-10 bg-[#3B418B] flex flex-col items-center text-center translate-y-10 border-x border-[#ffffff20]">
            <div className="flex items-center gap-4">
              <img src={maniImg} alt="Mani" className="w-[60px] h-[60px] rounded-[10px] object-cover" />
              <span className="text-white text-[18px] font-bold">Mani</span>
            </div>
            <h4 className="text-white font-bold text-[18px] mt-6">Chartered Accountant</h4>
            <div className="mt-4 text-[12px] leading-[20px] text-white/70 space-y-1">
              <p>ICAI Membership No. [XXX]</p>
              <p>[X] years in tax & compliance</p>
              <p>Specialisation: GST, corporate tax, financial structuring</p>
            </div>
          </div>

          {/* Vamsi */}
          <div className="p-8 pb-10 border-l border-[#ffffff20]">
            <div className="flex items-center gap-4">
              <img src={vamsiImg} alt="Vamsi" className="w-[60px] h-[60px] rounded-[10px] object-cover" />
              <span className="text-white text-[18px] font-bold">Vamsi</span>
            </div>
            <h4 className="text-white font-bold text-[18px] mt-6">Company Secretary</h4>
            <div className="mt-4 text-[12px] leading-[20px] text-white/70 space-y-1">
              <p>ICSI Membership No. [XXX]</p>
              <p>[X] years in company secretarial practice</p>
              <p>Specialisation: ROC, MCA, corporate governance</p>
            </div>
          </div>
        </div>

        {/* Office Background Image underneath */}
        <div className="w-full max-w-[1000px] h-[300px] -mt-[150px] rounded-b-[24px] overflow-hidden opacity-30 relative z-[-1]">
          <img src={backgroundImage} alt="Office" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
      </div>

      {/* ══════════ SECTION 9 — GOOGLE REVIEWS ══════════ */}
      <div className="w-full bg-[#F4F7FF] py-20 flex flex-col items-center">
        <h2 className="text-[36px] font-bold text-[#111111]">
          What Our Client Say <em className="text-[#2D328F] not-italic italic">On Google .</em>
        </h2>
        <p className="text-[#666666] text-[14px] mt-4 max-w-[500px] text-center">
          Don't just take our word for it. Hear what our satisfied clients have to say about their experience partnering with SEOC
        </p>

        <div className="w-full max-w-[74%] mt-12 grid grid-cols-2 gap-8">
          {/* Review 1 */}
          <div className="bg-white rounded-[16px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative">
            <div className="flex text-[#6C63FF] text-[20px] tracking-widest">★★★★★</div>
            <img src={googleImg} alt="Google" className="absolute top-8 right-8 w-8 h-8" />
            <h4 className="font-bold text-[14px] mt-3">Jhon Doe</h4>
            <p className="text-[#2D328F] font-medium text-[16px] leading-[26px] mt-6">
              "Replace with real Google review text from your first clients."
            </p>
            <p className="text-[#888888] text-[12px] mt-6">[Company] - [City]</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-[16px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative">
            <div className="flex text-[#6C63FF] text-[20px] tracking-widest">★★★★★</div>
            <img src={googleImg} alt="Google" className="absolute top-8 right-8 w-8 h-8" />
            <h4 className="font-bold text-[14px] mt-3">Jhon Doe</h4>
            <p className="text-[#2D328F] font-medium text-[16px] leading-[26px] mt-6">
              "Replace with real Google review text from your first clients."
            </p>
            <p className="text-[#888888] text-[12px] mt-6">[Company] - [City]</p>
          </div>
        </div>
      </div>

      {/* ══════════ SECTION 10 — CTA ══════════ */}
      <div className="w-full bg-[#2D328F] py-24 flex flex-col items-center relative overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full border border-white/5 opacity-30"></div>
        <div className="absolute top-[-40%] left-[-5%] w-[400px] h-[400px] rounded-full border border-white/5 opacity-30"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full border border-white/5 opacity-30"></div>

        <h2 className="text-white text-[42px] font-bold text-center leading-[52px]">
          Your compliance is costing you<br />more than you think.
        </h2>
        <p className="text-white/80 mt-6 text-[14px] leading-[22px] text-center max-w-[600px]">
          Let's do a free 30-minute audit of your current compliance status. We'll tell you exactly where you stand — and what it's costing you to leave it unmanaged. No pitch. No pressure. Just clarity.
        </p>

        <div className="flex items-center gap-6 mt-10 relative z-10">
          <button className="h-[50px] px-8 rounded-full border border-white flex items-center gap-3 text-white font-semibold text-[15px] hover:bg-white/10 transition">
            WhatsApp us now
            <div className="w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center">
              <img src={whatsapp} alt="WA" className="w-[14px] h-[14px]" />
            </div>
          </button>
          <button className="h-[50px] px-8 rounded-full bg-white flex items-center gap-3 text-[#2D328F] font-semibold text-[15px] shadow-lg hover:shadow-xl transition">
            Book a free audit call
            <span className="w-6 h-6 rounded-full bg-[#6C63FF] text-white flex items-center justify-center text-[12px] font-bold">↗</span>
          </button>
        </div>

        <p className="text-white/60 text-[12px] mt-8">Typically responds within 2 hours · Mon–Sat 9am–7pm IST · hello@jureallp.com</p>
      </div>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="w-full bg-[#F8FFF9] py-16">
        <div className="w-full max-w-[74%] mx-auto grid grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Jurea Logo" className="h-8" />
              <span className="text-[#2D328F] font-bold text-[20px]">Jurea LLP</span>
            </div>
            <p className="text-[#666666] text-[13px] leading-[22px] mt-4">
              By optimizing content, leveraging relevant keywords, and adhering to best practices, businesses can secure prominent position .
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-[#2D328F] font-bold">f</div>
              <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-[#2D328F] font-bold">t</div>
              <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-[#2D328F] font-bold">in</div>
              <div className="w-8 h-8 rounded-full bg-[#E8E6FF] flex items-center justify-center text-[#2D328F] font-bold">ig</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[18px] text-[#111111]">About Llinks</h4>
            <ul className="mt-6 space-y-4 text-[#666666] text-[14px]">
              <li>Case Studies</li>
              <li>Pricing Plans</li>
              <li>Testimonials</li>
              <li>Contact Us</li>
              <li>Faq</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[18px] text-[#111111]">Get in touch</h4>
            <ul className="mt-6 space-y-4 text-[#666666] text-[14px]">
              <li className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>8708 Technology Forest Pl Suite<br />125 -G, The Woodlands, TX 773</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉</span>
                <span>infoscoc@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <span>↗</span>
                <span>getseocinfo.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[18px] text-[#111111]">Subsribe Now</h4>
            <div className="mt-6 relative">
              <input type="email" placeholder="Email Address" className="w-full h-[50px] rounded-full px-6 text-[14px] outline-none shadow-[0_5px_15px_rgba(0,0,0,0.05)]" />
              <button className="absolute right-1 top-1 bottom-1 px-6 rounded-full bg-[#2D328F] text-white text-[14px] font-semibold flex items-center gap-2">
                Subscribe <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}