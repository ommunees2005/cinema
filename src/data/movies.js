const movies = [
  {
    id: 1,
    title: "ANIMAL",
    year: 2023,
    rating: 8.8,
    poster: "animal.jpg",
    description:"Animal is a dark action drama about Ranvijay Singh and his troubled relationship with his father Balbir Singh, a rich industrialist and pretty much the most powerful man in the country. As a kid, Ranvijay always wanted his father's attention and validation, but its absence ended up turning him into a violent and rebellious youngster who resorted to violence and brute force to solve problems, much to the chagrin of Balbir, who disapproved of his methods and sent him to boarding school. After returning home as an adult, he found himself unfavorably compared to his estranged brother-in-law and ended up saying something which prompted Balbir to kick him out once again. Ranvijay married his childhood sweetheart Gitanjali and moved to the US, and a cold war began between the father-son duo which abruptly ended after an assassination attempt on Balbir. Now, Ranvijay is ready to put his differences aside and plots vengeance against those who tried to kill Balbir, once again resorting to violence to solve this problem. As a result, the violence and bloodshed escalates and takes a heavy toll on his life and psyche, turning him into a cold-blooded animal who will stop at nothing in his pursuit of twisted vengeance",
    boxOffice:"930cr"
  },
  {
    id: 2,
    title: "LEO",
    year: 2023,
    rating: 8.7,
    poster: "l.jpg",
    description:"Parthiban lives a simple life in Shimla along with wife Satya and two children and runs a cafe.Few contract killers enter the town an create havoc,one night they attack Parthiban's cafe and all get shot dead by him while trying to save his daughter and employee.The trial goes in court and Parthiban is set free as all men were criminals and he did it in self defense.Parthiban becomes a hero in town and his news is published in various newspapers where few want him dead.Harold Das one of the gangsters comes across his picture and identifies him as Leo Das who was termed dead many years back.Harold informs his elder brother Antony Das a menacing gangster who travels to Shimla to meet Parthiban.Antony is confident that Parthiban is Leo and tries all kind of ways to harass him.But Parthiban is adamant that he is not Leo and that he could be his lookalike.",
    boxOffice:"630cr"
  },
  {
    id: 3,
    title: "GEETHA GOVINDAM",
    year: 2018,
    rating: 7.7,
    poster: "G.jpg",
    description:"Vijay Govind, a young college lecturer who dreams of marriage falls for Geetha, a level-headed woman who's wary of strangers and isn't easy to convince. While things seem to go smoothly, Vijay makes a terrible mistake which not only derails any hope for his love story, but also potential repercussions with his family.",
    boxOffice:"130 cr"
  },
  {
    id: 4,
    title:"ELA VEEZHA POONCHIRA",
    year: 2022,
    rating: 7.2,
    poster: "ela.jpg",
    description:"Follows two police officers at a small wireless police station on the hilltop as they work to resolve the mystery about a woman's body parts that have been scattered all over Elaveezhapoonchira.",
    boxOffice:"15cr"
  },
  {
    id: 5,
    title:"DRISHYAM 2",
    year: 2022,
    rating: 7.2,
    poster: "D.jpg",
    description:"Six years after the terrible event that almost destroyed his family, Georgekutty is the proud owner of a movie theater and aspiring to write and produce his own hit film. Yet his wife Rani is ill at ease. She worries about Georgekutty, who's taken out a loan and started drinking. She worries about her daughters; Anju suffers epileptic fits and cowers in fear at the sound of a passing police siren, and young Anu's growing independence takes her away from her mother's watchful eyes. Even more worrying, the neighbors have started to gossip and the police have remained relentless in unearthing George's darkest secret. When someone from the past returns to the village, can Georgekutty save his family a second time?",
    boxOffice:"OTT RELEASE"
  },
  {
    id: 6,
    title:"ARJUN REDDY",
    year: 2017,
    rating: 7.2,
    poster: "arjun.jpg",
    description:"Arjun Reddy, a medico with anger management issues, gets into a brawl with another student and is asked to either apologize or leave college. Arjun prepares to leave but stays back after seeing a first year student, Preethi Shetty. Arjun, along with his friend Shiva, goes to first year class room and announces that he is in love with Preethi and she is exclusive to him. Preethi, although initially afraid of his nature, eventually reciprocates his feelings and their relationship grows stronger over the course of next 3 years. Preethi's father rejects him on the grounds of caste and arranges her marriage with someone else. Arjun protests in front of her house and gets arrested. His father ostracizes him from home for damaging family reputation. He gets an apartment flat with the help of his friend Shiva and joins as a house surgeon in a leading hospital. Unable to forget her, he becomes alcoholic and drug addict. He befriends one of his patients and a leading film star, Jia Sharma, and asks her for a no strings relationship but eventually rejects her after she grows feelings for him. After collapsing in operation theater under the influence of alcohol and drugs, his medical license is temporarily canceled and he is evicted from his flat. Next morning, his grandmother dies and he reconciles his father to give up his self-destructive habits. While on vacation, he learns that Preethi is unhappy with her marriage and meets her after returning home. Arjun convinces Preethi, now a pregnant woman, to live with him. Preethi reveals that he is the father to the child and she left home after marriage and living alone ever since working in a clinic. They get married to each other.",
    boxOffice:"50cr"
  },
  {
    id: 7,
    title:"HRIDAYAM",
    year: 2022,
    rating: 8.0,
    poster: "H.jpg",
    description:"The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life.",
    boxOffice:"60cr"
  },
  {
    id: 8,
    title:"VARSHANGALKKU SHESHAM",
    year: 2024,
    rating: 8.5,
    poster: "V.jpg",
    description:"The story of two friends set in two different time periods. Two boys, Murali and Venu, hailing from northern Kerala meet coincidentally and become friends.",
    boxOffice:"80cr"
  },
   {
    id: 9,
    title:"PREMAM",
    year: 2015,
    rating: 8.9,
    poster: "P.jpg",
    description:"George, a teenager, loves the idea of being in love. This dream seems to be within reach during his school days, then, for a second time during his college days and yet it fails to materialize. This slow metamorphosis of his love, his attempt to woo his lovers, the abrupt failures hardens him but he finally is able to settle down for life with someone much younger, whom he have met during childhood. The film transcends its viewers on perspectives and boundaries of love.",
    boxOffice:"75cr"
  },
  {
    id: 10,
    title:"SITA RAMAM",
    year: 2022,
    rating: 9.2,
    poster: "S.jpg",
    description:"Afreen is a student president of Pakistan at a university in London. She takes up the job of delivering a letter to Sita Mahalakshmi at the insistence of her grandfather's will. Though she doesn't like the job, she agrees to do it to get her share of her grandfather's property. The letter is written by Lieutenant Ram to Sita",
    boxOffice:"100cr"
  }
  
];

export default movies;


