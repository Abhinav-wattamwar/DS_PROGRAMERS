import { Era, HeritageSite, MapLocation, QuizQuestion } from '../types/history';

export const ERAS_DATA: Era[] = [
  {
    id: 'era-1',
    order: 1,
    name: 'Indus Valley & Dawn of Urban Planning',
    sanskritName: 'Sindhu-Sarasvati Sabhyata',
    timeSpan: 'Bronze Age',
    epochRange: 'c. 3300 BCE – 1300 BCE',
    tagline: 'Standardized brick architecture, world-first sanitation, and maritime trade routes across the Arabian Sea.',
    overview:
      'The Indus Valley Civilization (mature phase 2600–1900 BCE) represented South Asia’s earliest urban civilization. Characterized by grid-planned cities, subterranean drainage systems, uniform weight standards (binary and decimal), and extensive maritime commerce with Mesopotamia and the Persian Gulf.',
    dominantGeographies: ['Indus River Basin', 'Ghaggar-Hakra River Valley', 'Gujarat Peninsula (Rann of Kutch)'],
    civilizationAttributes: ['Standardized Burnt Bricks (1:2:4 ratio)', 'Covered Masonry Drains', 'Steatite Seals with Proto-Dravidian/Sanskrit Scripts', 'Granaries & Water Harvesting'],
    themeColor: {
      primary: '#C2410C', // Rich Terracotta Carnelian
      badgeBg: '#FFF7ED',
      border: '#F97316',
      accent: '#9A3412',
      glow: 'rgba(234, 88, 12, 0.2)',
    },
    transitionToNext: {
      fromEraId: 'era-1',
      toEraId: 'era-2',
      title: 'How Urban Harappa Shifted to the Rural Gangetic Vedic Age',
      ecologicalFactors: 'Weakening summer monsoons (c. 1900–1800 BCE) and the gradual desiccation of the Sarasvati/Ghaggar-Hakra river system starved large urban citadels of water.',
      technologicalShifts: 'Decline in bronze metallurgical trade networks prompted eastward migration toward the densely forested, rainfall-heavy Gangetic Plains.',
      socialPoliticalEvolution: 'Highly centralized municipal governance collapsed; populations dispersed into smaller pastoral-agricultural village communities, setting the stage for early Indo-Aryan agro-pastoralism.',
      summaryExplanation: 'Urban de-densification forced communities east into the fertile Ganga-Yamuna Doab. Without centralized municipal authorities, society reorganized into lineage-based pastoral clans (Janas), cultivating the fertile plains and composing the oral hymns of the Rigveda.'
    },
    milestones: [
      {
        id: 'm1-mehrgarh',
        eraId: 'era-1',
        title: 'Mehrgarh Agricultural Foothold & Pottery Beginnings',
        yearRange: 'c. 7000 BCE – 3200 BCE',
        region: {
          name: 'Bolan Pass / Kachi Plain',
          modernState: 'Balochistan (Bordering NW India)',
          coordinates: [29.38, 67.62],
        },
        shortSummary: 'First settled farming community displaying wheat cultivation, cattle domestication, and dental drill technology.',
        detailedExplanation: 'Mehrgarh represents the transitional bridge between semi-nomadic foraging and South Asian village farming. Excavations revealed mud-brick storehouses, domesticated zebu cattle, einkorn wheat, and the earliest known evidence of in-vivo human dental drilling with flint heads.',
        causalImpact: 'Sedentary agricultural surpluses along the piedmont alluvial fan catalyzed population expansion and migration downstream into the fertile Indus floodplains.',
        keyArtifactOrFeature: 'Female terracotta fertility figurines and micro-drilled turquoise ornaments.',
        sources: [
          {
            title: 'Excavations at Mehrgarh: 1974–1985 Field Reports',
            type: 'Archaeological Report',
            authorOrAttribution: 'Jean-François Jarrige, Centre National de la Recherche Scientifique (CNRS)',
            periodOrPublication: '1985, Paleorient & ASI',
            citationSnippet: 'Demonstrates continuous stratified sedentary occupation from aceramic Neolithic period I through ceramic chalcolithic stages.'
          },
          {
            title: 'Early Farming Communities of the Subcontinent',
            type: 'Academic Monograph',
            authorOrAttribution: 'ASI Memoir Series No. 94',
            periodOrPublication: 'Archaeological Survey of India, 2001',
            citationSnippet: 'Mehrgarh establishes indigenous agrarian roots predating western Mesopotamian dispersal models.'
          }
        ],
        tags: ['Neolithic', 'Agriculture', 'Origins', 'Domestication']
      },
      {
        id: 'm1-mohenjodaro',
        eraId: 'era-1',
        title: 'Mohenjo-daro & The Great Bath Engineering',
        yearRange: 'c. 2600 BCE – 1900 BCE',
        region: {
          name: 'Lower Indus Valley',
          modernState: 'Sindh (Historical Indus Valley Region)',
          coordinates: [27.32, 68.13],
        },
        shortSummary: 'Zenith of municipal engineering with bitumen-waterproofed ritual baths, two-story courtyard houses, and civic drainage.',
        detailedExplanation: 'Mohenjo-daro was divided into an elevated Citadel and a Lower Town. The Great Bath, lined with finely fitted baked bricks sealed with bitumen (natural tar) and gypsum plaster, served ceremonial purification. Every home featured a private bathroom connected to covered street gutters.',
        causalImpact: 'Standardized urban sanitation created South Asia’s first multi-tier civic administration without evidence of monarchical despotism or standing armies.',
        keyArtifactOrFeature: 'The Bronze "Dancing Girl" lost-wax casting and the Steatite "Priest-King" bust.',
        sources: [
          {
            title: 'Mohenjo-daro and the Indus Civilization (3 Volumes)',
            type: 'Archaeological Report',
            authorOrAttribution: 'Sir John Marshall, Director General of Archaeology in India',
            periodOrPublication: 'London: Arthur Probsthain, 1931',
            citationSnippet: 'Detailed description of the Great Bath plumbing, brick ratios, and sanitation engineering.'
          },
          {
            title: 'NCERT Class XII: Themes in Indian History (Part I, Chapter 1)',
            type: 'Academic Monograph',
            authorOrAttribution: 'National Council of Educational Research and Training',
            periodOrPublication: 'NCERT Textbook Revision 2023',
            citationSnippet: 'Bricks, Beads and Bones: The Harappan Civilization municipal structure and drainage lines.'
          }
        ],
        tags: ['Urban Planning', 'Sanitation', 'Architecture', 'Great Bath']
      },
      {
        id: 'm1-lothal',
        eraId: 'era-1',
        title: 'Lothal Tidal Dockyard & Persian Gulf Maritime Trade',
        yearRange: 'c. 2400 BCE – 1900 BCE',
        region: {
          name: 'Gulf of Khambhat',
          modernState: 'Gujarat, India',
          coordinates: [22.52, 72.24],
        },
        shortSummary: 'The world’s earliest scientifically engineered tidal dockyard connecting Indian trade to Dilmun (Bahrain) and Sumer.',
        detailedExplanation: 'Lothal’s engineers harnessed ocean tides via an inlet channel and a sluice gate mechanism to berth seafaring dhows into a 214m x 36m brick basin without silt buildup. Bead factories exported carnelian, lapis lazuli, and ivory across the Arabian Sea.',
        causalImpact: 'International commercial credit led to uniform weights and measures throughout the subcontinent, cementing early trans-regional economic integration.',
        keyArtifactOrFeature: 'Terracotta ship models, Persian Gulf circular seal, and micro-cylindrical carnelian drills.',
        sources: [
          {
            title: 'Lothal: A Harappan Port Town (Memoirs of ASI No. 78)',
            type: 'Archaeological Report',
            authorOrAttribution: 'S. R. Rao, Superintending Archaeologist',
            periodOrPublication: 'Archaeological Survey of India, 1979',
            citationSnippet: 'Identifies the brick basin as an operative tidal dock with spillway, inlet sluice, and mud-brick warehouse.'
          }
        ],
        tags: ['Maritime', 'Tidal Dock', 'Trade', 'Carnelian Beads']
      },
      {
        id: 'm1-dholavira',
        eraId: 'era-1',
        title: 'Dholavira Stone Reservoirs & The Ten-Character Signboard',
        yearRange: 'c. 2500 BCE – 1800 BCE',
        region: {
          name: 'Khadir Bet Island, Great Rann of Kutch',
          modernState: 'Gujarat, India',
          coordinates: [23.88, 70.21],
        },
        shortSummary: 'Mastery of arid water management with 16 interconnected rock-cut reservoirs and the famous gypsum inlaid sign.',
        detailedExplanation: 'Unlike all-brick cities of the Indus floodplains, Dholavira was crafted from dressed sandstone and limestone. Its seasonal rivulets (Mansar and Manhar) were dammed to channel rainwater into massive stepped reservoirs holding over 250,000 cubic meters of potable water.',
        causalImpact: 'Demonstrated advanced hydrological civil defense in arid ecosystems, which later influenced western Indian stepwell (Vav) engineering.',
        keyArtifactOrFeature: 'The 10-symbol polished gypsum signboard found near the North Gateway of the Citadel.',
        sources: [
          {
            title: 'Dholavira: A Harappan City (UNESCO World Heritage Dossier)',
            type: 'Archaeological Report',
            authorOrAttribution: 'R. S. Bisht & Archaeological Survey of India',
            periodOrPublication: 'Inscribed 2021, ASI New Delhi',
            citationSnippet: 'Exemplifies sophisticated water conservation and tripartite citadel fortification using local sandstone.'
          }
        ],
        tags: ['Water Harvesting', 'UNESCO Heritage', 'Epigraphy', 'Reservoirs']
      }
    ]
  },
  {
    id: 'era-2',
    order: 2,
    name: 'Vedic Age & The Second Urbanization',
    sanskritName: 'Vaidika Yuga & Mahajanapadas',
    timeSpan: 'Iron Age',
    epochRange: 'c. 1500 BCE – 500 BCE',
    tagline: 'Oral philosophy, iron metallurgy, Gangetic deforestation, and the emergence of 16 republics and monarchies.',
    overview:
      'Spanning the composition of the four Vedas to the rise of 16 Mahajanapadas (Great Realms). Iron axes cleared the dense Gangetic monsoon forests, creating agricultural surpluses that funded standing armies, coinage (punch-marked silver), and radical philosophical inquiry (Upanishads, Buddhism, and Jainism).',
    dominantGeographies: ['Punjab / Sapta-Sindhu', 'Ganga-Yamuna Doab', 'Magadha (Southern Bihar)', 'Malwa Plateau'],
    civilizationAttributes: ['Painted Grey Ware (PGW) Pottery', 'Iron Smelting & Axes', 'Punch-Marked Silver Karshapana Coins', 'Assembly Republics (Gana-Sanghas)'],
    themeColor: {
      primary: '#B45309', // Saffron ochre
      badgeBg: '#FFFBEB',
      border: '#F59E0B',
      accent: '#D97706',
      glow: 'rgba(245, 158, 11, 0.15)',
    },
    transitionToNext: {
      fromEraId: 'era-2',
      toEraId: 'era-3',
      title: 'How 16 Mahajanapadas Consolidated into the Mauryan Empire',
      ecologicalFactors: 'Magadha held vast mineral deposits of iron ore (Singhbhum) and dense elephant reserves in Chota Nagpur, granting decisive military supremacy.',
      technologicalShifts: 'Transition from punch-marked tribal coins to royal imperial currency, backed by systematic state revenue taxation codified in the Arthashastra.',
      socialPoliticalEvolution: 'Small oligarchical republics (Gana-Sanghas) were swallowed by Magadha’s militarized state machinery under the Haryanka, Shishunaga, and Nanda dynasties, culminating in Chandragupta Maurya’s unification.',
      summaryExplanation: 'Agrarian wealth and iron-armed war elephants in southern Bihar enabled Magadha to subdue competing realms. When Alexander’s invasion exposed north-western vulnerabilities, Chandragupta and Chanakya capitalized on anti-Nanda discontent to establish India’s first pan-subcontinental empire.'
    },
    milestones: [
      {
        id: 'm2-rigveda',
        eraId: 'era-2',
        title: 'Oral Codification of the Rigveda in Sapta-Sindhu',
        yearRange: 'c. 1500 BCE – 1100 BCE',
        region: {
          name: 'Land of Seven Rivers (Sapta-Sindhu)',
          modernState: 'Punjab, Haryana & NW India',
          coordinates: [30.73, 76.77],
        },
        shortSummary: 'Creation of South Asia’s foundational liturgical poetry, preserving pastoral life, solar astronomy, and cosmic chants.',
        detailedExplanation: 'Composed without written script through extraordinary phonetic memorization (Padapatha and Ghanapatha systems), the 1,028 hymns of the Rigveda document clan assemblies (Sabha and Samiti), cattle wealth (Gavishti), and reverence for forces of nature like Agni, Indra, and Soma.',
        causalImpact: 'Preserved cultural and philosophical unity across disparate tribes, establishing the linguistic roots of Classical Sanskrit literature.',
        keyArtifactOrFeature: 'The Battle of the Ten Kings (Dasharajna) recorded in Mandala 7, unifying Bharata clans.',
        sources: [
          {
            title: 'The Rigveda: The Earliest Religious Poetry of India',
            type: 'Ancient Text',
            authorOrAttribution: 'Stephanie W. Jamison & Joel P. Brereton (Oxford University Press)',
            periodOrPublication: '2014 Translation & Rigvedic Samhita',
            citationSnippet: 'Rigveda Mandala VII, Hymn 18: Recounts King Sudas and sage Vashistha at the Parushni (Ravi) river.'
          },
          {
            title: 'A History of Ancient and Early Medieval India',
            type: 'Academic Monograph',
            authorOrAttribution: 'Upinder Singh (Pearson Longman)',
            periodOrPublication: '2008, Chapter 4',
            citationSnippet: 'Analyzes the socio-economic transition from pastoral pastoralism to sedentary lineage formations.'
          }
        ],
        tags: ['Vedic', 'Literature', 'Philosophy', 'Oral Tradition']
      },
      {
        id: 'm2-iron-ganga',
        eraId: 'era-2',
        title: 'Iron Metallurgy & Painted Grey Ware (PGW) Expansion',
        yearRange: 'c. 1000 BCE – 600 BCE',
        region: {
          name: 'Upper Gangetic Valley (Hastinapura, Atranjikhera)',
          modernState: 'Uttar Pradesh & Haryana',
          coordinates: [28.98, 77.70],
        },
        shortSummary: 'Iron axes cleared dense sal forests of the Gangetic plain, yielding paddy surplus and permanent towns.',
        detailedExplanation: 'Archaeological discoveries at Atranjikhera, Hastinapura, and Jakhera show iron slag, arrowheads, and sickles dating from 1000 BCE. The associated Painted Grey Ware (PGW) pottery marked dense agrarian settlements, replacing shifting cultivation with wet-rice transplantation.',
        causalImpact: 'Food surpluses allowed occupational specialization: weavers, potters, blacksmiths, and traders emerged, giving rise to urban market centers.',
        keyArtifactOrFeature: 'Iron hoes, axes, and fine geometric-painted grey ceramic bowls.',
        sources: [
          {
            title: 'Excavations at Hastinapura and other Explorations in the Upper Ganga Basin',
            type: 'Archaeological Report',
            authorOrAttribution: 'B. B. Lal, Ancient India Bulletin of ASI, Nos. 10 & 11',
            periodOrPublication: 'Archaeological Survey of India, 1954–1955',
            citationSnippet: 'Stratigraphic continuity of Period II PGW with early iron tools and terracotta figurines.'
          }
        ],
        tags: ['Iron Age', 'PGW', 'Urbanization', 'Agriculture']
      },
      {
        id: 'm2-mahajanapadas',
        eraId: 'era-2',
        title: 'The 16 Mahajanapadas & Shramana Enlightenment',
        yearRange: 'c. 600 BCE – 450 BCE',
        region: {
          name: 'Middle Gangetic Plains (Magadha, Kosala, Vajji)',
          modernState: 'Bihar & Eastern Uttar Pradesh',
          coordinates: [25.60, 85.14],
        },
        shortSummary: 'Birth of Siddhartha Gautama (Buddha) and Mahavira alongside the world’s first republican assembly (Vajji confederacy).',
        detailedExplanation: 'Sixteen major political powers (Mahajanapadas) emerged across northern India. In the republican confederacies like the Licchavis of Vaishali, decisions were debated in voting assemblies (Santhagara). Dissatisfaction with orthodox ritual led to the Shramana wave: Jainism and Buddhism, advocating Ahimsa and mental liberation.',
        causalImpact: 'Questioned hereditary social hierarchies and provided an egalitarian moral code enthusiastically adopted by merchant guilds (Srenis).',
        keyArtifactOrFeature: 'Punch-marked silver Karshapana coins bearing sun and six-armed symbols.',
        sources: [
          {
            title: 'Anguttara Nikaya (Sutta Pitaka)',
            type: 'Ancient Text',
            authorOrAttribution: 'Pali Canon Buddhist Scriptures (First Council, Rajgir)',
            periodOrPublication: 'c. 5th Century BCE / Pali Text Society',
            citationSnippet: 'Enumerates the Solasa Mahajanapada (16 Great Realms) including Kasi, Kosala, Magadha, and Vajji.'
          },
          {
            title: 'Early Buddhist Monasticism & Urban Economy',
            type: 'Academic Monograph',
            authorOrAttribution: 'Uma Chakravarti (Munshiram Manoharlal)',
            periodOrPublication: '1987',
            citationSnippet: 'The social dimensions of early Buddhism and the patronage of Gahapatis and Sresthis.'
          }
        ],
        tags: ['Buddhism', 'Jainism', 'Republics', 'Philosophy']
      }
    ]
  },
  {
    id: 'era-3',
    order: 3,
    name: 'The Classical Empires: Mauryas to Guptas',
    sanskritName: 'Samrajya & Suvarna Yuga',
    timeSpan: 'Classical Antiquity',
    epochRange: 'c. 321 BCE – 550 CE',
    tagline: 'Imperial unification, Ashoka’s Rock Edicts, silk-spice routes, Sanskrit drama, and zero mathematics.',
    overview:
      'Beginning with Chandragupta Maurya and Emperor Ashoka’s pan-Indian welfare state governed by Dhamma, through Kushan Silk Road trade, to the Gupta "Golden Age." Marked by monumental stone sculpture, university hubs like Nalanda, zero/decimal mathematics by Aryabhata, and Kalidasa’s dramatic poetry.',
    dominantGeographies: ['Pataliputra (Patna)', 'Gandhara & Taxila', 'Ujjain (Malwa)', 'Deccan (Satavahanas)'],
    civilizationAttributes: ['Polished Sandstone Ashokan Columns', 'Rock-cut Buddhist Chaityas (Ajanta)', 'Classical Sanskrit Literature', 'Nalanda & Taxila Universities'],
    themeColor: {
      primary: '#1D4ED8', // Classical Royal Lapis Lazuli
      badgeBg: '#EFF6FF',
      border: '#3B82F6',
      accent: '#1E40AF',
      glow: 'rgba(37, 99, 235, 0.2)',
    },
    transitionToNext: {
      fromEraId: 'era-3',
      toEraId: 'era-4',
      title: 'How Imperial Centralization Fragmented into Regional Kingdoms',
      ecologicalFactors: 'Huna invasions through the northwestern passes ruptured Eurasian trade revenues, shifting economic weight toward maritime peninsular coasts.',
      technologicalShifts: 'Proliferation of royal land grants (Agraharas and Brahmadeyas) inscribed on copper plates decentralized tax collection and military levies.',
      socialPoliticalEvolution: 'Gupta imperial authority dissolved into autonomous regional feudal lords (Samantas), giving rise to fierce regional renaissance powers (Harsha, Chalukyas, Pallavas, and Rashtrakutas).',
      summaryExplanation: 'With the collapse of imperial Gupta power, regional governors and feudatories declared independence. Cultural and architectural patronage shifted from Magadha to peninsular river basins: the Krishna-Godavari for the Chalukyas and Rashtrakutas, and the Kaveri for the imperial Cholas.'
    },
    milestones: [
      {
        id: 'm3-arthashastra',
        eraId: 'era-3',
        title: 'Chandragupta Maurya & Chanakya’s Arthashastra',
        yearRange: 'c. 321 BCE – 297 BCE',
        region: {
          name: 'Pataliputra (Modern Patna)',
          modernState: 'Bihar, India',
          coordinates: [25.61, 85.13],
        },
        shortSummary: 'Unification of India from the Hindu Kush to Bengal under a centralized administrative bureaucracy.',
        detailedExplanation: 'Guided by his prime minister Chanakya (Kautilya), Chandragupta overthrew the Nandas and defeated Seleucus I Nicator. The Arthashastra established treatises on statecraft, espionage, municipal sanitation, wildlife sanctuaries, state mining, and the Mandala diplomacy theory.',
        causalImpact: 'First political unification of the Indian subcontinent, establishing trade safety that fueled prosperity across the Grand Trunk road precursor (Uttarapatha).',
        keyArtifactOrFeature: 'Megasthenes’ eyewitness account describing Pataliputra’s 64 gates and 570 wooden defense towers.',
        sources: [
          {
            title: 'The Kautiliya Arthashastra (Part I-III)',
            type: 'Ancient Text',
            authorOrAttribution: 'Kautilya / Edited by R. P. Kangle (University of Bombay)',
            periodOrPublication: '1965 Critical Edition, MLBD',
            citationSnippet: 'Adhyakshapracara (Superintendents of Departments) outlining state monopolies and tax rates.'
          },
          {
            title: 'Indika of Megasthenes',
            type: 'Travelogue',
            authorOrAttribution: 'Megasthenes, Seleucid Ambassador to Pataliputra',
            periodOrPublication: 'Fragments preserved by Strabo, Diodorus, and Arrian (c. 300 BCE)',
            citationSnippet: 'Detailed description of the municipal board of thirty commissioners managing Pataliputra.'
          }
        ],
        tags: ['Mauryan Empire', 'Statecraft', 'Arthashastra', 'Unification']
      },
      {
        id: 'm3-ashoka',
        eraId: 'era-3',
        title: 'Ashoka’s Kalinga Transformation & Dhamma Edicts',
        yearRange: 'c. 268 BCE – 232 BCE',
        region: {
          name: 'Pan-Subcontinent (Major Rock Edict sites: Girnar, Dhauli, Shahbazgarhi)',
          modernState: 'Gujarat, Odisha, Karnataka, NW Frontiers',
          coordinates: [20.19, 85.83],
        },
        shortSummary: 'Renunciation of aggressive conquest (Bherighosha) in favor of moral conquest (Dhammaghosha) carved on living rock.',
        detailedExplanation: 'Horrified by the massacre in the Kalinga War (modern Odisha), Ashoka embraced Buddhism. He dispatched goodwill ambassadors to Ptolemaic Egypt, Macedonia, and Sri Lanka (Mahinda and Sanghamitta). His Edicts in Prakrit, Greek, and Aramaic mandated public hospitals, tree-planting, and religious tolerance.',
        causalImpact: 'Transformed Buddhism from an Indian ascetic tradition into a world religion and established the Lion Capital as India’s modern national emblem.',
        keyArtifactOrFeature: 'The Sarnath Lion Capital carved from mirror-polished Chunar sandstone.',
        sources: [
          {
            title: 'Inscriptions of Asoka (Corpus Inscriptionum Indicarum Vol. I)',
            type: 'Primary Epigraphy',
            authorOrAttribution: 'E. Hultzsch / Archaeological Survey of India',
            periodOrPublication: '1925, New Delhi',
            citationSnippet: 'Major Rock Edict XIII (Shahbazgarhi/Kalsi): Expresses profound remorse for the death of 100,000 in Kalinga.'
          }
        ],
        tags: ['Ashoka', 'Dhamma', 'Prakrit', 'Sarnath Lion Capital']
      },
      {
        id: 'm3-gupta-golden-age',
        eraId: 'era-3',
        title: 'Gupta Scientific & Cultural Zenith: Aryabhata & Kalidasa',
        yearRange: 'c. 320 CE – 550 CE',
        region: {
          name: 'Ujjain & Magadha',
          modernState: 'Madhya Pradesh & Bihar',
          coordinates: [23.18, 75.77],
        },
        shortSummary: 'Invention of zero as a placeholder, calculation of Earth’s axial rotation, and classical Sanskrit masterpieces.',
        detailedExplanation: 'Under Chandragupta II Vikramaditya and Kumaragupta I, India experienced a scientific renaissance. Aryabhata computed Pi to four decimal places (3.1416) and proved planetary eclipses were shadows, while Kalidasa penned Shakuntala and Meghaduta. Kumaragupta founded Nalanda Mahavihara.',
        causalImpact: 'Indian mathematical astronomy disseminated through translation to Abbasid Baghdad (Al-Khwarizmi) and eventually sparked the European Renaissance.',
        keyArtifactOrFeature: 'The Rust-free Iron Pillar of Delhi erected under Chandragupta II with Brahmi inscription.',
        sources: [
          {
            title: 'Aryabhatiya of Aryabhata (Critical Edition with Bhaskara I Commentary)',
            type: 'Ancient Text',
            authorOrAttribution: 'Aryabhata (499 CE) / K. S. Shukla (Indian National Science Academy)',
            periodOrPublication: '1976, INSA New Delhi',
            citationSnippet: 'Ganitapada Section 10: Explicit rules for place-value decimal system and square/cube roots.'
          },
          {
            title: 'The Golden Age of the Guptas',
            type: 'Academic Monograph',
            authorOrAttribution: 'Romila Thapar (Penguin India)',
            periodOrPublication: '2002, Early India: From the Origins to AD 1300',
            citationSnippet: 'Evaluation of temple architecture, land grant economy, and urban guild patronage.'
          }
        ],
        tags: ['Guptas', 'Aryabhata', 'Mathematics', 'Astronomy', 'Sanskrit']
      }
    ]
  },
  {
    id: 'era-4',
    order: 4,
    name: 'Medieval Transformations & Regional Renaissance',
    sanskritName: 'Madhyakaleena Rajavansha',
    timeSpan: 'Early to Late Medieval',
    epochRange: 'c. 600 CE – 1526 CE',
    tagline: 'Chola naval dominion, Ellora rock-cut temple engineering, Bhakti-Sufi poetry, and Delhi Sultanate.',
    overview:
      'A brilliant epoch of decentralized regional powers. The Imperial Cholas controlled maritime trade routes to Srivijaya (Indonesia); the Rashtrakutas excavated the colossal monolithic Kailash Temple; the Delhi Sultanate introduced Indo-Islamic domes and arch architecture; and Vijayanagara built an international trade hub at Hampi.',
    dominantGeographies: ['Deccan Plateau (Ellora, Badami)', 'Tamil Country (Thanjavur, Kaveri Delta)', 'Tungabhadra Basin (Hampi)', 'Indo-Gangetic Plain (Delhi)'],
    civilizationAttributes: ['Monolithic Rock-Cut Architecture', 'Chola Lost-Wax Bronze Nataraja', 'Indo-Islamic Arcuate Architecture', 'Bhakti & Sufi Vernacular Literature'],
    themeColor: {
      primary: '#047857', // Regal jade emerald
      badgeBg: '#ECFDF5',
      border: '#10B981',
      accent: '#059669',
      glow: 'rgba(16, 185, 129, 0.15)',
    },
    transitionToNext: {
      fromEraId: 'era-4',
      toEraId: 'era-5',
      title: 'How Medieval Regional Powers Gave Way to the Mughal Empire',
      ecologicalFactors: 'Severe recurrent Deccan droughts in the late 14th–15th century weakened agrarian yields, straining feudal state armies.',
      technologicalShifts: 'Introduction of field artillery, matchlock muskets, and siege cannons at the First Battle of Panipat (1526) rendered traditional elephant cavalry obsolete.',
      socialPoliticalEvolution: 'Fractured sultanates and rival kingdoms were unable to mount a united defense against Babur’s mobile Central Asian gunpowder warfare, ushering in the centralized Mughal imperial state.',
      summaryExplanation: 'When gunpowder weaponry combined with Babur’s swift cavalry tactics defeated Ibrahim Lodi at Panipat, the fragmented Delhi Sultanate dissolved. The Mughals replaced decentralized fiefdoms with the Mansabdari administrative network, unifying India under one grand imperial banner.'
    },
    milestones: [
      {
        id: 'm4-ellora-kailash',
        eraId: 'era-4',
        title: 'Rashtrakuta Monolithic Kailash Temple at Ellora (Cave 16)',
        yearRange: 'c. 756 CE – 774 CE',
        region: {
          name: 'Chhatrapati Sambhajinagar (Aurangabad)',
          modernState: 'Maharashtra, India',
          coordinates: [20.02, 75.18],
        },
        shortSummary: 'The world’s largest monolithic rock excavation: 200,000 tons of solid basalt cut from top to bottom.',
        detailedExplanation: 'Commissioned by Rashtrakuta King Krishna I, the Kailash Temple was not constructed by stacking stones, but carved top-down out of the Charanandri hills. Master stonemasons carved life-sized stone elephants, the Ravana shaking Mount Kailash panel, and multi-story galleries with zero scaffolding.',
        causalImpact: 'Established the peak of Deccan sculptural engineering and demonstrated inter-religious harmony beside Buddhist and Jain caves.',
        keyArtifactOrFeature: 'The Ravana Anugraha Murti: dynamic stone depiction of the demon king attempting to shake Shiva’s mountain abode.',
        sources: [
          {
            title: 'Baroda Copper Plate Grant of Karka II (Saka 734)',
            type: 'Primary Epigraphy',
            authorOrAttribution: 'Rashtrakuta Epigraphical Records, Epigraphia Indica Vol. XII',
            periodOrPublication: '812 CE / ASI',
            citationSnippet: 'Celebrates Krishna I constructing a temple so wondrous that even celestial beings in vimanas paused in astonishment.'
          },
          {
            title: 'The Cave Temples of India',
            type: 'Archaeological Report',
            authorOrAttribution: 'James Fergusson & James Burgess',
            periodOrPublication: 'London: W.H. Allen & Co., 1880',
            citationSnippet: 'Technical survey of the excavation volume, chiseled basalt strata, and drainage ducts.'
          }
        ],
        tags: ['Rock-Cut', 'Rashtrakuta', 'Ellora', 'Architecture', 'UNESCO Heritage']
      },
      {
        id: 'm4-chola-navy',
        eraId: 'era-4',
        title: 'Rajaraja & Rajendra Chola Maritime Hegemony',
        yearRange: 'c. 985 CE – 1044 CE',
        region: {
          name: 'Thanjavur & Kaveri Delta',
          modernState: 'Tamil Nadu & Bay of Bengal',
          coordinates: [10.78, 79.13],
        },
        shortSummary: 'Naval expeditions across Southeast Asia (Malacca Strait) and construction of Brihadisvara Temple.',
        detailedExplanation: 'The Cholas commanded South Asia’s most formidable blue-water navy. Rajendra Chola I sent fleets across the Bay of Bengal to conquer Srivijaya (Sumatra/Malaya) to protect Indian Ocean trade routes to Song Dynasty China. Back home, Rajaraja built the 216-foot tall granite Brihadisvara Temple without binding mortar.',
        causalImpact: 'Disseminated Indian temple architecture, bronze casting, and script into Southeast Asia (Angkor Wat, Borobudur, and Balinese culture).',
        keyArtifactOrFeature: 'Chola Lost-Wax Bronze Nataraja depicting Shiva’s cosmic dance of creation and dissolution.',
        sources: [
          {
            title: 'Tirumalai Rock Inscription of Rajendra Chola I',
            type: 'Primary Epigraphy',
            authorOrAttribution: 'Epigraphia Indica Vol. IX',
            periodOrPublication: '1023 CE, Archaeological Survey of India',
            citationSnippet: 'Records the expedition to the banks of the Ganges (Gangaikonda) and naval conquest of Kadaram (Kedah, Malaysia).'
          },
          {
            title: 'The Colas (2 Volumes)',
            type: 'Academic Monograph',
            authorOrAttribution: 'K. A. Nilakanta Sastri (University of Madras)',
            periodOrPublication: '1935 / Reprint 2000',
            citationSnippet: 'Examines local self-governing village assemblies (Uttiramerur inscriptions) and naval logistics.'
          }
        ],
        tags: ['Cholas', 'Maritime', 'Brihadisvara', 'Nataraja', 'Bronze']
      },
      {
        id: 'm4-hampi-vijayanagara',
        eraId: 'era-4',
        title: 'Vijayanagara Empire: Hampi’s Cosmopolitan Trade Hub',
        yearRange: 'c. 1336 CE – 1565 CE',
        region: {
          name: 'Hampi / Bellary District',
          modernState: 'Karnataka, India',
          coordinates: [15.33, 76.46],
        },
        shortSummary: 'Under Krishnadevaraya, the world’s second largest city in the 1500s, trading Persian horses and Golconda diamonds.',
        detailedExplanation: 'Founded on the rocky banks of the Tungabhadra by brothers Harihara and Bukka, Vijayanagara reached its golden era under Emperor Krishnadevaraya. Portuguese chronicler Domingo Paes called it "as large as Rome." Its Vittala Temple featured musical stone pillars and a monolithic Stone Chariot.',
        causalImpact: 'Shielded southern Indian Carnatic classical music, Telugu literature, and Dravidian architecture during centuries of northern conflict.',
        keyArtifactOrFeature: 'The monolithic Stone Chariot and the musical granite pillars of Vittala Temple.',
        sources: [
          {
            title: 'Narrative of Domingo Paes and Fernão Nunes',
            type: 'Travelogue',
            authorOrAttribution: 'Robert Sewell, A Forgotten Empire (Vijayanagar)',
            periodOrPublication: '1900 Translation of Portuguese Archives (c. 1520 CE)',
            citationSnippet: 'Eyewitness accounts of diamond markets where rubies and diamonds were sold by weight in open bazaars.'
          }
        ],
        tags: ['Vijayanagara', 'Hampi', 'Krishnadevaraya', 'UNESCO Heritage']
      }
    ]
  },
  {
    id: 'era-5',
    order: 5,
    name: 'Mughal Splendor to Independence',
    sanskritName: 'Mughal Kal, Swatantrata Sangram',
    timeSpan: 'Early Modern to Modern',
    epochRange: 'c. 1526 CE – 1947 CE',
    tagline: 'Imperial consolidation, Maratha resistance, anti-colonial revolution, and the birth of modern democratic India.',
    overview:
      'From Akbar’s administrative revenue integration (Zabt) and Taj Mahal white marble artistry to the Maratha swarajya movement under Chhatrapati Shivaji. European colonial exploitation under the East India Company ignited the 1857 Rebellion, leading to mass satyagraha, Netaji’s INA, and Indian Independence on 15 August 1947.',
    dominantGeographies: ['Agra & Delhi', 'Deccan & Western Ghats (Raigad, Pune)', 'Bengal Presidency (Kolkata)', 'Pan-India Satyagraha hubs (Dandi, Sabarmati)'],
    civilizationAttributes: ['Indo-Islamic Symmetrical Gardens (Charbagh)', 'Pietra Dura Marble Inlay', 'Maratha Hill Fortresses (Guerilla Warfare)', 'Constitutional Parliamentary Democracy'],
    themeColor: {
      primary: '#B91C1C', // Imperial Crimson & Saffron
      badgeBg: '#FEF2F2',
      border: '#EF4444',
      accent: '#991B1B',
      glow: 'rgba(239, 68, 68, 0.2)',
    },
    transitionToNext: undefined, // Final modern era
    milestones: [
      {
        id: 'm5-akbar-admin',
        eraId: 'era-5',
        title: 'Akbar’s Sulh-i Kul, Todar Mal’s Revenue & Taj Mahal',
        yearRange: 'c. 1556 CE – 1658 CE',
        region: {
          name: 'Agra, Fatehpur Sikri & Delhi',
          modernState: 'Uttar Pradesh & Delhi',
          coordinates: [27.17, 78.04],
        },
        shortSummary: 'Universal religious peace, systematic cadastral survey, and peak Indo-Islamic architectural splendor.',
        detailedExplanation: 'Emperor Akbar abolished the jizya tax, hosted inter-faith debates at the Ibadat Khana, and institutionalized the Dahsala land revenue system engineered by Raja Todar Mal. His grandson Shah Jahan brought marble architecture to its pinnacle with the Taj Mahal, integrating Persian symmetry with Indian craftsmen.',
        causalImpact: 'India generated over 24% of world GDP in the 17th century, attracting English, Dutch, and French commercial joint-stock companies.',
        keyArtifactOrFeature: 'The Taj Mahal at Agra and the illustrated Akbar-nama manuscript folio.',
        sources: [
          {
            title: 'Ain-i-Akbari (Third Volume of Akbarnama)',
            type: 'Primary Epigraphy',
            authorOrAttribution: 'Abu al-Fazl ibn Mubarak, Grand Vizier of Akbar',
            periodOrPublication: 'c. 1598 CE / H. Blochmann translation (ASI)',
            citationSnippet: 'Detailed gazetteer of statistical revenue tables, army divisions, and Sulh-i-Kul decrees.'
          }
        ],
        tags: ['Mughals', 'Akbar', 'Taj Mahal', 'Revenue System']
      },
      {
        id: 'm5-shivaji-maratha',
        eraId: 'era-5',
        title: 'Chhatrapati Shivaji Maharaj & Maratha Swarajya',
        yearRange: 'c. 1674 CE – 1818 CE',
        region: {
          name: 'Raigad Fort & Western Ghats',
          modernState: 'Maharashtra, India',
          coordinates: [18.23, 73.44],
        },
        shortSummary: 'Coronation at Raigad, naval fortresses, and Ganimi Kava (guerrilla tactics) checking imperial overreach.',
        detailedExplanation: 'Chhatrapati Shivaji established Hindavi Swarajya through agile hill-fort strategy (Sindhudurg, Vijaydurg) and disciplined peasant army commands. Following his coronation in 1674, the Marathas expanded across central India, eventually holding sway over Delhi until British colonial confrontations.',
        causalImpact: 'Shattered imperial monopoly and laid the foundation for modern regional military valor and indigenous naval engineering.',
        keyArtifactOrFeature: 'The Royal Seal (Rajmudra) in Sanskrit on bell-metal: "Pratipaccandralekheva..."',
        sources: [
          {
            title: 'Shivaji and His Times',
            type: 'Academic Monograph',
            authorOrAttribution: 'Sir Jadunath Sarkar (M.C. Sarkar & Sons)',
            periodOrPublication: '1919 (5th Edition 1952)',
            citationSnippet: 'Examines administrative councils (Ashta Pradhan) and mountain defensive logistics.'
          }
        ],
        tags: ['Marathas', 'Shivaji Maharaj', 'Raigad', 'Swarajya', 'Forts']
      },
      {
        id: 'm5-1857-revolt',
        eraId: 'era-5',
        title: 'The 1857 First War of Independence & Crown Takeover',
        yearRange: '1857 CE – 1858 CE',
        region: {
          name: 'Meerut, Delhi, Jhansi, Lucknow',
          modernState: 'Uttar Pradesh, Madhya Pradesh & Delhi',
          coordinates: [28.61, 77.20],
        },
        shortSummary: 'Coordinated insurrection of sepoys, dispossessed princes, and peasants ending British East India Company rule.',
        detailedExplanation: 'Sparked by Mangal Pandey at Barrackpore and spreading from Meerut to Delhi, Rani Lakshmibai of Jhansi, Tatya Tope, and Kunwar Singh rose against colonial drain of wealth and the Doctrine of Lapse. Although suppressed, the Government of India Act 1858 stripped the Company of governance, placing India under direct British Crown rule.',
        causalImpact: 'Sowed the seeds of modern anti-imperial national consciousness that crystallized into the Indian National Congress in 1885.',
        keyArtifactOrFeature: 'The Proclamation of Queen Victoria (1858) promising non-interference in religious customs.',
        sources: [
          {
            title: 'The Indian War of Independence of 1857',
            type: 'Academic Monograph',
            authorOrAttribution: 'Vinayak Damodar Savarkar',
            periodOrPublication: '1909 (London / Bombay)',
            citationSnippet: 'First nationalistic reappraisal framing the revolt as an organized national rebellion.'
          },
          {
            title: 'Eighteen Fifty-Seven',
            type: 'Academic Monograph',
            authorOrAttribution: 'Surendra Nath Sen (Ministry of Information & Broadcasting)',
            periodOrPublication: '1957 Official Centenary Edition',
            citationSnippet: 'Detailed archival analysis of military telegraphs, cantonment mutinies, and civilian uprising.'
          }
        ],
        tags: ['1857 Revolt', 'Independence', 'Rani Lakshmibai', 'Anti-Colonial']
      },
      {
        id: 'm5-independence-1947',
        eraId: 'era-5',
        title: 'Mass Freedom Movements to 15 August 1947 Independence',
        yearRange: '1915 CE – 1947 CE',
        region: {
          name: 'Pan-India (Sabarmati, Dandi, Red Fort Delhi)',
          modernState: 'Gujarat, Punjab, Bengal, New Delhi',
          coordinates: [28.65, 77.24],
        },
        shortSummary: 'Non-violent Satyagraha, revolutionary resistance, Subhas Bose’s INA, and the dawn of a sovereign republic.',
        detailedExplanation: 'Mahatma Gandhi mobilized millions through the Non-Cooperation Movement, the 1930 Salt Satyagraha, and the 1942 Quit India Movement. Alongside revolutionary martyrs like Bhagat Singh and the military push of Subhas Chandra Bose’s Indian National Army, colonial authority became untenable. At midnight on August 15, 1947, India gained Independence, followed by Dr. B.R. Ambedkar drafting the Indian Constitution.',
        causalImpact: 'Created the world’s largest constitutional democracy, establishing universal adult suffrage regardless of caste, gender, or wealth.',
        keyArtifactOrFeature: 'The Original Calligraphed Constitution of India illustrated by Nandalal Bose (1950).',
        sources: [
          {
            title: 'The Transfer of Power 1942–47 (Constitutional Relations Between Britain and India)',
            type: 'Primary Epigraphy',
            authorOrAttribution: 'Nicholas Mansergh & Penderel Moon (Her Majesty’s Stationery Office, London)',
            periodOrPublication: '12 Volumes, 1970–1983',
            citationSnippet: 'Cabinet Mission negotiations, Indian Independence Act 1947, and transfer documents.'
          },
          {
            title: 'India After Gandhi: The History of the World’s Largest Democracy',
            type: 'Academic Monograph',
            authorOrAttribution: 'Ramachandra Guha (HarperCollins)',
            periodOrPublication: '2007',
            citationSnippet: 'The political birth of the Indian Union and the integration of 565 princely states by Sardar Patel.'
          }
        ],
        tags: ['Independence', 'Gandhi', 'Ambedkar', 'Constitution', '1947']
      }
    ]
  }
];

export const PRIMARY_HERITAGE_SITE: HeritageSite = {
  id: 'heritage-ellora',
  name: 'The Kailash Rock-Cut Monolith at Ellora',
  district: 'Chhatrapati Sambhajinagar (Aurangabad)',
  modernState: 'Maharashtra',
  eraId: 'era-4',
  historicalPeriod: 'Rashtrakuta Dynasty (8th Century CE, c. 756–774 CE)',
  unescoDesignationYear: 1983,
  description:
    'Carved from top to bottom out of a single volcanic basalt mountain cliff without joining a single piece of mortar, Cave 16 (Kailash) at Ellora is celebrated globally as the undisputed pinnacle of monolithic rock-cut architecture.',
  architecturalStyle: 'Dravidian Monolithic Rock-Cut Vimana & Mandapa',
  keyHighlights: [
    'Over 200,000 tons of solid trap basalt excavated by master sculptors using only chisels, hammers, and pickaxes.',
    'Unique Top-Down Excavation: Sculptors started at the peak of the mountain and carved downward, eliminating the need for scaffolding.',
    'Coexistence of 34 multi-faith caves along a 2-kilometer cliff: Buddhist (Caves 1–12), Hindu (Caves 13–29), and Jain (Caves 30–34).',
    'Intricate multi-story galleries, life-size stone elephant sentinels, and the monumental Ravana shaking Mount Kailash relief.'
  ],
  historicalContext:
    'Under Rashtrakuta King Krishna I (reigned c. 756–774 CE), the empire achieved artistic sovereignty over the Deccan plateau. Seeking to recreate Shiva and Parvati’s mythical Himalayan abode on Deccan soil, Krishna I commanded architects to sculpt an entire temple complex—complete with shikhara, pillared assembly hall, Nandi pavilion, and perimeter cloisters—directly from the bedrock.',
  archaeologicalFindings: [
    'Traces of original white plaster coatings meant to mimic the snowy peaks of Mount Kailash.',
    'Sophisticated drainage gutters channeled through basalt cliffs to prevent monsoon water logging.',
    'Pencil-sharp chisel marks indicating three shifts of stonemasons working with mineral-hardened iron chisels.'
  ],
  conservationBody: 'Archaeological Survey of India (ASI, Chhatrapati Sambhajinagar Circle)',
  primarySources: [
    {
      title: 'Baroda Copper Plate Epigraph of King Karka II (812 CE)',
      type: 'Primary Epigraphy',
      authorOrAttribution: 'Rashtrakuta Royal Court / Epigraphia Indica Vol. XII',
      periodOrPublication: 'Saka Year 734 (812 CE)',
      citationSnippet: 'Recounts: "Seeing this wonder, even celestial beings riding in aerial cars were struck with awe, thinking this temple must have been made by the divine architect himself."'
    },
    {
      title: 'ASI World Heritage Guide: Ellora',
      type: 'Archaeological Report',
      authorOrAttribution: 'Archaeological Survey of India, Ministry of Culture, Govt. of India',
      periodOrPublication: 'ASI Comprehensive Site Series, 2011',
      citationSnippet: 'Metric survey establishing dimensions: 32 meters high, 46 meters deep, and 30 meters wide.'
    }
  ],
  coordinates: [20.02, 75.18],
  visitingSignificance:
    'Located just 30 km from Chhatrapati Sambhajinagar city. It serves as a living testimony to how ancient Indian engineers mastered mathematics, geology, and spiritual art without modern machinery.'
};

export const ADDITIONAL_HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'heritage-dholavira',
    name: 'Dholavira: Ancient Water Engineering Metropolis',
    district: 'Kutch',
    modernState: 'Gujarat',
    eraId: 'era-1',
    historicalPeriod: 'Harappan Civilization (c. 2500 BCE – 1800 BCE)',
    unescoDesignationYear: 2021,
    description: 'The premier Harappan city of western India, featuring giant stone-cut reservoirs and the world’s oldest known multi-symbol sign board.',
    architecturalStyle: 'Tripartite Fortified Stone & Mud-Brick Citadel',
    keyHighlights: [
      '16 interconnected rock-cut and masonry reservoirs holding 250,000 m³ of monsoon runoff.',
      'Tripartite layout: Citadel, Middle Town, and Lower Town enclosed by sandstone walls.',
      'Inlaid white gypsum 10-character signboard discovered at the north gateway.'
    ],
    historicalContext: 'Flourished on Khadir Bet in the Rann of Kutch as a strategic maritime manufacturing and customs checkpoint between Sindh and the Gujarat peninsula.',
    archaeologicalFindings: ['Lapis lazuli ornaments, copper workshops, polished stone pillars, and standardized steatite weights.'],
    conservationBody: 'Archaeological Survey of India (Vadodara Circle)',
    primarySources: [
      {
        title: 'Excavations at Dholavira (1989–2005)',
        type: 'Archaeological Report',
        authorOrAttribution: 'Dr. R. S. Bisht, Joint Director General, ASI',
        periodOrPublication: '2015, ASI New Delhi',
        citationSnippet: 'Comprehensive architectural catalog of rainwater harvesting reservoirs.'
      }
    ],
    coordinates: [23.88, 70.21],
    visitingSignificance: 'Showcases that climate adaptation and civic water storage were perfected in India over 4,500 years ago.'
  },
  {
    id: 'heritage-nalanda',
    name: 'Nalanda Mahavihara: The First Residential University',
    district: 'Nalanda (near Rajgir)',
    modernState: 'Bihar',
    eraId: 'era-3',
    historicalPeriod: 'Gupta to Pala Dynasties (5th to 12th Century CE)',
    unescoDesignationYear: 2016,
    description: 'The ancient world’s greatest residential university, housing over 10,000 scholars and 2,000 teachers from across Asia.',
    architecturalStyle: 'Buddhist Monastic Vihara & Stupa Architecture',
    keyHighlights: [
      'Monumental Sariputra Stupa with stepped votive stupas and stucco Buddha figures.',
      'Nine-story library complex known as Dharmaganja containing hundreds of thousands of palm-leaf manuscripts.',
      'International campus attracting pilgrims from China (Xuanzang, Yijing), Korea, Tibet, and Indonesia.'
    ],
    historicalContext: 'Founded by Gupta Emperor Kumaragupta I in the 5th century CE and patronized by Emperor Harsha and the Pala kings for over 700 years.',
    archaeologicalFindings: ['Monastic dormitories with individual stone beds, private meditation niches, communal kitchens, and bronze Buddha idols.'],
    conservationBody: 'Archaeological Survey of India (Patna Circle)',
    primarySources: [
      {
        title: 'The Great Tang Records on the Western Regions (Datang Xiyu Ji)',
        type: 'Travelogue',
        authorOrAttribution: 'Xuanzang (Hiuen Tsang), 646 CE',
        periodOrPublication: 'Translated by Samuel Beal (1884)',
        citationSnippet: 'Vivid descriptions of intellectual admission exams at the gates of Nalanda and daily debate curricula.'
      }
    ],
    coordinates: [25.13, 85.44],
    visitingSignificance: 'The historic epicentre of Pan-Asian Buddhist philosophy, logic (Nyaya), astronomy, and medicine.'
  },
  {
    id: 'heritage-hampi',
    name: 'Group of Monuments at Hampi (Vijayanagara)',
    district: 'Vijayanagara (Bellary)',
    modernState: 'Karnataka',
    eraId: 'era-4',
    historicalPeriod: 'Vijayanagara Empire (14th to 16th Century CE)',
    unescoDesignationYear: 1986,
    description: 'The monumental stone capital of the Vijayanagara Empire set amidst a surreal landscape of giant granite boulders.',
    architecturalStyle: 'Dravidian Imperial Vijayanagara Style',
    keyHighlights: [
      'The iconic Stone Chariot in the Vittala Temple complex, dedicated to Garuda.',
      '56 Musical Pillars (SaReGaMa pillars) tuned to resonant acoustic frequencies.',
      'The Lotus Mahal, Queen’s Bath, and colossal monolithic Ugra Narasimha statue.'
    ],
    historicalContext: 'Capital of Emperor Krishnadevaraya’s realm which commanded South India’s commerce in precious gems, spices, and Arabian horses.',
    archaeologicalFindings: ['Gold coins (Varahas), subterranean irrigation aqueducts, and international trade mints.'],
    conservationBody: 'Archaeological Survey of India (Hampi Mini Circle)',
    primarySources: [
      {
        title: 'Chronicles of Fernao Nuniz and Domingo Paes',
        type: 'Travelogue',
        authorOrAttribution: 'Portuguese merchants to Vijayanagara, c. 1520',
        periodOrPublication: 'Translated by Robert Sewell (1900)',
        citationSnippet: 'Detailed description of the bustling street bazaars selling rubies, diamonds, pearls, and damask silks.'
      }
    ],
    coordinates: [15.33, 76.46],
    visitingSignificance: 'A majestic outdoor open-air museum preserving the artistic and economic pinnacle of medieval southern India.'
  }
];

export const MAP_LOCATIONS: MapLocation[] = [
  // Era 1
  {
    id: 'loc-harappa',
    name: 'Harappa',
    ancientName: 'Hariyupiya',
    eraId: 'era-1',
    lat: 30.62,
    lng: 72.86,
    state: 'Punjab (Historical Indus Basin)',
    significance: 'Type-site of the civilization, famous for its granaries, cemetery H, and standardized baked bricks.',
    keyExcavation: 'R. B. Daya Ram Sahni (1921), Sir Mortimer Wheeler (1946)',
    primarySource: 'ASI Excavation Memoirs Vol. 1'
  },
  {
    id: 'loc-mohenjodaro',
    name: 'Mohenjo-daro',
    ancientName: 'Mound of the Dead',
    eraId: 'era-1',
    lat: 27.32,
    lng: 68.13,
    state: 'Sindh (Indus Valley)',
    significance: 'Metropolitan center with Great Bath, College of Priests, and complex sewer drains.',
    keyExcavation: 'R. D. Banerji (1922), Sir John Marshall (1924)',
    primarySource: 'Marshall, Mohenjo-daro (1931)'
  },
  {
    id: 'loc-lothal',
    name: 'Lothal',
    ancientName: 'Lothal Port',
    eraId: 'era-1',
    lat: 22.52,
    lng: 72.24,
    state: 'Gujarat',
    significance: 'Earliest known tidal dockyard connected to the Sabarmati and Gulf of Khambhat.',
    keyExcavation: 'S. R. Rao (1955–1960)',
    primarySource: 'ASI Memoir No. 78'
  },
  {
    id: 'loc-dholavira',
    name: 'Dholavira',
    ancientName: 'Kotada Timba',
    eraId: 'era-1',
    lat: 23.88,
    lng: 70.21,
    state: 'Gujarat',
    significance: '16 massive stone rainwater reservoirs, gypsum signboard, and tripartite fortifications.',
    keyExcavation: 'J. P. Joshi (1967), R. S. Bisht (1990)',
    primarySource: 'UNESCO World Heritage Record 2021'
  },
  {
    id: 'loc-rakhigarhi',
    name: 'Rakhigarhi',
    ancientName: 'Drishadvati Settlement',
    eraId: 'era-1',
    lat: 29.28,
    lng: 76.11,
    state: 'Haryana',
    significance: 'Largest known Indus Valley settlement covering over 350 hectares with DNA ancient lineage findings.',
    keyExcavation: 'Amarendra Nath (1997–2000), Vasant Shinde (2015)',
    primarySource: 'Cell DNA Study (Narasimhan & Shinde 2019)'
  },

  // Era 2
  {
    id: 'loc-hastinapur',
    name: 'Hastinapura',
    ancientName: 'Hastinapura',
    eraId: 'era-2',
    lat: 28.98,
    lng: 77.70,
    state: 'Uttar Pradesh',
    significance: 'Kuru kingdom capital; stratified Painted Grey Ware (PGW) confirming Iron Age transitions.',
    keyExcavation: 'B. B. Lal (1950–1952)',
    primarySource: 'Ancient India Journal Nos. 10 & 11'
  },
  {
    id: 'loc-varanasi',
    name: 'Varanasi',
    ancientName: 'Kashi',
    eraId: 'era-2',
    lat: 25.31,
    lng: 82.97,
    state: 'Uttar Pradesh',
    significance: 'Continuously inhabited spiritual and philosophical capital on the sacred bend of the Ganga.',
    keyExcavation: 'Rajghat Excavations (A. K. Narain)',
    primarySource: 'Atharvaveda & Early Buddhist Suttas'
  },
  {
    id: 'loc-rajgir',
    name: 'Rajgir',
    ancientName: 'Rajagriha / Girivraja',
    eraId: 'era-2',
    lat: 25.02,
    lng: 85.42,
    state: 'Bihar',
    significance: 'First capital of Magadha ringed by five hills; venue of the First Buddhist Council (483 BCE).',
    keyExcavation: 'ASI Archaeological Survey (Cunningham & Marshall)',
    primarySource: 'Mahavamsa & Pali Vinaya Pitaka'
  },
  {
    id: 'loc-vaishali',
    name: 'Vaishali',
    ancientName: 'Vesali',
    eraId: 'era-2',
    lat: 25.99,
    lng: 85.12,
    state: 'Bihar',
    significance: 'Capital of the Vajji Licchavi republic, world’s first recorded democracy assembly.',
    keyExcavation: 'K. P. Jayaswal Research Institute',
    primarySource: 'Digha Nikaya (Mahaparinibbana Sutta)'
  },

  // Era 3
  {
    id: 'loc-pataliputra',
    name: 'Pataliputra',
    ancientName: 'Kusumapura / Patna',
    eraId: 'era-3',
    lat: 25.61,
    lng: 85.13,
    state: 'Bihar',
    significance: 'Grand imperial metropolis of both the Mauryan and Gupta Empires with wooden fortifications.',
    keyExcavation: 'Kumrahar & Bulandi Bagh (P. C. Mukherji & Spooner)',
    primarySource: 'Megasthenes Indika & Fa-Hien Records'
  },
  {
    id: 'loc-sanchi',
    name: 'Sanchi Stupa',
    ancientName: 'Kakanaya',
    eraId: 'era-3',
    lat: 23.48,
    lng: 77.74,
    state: 'Madhya Pradesh',
    significance: 'Ashokan Great Stupa with carved torana gateways depicting Jataka tales.',
    keyExcavation: 'Sir John Marshall (1912–1919)',
    primarySource: 'Ashokan Minor Pillar Edicts'
  },
  {
    id: 'loc-ujjain',
    name: 'Ujjain',
    ancientName: 'Ujjayini / Avanti',
    eraId: 'era-3',
    lat: 23.18,
    lng: 75.77,
    state: 'Madhya Pradesh',
    significance: 'Prime meridian of ancient Indian astronomy and royal capital of Chandragupta II Vikramaditya.',
    keyExcavation: 'Vikram University & ASI',
    primarySource: 'Surya Siddhanta & Kalidasa’s Meghaduta'
  },
  {
    id: 'loc-nalanda-site',
    name: 'Nalanda',
    ancientName: 'Nalanda Mahavihara',
    eraId: 'era-3',
    lat: 25.13,
    lng: 85.44,
    state: 'Bihar',
    significance: 'Premier ancient Buddhist monastic university founded by Kumaragupta I.',
    keyExcavation: 'Spooner, Page & Ghosh (1915–1937)',
    primarySource: 'Xuanzang’s Si-Yu-Ki & Copper Plate Inscriptions'
  },

  // Era 4
  {
    id: 'loc-ellora-site',
    name: 'Ellora Caves',
    ancientName: 'Verul / Charanandri',
    eraId: 'era-4',
    lat: 20.02,
    lng: 75.18,
    state: 'Maharashtra',
    significance: 'Cave 16 monolithic Kailash Temple carved top-down from living basalt rock.',
    keyExcavation: 'ASI Chhatrapati Sambhajinagar Circle',
    primarySource: 'Baroda Copper Plate (812 CE)'
  },
  {
    id: 'loc-thanjavur',
    name: 'Thanjavur',
    ancientName: 'Tanjore',
    eraId: 'era-4',
    lat: 10.78,
    lng: 79.13,
    state: 'Tamil Nadu',
    significance: 'Imperial Chola capital; Brihadisvara Temple with single-granite 80-ton dome cupola.',
    keyExcavation: 'ASI Temple Survey Project',
    primarySource: 'Rajaraja Chola Inscriptions on Temple Plinth'
  },
  {
    id: 'loc-hampi-site',
    name: 'Hampi',
    ancientName: 'Vijayanagara / Pampa Kshetra',
    eraId: 'era-4',
    lat: 15.33,
    lng: 76.46,
    state: 'Karnataka',
    significance: 'Medieval trade metropolis with Stone Chariot, musical columns, and vast bazaar plazas.',
    keyExcavation: 'Vijayanagara Metropolitan Archaeological Project',
    primarySource: 'Domingo Paes & Abdur Razzaq Travelogues'
  },

  // Era 5
  {
    id: 'loc-agra',
    name: 'Agra',
    ancientName: 'Akbarabad',
    eraId: 'era-5',
    lat: 27.17,
    lng: 78.04,
    state: 'Uttar Pradesh',
    significance: 'Mughal imperial court, Taj Mahal, Agra Fort, and nearby Fatehpur Sikri.',
    keyExcavation: 'ASI Northern Circle',
    primarySource: 'Ain-i-Akbari & Tuzuk-i-Jahangiri'
  },
  {
    id: 'loc-raigad',
    name: 'Raigad Fort',
    ancientName: 'Rairi',
    eraId: 'era-5',
    lat: 18.23,
    lng: 73.44,
    state: 'Maharashtra',
    significance: 'Capital of Chhatrapati Shivaji Maharaj’s Maratha Empire; site of royal coronation in 1674.',
    keyExcavation: 'Maharashtra State Archaeology & ASI',
    primarySource: 'Sabhasad Bakhar (1697)'
  },
  {
    id: 'loc-delhi-redfort',
    name: 'Delhi (Red Fort)',
    ancientName: 'Shahjahanabad / Indraprastha',
    eraId: 'era-5',
    lat: 28.65,
    lng: 77.24,
    state: 'Delhi NCR',
    significance: 'Epicenter of Mughal rule, 1857 resistance, and Prime Minister’s Independence Day address.',
    keyExcavation: 'ASI Delhi Circle',
    primarySource: 'Constituent Assembly of India Debates 1947'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    eraId: 'era-1',
    question: 'Why did the mature Indus Valley cities (e.g. Harappa and Mohenjo-daro) gradually decline around 1900–1800 BCE?',
    options: [
      'Violent invasion by armed armies using siege equipment',
      'Desiccation of river systems (Ghaggar-Hakra) and monsoon drying shifting populations eastward',
      'A volcanic eruption that buried the entire Indus river basin in ash',
      'Exhaustion of all iron mines in the subcontinent'
    ],
    correctIndex: 1,
    explanation: 'Hydro-climatic evidence shows shifting monsoon patterns and the weakening of the Sarasvati/Ghaggar-Hakra river system starved urban centers of water, prompting migration into the Gangetic plains.'
  },
  {
    id: 'q2',
    eraId: 'era-2',
    question: 'Which technological advancement was central to clearing the dense Gangetic forests and sparking the "Second Urbanization"?',
    options: [
      'Invention of gunpowder rock blasting',
      'Widespread iron smelting and iron axes/ploughshares (c. 1000 BCE)',
      'Steam-powered logging equipment',
      'Import of bronze saws from Egypt'
    ],
    correctIndex: 1,
    explanation: 'Iron metallurgy allowed settlers to chop through the dense monsoon sal forests of the middle Gangetic basin, producing agricultural surpluses that supported standing armies and town guilds.'
  },
  {
    id: 'q3',
    eraId: 'era-3',
    question: 'Following which catastrophic war did Emperor Ashoka renounce aggressive warfare (Bherighosha) in favor of moral conquest (Dhammaghosha)?',
    options: [
      'Battle of the Ten Kings (Dasharajna)',
      'The Kalinga War (recorded in Major Rock Edict XIII)',
      'Battle of Hydaspes against Alexander',
      'First Battle of Panipat'
    ],
    correctIndex: 1,
    explanation: 'Ashoka’s remorse over the 100,000 casualties in the Kalinga War led him to adopt Buddhism and carve his welfare edicts on stone across South Asia.'
  },
  {
    id: 'q4',
    eraId: 'era-4',
    question: 'What makes Cave 16 (Kailash Temple) at Ellora in Maharashtra an unparalleled feat of world engineering?',
    options: [
      'It was built by hoisting 50,000 imported white marble blocks',
      'It was excavated top-down from a single monolithic basalt mountain without joints or mortar',
      'It was constructed underwater in the Godavari river basin',
      'It was the world’s first steel-reinforced skyscraper'
    ],
    correctIndex: 1,
    explanation: 'Commissioned by Rashtrakuta King Krishna I, stonemasons removed 200,000 tons of solid volcanic basalt from the top of the cliff downward, creating an entire multi-story Dravidian temple from one single rock.'
  },
  {
    id: 'q5',
    eraId: 'era-5',
    question: 'How did British colonial policies unintentionally foster a unified pan-Indian anti-colonial national movement?',
    options: [
      'By banning all forms of trade across provincial borders',
      'By introducing railway networks, postal telegraphs, and a centralized legal system that physically and politically connected disparate regions',
      'By disbanding the army and leaving all borders open',
      'By restoring the ancient 16 Mahajanapadas'
    ],
    correctIndex: 1,
    explanation: 'While intended for resource extraction, colonial infrastructure (railways, postal lines, printing presses, English legal education) connected leaders from Bengal, Maharashtra, Punjab, and Madras, enabling a coordinated national freedom struggle.'
  }
];
