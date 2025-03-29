import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCategory = 'All' | 'Websites' | 'Applications' | 'Mobile';

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  techStack: string[];
  demoLink: string;
  // githubLink: string;
}

const projects: Project[] = [
  {
    title: "The Sygence",
    description: "IT company offering integrated digital platforms for sales, supply chain, and business support.",
    image: "https://images.unsplash.com/photo-1489410342162-b4b300a0bb15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Applications",
    techStack: ["Laravel", "MySQL" ,"Angular"],
    demoLink: "https://www.google.com/search?q=sygence+private+limited",
    // githubLink: "https://github.com"
  },
  {
    title: "The Custom Bakers",
    description: "The Custom Bakers, a bakery that specializes in custom cakes and cupcakes.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    category: "Applications",
    techStack: ["Next.Js", "Django", "SQLite", "Razorpay"],
    demoLink: "https://www.thecustombakers.com/",
    // githubLink: "https://github.com"
  },
  {
    title: "Chhattisgarh Herbal",
    description: "Chhattisgarh Herbals empowers tribal women and conserves the environment through sustainable products.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    category: "Applications",
    techStack: ["React.js", "Django", "Tailwind CSS", "SQLite"],
    demoLink: "https://chhattisgarhherbal.com/",
    // githubLink: "https://github.com"
  },
  {
    title: "Payngo",
    description: "Payngo provides global POS solutions, KYC, SIM management, payment processing, and loyalty programs.",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    techStack: ["React Native", "TypeScript", "Redux", "React.JS", "Node.JS", "MongoDB"],
    demoLink: "https://play.google.com/store/apps/details?id=com.evdt.payngo&hl=en_IN",
    // githubLink: "https://github.com"
  },
  {
    title: "Prakashgarg",
    description: "Prakash Garg's website showcases his art, design, and exhibitions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    category: "Websites",
    techStack: ["Next.Js", "TypeScript", "Redux", "Node.JS", "MongoDB"],
    demoLink: "https://www.prakashgarg.com/",
  },
  {
    title: "Veda App",
    description: "Veda is a school and college management system that helps institutions manage students, staff, and academics.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaG9vbCUyMGFuZCUyMGNvbGxlZ2UlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDB8fDB8fHww",
    category: "Applications",
    techStack: ["Next.Js", "TypeScript", "Redux", "Node.JS", "MongoDB"],
    demoLink: "https://veda-app.com/",
  },
  {
    title: "Bastar Travels",
    description: "Bastar Travels is a bus company in India offering various routes with amenities like WiFi and comfortable seating.",
    image: "https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/101236/banner_Banner_2.png",
    category: "Applications",
    techStack: ["Next.Js", "TypeScript", "Redux", "Node.JS", "MongoDB"],
    demoLink: "https://www.bastartravels.in/",
  },
  {
    title: "Deliver My Tune",
    description: "Deliver My Tune is a music distribution service that helps artists get their music heard by a wider audience.",
    image: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG11c2ljfGVufDB8fDB8fHww",
    category: "Applications",
    techStack: ["Next.Js", "TypeScript", "Redux", "Node.JS", "MongoDB"],
    demoLink: "https://delivermytune.com/",
  },
  {
    title: "Khushi Advertising",
    description: "Khushi Advertising specializes in cinema and digital marketing, offering targeted advertising solutions across India​",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob3BwaW5nfGVufDB8fDB8fHww",
    category: "Websites",
    techStack: ["Wordpress", "WP-bakery", "Slider Revolution", "Elementor"],
    demoLink: "https://khushiadvertising.com/",
  },
  {
    title: "Infraredsauna",
    description: "Clearlight Infrared Saunas for home and business use. It discusses the different models, health benefits, and technology behind the saunas.",
    image: "https://infraredsauna.com/wp-content/uploads/2019/11/exclusive3.jpg",
    category: "Websites",
    techStack: ["Wordpress", "WP-bakery", "Slider Revolution", "Elementor"],
    demoLink: "https://infraredsauna.com/",
  },
  {
    title: "Service Infraredsauna",
    description: "Clearlight Infrared Saunas for home and business use. It discusses the different models, health benefits, and technology behind the saunas.",
    image: "https://infraredsauna.com/wp-content/uploads/2019/11/exclusive3.jpg",
    category: "Websites",
    techStack: ["Wordpress", "WP-bakery", "Slider Revolution", "Elementor"],
    demoLink: "https://service.infraredsauna.com/",
  },
  {
    title: "Press Infraredsauna",
    description: "Clearlight Infrared Saunas for home and business use. It discusses the different models, health benefits, and technology behind the saunas.",
    image: "https://infraredsauna.com/wp-content/uploads/2019/11/exclusive3.jpg",
    category: "Websites",
    techStack: ["Wordpress", "WP-bakery", "Slider Revolution", "Elementor"],
    demoLink: "https://press.infraredsauna.com/",
  },
  {
    title: "Naveen Govt College Baloda",
    description: "This is a Project about Dr. Bhim Rao Ambedkar Government College, which offers undergraduate and postgraduate programs in various subjects.",
    image: "https://naveengovtcollegebaloda.in/wp-content/uploads/continuous-image-carousel-with-lightbox/02-scaled_250_250.jpg",
    category: "Websites",
    techStack: ["Wordpress", "WP-bakery", "Slider Revolution", "Elementor"],
    demoLink: "https://naveengovtcollegebaloda.in/",
  },
  {
    title: "MyNu",
    description: "MyNu is a digital dining solution offering QR-based menus, instant ordering, and payment features to enhance efficiency and customer experience while reducing costs and waste​",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Applications",
    techStack: ["Next.JS", "Bootstrap", "", "TypeScript", "Node.JS", "MongoDB"],
    demoLink: "https://mynu.app/",
  }
];

const categories: ProjectCategory[] = ['All', 'Websites', 'Applications', 'Mobile'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a target='_blank'
                    href={project.demoLink}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                  {/* <a
                    // href={project.githubLink}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}