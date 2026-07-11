const twinBlocks = {
  A1:{name:'A1 · North Field',area:'8.4 ha',palms:'1,176 illustrative',moisture:'31% simulated',canopy:'0.78 simulated',rain:'24 mm illustrative',stage:'Vegetative care',note:'Review moisture variance along the northern boundary.'},
  A2:{name:'A2 · Ridge',area:'7.9 ha',palms:'1,106 illustrative',moisture:'27% simulated',canopy:'0.82 simulated',rain:'21 mm illustrative',stage:'Nutrient review',note:'Compare ridge observations with the previous illustrative cycle.'},
  B1:{name:'B1 · East Field',area:'6.2 ha',palms:'868 illustrative',moisture:'35% simulated',canopy:'0.69 simulated',rain:'28 mm illustrative',stage:'Canopy observation',note:'Inspect the eastern canopy zone before planning field activity.'},
  B2:{name:'B2 · Lower Field',area:'9.1 ha',palms:'1,274 illustrative',moisture:'42% simulated',canopy:'0.75 simulated',rain:'32 mm illustrative',stage:'Drainage check',note:'Review the low-lying water path after illustrative rainfall.'},
  C1:{name:'C1 · Central Field',area:'10.3 ha',palms:'1,442 illustrative',moisture:'29% simulated',canopy:'0.84 simulated',rain:'23 mm illustrative',stage:'Field operation',note:'Sequence the next illustrative observation round by access route.'},
  C2:{name:'C2 · Waterline',area:'5.8 ha',palms:'812 illustrative',moisture:'46% simulated',canopy:'0.71 simulated',rain:'35 mm illustrative',stage:'Water monitoring',note:'Compare waterline conditions with the central field baseline.'}
};

const projects = [
  {title:'Oil Palm Cultivation Application',type:'Agricultural mobile product',summary:'A closed-source Ionic and Angular information experience for oil palm cultivation, structured around mobile navigation, categories, articles, gallery content, and crop-calendar thinking.',technologies:['Ionic','Angular','Capacitor','Mobile UX'],status:'Existing application',featured:true},
  {title:'Angular Weather App',type:'API-driven frontend',summary:'An Angular interface for searching locations and presenting weather data, demonstrating asynchronous API integration and component state.',technologies:['Angular','TypeScript','API integration'],status:'Public repository',featured:true,code:'https://github.com/Ramnarayan-Kotagiri/Angular-Weather-App'},
  {title:'Angular Cocktail DB',type:'Search + catalog interface',summary:'A catalog browsing project built around third-party data, discovery, and Angular component interaction.',technologies:['Angular','TypeScript','Search'],status:'Public repository',featured:true,code:'https://github.com/Ramnarayan-Kotagiri/Angular-Cocktail-DB'},
  {title:'Azure Search',type:'Information retrieval',summary:'Search implementation experiments focused on Azure-backed discovery patterns and product-facing information access.',technologies:['Azure','Search','JavaScript'],status:'Public repository',featured:true,code:'https://github.com/Ramnarayan-Kotagiri/azure-search'},
  {title:'ngx-category-search',type:'Angular component',summary:'A focused Angular category-search component for structured discovery flows and reusable product interaction.',technologies:['Angular','TypeScript','Component design'],status:'Public repository',featured:true,code:'https://github.com/Ramnarayan-Kotagiri/ngx-category-search'},
  {title:'Typefaster Multiplayer Game',type:'Real-time interaction',summary:'A multiplayer typing-game concept exploring shared state, speed, and responsive interaction.',technologies:['JavaScript','Real-time UX','Web'],status:'Public repository',featured:false,code:'https://github.com/Ramnarayan-Kotagiri/Typefaster-multi-player-game'},
  {title:'VBI Music Player',type:'Media interface',summary:'A browser music-player project focused on playback controls and media interaction.',technologies:['JavaScript','Audio','Frontend'],status:'Public repository',featured:false,code:'https://github.com/Ramnarayan-Kotagiri/VBI-Music-Player'},
  {title:'Karate TestOps',type:'Test automation',summary:'API and test-operations work for repeatable service verification.',technologies:['Karate','API testing','Automation'],status:'Public repository',featured:false,code:'https://github.com/Ramnarayan-Kotagiri/karate-testops'},
  {title:'Portfolio',type:'Historical portfolio',summary:'The earlier Angular portfolio and source for verified résumé and publication information.',technologies:['Angular','SCSS','Frontend'],status:'Public archive',featured:false,code:'https://github.com/Ramnarayan-Kotagiri/portfolio'},
  {title:'Wedding Invitation',type:'Event microsite',summary:'A presentation-led event experience designed for a specific personal occasion.',technologies:['Web','Responsive design','Interaction'],status:'Personal project',featured:false,code:'https://github.com/Ramnarayan-Kotagiri/wedding-invitation'},
  {title:'Propose',type:'Interactive microsite',summary:'A compact, interaction-led personal web experience.',technologies:['Web','Animation','Interaction'],status:'Personal project',featured:false,code:'https://github.com/Ramnarayan-Kotagiri/propose'}
];

const publications = [
  {venue:'Springer Nature',year:'2018',title:'Encrypted separable reversible watermarking with authentication and error correction',description:'Research into reversible watermarking, authentication, protected media, and error correction.',url:'https://link.springer.com/article/10.1007/s11042-018-6450-2'},
  {venue:'IEEE INDICON',year:'2016',title:'HOG Feature based SVM Classification of Glaucomatous Fundus Image with Extraction of Blood Vessels',description:'Medical-image classification using HOG features, SVM, and blood-vessel extraction.',url:'https://ieeexplore.ieee.org/document/7838902'},
  {venue:'ICET',year:'2016',title:'Slantlet Transform – Singular Value Decomposition Based Reversible Watermarking for Medical Images',description:'Reversible medical-image watermarking using Slantlet Transform and singular value decomposition.',url:'https://scholar.google.co.in/citations?user=3ggVR3wAAAAJ&hl=en'}
];

const capabilities = [
  {icon:'UI',title:'Product + frontend engineering',copy:'Designing usable interfaces, component systems, responsive workflows, and information-rich product experiences.',tech:['Angular','TypeScript','JavaScript','HTML','CSS']},
  {icon:'MB',title:'Angular + mobile applications',copy:'Building mobile-first applications and adapting web architectures for device-focused delivery.',tech:['Angular','Ionic','Capacitor','PWA']},
  {icon:'API',title:'Backend + data systems',copy:'Connecting interfaces to services, APIs, search platforms, and document-oriented data.',tech:['Node.js','Express','MongoDB','NoSQL']},
  {icon:'CL',title:'Cloud + delivery',copy:'Working with automated delivery, containers, cloud services, and DevOps-oriented engineering practice.',tech:['AWS','Azure','Docker','Jenkins','EKS']},
  {icon:'CV',title:'Image processing + research',copy:'Applying feature extraction, classification, reversible watermarking, and scientific problem solving.',tech:['Python','HOG','SVM','SVD']},
  {icon:'GIS',title:'Field intelligence direction',copy:'Building toward geospatial, environmental, sensing, and digital-twin systems for agricultural contexts.',tech:['GIS','Remote sensing','IoT','Machine learning']}
];

window.portfolioData = { twinBlocks, projects, publications, capabilities };
