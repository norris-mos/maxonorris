export interface ResearchItem {
  id: number;
  slug: string;
  type: 'publication' | 'project' | 'policy' | 'fun';
  title: string;
  subtitle: string;
  venue: string;
  date: string;
  excerpt: string;
  link: string;
  tags: string[];
  fullContent: {
    overview: string;
    sections: {
      heading: string;
      content: string;
      images?: string[];
    }[];
    externalLinks?: {
      label: string;
      url: string;
    }[];
  };
}

export const researchItems: ResearchItem[] = [
  {
    id: 9,
    slug: 'llms-represent-latent-student-mastery',
    type: 'publication',
    title: 'LLMs Trained on Learner Responses Represent Latent Student Mastery',
    subtitle: 'Probing whether language models fine-tuned for knowledge tracing develop an internal student model',
    venue: 'Under Review',
    date: '2026',
    excerpt: 'Fine-tuning LLMs to predict a student\'s next answer makes their mastery linearly decodable from the residual stream. The representation is functional, tracks learning and forgetting, and predicts later performance on real learner data.',
    link: '#',
    tags: ['Interpretability', 'Knowledge Tracing', 'LLMs'],
    fullContent: {
      overview: 'To what extent does a language model trained to predict a student\'s responses encode that student\'s mastery? A good tutor maintains a running estimate of what a learner knows. If LLMs are to act as tutors, they need something like an internal student model. This work tests whether one emerges when an LLM is fine-tuned on knowledge tracing alone.',
      sections: [
        {
          heading: 'The Problem',
          content: 'LLMs are increasingly deployed in education, and some are explicitly marketed as personal tutors. Yet we do not know whether they represent anything like a student model internally. Studying this with real learners is hard because a real student\'s mastery is itself a hidden variable — there is no ground truth to compare against.'
        },
        {
          heading: 'Our Approach',
          content: 'We simulate students with a four-parameter Item Response Theory (IRT) model, so per-concept mastery is known by construction. Response histories are serialised into text transcripts, and small open-source LLMs (Llama-3.2-1B, Qwen3-1.7B and Qwen3-4B) are fine-tuned to predict whether the student will answer correctly. Linear probes test whether mastery is encoded in the residual stream, and subspace ablations test whether the model actually relies on that encoding. We then move towards realism: students whose mastery changes through learning and forgetting, and finally real response histories from Junyi, ASSISTments and FoundationalASSIST.'
        },
        {
          heading: 'Results',
          content: 'Fine-tuning consistently strengthens student-mastery information in the residual stream: concept-specific mastery becomes far more linearly decodable than in the base model. The representation is functional rather than merely correlational — intervening on it shifts the model\'s prediction of student correctness in the expected direction. The decoded estimate follows mastery as it changes through learning and forgetting, and on real learner data, where mastery is unobserved, the hidden state predicts students\' later performance on the same skill.'
        },
        {
          heading: 'Implications',
          content: 'Together these results offer initial evidence that a language model trained only to predict student responses develops an internal "student model" — a world model of the learner. This opens the door to reading, auditing and steering what an AI tutor believes about the students it teaches.'
        }
      ]
    }
  },
  {
    id: 10,
    slug: 'reward-hacking-rl-exercise-recommendation',
    type: 'publication',
    title: 'Towards Detection and Mitigation of Reward Hacking in RL-Based Exercise Recommendation',
    subtitle: 'Why RL question-sequencing policies collapse, and how pedagogical constraints fix it',
    venue: 'Under Review',
    date: '2026',
    excerpt: 'RL policies trained against knowledge tracing simulators collapse onto a handful of questions recommended to every student, even as reward rises. A student-specific action mask grounded in learning science eliminates the collapse.',
    link: '#',
    tags: ['Reinforcement Learning', 'AI Safety', 'Education'],
    fullContent: {
      overview: 'Learning platforms increasingly use AI to decide what millions of students practise next. Researchers frame this as a reinforcement learning problem, training policies offline against Knowledge Tracing (KT) models that stand in for real students. This setup rests on an unchecked assumption: that high simulated reward corresponds to pedagogically sound recommendations. We test that assumption.',
      sections: [
        {
          heading: 'The Problem',
          content: 'To avoid exposing real students to untested policies, RL-based exercise recommenders are trained against KT models fitted to logged student interactions. These simulators encode the learner\'s state, simulate their responses and supply the reward. Most work then judges policies by the reward they obtain. Very little looks at the actual sequence of questions a policy recommends.'
        },
        {
          heading: 'Policy Collapse',
          content: 'We train three RL algorithms across three open educational datasets (assist2017, XES3G5M and Eedi). Although estimated mastery gains improve in most settings, every trained policy collapses — converging on a handful of questions that it recommends repeatedly to every student, regardless of their knowledge state. In most settings the simulator\'s reward rises as the policy collapses. Deployed, such a policy would drill every student on the same few questions while its metrics report success.'
        },
        {
          heading: 'Pedagogical Masking',
          content: 'We show the flaw can be addressed at the level of problem formulation rather than the optimisation algorithm. Policies choose from a small, student-specific candidate mask built on learning-science principles: it excludes repeated questions, prioritises difficulty within the Zone of Proximal Development, and fills remaining capacity from mastered, related material, following mastery learning.'
        },
        {
          heading: 'Results',
          content: 'Masking eliminates collapse. Masked policies draw on hundreds of distinct questions and produce trajectories that are diverse across students and pedagogically coherent by construction, while matching or exceeding unmasked reward on two of three datasets.'
        }
      ]
    }
  },
  {
    id: 1,
    slug: 'next-token-knowledge-tracing',
    type: 'publication',
    title: 'Next Token Knowledge Tracing',
    subtitle: 'A novel student modelling framework using LoRA fine-tuning for personalised knowledge tracing',
    venue: 'arXiv Preprint',
    date: '2024',
    excerpt: 'A novel student modelling framework using LoRA fine-tuning for personalised knowledge tracing. Trained on 15M+ student interactions, achieving state-of-the-art performance across benchmarks.',
    link: 'https://arxiv.org/abs/2511.02599',
    tags: ['AI', 'Education', 'Personalisation'],
    fullContent: {
      overview: 'Next Token Knowledge Tracing introduces a novel approach to student modeling by framing knowledge tracing as a next-token prediction task. By leveraging LoRA fine-tuning on large language models, we achieve state-of-the-art performance in predicting student success while maintaining computational efficiency.',
      sections: [
        {
          heading: 'The Problem',
          content: 'Traditional knowledge tracing methods struggle to capture the complexity of student learning dynamics. Existing approaches either lack the representational power to model nuanced learning patterns or require prohibitive computational resources to train and deploy. This creates a gap between research prototypes and practical educational systems that need to run at scale.'
        },
        {
          heading: 'Our Approach',
          content: 'We reframe knowledge tracing as a sequence modeling problem where each student interaction becomes a token in a learning trajectory. By fine-tuning large language models using Low-Rank Adaptation (LoRA), we achieve powerful student modeling while keeping the base model frozen. This enables efficient training on educational datasets while leveraging the pre-trained knowledge encoded in modern LLMs.'
        },
        {
          heading: 'Results',
          content: 'We evaluated our approach on multiple large-scale educational datasets representing over 15 million student interactions. The model achieves state-of-the-art performance across standard benchmarks, with particular improvements in cold-start scenarios where limited student history is available. The LoRA approach reduces trainable parameters by 99.5% compared to full fine-tuning while maintaining comparable performance.'
        },
        {
          heading: 'Implications',
          content: 'This work demonstrates that modern language models can be effectively adapted for educational prediction tasks without requiring massive computational resources. The approach opens new possibilities for personalised learning systems that can accurately model student knowledge while remaining deployable in real-world educational contexts. The efficiency gains make it feasible to deploy sophisticated student models in resource-constrained environments like schools and EdTech platforms.'
        }
      ],
      externalLinks: [
        {
          label: 'View Paper on arXiv',
          url: 'https://arxiv.org/abs/2511.02599'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'dutch-ministry-ai-strategy',
    type: 'policy',
    title: 'Advising Dutch Ministry of Economic Affairs on AI Strategy',
    subtitle: 'Strategic guidance on national AI moonshot programmes and governance frameworks',
    venue: 'Policy Advisory',
    date: '2024',
    excerpt: 'Advised on strategic funding priorities for national moonshot AI programmes, including evaluation of governance risks and high-impact research directions for safe AI deployment.',
    link: '#',
    tags: ['AI Governance', 'Policy', 'Europe'],
    fullContent: {
      overview: 'Provided strategic advisory to the Dutch Ministry of Economic Affairs on national AI funding priorities, governance frameworks, and research directions for responsible AI development and deployment.',
      sections: [
        {
          heading: 'Context',
          content: 'The Netherlands is positioning itself as a leader in responsible AI development within Europe. As part of this initiative, the Ministry of Economic Affairs sought expertise on how to structure national AI moonshot programmes that balance innovation with safety and governance considerations.'
        },
        {
          heading: 'Key Recommendations',
          content: 'My advisory work focused on three core areas: (1) Identifying high-impact research directions that align with national strategic priorities while advancing AI safety, (2) Evaluating governance risks and regulatory frameworks for AI deployment in critical sectors, and (3) Recommending funding mechanisms that incentivize responsible development practices. This included analysis of international best practices and specific proposals for Dutch innovation policy.'
        },
        {
          heading: 'Impact',
          content: 'The recommendations informed strategic funding decisions for national AI initiatives and contributed to policy discussions around AI governance frameworks in the Netherlands. This work helped bridge the gap between technical AI research and public policy, ensuring that investment priorities reflect both innovation potential and societal considerations.'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'broonie',
    type: 'project',
    title: 'Broonie — Privacy-First GenAI for Schools',
    subtitle: 'Building a GDPR-compliant AI platform with on-premise deployment for UK schools',
    venue: 'Production System',
    date: '2024–2025',
    excerpt: 'Built GDPR-compliant AI platform with on-premise GPU cluster. Led LoRA fine-tuning pipeline achieving 40% lower perplexity on KS3 maths. Deployed in 3 pilot schools.',
    link: '#',
    tags: ['EdTech', 'Privacy', 'Deployment'],
    fullContent: {
      overview: 'Broonie is a privacy-first generative AI platform designed specifically for UK schools. Unlike cloud-based AI solutions, Broonie runs entirely on-premise, ensuring student data never leaves school grounds while providing sophisticated AI tutoring capabilities.',
      sections: [
        {
          heading: 'The Challenge',
          content: 'Schools face a fundamental dilemma with AI: powerful cloud-based tools offer sophisticated capabilities but require sending sensitive student data to external servers, raising serious GDPR and safeguarding concerns. Commercial AI platforms struggle to meet the strict data protection requirements of UK schools, forcing educators to choose between cutting-edge technology and regulatory compliance. Broonie was built to resolve this tension.'
        },
        {
          heading: 'Technical Architecture',
          content: 'The system consists of three main components: (1) An on-premise GPU cluster deployed in school data centers, running fine-tuned language models that never communicate with external servers, (2) A custom LoRA fine-tuning pipeline that adapts base models to UK curriculum content without full retraining, and (3) A web application that teachers and students can access through the school network. All inference happens locally, ensuring complete data sovereignty.'
        },
        {
          heading: 'Fine-Tuning for Education',
          content: 'We developed a specialized LoRA fine-tuning pipeline targeting Key Stage 3 mathematics. By training on curriculum-aligned data and educational best practices, we achieved a 40% reduction in perplexity compared to base models when generating mathematics explanations. The fine-tuning preserves the model\'s general capabilities while significantly improving performance on educational tasks. This approach allows us to adapt models efficiently—critical when working with limited school infrastructure.'
        },
        {
          heading: 'Deployment and Impact',
          content: 'Broonie is currently deployed in three pilot schools across the UK, serving hundreds of students. Teachers use the system to provide personalized mathematics support, generate practice problems, and offer instant feedback on student work. Early results show increased student engagement and improved problem-solving skills, particularly for students who benefit from additional one-on-one support but may not have access to human tutors.'
        },
        {
          heading: 'Privacy and Compliance',
          content: 'The entire system was designed with GDPR compliance as a foundational requirement, not an afterthought. Student data is encrypted at rest, all computation happens within school networks, and we maintain detailed audit logs for data protection officers. The on-premise architecture means schools retain complete control over their data, satisfying even the most stringent data protection policies. This approach has made Broonie one of the few AI platforms that UK schools can deploy without extensive legal review.'
        },
        {
          heading: 'What\'s Next',
          content: 'We\'re expanding Broonie beyond mathematics to cover additional subjects and year groups. Future development includes better curriculum alignment tools, enhanced teacher dashboards for monitoring student progress, and federated learning capabilities that allow models to improve across schools without sharing raw data. The goal is to demonstrate that privacy-preserving AI in education isn\'t just possible—it can be better than cloud alternatives.'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'curriculum-planning-mcts',
    type: 'publication',
    title: 'Curriculum Planning with Neurally Guided MCTS',
    subtitle: 'Model-based planning for intelligent curriculum design and adaptive teaching strategies',
    venue: 'Research in Progress',
    date: '2024',
    excerpt: 'Investigating model-based planning algorithms for intelligent curriculum design and adaptive teaching strategies using Monte Carlo Tree Search guided by neural networks.',
    link: '#',
    tags: ['Planning', 'RL', 'Education'],
    fullContent: {
      overview: 'This research explores using Monte Carlo Tree Search (MCTS) guided by neural networks for curriculum planning—determining optimal sequences of educational content to maximize student learning outcomes.',
      sections: [
        {
          heading: 'Motivation',
          content: 'Curriculum design is fundamentally a sequential decision-making problem: given what a student currently knows, what should they learn next? Traditional curriculum design relies on expert intuition and fixed sequences, but optimal learning paths likely vary by student. This research investigates whether model-based planning algorithms can discover more effective personalized curricula.'
        },
        {
          heading: 'Approach',
          content: 'We combine neural student models (predicting learning outcomes from interactions) with Monte Carlo Tree Search to plan curricula. MCTS explores possible teaching sequences, using the neural model to evaluate outcomes. This allows balancing exploration of novel curricula with exploitation of known effective sequences. The approach is inspired by AlphaZero but adapted for the educational domain where "moves" are teaching interventions and "winning" means learning success.'
        },
        {
          heading: 'Current Progress',
          content: 'We\'re developing this approach in simulation before deployment with real students. Initial results suggest that neurally guided planning can discover non-obvious curriculum sequences that outperform expert-designed baselines. Key challenges include ensuring the neural model accurately captures learning dynamics and scaling search to realistic curriculum spaces with thousands of potential learning objectives.'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'pixel-llm',
    type: 'project',
    title: 'PIXEL LLM — Tokenizer-Free Language Models',
    subtitle: 'Developing pixel-based language models that operate directly on rendered text',
    venue: 'Collaboration with CDT NLP',
    date: '2023',
    excerpt: 'Developed extensions to pre-processing pipeline for pixel-based language models. Improved GLUE benchmark performance by 10 percentage points through novel tokenization-free approach.',
    link: '#',
    tags: ['NLP', 'Computer Vision', 'Models'],
    fullContent: {
      overview: 'PIXEL is a research project exploring language models that process text as images rather than discrete tokens, eliminating the need for traditional tokenization while enabling more flexible text understanding.',
      sections: [
        {
          heading: 'The Tokenization Problem',
          content: 'Traditional language models rely on tokenization—breaking text into discrete units. This creates fundamental limitations: tokenizers struggle with rare words, multilingual text, and domain-specific vocabulary. Different tokenization schemes can significantly impact model performance, and pre-trained tokenizers are difficult to adapt. PIXEL asks: what if we skip tokenization entirely?'
        },
        {
          heading: 'Pixel-Based Language Modeling',
          content: 'Instead of tokens, PIXEL processes rendered text as images. Text is converted to pixel representations, and the model learns directly from visual patterns of characters and words. This approach is inherently multilingual (the same model can read any script), handles rare words naturally (no unknown tokens), and adapts easily to new domains (no tokenizer retraining needed).'
        },
        {
          heading: 'Technical Contributions',
          content: 'My work focused on improving the pre-processing pipeline for pixel-based models. This included developing better text rendering techniques, data augmentation strategies for pixel inputs, and optimization of the image encoder architecture. These improvements led to a 10 percentage point increase in GLUE benchmark performance, bringing pixel-based models closer to competitive with traditional tokenized models.'
        },
        {
          heading: 'Implications',
          content: 'While pixel-based models remain more computationally expensive than token-based approaches, they offer unique advantages for multilingual and cross-domain applications. This research demonstrates the viability of tokenization-free language modeling and opens new directions for models that bridge vision and language understanding.'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'contenti',
    type: 'project',
    title: 'Contenti — Bloom\'s Taxonomy Content Generator',
    subtitle: 'An educational content generation platform aligned with pedagogical frameworks',
    venue: 'MSc Thesis',
    date: '2023',
    excerpt: 'Platform for teachers to generate educational content aligned with Bloom\'s Taxonomy levels. Used participatory design with educators to iteratively refine the system.',
    link: 'https://github.com/norris-mos/contenti-mono',
    tags: ['EdTech', 'LLMs', 'Design'],
    fullContent: {
      overview: 'Contenti is a tool for teachers to generate educational content automatically aligned with different cognitive levels from Bloom\'s Taxonomy—from basic recall questions to high-level synthesis tasks.',
      sections: [
        {
          heading: 'Pedagogical Grounding',
          content: 'Bloom\'s Taxonomy defines six levels of cognitive complexity: remember, understand, apply, analyze, evaluate, and create. Effective education requires content at all levels, but creating this variety is time-consuming for teachers. Contenti automates this process while maintaining pedagogical quality by explicitly encoding Bloom\'s levels into the generation process.'
        },
        {
          heading: 'Participatory Design Process',
          content: 'Rather than building in isolation, I worked directly with teachers throughout development. Through workshops and iterative design sessions, educators helped identify which content types they needed most, how the interface should work, and what quality criteria mattered. This participatory approach ensured the tool addressed real classroom needs rather than theoretical requirements.'
        },
        {
          heading: 'Technical Implementation',
          content: 'The system uses large language models with carefully designed prompts that specify both the subject matter and the cognitive level. Teachers input a topic and select target Bloom\'s levels, and the system generates appropriate questions, activities, and assessments. The architecture separates the generation engine from the pedagogical logic, making it easy to update models while preserving educational alignment.'
        },
        {
          heading: 'Outcomes',
          content: 'Teachers who tested Contenti reported significant time savings in content creation and appreciated the explicit alignment with Bloom\'s Taxonomy. The participatory design process itself became a contribution—demonstrating how to involve educators meaningfully in EdTech development rather than building tools in isolation from classroom practice.'
        }
      ],
      externalLinks: [
        {
          label: 'View Repository on GitHub',
          url: 'https://github.com/norris-mos/contenti-mono'
        }
      ]
    }
  },
  {
    id: 7,
    slug: 'reconstructing-americas-cities',
    type: 'project',
    title: 'Reconstructing America\'s Cities of the Past Using AI',
    subtitle: 'Geolocating 30,000 historical Sanborn maps with agentic AI systems to unlock urban economic history',
    venue: 'Collaboration with LSE',
    date: '2024–Present',
    excerpt: 'Using state-of-the-art agentic AI systems to geolocate and digitize 30,000 historical Sanborn Fire Insurance Maps, enabling unprecedented analysis of American urban development and economic history.',
    link: '#',
    tags: ['AI Agents', 'Historical GIS', 'Urban History'],
    fullContent: {
      overview: 'This project combines cutting-edge agentic AI systems with historical cartography to reconstruct America\'s cities as they existed in the 1800s and early 1900s. In collaboration with researchers at the London School of Economics, we\'re building an automated pipeline to geolocate and digitize the Sanborn Fire Insurance Map collection—over 30,000 detailed maps documenting American urban landscapes. This work unlocks new possibilities for economic historians studying urbanization, industrialization, and spatial economic development.',
      sections: [
        {
          heading: 'Why Historical Maps Matter',
          content: 'Understanding how cities looked in the past is fundamental to economic history. The spatial organization of cities—where factories were built, how residential areas developed, where infrastructure was placed—shapes economic outcomes for generations. But historical urban data is scattered and difficult to work with. Most exists only as physical maps in archives. The Sanborn Fire Insurance Maps are uniquely valuable: they were created for insurance purposes and document building-by-building details including construction materials, land use, and infrastructure. If we can digitize and geolocate these maps, we can build comprehensive datasets showing how American cities evolved over a century of rapid industrialization and growth.'
        },
        {
          heading: 'The Sanborn Fire Insurance Map Collection',
          content: 'Between 1867 and 1970, the Sanborn Map Company created extraordinarily detailed fire insurance maps for over 12,000 American cities and towns. These maps show individual buildings, streets, property lines, and even structural details like wall thickness and roof materials. They were updated regularly, creating a time-series view of urban development. For researchers, they\'re an unparalleled resource—but using them requires manually finding each map, figuring out where it corresponds to in modern geography, and digitizing the data. At 30,000+ maps, doing this by hand would take decades. That\'s where AI comes in.',
          images: ['/assets/sanborn-map-1.jpg', '/assets/sanborn-map-2.jpg']
        },
        {
          heading: 'Agentic AI for Geolocation',
          content: 'Traditional computer vision approaches struggle with historical maps—street names have changed, buildings no longer exist, and map projections vary. Instead, we\'re using agentic AI systems that can reason through the geolocation task like a human expert would. The agent receives a historical map and uses multiple strategies: reading street names and comparing them to historical gazetteers, identifying landmarks that still exist today, analyzing spatial relationships between features, and cross-referencing with other historical sources. The system iterates, testing hypotheses about location and refining its estimates. It\'s not just pattern matching—it\'s genuine problem-solving with large language models coordinating multiple tools and information sources.'
        },
        {
          heading: 'The Technical Pipeline',
          content: 'Our pipeline has several stages. First, OCR (Optical Character Recognition) extracts text from map scans—street names, building labels, annotations. Then the agentic system takes over: it queries historical databases, searches modern mapping APIs, and uses spatial reasoning to propose candidate locations. A verification module checks these proposals by comparing expected spatial relationships against what\'s in the map. For ambiguous cases, the agent can request human input or flag the map for manual review. Once geolocated, we extract structured data: building footprints, land use categories, infrastructure like railways and streetcar lines. The output is a georeferenced GIS layer that can be overlaid on modern maps or analyzed quantitatively.'
        },
        {
          heading: 'Collaboration with LSE',
          content: 'This project is being done in partnership with economic historians at the London School of Economics who study urban development and spatial economics. They provide the research questions that drive our work: How did industrial agglomeration patterns emerge? How did transportation infrastructure shape residential segregation? What was the spatial footprint of different industries over time? Our AI pipeline turns historical maps into data that can answer these questions at scale. The collaboration is iterative—historians validate our geolocation results, we refine the system, and together we design the data extraction process to capture variables relevant to economic research.'
        },
        {
          heading: 'Challenges and Solutions',
          content: 'Geolocating historical maps is hard. Cities have changed dramatically—entire neighborhoods have been demolished, coastlines have shifted, rivers have been rerouted. Street names are inconsistent. Map quality varies wildly. Our agentic approach handles this by using multiple lines of evidence and explicitly reasoning about uncertainty. When confidence is low, the system says so rather than guessing. We\'ve also built a feedback loop: human corrections are fed back into the agent\'s knowledge base, making it progressively better at handling difficult cases. Another challenge is scale: 30,000 maps is far too many to process manually, but also too many to naively throw at an AI system without quality control. We\'re developing sampling strategies and validation protocols to ensure accuracy while maintaining throughput.'
        },
        {
          heading: 'Impact on Economic History',
          content: 'This project fundamentally changes what\'s possible in urban economic history. Researchers can now ask quantitative questions about city structure and development that previously required years of manual archive work. Want to know how proximity to railways affected residential density in 1890s Chicago? Or how industrial land use changed in Pittsburgh between 1900 and 1930? With geolocated Sanborn maps, these become tractable empirical questions. The data we\'re generating will be released publicly, creating a research commons for economic historians, urban planners, and anyone interested in how American cities came to be.'
        },
        {
          heading: 'What\'s Next',
          content: 'We\'re currently processing maps for major industrial cities first—New York, Chicago, Pittsburgh, Detroit—to build datasets for ongoing economic history projects. The long-term goal is comprehensive coverage: all 30,000 maps geolocated and digitized, creating a complete spatial-temporal database of American urban development. We\'re also exploring extensions: linking maps to census data, extracting business directories from map annotations, and using the geolocation pipeline for other historical map collections. The methodology we\'re developing here could apply to any large-scale historical cartography project that needs automated spatial referencing.',
          images: ['/assets/sanborn-map-3.jpg']
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'low-stim-animation',
    type: 'fun',
    title: 'Low Stim Animation with Stable Diffusion',
    subtitle: 'Reimagining classic children\'s animations using modern generative AI and video models',
    venue: 'Personal Project',
    date: '2024–Present',
    excerpt: 'Experimenting with Stable Diffusion and video models like Wan2.2 to create low-stimulation animations inspired by old-school children\'s shows. Built with ComfyUI, ControlNet, and custom LoRAs.',
    link: '#',
    tags: ['Generative AI', 'Animation', 'ComfyUI'],
    fullContent: {
      overview: 'This project explores the intersection of nostalgia and cutting-edge AI by using Stable Diffusion and modern video models to recreate the gentle, low-stimulation aesthetic of classic children\'s animations. Through ComfyUI workflows and advanced conditioning techniques, I\'m developing a pipeline for generating animation content that captures the charm of old-school shows while leveraging state-of-the-art generative models.',
      sections: [
        {
          heading: 'The Vision',
          content: 'Modern children\'s content is often hyper-stimulating—rapid cuts, bright colors, constant movement. This project is an attempt to revive the calmer aesthetic of older children\'s shows: gentle pacing, soft colors, simple character designs. But instead of traditional animation techniques, I\'m using generative AI to create new content in this style. The goal is to see if modern video generation models can capture the warmth and simplicity that made those old shows so appealing.'
        },
        {
          heading: 'Technical Stack: ComfyUI Workflows',
          content: 'The core of this project is built in ComfyUI, a node-based interface for Stable Diffusion workflows. Unlike simple prompt-to-image tools, ComfyUI lets you build complex generation pipelines with fine-grained control over every step. My workflow chains together multiple models: base Stable Diffusion for image generation, ControlNet for spatial guidance, custom LoRAs for style consistency, and video models like Wan2.2 for temporal coherence across frames. ComfyUI\'s modularity makes it perfect for experimentation—I can swap out models, adjust conditioning weights, and iterate on the pipeline without touching code.'
        },
        {
          heading: 'ControlNet for Spatial Consistency',
          content: 'ControlNet is crucial for maintaining consistent compositions across generated frames. I use it to guide the model with edge maps, depth maps, or pose skeletons extracted from reference animations. This ensures characters stay in the same positions, backgrounds remain stable, and camera movements are smooth. For example, if I want a character to walk across a scene, I can provide a sequence of pose skeletons as conditioning, and ControlNet ensures the generated frames follow that movement while maintaining the overall aesthetic. Different ControlNet models handle different types of conditioning—I typically use a combination of line art detection and depth estimation depending on the scene.'
        },
        {
          heading: 'Custom LoRAs for Style Consistency',
          content: 'Low-Rank Adaptation (LoRA) lets me fine-tune Stable Diffusion on specific visual styles without retraining the entire model. I\'ve trained several LoRAs on old children\'s animation frames—shows with that characteristic soft, watercolor-like aesthetic and simple character designs. These LoRAs bias the model toward generating content that matches that style. The beauty of LoRAs is that they\'re small (a few hundred MB) and can be mixed together—I can combine a "soft colors" LoRA with a "1980s animation" LoRA to get exactly the aesthetic I want. Training them requires curating datasets of reference frames and fine-tuning on specific visual attributes.'
        },
        {
          heading: 'Video Generation with Wan2.2',
          content: 'Stable Diffusion excels at generating individual frames, but video requires temporal coherence—each frame needs to flow smoothly into the next. That\'s where video models like Wan2.2 come in. Wan2.2 is a video generation model that can take a sequence of frames and interpolate between them, adding motion and ensuring consistency over time. My pipeline first generates keyframes using Stable Diffusion with ControlNet and LoRA conditioning, then feeds those keyframes into Wan2.2 to create smooth animation sequences. The model handles subtle movements, maintains character consistency, and adds natural motion blur. It\'s still experimental—video models are much less mature than image models—but the results are promising.'
        },
        {
          heading: 'Challenges and Iteration',
          content: 'Generative animation is hard. Temporal coherence is the biggest challenge—models want to "hallucinate" new details in every frame, causing flickering and inconsistency. I\'ve experimented with various techniques: frame interpolation, optical flow conditioning, and multi-frame batching to improve stability. Another challenge is capturing the "feel" of old animations—it\'s not just about visual style but timing, pacing, and character movement. I\'m still iterating on the workflow, testing different model combinations and conditioning strategies. The goal isn\'t to perfectly replicate old shows but to capture their essence using modern tools.'
        },
        {
          heading: 'What\'s Next',
          content: 'I\'m working on building a library of LoRAs trained on different animation eras and styles, creating a toolkit for generating low-stim content. Future experiments include incorporating audio-reactive generation (animation that responds to music or narration), exploring newer video models as they\'re released, and potentially generating entire short episodes. This is a passion project—an excuse to play with cutting-edge generative models while creating something that feels timeless and comforting.'
        }
      ]
    }
  }
];

export const getResearchItemBySlug = (slug: string): ResearchItem | undefined => {
  return researchItems.find(item => item.slug === slug);
};
