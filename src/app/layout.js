import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import MyNavbar from './MyNavbar'
import 'bootstrap/dist/css/bootstrap.css';
import HeroSection from './HeroSection';
import WorkSection from './WorkSection';
import Projects from './Projects';
import SkillsSections from './SkillsSections';
import ContactSection from './ContactSection';
import MainFooter from './MainFooter';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyPortfoio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <MyNavbar />
      <HeroSection/>
      <WorkSection/>
      <Projects/>
      <SkillsSections/>
      <ContactSection/>
      <MainFooter/>
      {children}
      </Providers>
      </body>
    </html>
   
  )
}
