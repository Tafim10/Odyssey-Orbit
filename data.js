window.ODYSSEY_DATA = {
  githubUrl: 'https://github.com/',
  challengeUrl: 'https://www.spaceappschallenge.org/2026/',
  nasaScienceUrl: 'https://science.nasa.gov/',
  nasaLibraryUrl: 'https://images.nasa.gov/',
  subjects: [
    { key: 'astrophysics', label: 'ASTROPHYSICS', desc: 'Gravity, light, radiation, energy, orbits, and the physical rules shaping the journey.', icon: '✦' },
    { key: 'planets', label: 'PLANETS & MOONS', desc: 'The worlds themselves — terrain, geology, atmospheres, craters, soil, and change.', icon: '◐' },
    { key: 'exploration', label: 'SPACE EXPLORATION', desc: 'The human engineering behind launch, landing, mobility, power, instruments, and communication.', icon: '↗' }
  ],
  worlds: {
    moon: {
      key: 'moon', label: 'THE MOON', eyebrow: 'A WORLD CLOSE ENOUGH TO REACH', sub: 'Two machines. One question: could we learn to arrive — and learn to see?', accent: 'lunar',
      equipment: ['surveyor1', 'orbiter1']
    },
    mars: {
      key: 'mars', label: 'MARS', eyebrow: 'A WORLD THAT KEPT ITS SECRETS', sub: 'Four machines. A longer question: could we land, move, measure, and understand?', accent: 'martian',
      equipment: ['viking1', 'sojourner', 'spirit', 'opportunity']
    }
  },
  missions: {
    surveyor1: {
      id: 'surveyor1', world: 'moon', number: '01', name: 'Surveyor 1', type: 'Lunar lander', date: '1966', tagline: 'CAN WE LAND?', intro: 'Before people could walk safely on the Moon, something had to prove the Moon could receive them.',
      nasaUrl: 'https://science.nasa.gov/mission/surveyor-1/',
      imageQuery: 'Surveyor 1 moon NASA',
      subjects: ['exploration','planets','astrophysics'],
      chapters: [
        { title: 'I WAS BUILT TO LAND', kicker: 'WHO AM I?', story: 'I was Surveyor 1 — a machine built to make a difficult idea practical. I was not sent to carry a crew. I was sent to find out whether a machine could touch the Moon without destroying itself.', subject: 'exploration', imageQuery: 'Surveyor 1 spacecraft NASA', evidence: ['First true U.S. soft lunar landing', 'Oceanus Procellarum', 'Lunar surface engineering test'] },
        { title: 'FALLING TOWARD ANOTHER WORLD', kicker: 'WHY WAS I SENT?', story: 'The Moon was never simply a place on a map. To reach it, I had to trade one motion for another — leaving Earth, approaching the Moon, and slowing down at exactly the right time.', subject: 'astrophysics', imageQuery: 'Surveyor 1 approach Moon NASA', evidence: ['Translunar trajectory', 'Lunar gravity', 'Controlled descent'] },
        { title: 'I TOUCHED THE MOON', kicker: 'THE MOMENT', story: 'June 2, 1966. My landing changed the question from “Can we reach the Moon?” to “What is it really like to stand there?” I had arrived on Oceanus Procellarum.', subject: 'planets', imageQuery: 'Surveyor 1 lunar surface shadow NASA', evidence: ['First true soft landing', 'Oceanus Procellarum', 'Surface photographs'] },
        { title: 'I STARTED READING THE SURFACE', kicker: 'WHAT DID I FIND?', story: 'I looked, measured, and listened to the ground beneath me. My cameras returned thousands of images, while instruments gathered information about soil strength, reflectivity, and temperature.', subject: 'planets', imageQuery: 'Surveyor 1 lunar surface NASA', evidence: ['11,240 high-resolution images', 'Soil bearing strength', 'Radar reflectivity and temperature'] },
        { title: 'WHEN THE SUNLIGHT DISAPPEARED', kicker: 'WHAT HAPPENED TO ME?', story: 'The Moon does not offer a gentle night. Darkness meant a radically different thermal and power environment. Surviving the lunar cycle was part of the exploration problem.', subject: 'astrophysics', imageQuery: 'Surveyor 1 Moon sunset NASA', evidence: ['Extreme lunar thermal cycle', 'Power conservation', 'Long mission contact'] },
        { title: 'I LEFT A PATH FOR THE NEXT STEP', kicker: 'WHAT DID I LEAVE BEHIND?', story: 'I never carried an astronaut. I did something earlier and quieter: I helped turn a dangerous unknown into measured evidence. Decades later, spacecraft could still see where I had landed.', subject: 'exploration', imageQuery: 'Surveyor 1 lunar reconnaissance orbiter NASA', evidence: ['Modern orbital imaging of landing site', 'Legacy for crewed lunar exploration', 'Evidence preserved in NASA archives'] }
      ]
    },
    orbiter1: {
      id: 'orbiter1', world: 'moon', number: '02', name: 'Lunar Orbiter 1', type: 'Lunar orbiter', date: '1966', tagline: 'CAN WE SEE?', intro: 'I was not sent to touch the Moon. I was sent to see it — and to find places where future explorers could land.',
      nasaUrl: 'https://science.nasa.gov/mission/lunar-orbiter-1/',
      imageQuery: 'Lunar Orbiter 1 Earthrise NASA',
      subjects: ['astrophysics','planets','exploration'],
      chapters: [
        { title: 'I WAS BUILT TO LOOK', kicker: 'WHO AM I?', story: 'I was Lunar Orbiter 1. While Surveyor tried to land, I was asked a different question: can we map enough of another world to choose where humans should go?', subject: 'exploration', imageQuery: 'Lunar Orbiter 1 spacecraft NASA', evidence: ['First U.S. spacecraft to orbit the Moon', 'Designed to photograph potential landing sites', '205 photographic frames'] },
        { title: 'I ENTERED LUNAR ORBIT', kicker: 'THE JOURNEY', story: 'To see the Moon from above, I first had to become a companion of the Moon itself. Orbital mechanics turned a high-speed arrival into a path that could repeatedly pass over the surface.', subject: 'astrophysics', imageQuery: 'Lunar Orbiter 1 Moon orbit NASA', evidence: ['Lunar orbit insertion', 'Orbital geometry', 'Remote sensing from orbit'] },
        { title: 'I BEGAN TO MAP ANOTHER WORLD', kicker: 'THE VIEW', story: 'From above, craters became patterns and shadows became clues. My images were not souvenirs; they were reconnaissance for future landing decisions.', subject: 'planets', imageQuery: 'Lunar Orbiter 1 lunar crater NASA', evidence: ['Apollo landing-site reconnaissance', 'Lunar terrain imaging', 'High-resolution photography'] },
        { title: 'THEN I SAW EARTH', kicker: 'THE UNEXPECTED IMAGE', story: 'I was searching outward when the most human image of my mission appeared: Earth, seen from the vicinity of the Moon. A small world framed by another world.', subject: 'astrophysics', imageQuery: 'Lunar Orbiter 1 Earthrise NASA', evidence: ['First photograph of Earth from lunar orbit', 'August 23, 1966', 'Image later restored by NASA'] },
        { title: '205 FRAMES. MILLIONS OF SQUARE MILES.', kicker: 'WHAT DID I LEAVE BEHIND?', story: 'Every frame expanded the map. Every image reduced uncertainty about a future landing place. My value was not in staying forever; it was in making the unknown measurable.', subject: 'exploration', imageQuery: 'Lunar Orbiter 1 lunar mapping NASA', evidence: ['205 frames', 'Landing-site reconnaissance', 'Lunar mapping archive'] },
        { title: 'THE MOON BECAME MY FINAL DESTINATION', kicker: 'HOW IT ENDED', story: 'After the imaging work was complete, I was deliberately sent into the Moon. I came to photograph another world. In the end, that world became my final resting place.', subject: 'exploration', imageQuery: 'Lunar Orbiter 1 Moon NASA', evidence: ['Mission ended by planned lunar impact', 'October 29, 1966', 'Archived as part of lunar exploration history'] }
      ]
    },
    viking1: {
      id: 'viking1', world: 'mars', number: '03', name: 'Viking 1', type: 'Lander + orbiter', date: '1976', tagline: 'COULD LIFE HAVE BEEN HERE?', intro: 'Mars had been a distant mystery. I was built to stand on its surface and ask one of the biggest questions in planetary exploration.',
      nasaUrl: 'https://science.nasa.gov/mission/viking-1/',
      imageQuery: 'Viking 1 Mars first photograph NASA',
      subjects: ['planets','astrophysics','exploration'],
      chapters: [
        { title: 'MARS WAS STILL A MYSTERY', kicker: 'WHO AM I?', story: 'I was Viking 1 — a mission that joined an orbiter and a lander so Mars could be studied from above and below. I was going farther than earlier machines had gone.', subject: 'exploration', imageQuery: 'Viking 1 spacecraft NASA', evidence: ['Launched August 20, 1975', 'Landed July 20, 1976', 'First truly successful Mars landing'] },
        { title: 'I CROSSED THE DISTANCE', kicker: 'THE JOURNEY', story: 'The destination was not just far away. It was moving. So was I. Reaching Mars meant solving a chain of navigation, orbital, atmospheric, and landing problems across millions of kilometres.', subject: 'astrophysics', imageQuery: 'Viking 1 Mars approach NASA', evidence: ['Interplanetary navigation', 'Mars orbital insertion', 'Atmospheric entry and descent'] },
        { title: 'MY FIRST LOOK AT MARS', kicker: 'THE FIRST PHOTOGRAPH', story: 'July 20, 1976. The first picture from the surface arrived. Rocks, dust, a footpad — an ordinary-looking scene that was extraordinary because it was the first time humans could see Mars from a machine standing on Mars.', subject: 'planets', imageQuery: 'First Photograph Taken On Mars Surface Viking 1 NASA', evidence: ['PIA00381', 'First photograph taken on Mars surface', 'NASA/JPL'] },
        { title: 'I SEARCHED FOR EVIDENCE OF LIFE', kicker: 'THE BIG QUESTION', story: 'I carried experiments designed to investigate the Martian environment and search for evidence relevant to life. The important scientific act was not claiming an answer. It was designing experiments that could test a question.', subject: 'planets', imageQuery: 'Viking 1 Mars soil experiment NASA', evidence: ['Life-detection experiments', 'Atmospheric measurements', 'Martian soil analysis'] },
        { title: 'I WATCHED MARS CHANGE', kicker: 'A LIVING ATMOSPHERE', story: 'The Martian surface was still, but its atmosphere was not. Dust and atmospheric opacity changed with time, giving scientists another layer of evidence about a dynamic planetary environment.', subject: 'astrophysics', imageQuery: 'Viking 1 Mars panorama NASA', evidence: ['Atmospheric opacity observations', 'Mars panorama', 'Long-duration surface science'] },
        { title: 'MY QUESTIONS OUTLIVED MY SIGNAL', kicker: 'LEGACY', story: 'I could not answer every question about life on Mars. But I left behind a body of observations that changed what later missions could ask — and how they could ask it.', subject: 'exploration', imageQuery: 'Viking 1 Mars panorama NASA', evidence: ['Long-lived Mars data archive', 'Foundation for later Mars missions', 'NASA Viking legacy'] }
      ]
    },
    sojourner: {
      id: 'sojourner', world: 'mars', number: '04', name: 'Sojourner', type: 'Mars rover', date: '1997', tagline: 'CAN WE MOVE?', intro: 'I was small enough to fit the idea of a rover into a new generation of Mars exploration — and bold enough to leave the lander.',
      nasaUrl: 'https://science.nasa.gov/mission/mars-pathfinder/',
      imageQuery: 'Sojourner rover Mars NASA',
      subjects: ['exploration','planets','astrophysics'],
      chapters: [
        { title: 'I WAS SMALL — ON PURPOSE', kicker: 'WHO AM I?', story: 'I was Sojourner, the rover of Mars Pathfinder. My size was part of the experiment: could a small mobile machine operate on Mars and extend exploration beyond a stationary lander?', subject: 'exploration', imageQuery: 'Sojourner rover NASA', evidence: ['Mars Pathfinder rover', 'First successful rover mission on Mars', 'Mobile surface exploration'] },
        { title: 'I ARRIVED ON AIRBAGS', kicker: 'THE LANDING', story: 'Instead of a gentle touchdown on legs, my mission used a radically different landing concept: airbags. After the spacecraft came to rest, the lander and rover had to become a working exploration system.', subject: 'exploration', imageQuery: 'Sojourner airbags Mars Pathfinder NASA', evidence: ['Airbag landing system', 'Mars Pathfinder', 'Rover deployment sequence'] },
        { title: 'I LEFT THE LANDER', kicker: 'THE FIRST STEPS', story: 'Then I rolled. My wheels turned a static landing site into a place I could traverse. Terrain stopped being a backdrop and became something I could approach, measure, and navigate.', subject: 'planets', imageQuery: 'Sojourner terrain Mars NASA', evidence: ['Mars surface mobility', 'Terrain imaging', 'Rover operations'] },
        { title: 'I TOUCHED ROCKS TO LEARN THEIR CHEMISTRY', kicker: 'THE SCIENCE', story: 'One of my instruments, the Alpha Proton X-ray Spectrometer, helped determine elemental composition. A rock was no longer just a rock. It could become a measurement.', subject: 'astrophysics', imageQuery: 'Sojourner Yogi rock APXS NASA', evidence: ['APXS instrument', 'Yogi rock', 'Elemental composition measurements'] },
        { title: 'MY SEVEN-DAY MISSION KEPT GOING', kicker: 'ENDURANCE', story: 'The plan was brief. My work continued for 83 Martian days. The difference between a planned lifetime and an actual lifetime became part of the story.', subject: 'exploration', imageQuery: 'Sojourner rover Mars Pathfinder NASA', evidence: ['Planned: 7 days', 'Operated: 83 days', 'Final data transmission: September 27, 1997'] },
        { title: 'THEN MY SIGNAL WENT QUIET', kicker: 'ABANDONED — NOT FORGOTTEN', story: 'I stopped transmitting, but the method I helped prove did not stop. Small wheels, robotic mobility, and surface chemistry became part of the Mars exploration language used after me.', subject: 'exploration', imageQuery: 'Sojourner rover Mars NASA', evidence: ['Mission formally terminated in 1998', 'Legacy in Mars rover exploration', 'NASA Pathfinder archive'] }
      ]
    },
    spirit: {
      id: 'spirit', world: 'mars', number: '05', name: 'Spirit', type: 'Mars rover', date: '2004', tagline: 'WAS MARS ONCE WET?', intro: 'I was sent to Gusev Crater to look for clues that water had once shaped Mars — and I kept going long after my original mission plan.',
      nasaUrl: 'https://science.nasa.gov/mission/mer-spirit/',
      imageQuery: 'Spirit rover Mars McMurdo NASA',
      subjects: ['planets','astrophysics','exploration'],
      chapters: [
        { title: 'I WAS ONE HALF OF A QUESTION', kicker: 'WHO AM I?', story: 'I was Spirit, one of NASA’s Mars Exploration Rovers. My twin, Opportunity, explored another part of Mars. Together, we were built to investigate the planet’s watery past.', subject: 'exploration', imageQuery: 'Spirit Opportunity rover NASA', evidence: ['Mars Exploration Rover', 'Twin-rover mission', 'Objective: clues to ancient water'] },
        { title: 'I WENT TO GUSEV CRATER', kicker: 'THE WORLD', story: 'Gusev Crater was chosen because orbital evidence suggested an ancient lake may have existed there. I arrived looking at terrain through the lens of planetary history.', subject: 'planets', imageQuery: 'Spirit Gusev Crater Mars NASA', evidence: ['Gusev Crater', 'Ancient lake hypothesis', 'Orbital-to-surface science'] },
        { title: 'I LEARNED TO READ ROCKS WITH LIGHT', kicker: 'THE INSTRUMENTS', story: 'Cameras and spectrometers let me go beyond appearance. Infrared observations and elemental measurements turned rock surfaces into clues about the environment that made them.', subject: 'astrophysics', imageQuery: 'Spirit rover Mini-TES Mars NASA', evidence: ['Mini-TES infrared observations', 'APXS', 'Pancam'] },
        { title: 'MARS CARRIED EVIDENCE OF WATER', kicker: 'THE DISCOVERY', story: 'The rocks around me contained evidence consistent with a wetter ancient Mars. The scientific story was built from measurements, mineral clues, textures, and the geological context around them.', subject: 'planets', imageQuery: 'Spirit Mars rock water evidence NASA', evidence: ['Evidence of past water', 'Mineralogical observations', 'Geological context'] },
        { title: 'I GOT STUCK', kicker: 'WHEN EXPLORATION FOUGHT BACK', story: 'In 2009, soft soil trapped one of my wheels. Teams on Earth spent months trying to work out a route that did not exist beneath me. Exploration became problem-solving from millions of kilometres away.', subject: 'exploration', imageQuery: 'Spirit rover stuck Troy Mars NASA', evidence: ['Soft soil at Troy', 'Wheel failure', 'Remote recovery attempts'] },
        { title: 'MY LAST SIGNAL', kicker: 'THE END OF THE JOURNEY', story: 'Contact was lost in 2010. Recovery efforts continued until 2011. I stopped moving, but the evidence I collected about ancient Mars remained in the archive for the next explorer.', subject: 'exploration', imageQuery: 'Spirit rover McMurdo panorama NASA', evidence: ['Last contact March 22, 2010', 'Recovery ended May 25, 2011', '6+ years of surface science'] }
      ]
    },
    opportunity: {
      id: 'opportunity', world: 'mars', number: '06', name: 'Opportunity', type: 'Mars rover', date: '2004–2019', tagline: 'HOW LONG CAN WE KEEP GOING?', intro: 'I was built to follow evidence of water — and became a rover whose journey lasted nearly fifteen years.',
      nasaUrl: 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/',
      imageQuery: 'Opportunity rover dusty selfie NASA',
      subjects: ['exploration','planets','astrophysics'],
      chapters: [
        { title: 'I WAS SENT TO FOLLOW THE WATER', kicker: 'THE QUESTION', story: 'I was Opportunity, Spirit’s twin in a different part of Mars. My scientific goal was to investigate geology and search for evidence that liquid water had once shaped the planet.', subject: 'planets', imageQuery: 'Opportunity rover Mars NASA', evidence: ['Meridiani Planum', 'Ancient liquid-water evidence', 'Mars Exploration Rover mission'] },
        { title: 'I LANDED INSIDE EAGLE CRATER', kicker: 'THE ARRIVAL', story: 'On Mars, the landing site became the first chapter of the fieldwork. From Eagle Crater I began reading the rocks, the soil, and the terrain around me.', subject: 'planets', imageQuery: 'Opportunity Eagle Crater Mars NASA', evidence: ['Eagle Crater', 'Meridiani Planum', 'Surface geology'] },
        { title: 'THE ROCKS SPOKE OF WATER', kicker: 'THE EVIDENCE', story: 'Minerals and textures around my landing site preserved clues about water. Hematite-rich materials and later observations helped build a stronger picture of ancient watery environments on Mars.', subject: 'astrophysics', imageQuery: 'Opportunity hematite Mars NASA', evidence: ['Hematite evidence', 'Ancient watery environments', 'Mineral spectroscopy and imaging'] },
        { title: 'I KEPT DRIVING', kicker: 'THE JOURNEY', story: 'The route became part of the science. Each traverse added another piece of the geological story. My wheels carried me much farther than anyone had planned at the start.', subject: 'exploration', imageQuery: 'Opportunity rover route Mars NASA', evidence: ['45.16 km total drive distance', 'Long-duration surface exploration', 'Mars route mapping'] },
        { title: 'DUST COVERED MY SUN', kicker: 'SURVIVAL', story: 'My solar panels depended on sunlight. Dust reduced the energy available to operate, making the Martian atmosphere and weather part of the engineering story of every day.', subject: 'astrophysics', imageQuery: 'Dusty Mars rover selfie Opportunity NASA', evidence: ['Solar-powered rover', 'Dust accumulation', 'Planet-wide dust storm in 2018'] },
        { title: 'MY SIGNAL STOPPED. MY DISCOVERIES DID NOT.', kicker: 'LEGACY', story: 'A global dust storm eventually silenced me. NASA ended the mission in 2019. The machine remained on Mars, but the science became part of humanity’s growing archive of another world.', subject: 'exploration', imageQuery: 'Opportunity final mission NASA', evidence: ['Final communication June 10, 2018', 'Mission ended February 13, 2019', 'Nearly 15 years on Mars'] }
      ]
    }
  }
};
