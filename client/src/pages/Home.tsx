import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Linkedin, TrendingUp, Users, Target, Zap } from "lucide-react";

export default function Home() {
  const baseUrl = import.meta.env.BASE_URL;
  const publicAsset = (path: string) => `${baseUrl}${path.replace(/^\//, "")}`;
  const logoUrl = publicAsset("/logo.png?v=4");
  const partnerFormUrl = "https://forms.gle/6JWYVZzstsXab9P18";
  const whitePaperUrl = publicAsset("/docs/attune_white_paper.pdf");
  const teamMembers = [
    {
      name: "Ashley Yang",
      role: "Product & Operations",
      photo: publicAsset("/team/ashley-yang.jpg"),
      linkedin: "https://www.linkedin.com/in/ashleyyang2027/",
    },
    {
      name: "Barnabas Pasztor",
      role: "Neuroscience & Strategy",
      photo: publicAsset("/team/barnabas-pasztor.jpg"),
      linkedin: "https://www.linkedin.com/in/barnabas-pasztor",
    },
    {
      name: "Joshua Perez",
      role: "Hardware Systems (EMG)",
      photo: publicAsset("/team/joshua-perez.jpg"),
      linkedin: "https://www.linkedin.com/in/joshua-perez-40b64a271/",
    },
    {
      name: "Taylor Foster",
      role: "Human Systems & Research",
      photo: publicAsset("/team/taylor-foster.jpg"),
      linkedin: "https://www.linkedin.com/in/taylor-foster-human-centered-design/",
    },
    {
      name: "Tanisha Dalwadi",
      role: "XR & Interaction",
      photo: publicAsset("/team/tanisha-dalwadi.jpg"),
      linkedin: "https://www.linkedin.com/in/tanisha-dalwadi",
    },
    {
      name: "Alexander Lumala",
      role: "Software",
      photo: publicAsset("/team/alexander-lumala.jpg"),
      linkedin: "https://www.linkedin.com/in/alexander-lumala-9523b2256",
    },
    {
      name: "Nathaniel Teo",
      role: "Hardware",
      photo: publicAsset("/team/nathaniel-teo.jpg"),
      linkedin: "https://www.linkedin.com/in/nathaniel-teo-10006124a",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1819] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1819]/85 backdrop-blur-md border-b border-[#2a3f58]">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="Attune logo"
              className="w-10 h-10 rounded-full object-contain bg-[#1a1819] p-1 border border-[#2a3f58]"
            />
            <span className="text-xl font-bold tracking-tight">ATTUNE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm hover:text-[#f6e7d8] transition-colors">
              PRODUCT
            </a>
            <a href="#how-it-works" className="text-sm hover:text-[#f6e7d8] transition-colors">
              HOW IT WORKS
            </a>
            <a href="#market" className="text-sm hover:text-[#f6e7d8] transition-colors">
              MARKET
            </a>
            <a href="#team" className="text-sm hover:text-[#f6e7d8] transition-colors">
              TEAM
            </a>
            <a href="#roadmap" className="text-sm hover:text-[#f6e7d8] transition-colors">
              ROADMAP
            </a>
          </div>
          <Button asChild className="bg-[#f6e7d8] hover:bg-[#edd5bf] text-[#1b2f44] font-semibold">
            <a href={partnerFormUrl} target="_blank" rel="noreferrer">
              Partner With Us
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6e7d8]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full border border-[#f6e7d8]/30 bg-[#f6e7d8]/10 text-[#f6e7d8] text-sm font-medium">
                THE LUMINOSITY LAB
              </div>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Train Before You Fit.
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Attune is a pre-prosthetic EMG training platform preparing amputees for myoelectric control — before their device arrives.
            </p>

            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
              We help clinics reduce early frustration, shorten adaptation time, and improve long-term prosthetic adoption.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                className="bg-[#f6e7d8] hover:bg-[#edd5bf] text-[#1b2f44] font-semibold px-8 py-6 text-base"
              >
                <a href={partnerFormUrl} target="_blank" rel="noreferrer">
                  Partner With Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#f6e7d8]/50 hover:bg-[#f6e7d8]/10 text-[#f6e7d8] px-8 py-6 text-base"
              >
                <a href={whitePaperUrl} download>
                  View White Paper
                </a>
              </Button>
            </div>

            {/* Category Claim */}
            <div className="pt-12 border-t border-[#2a3f58]">
              <p className="text-white/70 text-sm uppercase tracking-widest mb-3">Category Claim</p>
              <p className="text-2xl font-bold text-[#f6e7d8]">
                Prosthetic success shouldn't begin on delivery day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-[#1a1819]/30">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4">The Problem</h2>
          <p className="text-white/70 mb-12 max-w-3xl text-lg">
            Most amputees receive advanced prosthetics without ever practicing how to control one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                Myoelectric devices require precise muscle activation, signal consistency, and cognitive adaptation. Yet today, training starts after fitting.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-300">Early frustration</h4>
                    <p className="text-white/70 text-sm">Patients struggle with unrealistic expectations</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-300">Extended trial-and-error</h4>
                    <p className="text-white/70 text-sm">Calibration takes weeks instead of days</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-300">Reduced confidence</h4>
                    <p className="text-white/70 text-sm">Patients lose motivation and abandon devices</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-300">High abandonment rates</h4>
                    <p className="text-white/70 text-sm">Upper-limb prosthetic abandonment is endemic</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1819] rounded-lg p-8 border border-[#2a3f58]">
              <h4 className="text-lg font-bold mb-4 text-[#f6e7d8]">The Gap</h4>
              <div className="space-y-4 text-white/80">
                <p>
                  <span className="font-semibold text-[#f6e7d8]">Clinicians</span> lack visibility into baseline neuromuscular readiness.
                </p>
                <p>
                  <span className="font-semibold text-[#f6e7d8]">Patients</span> lack safe space to build control before the stakes are real.
                </p>
                <p className="pt-4 border-t border-[#2a3f58] text-sm italic">
                  The system begins too late.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4">The Solution</h2>
          <p className="text-white/70 mb-12 max-w-3xl text-lg">
            A pre-prosthetic training layer that shifts foundational learning into the pre-fitting window.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed text-lg">
                Using surface EMG sensors and immersive XR environments, patients train real muscle signals to control a virtual prosthetic hand — building motor fluency before physical device delivery.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#f6e7d8]/20 border border-[#f6e7d8]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#f6e7d8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f6e7d8]">Patients arrive at fitting with trained activation patterns</h4>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#f6e7d8]/20 border border-[#f6e7d8]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#f6e7d8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f6e7d8]">Clinicians gain readiness insights before calibration</h4>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#f6e7d8]/20 border border-[#f6e7d8]/50 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#f6e7d8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f6e7d8]">Early adaptation becomes structured, not reactive</h4>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2a3f58]">
                <p className="text-sm text-white/70 italic">
                  Attune is not a prosthetic controller. It is a readiness platform.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f6e7d8]/20 to-[#1b2f44]/30 rounded-2xl blur-3xl" />
            <img
              src={publicAsset("/XRTrainingInterface.png")}
              alt="XR Training Interface"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Armband */}
      <section id="product" className="py-20 bg-[#1a1819]/30">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">The Hardware</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1819]/50 to-[#1a1819]/50 rounded-2xl blur-3xl" />
            <img
              src={publicAsset("/EMGSensorArmband.png")}
              alt="EMG Sensor Armband"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Lightweight EMG Sensor Armband</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Our proprietary surface EMG sensors capture residual muscle activation with clinical-grade precision. The armband is designed for comfort and extended wear, enabling patients to train at home.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f6e7d8]/20 border border-[#f6e7d8]/50 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[#f6e7d8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Real-time signal processing</h4>
                    <p className="text-white/70 text-sm">Sub-100ms latency for responsive feedback</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f6e7d8]/20 border border-[#f6e7d8]/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-[#f6e7d8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Wireless connectivity</h4>
                    <p className="text-white/70 text-sm">Seamless integration with XR headsets and clinician dashboard</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f6e7d8]/20 border border-[#f6e7d8]/50 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-[#f6e7d8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Calibration-free operation</h4>
                    <p className="text-white/70 text-sm">Works out of the box for diverse patient populations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                num: "1",
                title: "EMG Signal Capture",
                desc: "Lightweight surface sensors detect residual muscle activation.",
              },
              {
                num: "2",
                title: "Real-Time Virtual Control",
                desc: "Signals drive a virtual prosthetic hand in immersive training environments.",
              },
              {
                num: "3",
                title: "Structured Motor Learning",
                desc: "Gamified protocols reinforce repeatable activation patterns.",
              },
              {
                num: "4",
                title: "Clinician Dashboard",
                desc: "Engagement metrics and activation insights support smarter fittings.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58] h-full">
                  <div className="text-4xl font-bold text-[#f6e7d8] mb-3">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-[#f6e7d8]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinician Dashboard Showcase */}
      <section className="py-20 bg-[#1a1819]/30">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">Clinician Dashboard</h2>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f6e7d8]/20 to-[#1a1819]/30 rounded-2xl blur-3xl" />
            <img
              src={publicAsset("/dashboard.png")}
              alt="Clinician Dashboard"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
              <h4 className="font-bold text-[#f6e7d8] mb-2">Patient Readiness Overview</h4>
              <p className="text-white/70 text-sm">
                Real-time visibility into each patient's activation consistency, engagement levels, and readiness for fitting.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
              <h4 className="font-bold text-[#f6e7d8] mb-2">Engagement Trends</h4>
              <p className="text-white/70 text-sm">
                Track training compliance, session frequency, and completion rates to predict success outcomes.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
              <h4 className="font-bold text-[#f6e7d8] mb-2">Activation Patterns</h4>
              <p className="text-white/70 text-sm">
                Detailed muscle activation analytics inform personalized fitting strategies and device programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">See Attune in Action</h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-[#1a1819] border border-[#2a3f58]">
              <video className="w-full h-full object-cover" controls playsInline preload="metadata">
                <source src={publicAsset("/video/attune-video.mp4")} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-[#1a1819]/30">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4">Why It Matters</h2>
          <p className="text-white/70 mb-12 max-w-3xl text-lg">
            Upper-limb prosthetic abandonment remains one of the field's most persistent challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-lg bg-[#1a1819] border border-[#2a3f58]">
              <h3 className="text-2xl font-bold mb-4 text-[#f6e7d8]">Attune Addresses the Earliest Failure Point</h3>
              <p className="text-white/80 leading-relaxed">
                Untrained muscle intent + unrealistic expectations + blind calibration = early abandonment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
                <TrendingUp className="w-6 h-6 text-[#f6e7d8] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Reduce early frustration</h4>
                  <p className="text-white/70 text-sm">Patients arrive prepared and confident</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
                <Target className="w-6 h-6 text-[#f6e7d8] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Improve control consistency</h4>
                  <p className="text-white/70 text-sm">Motor patterns are established before device fitting</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
                <Users className="w-6 h-6 text-[#f6e7d8] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Increase sustained use</h4>
                  <p className="text-white/70 text-sm">Early success builds long-term device adoption</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-lg bg-gradient-to-r from-[#f6e7d8]/10 to-[#1a1819]/20 border border-[#f6e7d8]/30">
            <p className="text-lg text-white/80 italic font-medium">
              We are building the missing layer between surgery and fitting.
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">Market Opportunity</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <p className="text-white/70 text-sm mb-2">Total Addressable Market</p>
                <p className="text-3xl font-bold">~2M people</p>
                <p className="text-white/70">living with limb loss in the U.S. (Caruso and Harrington, 2024)</p>
              </div>

              <div>
                <p className="text-white/70 text-sm mb-2">Annual Incidence</p>
                <p className="text-3xl font-bold">~185K</p>
                <p className="text-white/70">new amputations annually (U.S.) (Spencer et al., 2019)</p>
              </div>

              <div>
                <p className="text-white/70 text-sm mb-2">Myoelectric Adoption</p>
                <p className="text-3xl font-bold">Growing</p>
                <p className="text-white/70">clinics actively seeking better patient retention</p>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
              <h3 className="text-xl font-bold mb-6">B2B2C Platform Model</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#f6e7d8] font-semibold mb-2">Sell to prosthetic clinics</p>
                  <p className="text-white/70 text-sm">Annual license + per-patient deployment</p>
                </div>
                <div>
                  <p className="text-[#f6e7d8] font-semibold mb-2">Deploy to patients</p>
                  <p className="text-white/70 text-sm">Home-based training with clinician oversight</p>
                </div>
                <div>
                  <p className="text-[#f6e7d8] font-semibold mb-2">Improves outcomes + retention</p>
                  <p className="text-white/70 text-sm">Clinics see faster adaptation, higher adoption rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-20 bg-[#1a1819]/30">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">Traction & Validation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "MVP v1 in development", icon: "🔧" },
              { label: "EMG-to-XR prototype validated", icon: "✓" },
              { label: "Clinical conversations initiated", icon: "🤝" },
              { label: "NEXUS 2026 launch planned", icon: "🚀" },
            ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58] text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-semibold text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">Roadmap</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
              <h3 className="text-2xl font-bold text-[#f6e7d8] mb-6">2026</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3 items-start">
                  <span className="text-[#f6e7d8] font-bold">→</span>
                  <span>MVP launch at NEXUS Conference</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#f6e7d8] font-bold">→</span>
                  <span>Pilot partnerships with prosthetic clinics</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#f6e7d8] font-bold">→</span>
                  <span>Collect readiness + adaptation data</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
              <h3 className="text-2xl font-bold text-[#f6e7d8] mb-6">2027 & Beyond</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3 items-start">
                  <span className="text-[#f6e7d8] font-bold">→</span>
                  <span>Multi-site clinical validation</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#f6e7d8] font-bold">→</span>
                  <span>Hardware refinement + ML pattern recognition</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#f6e7d8] font-bold">→</span>
                  <span>Seed round + regional expansion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="py-20 bg-[#1a1819]/30">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12">Competitive Positioning</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a3f58]">
                  <th className="text-left py-4 px-4 font-semibold text-white/70">Category</th>
                  <th className="text-left py-4 px-4 font-semibold text-white/70">Their Focus</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#f6e7d8]">Attune's Advantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    cat: "Prosthetic Manufacturers",
                    their: "Device performance",
                    ours: "Pre-device readiness",
                  },
                  { cat: "Rehab Services", their: "Post-fitting therapy", ours: "Pre-fitting motor training" },
                  {
                    cat: "Neural Interface Research",
                    their: "Advanced control systems",
                    ours: "Scalable early-stage training",
                  },
                  {
                    cat: "Digital Rehab Tools",
                    their: "General recovery",
                    ours: "Prosthetic-specific adaptation",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#2a3f58] hover:bg-[#1a1819]/30 transition-colors">
                    <td className="py-4 px-4 font-semibold">{row.cat}</td>
                    <td className="py-4 px-4 text-white/70">{row.their}</td>
                    <td className="py-4 px-4 text-[#f6e7d8]">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-[#f6e7d8]/10 to-[#1a1819]/20 border border-[#f6e7d8]/30">
            <p className="text-lg text-white/80 font-semibold">
              We define the pre-prosthetic training category.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold mb-4">Team</h2>
          <p className="text-white/80 mb-12 text-lg">Built at The Luminosity Lab</p>
          <div className="mb-12">
            <img
              src={publicAsset("/team/team-photo.jpg")}
              alt="Attune team"
              className="w-full rounded-2xl border border-[#2a3f58] shadow-2xl"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="p-8 rounded-lg bg-[#1a1819]/50 border border-[#2a3f58]">
                <img
                  src={member.photo || logoUrl}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border border-[#2a3f58] mb-5"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = logoUrl;
                  }}
                />
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-[#f6e7d8] text-base">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-white/70 hover:text-[#f6e7d8] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1a1819]/30">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Future of Prosthetic Success Starts Earlier</h2>
            <p className="text-white/70 mb-8 text-lg">
              If you are a prosthetic clinic, rehabilitation partner, or investor interested in reshaping upper-limb adaptation:
            </p>
            <Button
              asChild
              className="bg-[#f6e7d8] hover:bg-[#edd5bf] text-[#1b2f44] font-semibold px-8 py-6 text-base"
            >
              <a href={partnerFormUrl} target="_blank" rel="noreferrer">
                Partner With Attune
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a3f58] py-12 bg-[#1a1819]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logoUrl}
                  alt="Attune logo"
                  className="w-8 h-8 rounded-full object-contain bg-[#1a1819] p-1 border border-[#2a3f58]"
                />
                <h4 className="font-bold">Attune</h4>
              </div>
              <p className="text-white/70 text-sm">
                The pre-prosthetic EMG training platform preparing amputees for myoelectric control.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#f6e7d8]">Product</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="#product" className="hover:text-[#f6e7d8] transition-colors">
                    Hardware
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#f6e7d8] transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-[#f6e7d8] transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#f6e7d8]">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="#team" className="hover:text-[#f6e7d8] transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#market" className="hover:text-[#f6e7d8] transition-colors">
                    Market
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#f6e7d8]">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="mailto:info.attune.care@gmail.com" className="hover:text-[#f6e7d8] transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2a3f58] pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-white/50 text-sm">© 2026 Attune LLC. All rights reserved.</p>
            <p className="text-white/50 text-sm">The Luminosity Lab</p>
          </div>
        </div>
      </footer>
    </div>
  );
}