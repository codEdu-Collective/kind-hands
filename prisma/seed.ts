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

export async function main() {
  for (const user of userData) {
    await prisma.user.create({
      data: user,
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
