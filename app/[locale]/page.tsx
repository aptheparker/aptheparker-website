import { defaultLocale, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const c = getContent(locale);

  return (
    <>
      <Header locale={locale} nav={c.nav} />
      <main>
        <Hero c={c} />
        <About c={c} />
        <Experience c={c} />
        <Projects c={c} />
        <Skills c={c} />
        <Education c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}
