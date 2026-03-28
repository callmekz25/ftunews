export interface MediaItem {
  type: "image" | "video";
  url: string;
  caption?: string;
}

export interface BlogStory {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
  slug: string;
  content: string;
  tags: string[];
  media?: MediaItem[];
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  stories: number;
}

export const stories: BlogStory[] = [
  // Travel Articles
  {
    id: "1",
    title: "An Escape to the Cotswolds",
    category: "Travel",
    excerpt:
      "I share a romantic escape to the Cotswolds, exploring its charming villages, scenic countryside, and cozy inns.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    author: "Emma",
    date: "2024-03-20",
    readTime: 5,
    slug: "an-escape-to-the-cotswolds",
    content:
      "The Cotswolds, a region in southwest England, is known for its rolling hills and picturesque villages. During my romantic getaway, I discovered hidden gems like Bourton-on-the-Water, where crystal clear streams flow through honey-coloured cottages constructed from local Cotswold stone. The architecture is stunning—these buildings have endured for centuries, their warm golden hues glowing in the afternoon sun. I visited local markets bustling with artisan crafts, sampled traditional English tea with fresh scones and clotted cream at historic tea rooms, and hiked through stunning countryside dotted with ancient woodland and stone walls. The landscape is truly magical, with winding country lanes leading to unexpected discoveries. We explored Stow-on-the-Wold, one of the highest points in the area, and browsed galleries displaying local art. The people here embody a slower pace of life, welcoming visitors warmly into their communities. We stayed at a centuries-old inn with exposed beams and fireplaces, enjoying hearty English dinners and real ales. Every moment felt like stepping back in time while enjoying modern comforts. The Cotswolds remind us why England's countryside is beloved by travelers seeking authentic charm and natural beauty.",
    tags: ["travel", "couples", "europe", "england"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        caption: "Cotswolds countryside landscape",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=600&fit=crop",
        caption: "Traditional English cottages",
      },
    ],
  },
  {
    id: "2",
    title: "A Romantic Escape to the Maldives",
    category: "Travel",
    excerpt:
      "I share a romantic escape to the Maldives, exploring its luxurious resorts, pristine beaches, and underwater adventures.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop",
    author: "Emma",
    date: "2024-03-18",
    readTime: 6,
    slug: "a-romantic-escape-to-the-maldives",
    content:
      "The Maldives is a paradise of overwater bungalows and turquoise waters. Located in the Indian Ocean, this archipelago consists of 26 atolls with some of the most pristine beaches in the world. My stay included snorkeling with tropical fish, spa treatments on the beach, and sunset dinners on private islands. The beauty of this destination is unmatched, with crystal clear waters perfect for diving and water sports. We explored coral reefs teeming with marine life, from colorful fish to graceful manta rays. The sunsets here are magical, painting the sky in shades of orange and pink. Each evening, we enjoyed Maldivian cuisine at beachfront restaurants, with fresh seafood and tropical fruits. The locals are incredibly warm and welcoming, sharing stories about their island life. Whether you're seeking adventure or pure relaxation, the Maldives delivers an unforgettable romantic experience.",
    tags: ["travel", "couples", "beach", "tropical"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
        caption: "Maldives overwater bungalows",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        caption: "Tropical beach sunset",
      },
    ],
  },
  {
    id: "3",
    title: "Finding Solitude in the Scottish Highlands",
    category: "Travel",
    excerpt:
      "I embarked on a solo journey through the breathtaking Scottish Highlands, finding peace and adventure amidst the rugged landscapes.",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=300&fit=crop",
    author: "James",
    date: "2024-03-15",
    readTime: 7,
    slug: "finding-solitude-in-the-scottish-highlands",
    content:
      "The Scottish Highlands offered me a chance to disconnect and reconnect with nature. I hiked Ben Nevis, the UK's highest peak, challenged by unpredictable weather and rewarded with breathtaking views across the nation. Explored Loch Ness, hunting for the elusive monster while admiring the serene waters reflecting ancient castles. I visited ancient castles perched on rocky outcrops—ruins of structures centuries old, each with stories of clans, battles, and royal intrigue. The Highlands' wild landscapes are untamed and dramatic, with rolling mountains giving way to deep valleys and pristine lochs. Each day brought new discoveries and breathtaking vistas that made me appreciate the raw beauty of Scotland. I met locals in remote villages who shared stories of Highland traditions and modern life in these challenging environments. The hiking trails range from gentle walks through glens to challenging scrambles up steep ridges. Wildlife includes golden eagles, red deer, and wildcats. The food is hearty and warming—stews, fresh fish, and local whisky. Staying in remote bothies and lochs-edge cottages, I experienced the true wilderness of Scotland. This journey reminded me of nature's power to heal and inspire.",
    tags: ["travel", "solo", "nature", "hiking"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
        caption: "Majestic mountain landscape",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
        caption: "Highland castle ruins",
      },
    ],
  },

  // Sports Articles
  {
    id: "4",
    title: "The Magic of Live Sports: A Fan's Perspective",
    category: "Sports",
    excerpt:
      "Exploring the passion, energy, and community that make live sports events unforgettable experiences for millions of fans worldwide.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    author: "Michael",
    date: "2024-03-22",
    readTime: 8,
    slug: "the-magic-of-live-sports-fan-perspective",
    content:
      "Attending a football match at a packed stadium is an experience like no other. The roar of the crowd, the tension during critical moments, and the euphoria of victory create memories that last a lifetime. This article explores why sports fans are so passionate and how sporting events bring communities together. The energy in the stands is electric, with tens of thousands of people united in their support for their team. We share chants, sing anthems, and celebrate every goal as if it's a personal victory. The camaraderie among strangers who become temporary family is remarkable. Beyond the match itself, stadiums have become social hubs where friendships form and traditions are created. Whether it's tailgating before the game or post-match celebrations, the entire experience is about more than just sports—it's about belonging to something bigger than yourself. Sports have this unique power to transcend boundaries of nationality, language, and culture.",
    tags: ["sports", "football", "community", "passion"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        caption: "Stadium full of passionate fans",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1516132006547-c1ea3ffedc44?w=800&h=600&fit=crop",
        caption: "Match action close-up",
      },
    ],
  },
  {
    id: "5",
    title: "Breaking Records: The Evolution of Olympic Athletes",
    category: "Sports",
    excerpt:
      "How modern athletes are pushing the limits of human performance, breaking world records and redefining what's possible in sports.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=300&fit=crop",
    author: "Michael",
    date: "2024-03-19",
    readTime: 9,
    slug: "breaking-records-olympic-athletes-evolution",
    content:
      "From innovative training methods to nutrition science and mental conditioning, modern Olympic athletes are reaching unprecedented levels of performance. Swimmers glide through water faster than ever conceived possible, track athletes shave milliseconds off records thought unbreakable, and gymnasts perform movements that seem to defy physics. We examine how technology and sports science are revolutionizing athletic achievement and what records might fall next. Training facilities now include altitude chambers simulating high-altitude conditions, biomechanical analysis using motion capture, and personalized nutrition tailored to individual genetics. Recovery science has become paramount—athletes now spend as much time on recovery as training through compression therapy, cryotherapy, and advanced massage techniques. Sports psychology helps athletes master their minds under pressure, often the difference between gold and silver. Genetic testing identifies potential and optimizes training regimens. Technology in equipment—lighter shoes, aerodynamic suits, and advanced hydration systems—also plays a significant role. The question of fairness arises: where's the line between enhancement and doping? Some records should be questioned if achieved through banned substances. Yet the dedication of these athletes is inspiring—years of sacrifice, injury recovery, and single-minded focus toward Olympic glory. The human body continues to surprise us with its capacity for excellence.",
    tags: ["sports", "olympics", "records", "athletes"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop",
        caption: "Olympic athlete in action",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        caption: "Victory moment at the podium",
      },
    ],
  },

  // Technology Articles
  {
    id: "6",
    title: "AI Revolution: How Artificial Intelligence is Changing Our World",
    category: "Technology",
    excerpt:
      "A deep dive into the rapid advancement of AI and its transformative impact on business, healthcare, and everyday life.",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf74d53a2533b1ebb1ea60193cb9?w=500&h=300&fit=crop",
    author: "David",
    date: "2024-03-21",
    readTime: 10,
    slug: "ai-revolution-changing-our-world",
    content:
      "Artificial Intelligence is no longer science fiction. From healthcare diagnostics to autonomous vehicles, AI is revolutionizing every sector of society. Machine learning algorithms are now capable of analyzing medical images with greater accuracy than many experienced radiologists. In finance, AI detects fraudulent transactions in real-time, protecting billions of dollars. We explore the technologies behind AI—neural networks, deep learning, and natural language processing—and their current applications across industries. The ethical challenges we must address as AI becomes more prevalent in our lives are significant. Questions about bias in algorithms, job displacement, privacy concerns, and autonomous decision-making require thoughtful governance and international cooperation. Yet the potential benefits are enormous: AI could accelerate drug discovery, solve complex climate problems, and enhance our quality of life in ways we're only beginning to imagine. The key is ensuring this powerful technology develops responsibly, with human values at its center.",
    tags: ["technology", "ai", "innovation", "future"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1677442d019cecf74d53a2533b1ebb1ea60193cb9?w=800&h=600&fit=crop",
        caption: "AI neural network visualization",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1535274335684-82a41fb50f3c?w=800&h=600&fit=crop",
        caption: "AI technology concept",
      },
    ],
  },
  {
    id: "7",
    title: "The Web3 Era: Understanding Blockchain and Cryptocurrency",
    category: "Technology",
    excerpt:
      "Demystifying blockchain technology and cryptocurrency, exploring its potential and challenges in the digital economy.",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&h=300&fit=crop",
    author: "David",
    date: "2024-03-16",
    readTime: 11,
    slug: "web3-era-blockchain-cryptocurrency",
    content:
      "Blockchain technology underpins a new era of decentralized systems that could fundamentally reshape how we conduct transactions and store value. At its core, blockchain is a distributed ledger technology where transactions are recorded across multiple computers, creating immutability through cryptographic hashing. From Bitcoin as the first cryptocurrency to Ethereum enabling smart contracts, the landscape has evolved dramatically. We explore blockchain's real-world applications beyond speculation: supply chain transparency, smart contracts automating legal agreements, digital identity verification, and financial services for the unbanked. Decentralized Finance (DeFi) challenges traditional banking by enabling peer-to-peer lending without intermediaries. However, challenges remain substantial: energy consumption of proof-of-work systems, regulatory uncertainty, and environmental concerns. The volatility of cryptocurrency prices has deterred mainstream adoption despite the technology's promise. Security issues have plagued exchanges and wallet holders. We examine various consensus mechanisms: proof-of-work, proof-of-stake, and emerging alternatives. Enterprise adoption is growing—major financial institutions are exploring blockchain for streamlined operations. The question facing Web3 isn't if it will succeed, but how it will be regulated and integrated into existing financial systems. The journey from speculative bubble to practical infrastructure is ongoing.",
    tags: ["technology", "blockchain", "crypto", "web3"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&h=600&fit=crop",
        caption: "Cryptocurrency mining",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1639762681033-6461ffad8d80?w=800&h=600&fit=crop",
        caption: "Blockchain network illustration",
      },
    ],
  },

  // Politics Articles
  {
    id: "8",
    title: "Global Politics in 2024: Key Events Shaping Our Future",
    category: "Politics",
    excerpt:
      "An analysis of major political events, elections, and policy changes happening around the world and their implications.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&h=300&fit=crop",
    author: "Sophie",
    date: "2024-03-20",
    readTime: 12,
    slug: "global-politics-2024-key-events",
    content:
      "2024 is a pivotal year in global politics with major elections in numerous countries determining policy directions for years to come. We analyze the political landscape, examining how different nations are addressing climate change, economic inequality, and international relations. The decisions made this year will have lasting impacts on world affairs and set the agenda for the next decade. Key elections in European nations are testing support for populist movements versus traditional parties. In the Asia-Pacific region, territorial disputes and trade policy remain contentious issues. Climate change negotiations continue despite political divisions, with nations seeking balance between environmental protection and economic growth. Economic challenges including inflation, supply chain disruptions, and emerging markets create pressure on policymakers. Migration remains controversial across developed nations, with competing interests between humanitarian approaches and border security. Technology regulation is increasingly important as nations grapple with digital privacy, AI governance, and cybersecurity. Geopolitical tensions between major powers are reshaping international alliances and trade relationships. The United Nations and international institutions face questions about effectiveness in addressing global challenges. Civil society organizations are mobilizing citizens around shared concerns. The stakes are high—governments elected in 2024 will shape responses to existential challenges like climate change and technological disruption.",
    tags: ["politics", "elections", "global", "policy"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop",
        caption: "Parliament building",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        caption: "Political debate",
      },
    ],
  },
  {
    id: "9",
    title: "Democracy Under Pressure: Challenges and Solutions",
    category: "Politics",
    excerpt:
      "Examining the modern challenges to democratic institutions and exploring innovative solutions to strengthen democracy worldwide.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    author: "Sophie",
    date: "2024-03-17",
    readTime: 10,
    slug: "democracy-under-pressure-challenges",
    content:
      "Democratic institutions face unprecedented challenges from misinformation, polarization, and institutional weakening. Social media algorithms amplify divisive content, eroding the shared sense of reality necessary for functioning democracies. Misinformation campaigns deliberately spread false narratives to undermine trust in institutions. This analysis explores how nations are combating these threats through media literacy programs, campaign finance reform, and renewed civic engagement. Countries like Taiwan have implemented transparent governance initiatives and digital democracy tools. Estonia pioneered e-governance systems that increase citizen participation and reduce corruption opportunities. Civil society organizations are working to rebuild trust by connecting people across divides through dialogue and collaborative problem-solving. Democracy is not automatic; it requires constant care and participation from all stakeholders. The solutions involve technology, education, institutional reform, and most importantly, a renewed commitment to democratic values.",
    tags: ["politics", "democracy", "governance", "civic"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        caption: "Citizens voting",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop",
        caption: "Democratic institutions",
      },
    ],
  },

  // Entertainment Articles
  {
    id: "10",
    title: "The Evolution of Cinema: From Silent Films to AI-Generated Content",
    category: "Entertainment",
    excerpt:
      "Tracing the journey of cinema from its inception to the modern era of digital filmmaking and AI-assisted production.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
    author: "Jessica",
    date: "2024-03-19",
    readTime: 9,
    slug: "evolution-of-cinema-from-silent-to-ai",
    content:
      "Cinema has transformed dramatically over more than a century. From the silent films of Chaplin to today's digital masterpieces, technology and storytelling have evolved together. In the early 1900s, cameras captured basic movements without sound, forcing filmmakers to rely on visual storytelling and music. The advent of sound in the 1920s revolutionized cinema, allowing dialogue and complex narratives. Color technology in the 1950s added visual richness, while widescreen formats immersed audiences in vast landscapes. Digital cinematography in the late 1990s started a new era, offering unprecedented control and creative possibilities. Today, we're witnessing AI beginning to influence creative processes, from scriptwriting assistance to visual effects and even deepfake technology. Machine learning algorithms now help directors analyze movie scripts, predict audience reactions, and optimize pacing. We explore how traditional filmmaking techniques are being preserved while embracing new possibilities. The future of cinema will likely blend human creativity with AI tools, raising fascinating questions about artistic authenticity and creative expression.",
    tags: ["entertainment", "cinema", "film", "technology"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
        caption: "Film production set",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1533613220915-609f21a91335?w=800&h=600&fit=crop",
        caption: "Movie theater screen",
      },
    ],
  },
  {
    id: "11",
    title: "Music Streaming Wars: How Algorithms Shape What We Hear",
    category: "Entertainment",
    excerpt:
      "Investigating how music streaming platforms use algorithms to influence our music consumption and discover new artists.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    author: "Jessica",
    date: "2024-03-14",
    readTime: 8,
    slug: "music-streaming-algorithms",
    content:
      "Music streaming has democratized access to millions of songs, but algorithms now play a crucial role in what we discover. We examine how Spotify, Apple Music, and YouTube Music use machine learning to predict our preferences, the impact on artists, and questions about artistic freedom and algorithm bias. Playlists like Discover Weekly have become cultural phenomena, introducing listeners to new artists based on listening patterns. The algorithms analyze your musical taste, compare it to millions of other listeners, and identify hidden connections between songs. However, this personalization creates filter bubbles where we hear more of what we already like. Independent artists struggle to break through algorithmic gatekeeping—getting featured on algorithmic playlists can make or break careers. Major labels have more resources to optimize their releases for algorithmic success. The economic model rewards certain types of music while disadvantaging others. Genre-blending and experimental music sometimes gets lost in algorithmic categorization. Some artists are opting out of streaming entirely or demanding higher payouts for their work. The algorithm's role in music discovery raises questions about who decides what's popular and whether algorithms reflect genuine human preference or mathematical bias. That said, streaming has made music more accessible and has created opportunities for artists to reach global audiences. The future of music will likely involve negotiating the balance between algorithmic discovery and human curatorial choices.",
    tags: ["entertainment", "music", "streaming", "algorithms"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        caption: "Headphones and music",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=600&fit=crop",
        caption: "Music production studio",
      },
    ],
  },

  // Science Articles
  {
    id: "12",
    title: "Climate Change: Understanding the Science and Solutions",
    category: "Science",
    excerpt:
      "A comprehensive look at climate change science, its impacts, and the technological and policy solutions being developed worldwide.",
    image:
      "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=500&h=300&fit=crop",
    author: "Robert",
    date: "2024-03-21",
    readTime: 13,
    slug: "climate-change-science-and-solutions",
    content:
      "Climate change is one of the most pressing issues of our time. The scientific consensus is overwhelming: global temperatures are rising primarily due to human activities, particularly the emission of greenhouse gases. We explore the scientific evidence from ice cores, ocean temperatures, and atmospheric measurements. The impacts are already visible: melting polar ice, rising sea levels, increasing frequency of extreme weather events, and shifts in ecosystems. We examine how carbon dioxide concentrations have increased from 280 ppm pre-industrial levels to over 420 ppm today. The greenhouse effect is fundamental physics—these gases trap heat in our atmosphere like a blanket. Solutions span multiple approaches: transitioning to renewable energy sources like solar and wind, improving energy efficiency in buildings and transportation, protecting and restoring forests, developing carbon capture technology, and implementing supportive policies. Many nations are committing to net-zero emissions targets. Innovators are working on breakthrough technologies including green hydrogen, advanced batteries, and direct air capture. Individual actions matter too—from diet choices to transportation decisions to consumption patterns. The path forward requires cooperation between governments, businesses, scientists, and citizens worldwide.",
    tags: ["science", "climate", "environment", "sustainability"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=600&fit=crop",
        caption: "Earth from space",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        caption: "Renewable energy solutions",
      },
    ],
  },
  {
    id: "13",
    title: "The Human Microbiome: Tiny Organisms with Big Impacts",
    category: "Science",
    excerpt:
      "Exploring how trillions of microorganisms in and on our bodies influence our health, immunity, and behavior.",
    image:
      "https://images.unsplash.com/photo-1530587191325-3db8b1a40d69?w=500&h=300&fit=crop",
    author: "Robert",
    date: "2024-03-18",
    readTime: 11,
    slug: "human-microbiome-tiny-organisms",
    content:
      "Our bodies are home to trillions of microorganisms that profoundly affect our health, immunity, and even behavior. Scientists are discovering connections between the microbiome and everything from digestion to mental health, obesity to disease resistance. The human gut microbiome alone contains more cells than the human body itself. These microbiota produce essential nutrients, synthesize vitamins we can't make ourselves, and defend against pathogens. The diversity of your microbiome is crucial—greater diversity correlates with better health outcomes. Western diets high in processed foods have reduced microbiome diversity, contributing to inflammatory diseases. Antibiotics, while life-saving, can damage the carefully balanced microbial ecosystem. We now understand that your microbiome influences your immune system development, potentially affecting predisposition to allergies and autoimmune diseases. Emerging research links gut microbiota to neurotransmitter production, potentially explaining the gut-brain axis and its role in mental health. Probiotics and prebiotics are becoming important health interventions, though more research is needed to understand which interventions work best for whom. Personalized medicine may soon involve analyzing individual microbiomes and tailoring treatments accordingly. The skin microbiome protects against pathogens and influences skin health. Researchers are exploring microbiome transplants to treat conditions like C. difficile infections. Understanding our microbial partners opens new therapeutic possibilities for previously intractable conditions.",
    tags: ["science", "biology", "health", "research"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1530587191325-3db8b1a40d69?w=800&h=600&fit=crop",
        caption: "Microscale organisms",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        caption: "Scientific research laboratory",
      },
    ],
  },

  // History/War Articles
  {
    id: "14",
    title: "World War II: Lessons from History's Greatest Conflict",
    category: "History",
    excerpt:
      "An in-depth examination of World War II, its causes, major events, and the lasting impact on modern civilization.",
    image:
      "https://images.unsplash.com/photo-1571701886363-f032aaf79b78?w=500&h=300&fit=crop",
    author: "Thomas",
    date: "2024-03-20",
    readTime: 14,
    slug: "world-war-ii-lessons-from-history",
    content:
      "World War II remains the most devastating conflict in human history, claiming an estimated 70-85 million lives. This comprehensive analysis explores the political and economic factors that led to the war: the resentment from World War I's Treaty of Versailles, the rise of fascism and militarism, economic depression, and failed diplomacy. We examine pivotal battles from the invasion of Poland to D-Day, the impact of new military technologies like radar and aircraft, and the often-overlooked Pacific Theater. The Holocaust stands as one of history's darkest chapters—the systematic genocide of six million Jews and millions of others deemed undesirable by Nazi ideology. The war's conclusion with atomic weapons on Hiroshima and Nagasaki introduced the world to nuclear weapons and their apocalyptic potential. The postwar order created institutions like the United Nations meant to prevent such catastrophes. Understanding this history is crucial for preventing future conflicts, recognizing early warning signs of totalitarianism, and appreciating the fragility of peace. The lessons from WWII about tolerance, the danger of authoritarianism, and the importance of international cooperation remain relevant today.",
    tags: ["history", "war", "world-war-2", "politics"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1571701886363-f032aaf79b78?w=800&h=600&fit=crop",
        caption: "Historical war imagery",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop",
        caption: "Historical monuments and memorials",
      },
    ],
  },
  {
    id: "15",
    title: "The Cold War: Ideological Conflict That Shaped the Modern World",
    category: "History",
    excerpt:
      "Understanding the Cold War's origins, major crises, and how it shaped global politics, culture, and technology.",
    image:
      "https://images.unsplash.com/photo-1574263867373-f78145192c94?w=500&h=300&fit=crop",
    author: "Thomas",
    date: "2024-03-15",
    readTime: 12,
    slug: "cold-war-ideological-conflict",
    content:
      "The Cold War was a prolonged ideological struggle between capitalism and communism that lasted nearly half a century, from roughly 1947 to 1991. Unlike hot wars, it was characterized by political tension, proxy wars, espionage, and the ever-present threat of nuclear annihilation. We explore the defining moments: the Berlin Blockade, the Korean War, the Cuban Missile Crisis where the world came closest to nuclear war, and the Space Race. The Cuban Missile Crisis in 1962 brought humanity to the brink—thirteen days where tensions were unbearable, with Soviet missiles aimed at the United States. The Space Race captured imaginations worldwide, with the Soviet Union launching Sputnik in 1957 and the US landing humans on the moon in 1969. The Berlin Wall physically divided Germany and became a symbol of division between East and West. Behind the scenes, CIA and KGB engaged in espionage, propaganda, and covert operations across the globe. The Cold War shaped military strategy, nuclear doctrine, and international relations. When the Soviet Union collapsed in 1991, it marked the end of an era. The tensions this period created continue to influence international relations today, particularly in Eastern Europe and between nuclear powers. Understanding the Cold War teaches us about diplomacy, mutual assured destruction, and the importance of communication between ideological adversaries.",
    tags: ["history", "cold-war", "geopolitics", "culture"],
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1574263867373-f78145192c94?w=800&h=600&fit=crop",
        caption: "Cold War era",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1577720643272-265dd022ce5f?w=800&h=600&fit=crop",
        caption: "Historical monuments",
      },
    ],
  },
];

export const authors: Author[] = [
  {
    id: "emma",
    name: "Emma",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "Travel enthusiast and writer. Lover of romantic getaways and cultural experiences.",
    stories: 2,
  },
  {
    id: "james",
    name: "James",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Solo traveler and adventure seeker. Passionate about exploring new cultures and landscapes.",
    stories: 2,
  },
  {
    id: "sarah",
    name: "Sarah",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    bio: "Family travel blogger. Making memories one adventure at a time with my loved ones.",
    stories: 1,
  },
  {
    id: "michael",
    name: "Michael",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    bio: "Sports analyst and journalist. Covering major sporting events and athlete stories worldwide.",
    stories: 2,
  },
  {
    id: "david",
    name: "David",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Tech writer and innovation enthusiast. Exploring the future of AI, blockchain, and digital transformation.",
    stories: 2,
  },
  {
    id: "sophie",
    name: "Sophie",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Political analyst and journalist. Following global politics and policy developments.",
    stories: 2,
  },
  {
    id: "jessica",
    name: "Jessica",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "Entertainment critic and cultural commentator. Exploring film, music, and digital entertainment.",
    stories: 2,
  },
  {
    id: "robert",
    name: "Robert",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Science journalist and researcher. Breaking down complex scientific discoveries for everyone.",
    stories: 2,
  },
  {
    id: "thomas",
    name: "Thomas",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    bio: "History professor and author. Examining historical events and their impact on modern society.",
    stories: 2,
  },
];

export const categories = [
  "Travel",
  "Sports",
  "Technology",
  "Politics",
  "Entertainment",
  "Science",
  "History",
];
