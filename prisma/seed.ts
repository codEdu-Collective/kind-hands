import { PrismaPg } from "@prisma/adapter-pg";

import { Prisma, PrismaClient } from "./generated/prisma/client";

import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    email: "natasha@example.com",
    password: "hashed_password_here",
    name: "Natasha",
    events: {
      create: [
        {
          title: "Education for Underprivileged Children",
          description:
            "This event aims to provide education and learning materials to underprivileged children around the world. We believe every child deserves an opportunity to learn and grow, regardless of their financial background. By supporting this cause, we are able to open doors to knowledge and equip children with the tools they need to break the cycle of poverty. Education empowers, and by providing children with the resources to succeed, we are not only investing in their future but also contributing to a better world for everyone. Every child has the potential to achieve great things, and it is through education that we can help unlock that potential.",
          content:
            "Our mission is simple to make education accessible to every child. By supporting this event, you can help us provide necessary school supplies, books, and resources to children who otherwise wouldn't have access to them. Education is one of the most powerful tools we can give children to help them succeed in life, and this event is a chance to ensure that children from underprivileged backgrounds receive the same opportunities as others. Volunteers will distribute materials, hold study sessions, and work closely with the children to create a fun and engaging learning environment. Through your involvement, you can make a lasting impact on a child's life and provide them with the foundation they need to succeed in school and beyond.",
          details:
            "The event will include a series of workshops, interactive activities, and talks from experts in education. Participants will engage with children in group sessions, providing tutoring and helping them with their schoolwork. Volunteers will distribute educational materials like books, notebooks, and school supplies to children who lack basic learning tools. The event will also feature a fundraising segment to raise money for scholarships, learning materials, and other educational resources for children in need. Local educational organizations will partner with us to share their knowledge and contribute to the success of the event.",
          startTime: new Date("2025-06-18T10:00:00"),
          endTime: new Date("2025-06-18T20:00:00"),
          venue: "Historic Site",
          venueAddress: "1234 Elm Street, San Francisco, CA 94528",
          month: "June",
          day: "18",
          imageUrl: "/events/event-1.jpg",
        },
        {
          title: "Healthy Food Drive for Kids",
          description:
            "Join us in providing healthy and nutritious meals to children in need. Our mission is to ensure that every child gets access to balanced, healthy food to support their growth and development. Many children face nutritional challenges that hinder their physical and cognitive development, which is why this event is critical. The event will bring together volunteers, donors, and local communities to collect, prepare, and distribute nutritious meals to children who do not have consistent access to healthy food. Your support will ensure that children can grow, learn, and thrive, and every donation counts towards providing healthier futures for these children.",
          content:
            "Proper nutrition is crucial for a child's development. This event focuses on providing healthy meals to children in need, ensuring they have the energy and nutrients they need to succeed in school and in life. Without access to healthy food, children may suffer from malnutrition, which can affect their physical and mental development. Through the Healthy Food Drive, we aim to combat this issue by collecting donations of nutritious food items, packaging them, and distributing them to children and families in underprivileged areas. Volunteers will also engage with children to teach them the importance of healthy eating habits, and we’ll provide resources to families to help them maintain nutritious diets. This event is a critical step toward addressing child hunger and malnutrition in our communities.",
          details:
            "During this event, volunteers will work together to collect donations of healthy food items, prepare meals, and distribute them to children and families in need. A key focus of the event will be teaching children about healthy eating habits and why proper nutrition is essential for their growth and development. There will be workshops on preparing nutritious meals, as well as talks from nutritionists and chefs. We will also collaborate with local grocery stores and food banks to provide the necessary ingredients for the meals. This event is about more than just feeding children; it’s about educating them on the importance of health and wellness.",
          startTime: new Date("2025-06-21T10:00:00"),
          endTime: new Date("2025-06-21T20:00:00"),
          venue: "Lighthouse",
          venueAddress: "5678 Maple Avenue, Los Angeles, CA 90001",
          month: "June",
          day: "21",
          imageUrl: "/events/event-2.jpg",
        },
        {
          title: "Clothing for the Homeless",
          description:
            "Help us provide warm clothing and essentials for the homeless. This event seeks to gather donations of clothes, shoes, and personal care items to support those in need, especially during the colder months. Homelessness is a growing issue worldwide, and many people in need struggle with basic necessities like clothing and shelter. By coming together as a community, we can make a real difference in the lives of those experiencing homelessness. Your donation of gently used or new clothes will help us ensure that more people have access to the basic comforts that many of us take for granted. No one should have to face the harshness of the elements without proper clothing, and together we can help provide warmth and dignity to those in need.",
          content:
            "In many areas, homelessness is an ongoing struggle. This event encourages the community to come together and donate gently used clothing, shoes, and hygiene products to help those experiencing homelessness stay warm and comfortable. The clothing and personal care items will be distributed to shelters, outreach programs, and directly to individuals in need. As winter approaches, the need for warm clothing becomes more urgent. This event will also feature a clothing drive where people can donate items on-site, making it easy to contribute. Volunteers will assist with sorting donations, organizing them, and distributing them to ensure that each person receives what they need. By providing clothes and basic essentials, we can offer hope and dignity to those who are often overlooked and forgotten by society.",
          details:
            "The event will begin with a clothing drive where donations of new and gently used clothing will be collected. Volunteers will sort through the donations, organizing them by size and type to ensure they are distributed efficiently. We will provide clothing, shoes, and hygiene products directly to shelters, outreach programs, and homeless individuals in need. Special attention will be paid to ensuring that each person receives the necessary items based on their needs, with a focus on warm clothing for colder weather. The event will also include a panel discussion about homelessness, where experts will talk about how we can address the root causes of homelessness and help individuals reintegrate into society.",
          startTime: new Date("2025-06-28T10:00:00"),
          endTime: new Date("2025-06-28T20:00:00"),
          venue: "Middle Eastern",
          venueAddress: "9876 Oak Lane, Seattle, WA 98101",
          month: "June",
          day: "28",
          imageUrl: "/events/event-3.jpg",
        },
        {
          title: "Love to Help: Charity Awareness",
          description:
            "This event raises awareness about the importance of giving back to the community. Through storytelling, activities, and charity drives, we aim to inspire others to join the movement of kindness and compassion. Helping others, especially those who are less fortunate, is one of the most fulfilling things we can do in life. This event is designed to educate and inspire people to take action and contribute to charitable causes. We’ll feature guest speakers who have dedicated their lives to giving back, share impactful stories, and provide tangible ways for attendees to get involved in local and global charitable efforts. Together, we can make a positive impact and create a ripple effect of kindness that will continue for years to come.",
          content:
            "Through various activities, workshops, and outreach efforts, we aim to bring more people into the charitable fold. Whether it’s through small donations, time, or skills, this event shows that every act of kindness counts. Charity awareness is about more than just giving money; it’s about creating a culture of generosity, empathy, and social responsibility. This event will feature speakers who have been directly impacted by charity, offering personal stories of how kindness has changed their lives. Attendees will have the opportunity to connect with charitable organizations, learn about their missions, and get involved in volunteer opportunities. Together, we can spread the message of compassion and inspire others to take action, whether through financial support, volunteering, or simply spreading awareness about the causes that matter most.",
          details:
            "This event will feature numerous activities aimed at educating attendees about the importance of giving back to the community. Workshops will be held to teach people about local charitable organizations, the impact of volunteer work, and the ways in which people can contribute their time, skills, and resources. A special guest speaker will share their journey of charity work, providing inspiration and practical advice. Interactive booths will allow attendees to connect with different causes and volunteer organizations. Additionally, a portion of the event will be dedicated to raising funds for local charity projects that help those in need.",
          startTime: new Date("2025-07-09T10:00:00"),
          endTime: new Date("2025-07-09T20:00:00"),
          venue: "Indie Theater",
          venueAddress: "1357 Pine Road, New York, NY 10001",
          month: "July",
          day: "09",
          imageUrl: "/events/event-4.jpg",
        },
        {
          title: "Fight Against Cancer: A Fundraising Event",
          description:
            "We are organizing a fundraising event to support cancer research and raise awareness about prevention. All funds raised will be directed towards supporting families affected by cancer and funding scientific research. Cancer is a disease that affects millions of people worldwide, and every year, new cases are diagnosed. By coming together at this event, we are united in the fight against this devastating disease. The funds raised will not only support critical cancer research but also help families who are navigating the challenges of a cancer diagnosis. Through your generosity, we can make a tangible difference in the fight against cancer and move one step closer to finding a cure.",
          content:
            "The fight against cancer continues, and we need your help. By attending this event, you'll not only support families affected by cancer but also contribute to innovative research that will hopefully lead to breakthroughs in treatment and prevention. Cancer affects millions of people worldwide, and it is one of the leading causes of death. The funds raised will go directly toward funding scientific research, supporting cancer patients, and providing educational resources on prevention and early detection. The event will feature guest speakers, medical professionals, and survivors who will share their experiences and knowledge. Together, we can support the cancer research community and take one step closer to finding a cure for this devastating disease",
          details:
            "The event will include a silent auction with items donated by local businesses, a guest speaker panel of cancer survivors, and opportunities for attendees to donate directly to cancer research. Participants will hear firsthand accounts of how cancer has affected families and the importance of supporting research efforts. Medical professionals will give talks on prevention and treatment options, providing valuable information about how people can reduce their risk of cancer. The event will also feature a walkathon, where attendees can raise funds by walking in support of cancer research. All funds raised during the event will go directly to cancer research foundations.",
          startTime: new Date("2025-07-23T10:00:00"),
          endTime: new Date("2025-07-23T20:00:00"),
          venue: "Bridge",
          venueAddress: "2468 Birch Drive, Austin, TX 73301",
          month: "July",
          day: "23",
          imageUrl: "/events/event-5.jpg",
        },
        {
          title: "Water for Life: A Fundraising Campaign",
          description:
            "Access to clean drinking water is a basic human right. This fundraising campaign aims to bring clean water to rural areas by building wells and providing water filtration systems in communities that need it most. In many parts of the world, people still lack access to clean, safe drinking water. This leads to countless health issues and untold suffering. By supporting this campaign, you are helping to bring clean water to areas where it is needed most. The event will focus on raising funds to build wells, install filtration systems, and provide education on water conservation and hygiene. Clean water is essential for good health and a prosperous life, and your support will help save lives and improve the well-being of entire communities.",
          content:
            "In many parts of the world, access to clean water is still a major challenge. This fundraising campaign will focus on bringing clean drinking water to rural communities, where waterborne diseases are common, and access to clean water is scarce. The funds raised will go toward building wells, installing water filtration systems, and teaching communities about water conservation and hygiene. Volunteers will help with the fundraising efforts, host informational workshops, and provide updates on the progress of the campaign. This initiative will directly improve the health and well-being of thousands of people, ensuring that they have access to one of the most basic human necessities: clean, safe drinking water.",
          details:
            "The event will include a number of fundraising activities such as raffles, auctions, and walkathons to raise money for clean water initiatives. Attendees will hear from experts in the field of water filtration and learn about the importance of water conservation. Volunteers will participate in hands-on activities such as building models of water filtration systems and packaging water purification kits for distribution. The event will also provide information about the global water crisis and offer ways for people to get involved. All proceeds will go to providing clean water solutions for communities in need.",
          startTime: new Date("2025-08-15T10:00:00"),
          endTime: new Date("2025-08-15T20:00:00"),
          venue: "Stadium",
          venueAddress: "8642 Cedar Boulevard, Miami, FL 33101",
          month: "August",
          day: "15",
          imageUrl: "/events/event-6.jpg",
        },
      ],
    },
  },
];

const causeData: Prisma.CauseCreateInput[] = [
  {
    title: "Building a Modern School for Rural Children in Kenya",
    imageUrl: "/images/causes-1.jpg",
    percentage: 85,
    raised: "85,000",
    goal: "100,000",
    category: "Education",
    organizer: "Global Minds",
    date: new Date("2025-12-10"),
    description: `Education is the most powerful weapon which you can use to change the world. However, in the rural district of Turkana, Kenya, over 500 children currently have no access to a proper school building. They attend classes under trees, where their education is frequently interrupted by rain, sandstorms, and extreme heat. This lack of infrastructure is a significant barrier to their academic success and future opportunities.

    Our project aims to construct a fully furnished primary school with six classrooms, a library, and a staff room. The new building will provide a safe, conducive learning environment for these eager young minds. Beyond just bricks and mortar, we will be installing solar panels to ensure the school has electricity for evening studies and computer literacy programs.

    We believe that every child deserves the right to learn in dignity. By supporting this cause, you are not just building walls; you are building the future of an entire community. The school will also serve as a community center during weekends, providing adult literacy classes and health workshops. Join us in making this dream a reality.`,
  },
  {
    title: "Clean Water Initiative: Wells for Remote Villages",
    imageUrl: "/images/causes-2.jpg",
    percentage: 60,
    raised: "30,000",
    goal: "50,000",
    category: "Health",
    organizer: "AquaLife Foundation",
    date: new Date("2026-01-15"),
    description: `Water is life, yet for millions of people around the world, access to clean and safe drinking water remains a luxury. In many remote villages in Southeast Asia, women and children walk an average of four miles every day to fetch water from contaminated sources. This not only takes away time from education and economic activities but also exposes the community to waterborne diseases like cholera and typhoid.

    The 'Clean Water Initiative' is dedicated to drilling deep-water boreholes and installing solar-powered pumps in ten identified villages. These wells will provide a sustainable source of clean water for over 5,000 residents. We also plan to establish local water management committees to ensure the long-term maintenance of the pumps.

    Your donation goes directly towards the machinery, labor, and materials needed for drilling. Access to clean water transforms communities instantly: health improves, school attendance rises, and small businesses flourish. Let's work together to quench the thirst of those in need.`,
  },
  {
    title: "Emergency Food Relief for Flood Victims",
    imageUrl: "/images/causes-3.jpg",
    percentage: 92,
    raised: "46,000",
    goal: "50,000",
    category: "Disaster Relief",
    organizer: "Rapid Response Team",
    date: new Date("2025-11-22"),
    description: `Recent catastrophic floods have devastated the coastal regions, leaving thousands of families homeless and without access to food. As the waters recede, the threat of starvation and malnutrition looms large. Local markets have been destroyed, and supply chains have been completely disrupted.

    Our immediate goal is to distribute 10,000 emergency food parcels containing rice, beans, cooking oil, and canned goods. Each parcel is designed to feed a family of five for two weeks. We are also setting up mobile community kitchens to provide hot meals to those currently living in temporary shelters.

    Time is of the essence. Children and the elderly are particularly vulnerable in these conditions. Your contribution will help us procure food locally from unaffected areas and transport it to the hardest-hit zones. Help us bring hope and sustenance to families trying to rebuild their lives from scratch.`,
  },
  {
    title: "Saving the Rainforest: Planting 1 Million Trees",
    imageUrl: "/images/causes-4.jpg",
    percentage: 35,
    raised: "175,000",
    goal: "500,000",
    category: "Environment",
    organizer: "Green Earth Alliance",
    date: new Date("2026-03-22"),
    description: `The Amazon rainforest, often called the 'lungs of the Earth,' is facing unprecedented deforestation. Illegal logging and agricultural expansion are destroying habitats at an alarming rate, threatening biodiversity and accelerating climate change. If we do not act now, the damage may become irreversible.

    Our ambitious project aims to reforest 500 hectares of degraded land by planting one million native tree species. We are partnering with indigenous communities who have been the guardians of the forest for centuries. They will lead the planting efforts and ensure the saplings are protected as they grow.

    This project is not just about planting trees; it's about restoring an ecosystem. We will be monitoring the return of wildlife to the area and the recovery of the soil. Every dollar donated plants one tree and covers the cost of its care for the first three years. Be a part of the solution to the climate crisis.`,
  },
  {
    title: "Medical Aid for Children in War Zones",
    imageUrl: "/images/causes-5.jpg",
    percentage: 75,
    raised: "150,000",
    goal: "200,000",
    category: "Medical",
    organizer: "Doctors Without Borders",
    date: new Date("2026-02-10"),
    description: `Conflict takes the heaviest toll on the innocent. In active war zones, healthcare systems often collapse, leaving children without access to basic medical care, vaccinations, or trauma surgery. Many are suffering from preventable diseases, malnutrition, and war-related injuries.

    We are establishing a mobile field hospital equipped with surgical units, an intensive care ward, and a pharmacy. Our team of volunteer doctors and nurses is ready to deploy, but we need funding for medical supplies, antibiotics, surgical kits, and generator fuel to keep the hospital running 24/7.

    Your support literally saves lives. It allows us to perform emergency surgeries, treat severe malnutrition, and provide psychological support to children traumatized by violence. In a world of conflict, be the beacon of humanity and healing.`,
  },
  {
    title: "Shelter and Warmth for the Homeless this Winter",
    imageUrl: "/images/causes-6.jpg",
    percentage: 50,
    raised: "25,000",
    goal: "50,000",
    category: "Social Welfare",
    organizer: "City Care",
    date: new Date("2025-12-01"),
    description: `As temperatures drop below freezing, life on the streets becomes a battle for survival. For the homeless population in our city, winter is the most dangerous season. Hypothermia and frostbite are real threats, and shelters are often overcrowded and under-resourced.

    The 'Warmth for All' campaign aims to distribute 1,000 winter survival kits containing thermal sleeping bags, heavy coats, gloves, hats, and hygiene essentials. Additionally, we are renting a temporary heated facility to provide overnight shelter for 200 individuals every night during the coldest months of the year.

    No one should have to sleep in the cold. By donating, you are providing warmth, safety, and dignity to our neighbors who have fallen on hard times. We also provide case workers at the shelter to help guests find permanent housing solutions.`,
  },
  {
    title: "Empowering Women through Vocational Training",
    imageUrl: "/images/causes-7.jpg",
    percentage: 20,
    raised: "4,000",
    goal: "20,000",
    category: "Empowerment",
    organizer: "Women Rise",
    date: new Date("2026-04-05"),
    description: `Financial independence is the key to breaking the cycle of poverty and abuse for many women. In underprivileged communities, women often lack the skills or opportunities to earn a sustainable income. This leaves them vulnerable and dependent.

    Our vocational training center offers intensive courses in tailoring, coding, graphic design, and culinary arts. Over a six-month program, women learn a trade, gain financial literacy skills, and receive mentorship on how to start their own micro-businesses.

    We are raising funds to purchase sewing machines, laptops, and cooking equipment for the new intake of 50 students. Graduates from our previous programs have gone on to open their own shops or find stable employment, transforming the economic reality of their entire families. Empower a woman, and you empower a nation.`,
  },
  {
    title: "Protecting Endangered Rhinos from Poachers",
    imageUrl: "/images/causes-8.jpg",
    percentage: 65,
    raised: "65,000",
    goal: "100,000",
    category: "Wildlife",
    organizer: "Savanna Guardians",
    date: new Date("2026-05-20"),
    description: `The majestic rhino is facing extinction due to the brutal trade in rhino horn. Poaching syndicates are becoming more sophisticated, using helicopters and night-vision technology to slaughter these animals. Without intervention, wild rhinos could disappear within our lifetime.

    Our anti-poaching unit requires urgent upgrades to stay ahead of the poachers. We are fundraising to purchase a surveillance drone, train tracking dogs, and provide better protective gear for our rangers who risk their lives daily to protect the herd.

    Conservation is a war, and we need your help to win it. Your donation supports the brave men and women on the front lines and funds community education programs to reduce human-wildlife conflict. Help us ensure that future generations can see these magnificent creatures in the wild, not just in history books.`,
  },
  {
    title: "Ocean Cleanup: Removing Plastic from Coral Reefs",
    imageUrl: "/images/causes-9.jpg",
    percentage: 40,
    raised: "12,000",
    goal: "30,000",
    category: "Environment",
    organizer: "Blue Ocean Project",
    date: new Date("2026-06-08"),
    description: `Our oceans are choking on plastic. Millions of tons of waste end up in the sea every year, killing marine life and destroying delicate ecosystems like coral reefs. The Great Barrier Reef is currently under severe threat from microplastics and ghost fishing nets.

    Our team of professional divers and marine biologists is launching a massive cleanup operation. We aim to remove 10 tons of plastic waste from critical reef zones over the next three months. The collected plastic will be sorted and recycled into usable products.

    Protecting the ocean is essential for the planet's health. Coral reefs are the nurseries of the sea, supporting 25% of all marine life. Your contribution funds the boat fuel, diving equipment, and waste processing logistics. Let's turn the tide on plastic pollution together.`,
  },
  {
    title: "Tech Education for Underprivileged Youth",
    imageUrl: "/images/causes-10.jpg",
    percentage: 10,
    raised: "5,000",
    goal: "50,000",
    category: "Technology",
    organizer: "Code for Future",
    date: new Date("2026-09-01"),
    description: `The digital divide is creating a massive inequality gap. While technology advances rapidly, children in low-income neighborhoods are being left behind due to a lack of access to computers and internet connectivity. We believe that talent is everywhere, but opportunity is not.

    'Code for Future' is a boot camp designed to teach Python, JavaScript, and Web Development to teenagers from disadvantaged backgrounds. We provide them with laptops, internet access, and top-tier instruction from industry professionals.

    Our goal is to equip 100 students with the skills they need to land high-paying jobs in the tech industry. This program is a ladder out of poverty. By sponsoring a student, you are providing them with the hardware and software needed to rewrite their destiny. Join us in coding a better future.`,
  },
];

const postData: Prisma.PostCreateInput[] = [
  {
    title: "Why Giving Is Important | Five Reasons to Donate",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    content: "Giving to charity is one of the most powerful ways to make a difference...",
    author: "NATTASHA",
    imageUrl: "/blog/blog-hero.jpg",
    isFeatured: true,
    publishedAt: new Date("2022-03-16"),
  },
  {
    title: "We've reached 1 million in donations and counting",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    content: "Thanks to our generous donors, we have reached a milestone...",
    author: "MINCIYA",
    imageUrl: "/blog/blog-volunteer-1-0.jpg",
    isFeatured: false,
    publishedAt: new Date("2022-08-18"),
  },
  {
    title: "Why were going to alaska and why...",
    excerpt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    content: "Our team is heading to Alaska to support the local communities...",
    author: "MINCIYA",
    imageUrl: "/blog/blog-volunteer-1.jpg",
    isFeatured: false,
    publishedAt: new Date("2022-08-18"),
  },
  {
    title: "Education for All: Building Schools in Rural Areas",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    content:
      "Education is the foundation of a better future. We are dedicated to building schools...",
    author: "JONATHAN",
    imageUrl: "/blog/blog-volunteer-2.jpg",
    isFeatured: false,
    publishedAt: new Date("2022-09-12"),
  },
  {
    title: "Fighting Hunger: Our Annual Food Drive Success",
    excerpt:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
    content: "No one should go to bed hungry. Thanks to our volunteers, we distributed over...",
    author: "NATTASHA",
    imageUrl: "/blog/blog-volunteer-3.jpg",
    isFeatured: false,
    publishedAt: new Date("2022-10-05"),
  },
  {
    title: "Clean Water Initiative: A Life-Changing Journey",
    excerpt:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested in the sections.",
    content:
      "Access to clean water changes everything. Health, education, and growth start with water...",
    author: "MINCIYA",
    imageUrl: "/blog/blog-volunteer-4.jpg",
    isFeatured: false,
    publishedAt: new Date("2022-11-20"),
  },
];

export async function main() {
  await prisma.event.deleteMany();
  await prisma.cause.deleteMany();
  await prisma.post.deleteMany();
  await prisma.volunteer.deleteMany();

  await prisma.user.deleteMany();

  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }

  for (const cause of causeData) {
    await prisma.cause.create({
      data: cause,
    });
  }

  for (const post of postData) {
    await prisma.post.create({
      data: post,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
