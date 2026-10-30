import { useEffect } from 'react'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ToolboxSection } from '../components/ToolboxSection'
import { ArticlesSection } from '../components/ArticlesSection'
import { CertificationsSection } from '../components/CertificationsSection'
import { ContactSection } from '../components/ContactSection'

interface ProfileProps {
  onSectionChange?: (sectionId: string) => void
}

export default function Profile({ onSectionChange }: ProfileProps) {
  useEffect(() => {
    if (!onSectionChange) return

    const sectionIds = ['hero', 'sobre', 'projetos', 'toolbox', 'artigos', 'certificados', 'contato']
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          onSectionChange(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.15, 0.4] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onSectionChange])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ToolboxSection />
      <ArticlesSection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
