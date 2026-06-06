import PageWrapper from '../ui/PageWrapper'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import ClientsStrip from '../sections/ClientsStrip'
import ServicesSection from '../sections/ServicesSection'
import WhyChooseMe from '../sections/WhyChooseMe'
import Process from '../sections/Process'
import FeaturedProjects from '../sections/FeaturedProjects'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import CTA from '../sections/CTA'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Stats />
      <ClientsStrip />
      <ServicesSection />
      <WhyChooseMe />
      <Process />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <CTA />
    </PageWrapper>
  )
}
