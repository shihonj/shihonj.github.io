/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import { BookOpen, FileText, Flower2, CodeXml } from "@lucide/astro";
import { Code } from "astro:components";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  inspirehep?: string;
  inspirehepIcon?: string;  // URL to online icon image
  googleScholar?: string;
  googleScholarIcon?: string;  // URL to online icon image
  orcid?: string;
  orcidIcon?: string;  // URL to online icon image
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: string;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Blog section */
  blog: boolean;
  /** Show/hide Work Experience section */
  work: boolean;
  /** Show/hide Education section */
  education: boolean;
  /** Show/hide Hackathons section */
  hackathons: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Path to avatar/logo image */
  avatar: string;
  /** Location/City */
  location: string;
  /** Contact email */
  email: string;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
}

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
  name: "🌻 Xuhao Jiang",
  title: "Nature Player",
  description:
    "Master's student in Quantum Science and Technology at TUM and LMU.<br>Exploring the physical world through the lens of information theory, with focus on quantum information, gauge/gravity duality, and fundamental physics.",
  avatar: "/public/images/my-avatar.jpg",
  location: "🇩🇪 Germany",
  email: "hello@example.com",
  socialLinks: {
    inspirehep: "https://inspirehep.net/authors/2789135?ui-citation-summary=true",
    inspirehepIcon: "https://cdn.jsdelivr.net/gh/shihonj/academic-site@main/public/images/hep.png",  
    googleScholar: "https://scholar.google.com/citations?user=wH0qsr0AAAAJ&hl=en",
    googleScholarIcon: "https://cdn.simpleicons.org/googlescholar/4285F4", 
    orcid: "https://orcid.org/0009-0007-0954-7749",
    orcidIcon: "https://orcid.org/assets/vectors/orcid.logo.icon.svg",  
  },
  enableThemeSelector: true,
  extraLinks: {
    enable: false, // Disabled extra links FAB
    links: [
      {
        link: "/blog/guides/bloomfolio-complete-guide",
        icon: Flower2,
        label: "Bloomfolio Guide",
      },
      {
        link: "/blog/guides/content-collections-guide",
        icon: BookOpen,
        label: "Content Guide",
      },
      {
        link: "/blog/guides/markdown-guide",
        icon: FileText,
        label: "Markdown Guide",
      },
      {
        link: "https://github.com/lauroguedes/bloomfolio",
        icon: CodeXml,
        label: "GitHub Repo",
      },
    ],
  },
  sections: {
    about: true,
    projects: true,
    blog: false, // Disabled for academic site
    work: false, // Disabled for academic site
    education: false, // Disabled for academic site
    hackathons: false, // Disabled for academic site
    contact: true,
  },
};