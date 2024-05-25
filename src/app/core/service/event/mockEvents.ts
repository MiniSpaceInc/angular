import {Event} from "../../model/Event";
import {organizingUnitsMock} from "../organizing-unit/organizingUnitsMock";

export const mockEvents: Event[] = [
  {
    id: 1,
    uuid: '155bbe547-0b8c-4576-ae92-38e11e63fa7a',
    name: 'CodeCrunch: The Tech Symposium',
    organizingUnit: organizingUnitsMock[0],
    date: '2024-04-10',
    description: 'Embark on a journey of innovation and exploration at CodeCrunch! Join us for an electrifying symposium featuring cutting-edge tech talks, mind-bending coding challenges, and networking opportunities that will supercharge your creativity.',
    participantCount: 5,
    userRegistered: true
  },
  {
    id: 2,
    uuid: 'e7bd8e31-0abe-4b47-85ed-6b91a40da45f',
    name: 'PixelFest: Designers Unite',
    organizingUnit: organizingUnitsMock[1],
    date: '2024-04-15',
    description: 'Dive into the world of pixels and design at PixelFest! Immerse yourself in captivating workshops, awe-inspiring design showcases, and collaborative projects that will ignite your passion for creativity and push the boundaries of digital art.',
    participantCount: 15,
    userRegistered: false
  },
  {
    id: 3,
    uuid: '39f53b21-3db6-437e-9fa5-bee68cd63d30',
    name: 'InnoHack: Hackathon Extravaganza',
    organizingUnit: organizingUnitsMock[2],
    date: '2024-04-20',
    description: 'Unleash your inner hacker at InnoHack! Join forces with fellow wizards to tackle real-world challenges, build groundbreaking solutions, and compete for epic prizes in a high-energy hackathon experience like no other.',
    participantCount: 15,
    userRegistered: false
  },
  {
    id: 4,
    uuid: 'fcb70abc-cfc6-45c8-87ed-7104bf43f16f',
    name: 'AetherCon: The Virtual Reality Summit',
    organizingUnit: organizingUnitsMock[3],
    date: '2024-04-25',
    description: 'Step into the realm of virtual reality at AetherCon! Immerse yourself in mind-bending demos, visionary keynote speeches, and interactive VR experiences that will redefine the way you perceive reality.',
    participantCount: 15,
    userRegistered: false
  },
  {
    id: 5,
    uuid: '42c63bdf-b334-44bf-b08c-66158042cf53',
    name: 'ArtisanCraft: The Handmade Expo',
    organizingUnit: organizingUnitsMock[4],
    date: '2024-05-01',
    description: 'Celebrate the art of craftsmanship at ArtisanCraft! Discover exquisite handmade creations, learn from master artisans, and indulge your senses in a vibrant marketplace brimming with unique treasures and timeless traditions.',
    participantCount: 15,
    userRegistered: false
  },
  {
    id: 6,
    uuid: 'd663150b-325f-439a-b08f-3a75ef6bbce5',
    name: 'MindMeld: The AI Symposium',
    organizingUnit: organizingUnitsMock[4],
    date: '2024-05-05',
    description: 'Explore the frontiers of artificial intelligence at MindMeld! Engage with AI experts, witness groundbreaking demos, and delve into thought-provoking discussions that will unravel the mysteries and possibilities of AI-driven innovation.',
    participantCount: 15,
    userRegistered: false
  }
];
