export interface PoolItem {
  title: string;
  amount: number;
}

export interface Round {
  title: string;
  description: string;
  submissionInstructions: string | undefined;
  startDate: Date;
  endDate: Date;
}

export interface RubricItem {
  title: string;
  description: string | string[];
}

export interface Competition {
  id: string;
  redirect?: boolean;
  name: string;
  subtitle: string;
  thumbnailURL: string;
  regLink: string;
  regDeadline: Date;
  teamSize: number | [number, number] | undefined;
  pitchString: string;
  additionalDetails?: string;
  rounds: Round[];
  judgingCriteria?: RubricItem[];
  pool: PoolItem[];
}

export const competitions: Competition[] = [
  {
    id: "richter-earthquake",
    redirect: true,
    name: "Richter",
    subtitle: "Earthquake Proof Structure Building Challenge",
    thumbnailURL: "/images/competitions/richter.png",
    regLink: "https://unstop.com/p/richter-chimera-2026-ashoka-university-sonepat-haryana-1621259",
    regDeadline: new Date(2026, 0, 31, 23, 59),
    teamSize: [2, 4],
    pitchString:
      "Teams will construct popsicle-stick structures on a crust-mimicking baseplate that simulates real earthquake conditions. This challenge tests understanding of structural engineering principles, material efficiency, stability, and innovation.",
    additionalDetails:
      "Models will be tested under increasing ground motion, assessing their strength, resilience, and structural efficiency. If the baseplate is not feasible, weights may be applied to test the structure's load-bearing capacity instead. Exact height, breadth, and base area limits will be provided at the start of the competition.",
    rounds: [
      {
        title: "Structure Construction",
        description: "Design and build your model structure using provided materials",
        submissionInstructions: "Teams will construct popsicle-stick structures on a crust-mimicking baseplate that simulates real earthquake conditions.",
        startDate: new Date(2026, 1, 7, 8, 0),
        endDate: new Date(2026, 1, 7, 11, 59),
      },
      {
        title: "Earthquake Testing",
        description: "Models will be tested under increasing ground motion to assess strength and resilience",
        submissionInstructions: undefined,
        startDate: new Date(2026, 1, 7, 8, 0),
        endDate: new Date(2026, 1, 7, 17, 0),
      },
    ],
    judgingCriteria: [
      {
        title: "Strength",
        description: "Ability to resist seismic forces or weights",
      },
      {
        title: "Resilience",
        description: "Performance under repeated or increasing stress",
      },
      {
        title: "Efficiency",
        description: "Optimal use of materials relative to structural stability",
      },
      {
        title: "Innovation",
        description: "Creative and practical design solutions",
      },
    ],
    pool: [
      {
        title: "Prize Pool",
        amount: 20000,
      },
    ],
  },
  {
    id: "project-showcase",
    redirect: true,
    name: "Project Showcase",
    subtitle: "An interdisciplinary platform for STEM students to present innovative ideas",
    thumbnailURL: "/images/competitions/agora.png",
    regLink: "https://unstop.com/p/paper-presentation-chimera-2026-ashoka-university-sonepat-haryana-1622011",
    regDeadline: new Date(2026, 0, 31, 23, 59),
    teamSize: [1, 3],
    pitchString:
      "Present research-driven, innovative ideas that propose solutions for a Utopian Land, focusing on sustainability, efficiency, and precision. Present theoretical concepts, experimental research, or functional prototypes.",
    additionalDetails:
      "Participants will present their posters and working models/prototypes (if any) to a moving audience and a panel of judges. Projects can be presented as posters, video clips (up to 3 minutes), or prototype models accompanied by posters.",
    rounds: [
      {
        title: "Project Submission",
        description: "Submit your project details, poster, and prototype/video if applicable",
        submissionInstructions: "Submit posters, video clips (up to 3 minutes), or prototype models accompanied by posters",
        startDate: new Date(2026, 0, 16, 8, 0),
        endDate: new Date(2026, 1, 10, 23, 59),
      },
      {
        title: "Presentation Round",
        description: "Present your project to judges and audience",
        submissionInstructions: undefined,
        startDate: new Date(2026, 1, 16, 8, 0),
        endDate: new Date(2026, 1, 16, 17, 0),
      },
    ],
    judgingCriteria: [
      {
        title: "Innovativeness",
        description: "How novel and creative is the idea?",
      },
      {
        title: "Functionality",
        description: "How feasible and effective is the solution?",
      },
      {
        title: "Originality",
        description: "How unique is the approach?",
      },
      {
        title: "Impact on a Utopian Land",
        description: "How well does the project address sustainability, efficiency, and precision in creating solutions for an ideal society?",
      },
    ],
    pool: [
      {
        title: "Prize Pool",
        amount: 20000,
      },
    ],
  },
  {
    id: "agora-debate",
    redirect: true,
    name: "Agora",
    subtitle: "A Debate Competition",
    thumbnailURL: "/images/competitions/agora.png",
    regLink: "https://unstop.com/p/agora-chimera-2026-ashoka-university-sonepat-haryana-1621262",
    regDeadline: new Date(2026, 0, 31, 23, 59),
    teamSize: 3,
    pitchString:
      "Join Agora and showcase your critical thinking, reasoning, and public speaking skills. Engage in constructive debates on contemporary STEM and societal issues.",
    additionalDetails:
      "The competition consists of elimination rounds with debates happening simultaneously across multiple rooms. Topics will be provided on the spot and will revolve around current and thought-provoking themes such as ecological and social costs, AI and society, research ethics, and other contemporary STEM and societal issues. Each debate round will last approximately 20 minutes. 8 teams participating.",
    rounds: [
      {
        title: "Debate Rounds",
        description: "Elimination rounds with debates on contemporary topics",
        submissionInstructions: "Teams will debate on topics provided on the spot",
        startDate: new Date(2026, 1, 7, 8, 0),
        endDate: new Date(2026, 1, 7, 17, 0),
      },
    ],
    judgingCriteria: [
      {
        title: "Reasoning and Arguments",
        description: "Well-reasoned arguments with logical flow",
      },
      {
        title: "Rebuttal Quality",
        description: "Constructive and effective rebuttals",
      },
      {
        title: "Clarity and Communication",
        description: "Clarity of expression and communication effectiveness",
      },
      {
        title: "Teamwork and Critical Thinking",
        description: "Demonstration of teamwork and critical thinking",
      },
    ],
    pool: [
      {
        title: "Prize Pool",
        amount: 20000,
      },
    ],
  },
  {
    id: "drug-discovery",
    redirect: true,
    name: "Panacea: Drug Discovery",
    subtitle: "A case-based STEM challenge simulating early stages of drug discovery",
    thumbnailURL: "/images/competitions/panacea.png",
    regLink: "https://unstop.com/p/panacea-chimera-2026-ashoka-university-sonepat-haryana-1621316?login_as=candidate",
    regDeadline: new Date(2026, 0, 31, 23, 59),
    teamSize: [2, 3],
    pitchString:
      "Analyze biological data, evaluate molecular trade-offs, and interpret experimental results to decide which drug candidate should move forward. This competition emphasizes logical reasoning, data interpretation, and scientific justification.",
    additionalDetails:
      "Panacea is a case-based STEM challenge that simulates the early stages of drug discovery. The competition emphasizes logical reasoning, data interpretation, and scientific justification rather than rote knowledge. Total duration: 2 hours.",
    rounds: [
      {
        title: "Round 1: Disease Target Selection",
        description: "Analyze disease dossier and justify your choice of target gene/protein",
        submissionInstructions: "Teams will be provided with a Disease Dossier outlining a real-world inspired disease scenario along with biological data. Justify your choice of target gene/protein based on the disease provided.",
        startDate: new Date(2026, 1, 8, 8, 0),
        endDate: new Date(2026, 1, 8, 9, 0),
      },
      {
        title: "Round 2: Compound Selection",
        description: "Select and justify your choice of drug compound candidate",
        submissionInstructions: "Teams will be provided with multiple Compound Cards describing candidate molecules using chemical properties. Justify your choice of compound based on the disease provided.",
        startDate: new Date(2026, 1, 8, 9, 15),
        endDate: new Date(2026, 1, 8, 10, 15),
      },
    ],
    judgingCriteria: [
      {
        title: "Data Interpretation",
        description: "Ability to analyze and interpret biological and chemical data",
      },
      {
        title: "Scientific Justification",
        description: "Quality of reasoning and scientific justification for choices",
      },
      {
        title: "Logical Reasoning",
        description: "Logical flow of arguments and decision-making process",
      },
    ],
    pool: [
      {
        title: "Prize Pool",
        amount: 20000,
      },
    ],
  },
  {
    id: "nexopolis",
    redirect: true,
    name: "Nexopolis",
    subtitle: "Urban Planning & Public Health Case Competition",
    thumbnailURL: "/images/competitions/nexopolis.png",
    regLink: "https://unstop.com/p/nexopolis-chimera-2026-ashoka-university-sonepat-haryana-1621320",
    regDeadline: new Date(2026, 0, 31, 23, 59),
    teamSize: [3, 4],
    pitchString:
      "Develop a comprehensive public health infrastructure plan for a city, then adapt it to handle potential disasters and public health emergencies. Demonstrate strategic thinking and flexibility.",
    additionalDetails:
      "This two-round competition challenges teams to analyze city profiles, develop public health plans, and create mitigation strategies. Qualifying teams will present their solutions in 7–10 minute presentations followed by Q&A with judges.",
    rounds: [
      {
        title: "Round 1: Case Analysis & Pitch",
        description: "Analyze city profile and develop comprehensive public health infrastructure plan",
        submissionInstructions: "Teams will be provided with a Case Document outlining the profile and challenges of a city. Analyze the case and develop a structured public health plan. Submit a 2 page report outlining the proposal. Duration: 2 hours.",
        startDate: new Date(2026, 1, 8, 8, 0),
        endDate: new Date(2026, 1, 8, 10, 0),
      },
      {
        title: "Round 2: Disaster & Mitigation Planning",
        description: "Develop mitigation and healthcare response strategy to adapt to new challenges",
        submissionInstructions: "Teams will be provided with a second Case Document introducing changes in city profile and potential disasters. Build on original plan from Round 1 and develop a comprehensive mitigation and healthcare response strategy. Duration: 2.5 hours.",
        startDate: new Date(2026, 1, 8, 10, 30),
        endDate: new Date(2026, 1, 8, 13, 0),
      },
      {
        title: "Presentation",
        description: "Present solutions to judges",
        submissionInstructions: "Each team will present their solution in a 7–10 minute presentation, followed by a brief Q&A with judges.",
        startDate: new Date(2026, 1, 8, 13, 30),
        endDate: new Date(2026, 1, 8, 17, 0),
      },
    ],
    judgingCriteria: [
      {
        title: "Case Analysis",
        description: "Depth of understanding of the case and city profile",
      },
      {
        title: "Strategic Planning",
        description: "Quality of public health infrastructure and mitigation plans",
      },
      {
        title: "Adaptability",
        description: "Ability to adapt plans to new challenges and demonstrate flexibility",
      },
      {
        title: "Presentation Quality",
        description: "Clarity and effectiveness of presenting solutions",
      },
    ],
    pool: [
      {
        title: "Prize Pool",
        amount: 20000,
      },
    ],
  },
  {
    id: "chaos-theory",
    redirect: true,
    name: "Chaos Theory",
    subtitle: "A Population Modeling Challenge",
    thumbnailURL: "/images/competitions/chaos.png",
    regLink: "https://unstop.com/p/chaos-theory-chimera-2026-ashoka-university-sonepat-haryana-1621250",
    regDeadline: new Date(2026, 0, 31, 23, 59),
    teamSize: [2, 4],
    pitchString:
      "Analyze invasive species data, develop population models to predict growth, create visualizations, and propose effective mitigation strategies. Present your findings to judges and audience.",
    additionalDetails:
      "This two-round competition challenges teams to develop increasingly sophisticated population models as new variables are introduced. Teams must explain their mathematical reasoning and mitigation strategies in 7–10 minute presentations.",
    rounds: [
      {
        title: "Round 1: Population Modeling & Mitigation",
        description: "Develop initial population model and propose mitigation strategies",
        submissionInstructions: "Teams will be provided with data on invasive species growth. Develop a population model predicting growth, plot graphs illustrating the predicted trajectory, and propose mitigation strategies to control or reduce the population.",
        startDate: new Date(2026, 1, 7, 8, 0),
        endDate: new Date(2026, 1, 7, 12, 0),
      },
      {
        title: "Round 2: Advanced Modeling with New Variables",
        description: "Modify model with new variables and update mitigation strategies",
        submissionInstructions: "Teams will be provided with additional data introducing new variables. Modify the population model predicting growth, plot updated graphs, and propose updated mitigation strategies.",
        startDate: new Date(2026, 1, 7, 12, 30),
        endDate: new Date(2026, 1, 7, 14, 30),
      },
      {
        title: "Final Presentation",
        description: "Present models and strategies to judges and audience",
        submissionInstructions: "Present your models and strategies in a 7–10 minute presentation, explaining both the mathematical reasoning for initial and modified models and your reasoning for mitigation strategies.",
        startDate: new Date(2026, 1, 7, 15, 0),
        endDate: new Date(2026, 1, 7, 17, 0),
      },
    ],
    judgingCriteria: [
      {
        title: "Mathematical Modeling",
        description: "Quality and sophistication of population models",
      },
      {
        title: "Data Interpretation",
        description: "Accurate analysis of provided data and effective use of new variables",
      },
      {
        title: "Visualization",
        description: "Clarity and effectiveness of graphs and visualizations",
      },
      {
        title: "Mitigation Strategies",
        description: "Practical and innovative mitigation strategies with sound reasoning",
      },
      {
        title: "Presentation Quality",
        description: "Clear explanation of mathematical reasoning and solution delivery",
      },
    ],
    pool: [
      {
        title: "Prize Pool",
        amount: 20000,
      },
    ],
  },
  {
    id: "astrophotography",
    redirect: true,
    name: "Orion's Lens",
    subtitle: "Astrophotography Competition",
    thumbnailURL: "/images/competitions/orion.png",
    regLink: "https://unstop.com/p/orions-lens-chimera-2026-ashoka-university-sonepat-haryana-1621331",
    regDeadline: new Date(2026, 0, 20, 23, 59),
    teamSize: 1,
    pitchString:
      "Share your passion for the heavens at the Astrophotography Competition! Present your best reduced and processed images to an audience of fellow astrophotographers! Showcase your astrophotography skills across three categories: Solar System, Deep Sky, and Wide-Field Wonders.",
    additionalDetails:
      "Each participant can submit two images per category for a total of six images. All images must be captured by the participant themselves and properly attributed. Data not collected by participants will result in immediate disqualification. Images will be judged on content, aesthetic appeal, and the accompanying writeup describing your imaging process.",
    rounds: [
      {
        title: "Screening Round",
        description: "Submit your best astrophotography images for screening by expert jury",
        submissionInstructions: "Submit up to 2 images per category (Solar System, Deep Sky, Wide-Field Wonders) for a total of 6 images. All images must be captured and attributed by you.",
        startDate: new Date(2026, 0, 16, 8, 0),
        endDate: new Date(2026, 0, 20, 23, 59),
      },
      {
        title: "Presentation Round",
        description: "Submit writeup about your imaging process for judging by expert panel",
        submissionInstructions: "Submit a short writeup describing your imaging process and technique. This will be judged along with your images by a panel of renowned astrophysicists.",
        startDate: new Date(2026, 0, 21, 8, 0),
        endDate: new Date(2026, 0, 25, 23, 59),
      },
    ],
    judgingCriteria: [
      {
        title: "Image Content",
        description: "Observed brightness, level of difficulty in imaging an object, phenomenon's exoticness (uniqueness)",
      },
      {
        title: "Aesthetic Appeal",
        description: "Object's visual attractiveness, picture sharpness and noise reduction",
      },
      {
        title: "Writeup Quality",
        description: "Quality of writeup describing imaging process and technique",
      },
    ],
    pool: [
      {
        title: "Prize Pool",
        amount: 20000,
      },
    ],
  }
];
