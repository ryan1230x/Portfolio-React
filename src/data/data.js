import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faSass,
  faPhp,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export const projects_gallery = [
  {
    id:1,
    title:"Bridal By Bandice", 
    about:"Personal Website for a bridal hairdresser, made with HTML, CSS3, JavaScript, PHP and MySQL.", 
    img:"../../bridal-by-candice.png",
    link:"/"
  },
  {
    id:2,
    title:"Helpdesk", 
    about:"A project created to be used in a company to manage internet service orders. Created with Materialize on the frontend and PHP & MySQL on the backend", 
    img:"../../Helpdesk_landing.png",
    link:"/"
  },
  {
    id:3,
    title:"E-commerce", 
    about:"A fictional e-commerce shop made Materialize on the Frontend and PHP & MySQL on the backend.", 
    img:"../../e-commerce_landing.png",
    link:"/"
  },
  {
    id:4,
    title:"Makeup by Talie", 
    about:"This is a project for a client who is a Makeup Artist. This project was built using HTML, CSS3, JavaScript & PHP.", 
    img:"makeup_by_talie_landing.png",
    link:"/"
  },
  {
    id:5,
    title:"AniList", 
    about:"Built with HTML, SCSS, Javascipt, Bootstrap, GraphQL, PHP and MySQL; this project can keep track of ongoing Anime shows", 
    img:"AniList_manga.png",
    link:"/"
  },
]

export const brand_logos = [
  {id: 1,title:"HTML5", logo:faHtml5},
  {id: 2,title:"CSS3", logo:faCss3},
  {id: 3,title: "JavaScript", logo:faJs},
  {id: 4,title: "Bootstrap", logo:faBootstrap},
  {id: 5,title:"React", logo:faReact},
  {id: 6,title:"SASS", logo:faSass},
  {id: 7,title:'PHP', logo:faPhp},
  {id: 8,title:'Node', logo:faNodeJs},
  {id: 9,title:'MySQL', logo:faDatabase},
]

export const particleParams = {
  particles: {
    number: {
        value: 160,
        density: {
          enable: false
        }
    },
    size: {
        value: 7,
        random: true
    },
    move: {
        direction: 'bottom',
        out_mode: 'out'
    },
    line_linked: {
        enable: false
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'remove'
      }
    },
    modes: {
      remove: {
        particles_nb: 10
      }
    }
  }
}
