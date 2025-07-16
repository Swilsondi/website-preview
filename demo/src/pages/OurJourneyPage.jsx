import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function OurJourneyPage() {
  const milestones = [
    {
      year: "2015",
      title: "Founded with a Vision",
      description:
        "Our story began with a mission to redefine digital experiences. From day one, we’ve been committed to excellence.",
    },
    {
      year: "2018",
      title: "First Major Milestone",
      description:
        "Launched our first enterprise-level project, setting new standards for innovation and quality.",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description:
        "Expanded our reach to serve clients across 10+ countries, delivering tailored solutions worldwide.",
    },
    {
      year: "2025",
      title: "Leading the Industry",
      description:
        "Recognized as a top-tier digital agency, driving success for creators, brands, and entrepreneurs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-4xl">
          <div className="mb-6">
            <Badge
              variant="outline"
              className="px-6 py-3 text-sm font-medium bg-blue-500/20 border-blue-400 text-blue-200 backdrop-blur-sm"
            >
              🌟 Our Journey • Excellence in Every Step
            </Badge>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            From Vision to Reality
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
            Discover how we’ve transformed ambitious ideas into groundbreaking
            digital experiences. Our journey is a testament to innovation,
            collaboration, and excellence.
          </p>

          <div>
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() =>
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
              }
            >
              Explore Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-900">
        <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Milestones That Define Us
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A journey of innovation, growth, and impact. Here are the key moments
              that shaped who we are today.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6">
                <div className="text-4xl font-black text-blue-400 mb-2 md:mb-0">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">
            Ready to Be Part of Our Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Let’s create something extraordinary together. Join us as we continue
            to push the boundaries of what’s possible.
          </p>
          <Button
            size="lg"
            className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => (window.location.href = "/start-project")}
          >
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
