export const bridal_by_candice = {
  title: 'I do bridal hair',
  introduction:'Personal Website for a bridal hairdresser, made with HTML, CSS3, JavaScript, PHP and MySQL.',
  furtherDetails: [
    'The layout through out the whole website was made with Bootstap and CSS Grids.',
    'There is a gallery section to showcase the clients work, I thought alot about loading time and performance while making and developing this project I created a backend API with PHP and using AJAX the gallery pictures are loaded almost instantly',
    'The gallery images have been stored in a MySQL database and these can be uploaded dynamically',
    'I created a very simple Adminsitration portal so the client can upload images by herself, here I created a secure login system that can only be access when using the right credentails, I made sure that there was security in the database too by hashing the password using the most uptodate hashing algorithm.'
  ],
  image:'bridal-by-candice.png',
  link:'https://idobridalhair.com',
  live_website:{
    bool: true,
    link:'www.github.com'
  },
  see_code:{
    bool:false,
    link:null
  }
}

export const helpdesk = {
  title:'Helpdesk',
  introduction: 'A project created to be used in a company to manage internet service orders. Created with Materialize on the frontend and PHP & MySQL on the backend',
  furtherDetails: [
    {
      content:'This is the main view of the project where you can see a table of all the pending tickets these are ordered in desending order so the most recent are displayed at the top.',
      image:'table.png'
    },
    {
      content:'Each of the ticket can be viewed individually, where all the needed information is displayed, These is also a comment section to leave important notes, when the ticket is resolved it can be closed.',
      image:'ticket_view.png'
    },
    {
      content:'Once a ticket has been closed the view changes a litle, there is a card informing that the ticket is closed and the closing comment.',
      image:'closed.png'
    },
    {
      content:'There is a search bar that is optimised to work on finding addresses, the search show all open tickets and closed that match the query.',
      image:'search.png'
    }
  ],
  image:"Helpdesk_landing.png",
  live_website:{
    bool:true,
    link:'http://helpdesk.ryanwilliamharper.com',
  },
  see_code:{
    bool:true,
    link:'https://github.com/ryan1230x/Organiser'
  }
}

export const makeup_by_talie = {
  title:'Makeup By Talie',
  introduction:'This is a project for a Makeup Artist, the client wanted a website to showcase her work and have a way to contact her to book appointments. This project was built using HTML, Sass, JavaScript, MySQL & PHP.',
  furtherDetails:[
    'This project was made from scratch, no framework was used, I wanted this to have a custom design. The layout through out the whole website was made with CSS grids.',
    'There is a gallery section to showcase the clients work, I thought alot about loading time and performance while making and developing this project so I wanted to have as least dependencies as possible to increase the DOM load time as much as possible.',
    'The gallery images have been stored in a MySQL database and these can be uploaded dynamically, for the database I normalized the structure, creating two tables one for large images and another for small images and using a MySQL join these are able to render on the screen.',
    'I created a very simple Adminsitration portal so the client can upload images by herself, here I created a secure login system that can only be access when using the right credentails, I made sure that there was security in the database too by hashing the password using the most uptodate hashing algorithm.'
  ],
  link:'https://makeupbytalie.com',
  image:'makeup_by_talie_landing.png',
  live_website:{
    bool:true,
    link:null
  },
  see_code:{
    bool:false,
    link:null
  }
}

export const eCommerce = {
  title:'E-commerce',
  introduction: 'A fictional e-commerce shop made Materialize on the Frontend and PHP & MySQL on the backend.',
  furtherDetails: [
    {
      content:'This is the landing page, I wanted the design to be very simple and user friendly, with everything that you want to see or search for straight away.',
      image:'e-commerce-landign.png'
    },
    {
      content:'The products are organised into the convient categories such as Recent, Popular, Recommended For You.',
      image:'e-commerce-categories.png'
    },
    {
      content:'There is a Register/Login system where users can register or signin to their account.',
      image:'e-commerce-login.png'
    },
    {
      content:'This is the view for each individual product there is sticky navbar to help with navigation throughout the website, and all the information need like the product price and description.',
      image:'e-commerce_landing.png'
    },
    {
      content:'There is also an Admin CMS platform where the administrator can control and manage the products, add, remove, etc.',
      image:'e-commerce-admin.png'
    }
  ],
  image:'e-commerce_landing.png',
  live_website:{
    bool:true, 
    link:'http://shop.ryanwilliamharper.com/'
  },
  see_code:{
    bool:true,
    link:'https://github.com/ryan1230x/Online_Shop'
  }
}

export const anilist = {
  title:'AniList',
  introduction:'Built with HTML, SCSS, Javascipt, Bootstrap, GraphQL, PHP and MySQL; this project can keep track of ongoing Anime shows.',
  furtherDetails:[
    'The frontend was built with Bootstap4, I used SCSS to change some of the basic default styles',
    'The Backend was made with PHP and MySQL, I use a Public graphQL API called AniList to get the data from all the shows',
  ], 
  image:'AniList_manga.png',
  live_website:{
    bool:true,
    link:'http://manga.ryanwilliamharper.com',
  },
  see_code:{
    bool:true,
    link:'https://github.com/ryan1230x/AniList-API'
  }
}
