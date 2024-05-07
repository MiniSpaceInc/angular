import { Post } from "../../model/Post";
import {ReactionType} from "../../model/Reactions";

export const mockPosts: Post[] = [
  {
    id: 1,
    uuid: '1',
    author: 'Bartosz Olszewski',
    date: '2024-04-10',
    content: 'Join us at CodeCamp for a weekend of coding, networking, and learning! Dive into the latest technologies, connect with fellow developers, and enhance your skills in a fun and collaborative environment. Whether you are a beginner or an experienced coder, CodeCamp has something for everyone. Don\'t miss out on this exciting opportunity to level up your coding game!',
    reactionsList: [
      {
        type: ReactionType.LOVE,
        count: 4
      },
      {
        type: ReactionType.HAHA,
        count: 12
      },
      {
        type: ReactionType.WOW,
        count: 1
      }
    ]
  },
  {
    id: 2,
    uuid: '2',
    author: 'Maciej Pluta',
    date: '2024-04-15',
    content: 'Calling all designers and creatives! Join us at DesignFest for a day of inspiration, innovation, and collaboration. Immerse yourself in interactive workshops, engage with industry experts, and showcase your talent in a vibrant and supportive community. Whether you are a seasoned designer or just starting out, DesignFest is the perfect place to explore new ideas, refine your skills, and connect with like-minded individuals. Get ready to unleash your creativity and take your design skills to the next level!',
    reactionsList: [
      {
        type: ReactionType.HAHA,
        count: 19
      }
    ]
  },
  {
    id: 3,
    uuid: '3',
    author: 'Sebastian Prokop',
    date: '2024-04-20',
    content: 'Attention all hackers, coders, and tech enthusiasts! HackFest is back and better than ever. Join us for a weekend of coding challenges, innovation, and camaraderie as we push the boundaries of technology and creativity. Whether you are a seasoned hacker or a first-time participant, HackFest offers something for everyone. Collaborate with fellow hackers, learn from industry experts, and compete for exciting prizes in a high-energy and supportive environment. Get ready to hack, learn, and connect at HackFest!',
    reactionsList: [
      {
        type: ReactionType.LOVE,
        count: 4
      },
      {
        type: ReactionType.HAHA,
        count: 20
      }
    ]
  },
  {
    id: 4,
    uuid: '4',
    author: 'Adrian Rudź',
    date: '2024-04-25',
    content: 'Experience the future of technology at FutureCon! Join us for a day of insightful talks, interactive demos, and networking opportunities with industry leaders and innovators. Whether you are a tech enthusiast, a developer, or a business professional, FutureCon has something for you. Explore the latest trends in AI, cybersecurity, blockchain, and more, and gain valuable insights to help you stay ahead in the fast-paced world of technology. Don\'t miss this opportunity to connect, learn, and be inspired at FutureCon!',
    reactionsList: [
      {
        type: ReactionType.LOVE,
        count: 12
      },
      {
        type: ReactionType.HAHA,
        count: 6
      },
      {
        type: ReactionType.WOW,
        count: 2
      }
    ]
  },
  {
    id: 5,
    uuid: '5',
    author: 'Piotr Rowicki',
    date: '2024-05-01',
    content: 'Join us at CraftFair for a celebration of creativity, craftsmanship, and community. Discover unique handmade goods, meet talented artisans, and immerse yourself in a world of artistry and tradition. Whether you are a maker, a collector, or simply appreciate the beauty of handmade crafts, CraftFair offers a diverse and vibrant marketplace where you can find one-of-a-kind treasures and connect with the artisans who create them. Come experience the magic of CraftFair and support the handmade movement!',
    reactionsList: [
      {
        type: ReactionType.LOVE,
        count: 59
      }
    ]
  },
];
