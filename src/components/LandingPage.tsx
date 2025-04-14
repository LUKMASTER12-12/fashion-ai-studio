import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <span className="text-xl font-bold">AI Fashion Studio</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-7">
            Login
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-100">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Create <span className="italic">stunning</span>
                <br />
                fashion photos with
                <br />
                AI generated models
              </h1>
              <p className="text-gray-600">
                Transform your fashion business with AI-powered photoshoots
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"
                alt="Fashion model"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              How AI Fashion Studio works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Upload</h3>
                <p className="text-gray-600 text-sm">
                  Upload your product images
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Generate</h3>
                <p className="text-gray-600 text-sm">
                  Choose AI models and styles
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Export</h3>
                <p className="text-gray-600 text-sm">
                  Download high-quality fashion photos
                </p>
              </div>
            </div>

            {/* Model grid */}
            <div className="border border-gray-200 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-5 gap-2 mb-6">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="aspect-square relative">
                    <img
                      src={`https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=100&q=80`}
                      alt={`AI Model ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Try it now
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Trusted by thousands of fashion brands</p>
              <div className="flex justify-center gap-4 mt-2">
                <span>★★★★★</span>
                <span>4.9 / 5.0</span>
                <span>|</span>
                <span>500+ reviews</span>
                <span>|</span>
                <span>100+ countries</span>
                <span>|</span>
                <span>200,000+ photos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-900 text-white py-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">-90%</h3>
                <p className="text-gray-400 text-sm">Production time</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">3x</h3>
                <p className="text-gray-400 text-sm">More content</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">+10%</h3>
                <p className="text-gray-400 text-sm">Conversion rate</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">+12%</h3>
                <p className="text-gray-400 text-sm">Average order value</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">+30%</h3>
                <p className="text-gray-400 text-sm">Revenue</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revolutionize Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">
                AI Fashion Studio's AI fashion models will revolutionize your
                business
              </h2>
              <p className="text-gray-600">
                Our AI-powered platform helps fashion brands create stunning
                visuals
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div className="grid grid-cols-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-[3/4] relative">
                    <img
                      src={`https://images.unsplash.com/photo-1509631179647-0177331693ae?w=225&q=80`}
                      alt={`Fashion example ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Cut production costs
                </h3>
                <p className="text-gray-600 mb-4">
                  Create professional fashion photos without expensive
                  photoshoots, models, or studios. Generate hundreds of images
                  in minutes.
                </p>
                <Link to="#" className="text-black font-semibold underline">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">
                  More models, bigger reach
                </h3>
                <p className="text-gray-600 mb-4">
                  Showcase your products on diverse models to appeal to a wider
                  audience and increase your market reach.
                </p>
                <Link to="#" className="text-black font-semibold underline">
                  Learn more
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-2 order-1 md:order-2">
                <div className="aspect-[3/2] relative">
                  <img
                    src={`https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=450&q=80`}
                    alt="Diverse models showcase"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <div className="grid grid-cols-1 gap-2">
                <div className="aspect-[3/2] relative">
                  <img
                    src={`https://images.unsplash.com/photo-1445205170230-053b83016050?w=450&q=80`}
                    alt="Product shots"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Product shots in a flash
                </h3>
                <p className="text-gray-600 mb-4">
                  Generate consistent, high-quality product images for your
                  entire catalog in minutes, not weeks.
                </p>
                <Link to="#" className="text-black font-semibold underline">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">
                  Say goodbye to copyrights
                </h3>
                <p className="text-gray-600 mb-4">
                  Own all rights to your AI-generated content. No more model
                  releases or licensing fees.
                </p>
                <Link to="#" className="text-black font-semibold underline">
                  Learn more
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 order-1 md:order-2">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="aspect-[3/4] relative">
                    <img
                      src={`https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=225&q=80`}
                      alt={`Fashion example ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* See in Action */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              See AI Fashion Studio in Action
            </h2>
            <div className="relative aspect-video max-w-4xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1280&q=80"
                alt="AI Fashion Studio demo"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white rounded-full h-8 w-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white rounded-full h-8 w-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">
              AI solutions to boost your fashion brand
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square relative">
                      <img
                        src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&q=80`}
                        alt={`AI Model ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="font-bold">AI model generation</h3>
                <p className="text-gray-600 text-sm">
                  Create diverse, photorealistic models to showcase your
                  products
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] relative">
                  <img
                    src={`https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=300&q=80`}
                    alt="Product fitting"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="font-bold">Product fitting</h3>
                <p className="text-gray-600 text-sm">
                  Automatically fit your products on AI models with perfect
                  placement
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] relative">
                  <img
                    src={`https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=80`}
                    alt="Background generation"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="font-bold">Background generation</h3>
                <p className="text-gray-600 text-sm">
                  Create stunning backgrounds that complement your products
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-[4/3] relative">
                  <img
                    src={`https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80`}
                    alt="Perfect your photos"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="font-bold">Perfect your photos</h3>
                <p className="text-gray-600 text-sm">
                  Fine-tune lighting, colors, and details for professional
                  results
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] relative">
                  <img
                    src={`https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&q=80`}
                    alt="Batch customization"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="font-bold">Batch customization</h3>
                <p className="text-gray-600 text-sm">
                  Process hundreds of products at once with consistent quality
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] relative">
                  <img
                    src={`https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&q=80`}
                    alt="Personalization"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="font-bold">Personalization</h3>
                <p className="text-gray-600 text-sm">
                  Tailor content to specific audiences and market segments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Don't take our word for it
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span>★★★★★</span>
                  <span className="text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-800">
                  "AI Fashion Studio has completely transformed our product
                  photography workflow. We've cut costs by 80% while increasing
                  our content output."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
                      alt="Jane Smith"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-sm text-gray-600">
                      Marketing Director, Fashion Co.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span>★★★★★</span>
                  <span className="text-sm text-gray-600">5.0</span>
                </div>
                <p className="text-gray-800">
                  "The diversity of AI models has helped us reach new markets
                  and increase our conversion rates significantly."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"
                      alt="Mark Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Mark Johnson</p>
                    <p className="text-sm text-gray-600">CEO, Trendy Apparel</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                <img
                  src={`https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&q=80`}
                  alt="Fashion model"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Your mobile fashion studio
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Create professional fashion photos anywhere, anytime. No expensive
              equipment required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-black hover:bg-gray-100">
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold mb-2">
                  What is AI Fashion Studio?
                </h3>
                <div className="text-gray-600">
                  <p>
                    AI Fashion Studio is an AI-powered platform that helps
                    fashion brands create professional product photos using
                    AI-generated models.
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold mb-2">How much does it cost?</h3>
                <div className="text-gray-600">
                  <p>
                    We offer flexible pricing plans starting at $49/month.
                    Contact us for enterprise solutions.
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold mb-2">
                  What do I need to get started?
                </h3>
                <div className="text-gray-600">
                  <p>
                    Just your product images! Upload them to our platform and
                    start generating AI fashion photos in minutes.
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold mb-2">
                  Can I customize the AI models to match my brand identity?
                </h3>
                <div className="text-gray-600">
                  <p>
                    Yes, you can customize the models' appearance, poses, and
                    backgrounds to align with your brand aesthetic.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="link">See all FAQs</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <span className="text-xl font-bold">AI Fashion Studio</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-4">
              AI-powered fashion photography platform for brands and retailers.
            </p>
            <div className="flex gap-4 mb-4">
              <Link to="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
            <p className="text-gray-400 text-xs">
              © 2023 AI Fashion Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
