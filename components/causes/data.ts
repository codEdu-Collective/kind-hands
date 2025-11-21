export interface CauseData {
  id: number;
  title: string;
  image: string;
  percentage: number;
  raised: string;
  goal: string;
  category: string;
  organizer: string;
  date: string;
  description: string;
}

export const causesData: CauseData[] = [
  {
    id: 1,
    title: "Building a Modern School for Rural Children in Kenya",
    image: "/images/causes-1.jpg",
    percentage: 85,
    raised: "85,000",
    goal: "100,000",
    category: "Education",
    organizer: "Global Minds",
    date: "Dec 10, 2025",
    description: `Education is the most powerful weapon which you can use to change the world. However, in the rural district of Turkana, Kenya, over 500 children currently have no access to a proper school building. They attend classes under trees, where their education is frequently interrupted by rain, sandstorms, and extreme heat. This lack of infrastructure is a significant barrier to their academic success and future opportunities.

    Our project aims to construct a fully furnished primary school with six classrooms, a library, and a staff room. The new building will provide a safe, conducive learning environment for these eager young minds. Beyond just bricks and mortar, we will be installing solar panels to ensure the school has electricity for evening studies and computer literacy programs.

    We believe that every child deserves the right to learn in dignity. By supporting this cause, you are not just building walls; you are building the future of an entire community. The school will also serve as a community center during weekends, providing adult literacy classes and health workshops. Join us in making this dream a reality.`,
  },
  {
    id: 2,
    title: "Clean Water Initiative: Wells for Remote Villages",
    image: "/images/causes-2.jpg",
    percentage: 60,
    raised: "30,000",
    goal: "50,000",
    category: "Health",
    organizer: "AquaLife Foundation",
    date: "Jan 15, 2026",
    description: `Water is life, yet for millions of people around the world, access to clean and safe drinking water remains a luxury. In many remote villages in Southeast Asia, women and children walk an average of four miles every day to fetch water from contaminated sources. This not only takes away time from education and economic activities but also exposes the community to waterborne diseases like cholera and typhoid.

    The 'Clean Water Initiative' is dedicated to drilling deep-water boreholes and installing solar-powered pumps in ten identified villages. These wells will provide a sustainable source of clean water for over 5,000 residents. We also plan to establish local water management committees to ensure the long-term maintenance of the pumps.

    Your donation goes directly towards the machinery, labor, and materials needed for drilling. Access to clean water transforms communities instantly: health improves, school attendance rises, and small businesses flourish. Let's work together to quench the thirst of those in need.`,
  },
  {
    id: 3,
    title: "Emergency Food Relief for Flood Victims",
    image: "/images/causes-3.jpg",
    percentage: 92,
    raised: "46,000",
    goal: "50,000",
    category: "Disaster Relief",
    organizer: "Rapid Response Team",
    date: "Nov 22, 2025",
    description: `Recent catastrophic floods have devastated the coastal regions, leaving thousands of families homeless and without access to food. As the waters recede, the threat of starvation and malnutrition looms large. Local markets have been destroyed, and supply chains have been completely disrupted.

    Our immediate goal is to distribute 10,000 emergency food parcels containing rice, beans, cooking oil, and canned goods. Each parcel is designed to feed a family of five for two weeks. We are also setting up mobile community kitchens to provide hot meals to those currently living in temporary shelters.

    Time is of the essence. Children and the elderly are particularly vulnerable in these conditions. Your contribution will help us procure food locally from unaffected areas and transport it to the hardest-hit zones. Help us bring hope and sustenance to families trying to rebuild their lives from scratch.`,
  },
  {
    id: 4,
    title: "Saving the Rainforest: Planting 1 Million Trees",
    image: "/images/causes-4.jpg",
    percentage: 35,
    raised: "175,000",
    goal: "500,000",
    category: "Environment",
    organizer: "Green Earth Alliance",
    date: "March 22, 2026",
    description: `The Amazon rainforest, often called the 'lungs of the Earth,' is facing unprecedented deforestation. Illegal logging and agricultural expansion are destroying habitats at an alarming rate, threatening biodiversity and accelerating climate change. If we do not act now, the damage may become irreversible.

    Our ambitious project aims to reforest 500 hectares of degraded land by planting one million native tree species. We are partnering with indigenous communities who have been the guardians of the forest for centuries. They will lead the planting efforts and ensure the saplings are protected as they grow.

    This project is not just about planting trees; it's about restoring an ecosystem. We will be monitoring the return of wildlife to the area and the recovery of the soil. Every dollar donated plants one tree and covers the cost of its care for the first three years. Be a part of the solution to the climate crisis.`,
  },
  {
    id: 5,
    title: "Medical Aid for Children in War Zones",
    image: "/images/causes-5.jpg",
    percentage: 75,
    raised: "150,000",
    goal: "200,000",
    category: "Medical",
    organizer: "Doctors Without Borders",
    date: "Feb 10, 2026",
    description: `Conflict takes the heaviest toll on the innocent. In active war zones, healthcare systems often collapse, leaving children without access to basic medical care, vaccinations, or trauma surgery. Many are suffering from preventable diseases, malnutrition, and war-related injuries.

    We are establishing a mobile field hospital equipped with surgical units, an intensive care ward, and a pharmacy. Our team of volunteer doctors and nurses is ready to deploy, but we need funding for medical supplies, antibiotics, surgical kits, and generator fuel to keep the hospital running 24/7.

    Your support literally saves lives. It allows us to perform emergency surgeries, treat severe malnutrition, and provide psychological support to children traumatized by violence. In a world of conflict, be the beacon of humanity and healing.`,
  },
  {
    id: 6,
    title: "Shelter and Warmth for the Homeless this Winter",
    image: "/images/causes-6.jpg",
    percentage: 50,
    raised: "25,000",
    goal: "50,000",
    category: "Social Welfare",
    organizer: "City Care",
    date: "Dec 01, 2025",
    description: `As temperatures drop below freezing, life on the streets becomes a battle for survival. For the homeless population in our city, winter is the most dangerous season. Hypothermia and frostbite are real threats, and shelters are often overcrowded and under-resourced.

    The 'Warmth for All' campaign aims to distribute 1,000 winter survival kits containing thermal sleeping bags, heavy coats, gloves, hats, and hygiene essentials. Additionally, we are renting a temporary heated facility to provide overnight shelter for 200 individuals every night during the coldest months of the year.

    No one should have to sleep in the cold. By donating, you are providing warmth, safety, and dignity to our neighbors who have fallen on hard times. We also provide case workers at the shelter to help guests find permanent housing solutions.`,
  },
  {
    id: 7,
    title: "Empowering Women through Vocational Training",
    image: "/images/causes-7.jpg",
    percentage: 20,
    raised: "4,000",
    goal: "20,000",
    category: "Empowerment",
    organizer: "Women Rise",
    date: "April 05, 2026",
    description: `Financial independence is the key to breaking the cycle of poverty and abuse for many women. In underprivileged communities, women often lack the skills or opportunities to earn a sustainable income. This leaves them vulnerable and dependent.

    Our vocational training center offers intensive courses in tailoring, coding, graphic design, and culinary arts. Over a six-month program, women learn a trade, gain financial literacy skills, and receive mentorship on how to start their own micro-businesses.

    We are raising funds to purchase sewing machines, laptops, and cooking equipment for the new intake of 50 students. Graduates from our previous programs have gone on to open their own shops or find stable employment, transforming the economic reality of their entire families. Empower a woman, and you empower a nation.`,
  },
  {
    id: 8,
    title: "Protecting Endangered Rhinos from Poachers",
    image: "/images/causes-8.jpg",
    percentage: 65,
    raised: "65,000",
    goal: "100,000",
    category: "Wildlife",
    organizer: "Savanna Guardians",
    date: "May 20, 2026",
    description: `The majestic rhino is facing extinction due to the brutal trade in rhino horn. Poaching syndicates are becoming more sophisticated, using helicopters and night-vision technology to slaughter these animals. Without intervention, wild rhinos could disappear within our lifetime.

    Our anti-poaching unit requires urgent upgrades to stay ahead of the poachers. We are fundraising to purchase a surveillance drone, train tracking dogs, and provide better protective gear for our rangers who risk their lives daily to protect the herd.

    Conservation is a war, and we need your help to win it. Your donation supports the brave men and women on the front lines and funds community education programs to reduce human-wildlife conflict. Help us ensure that future generations can see these magnificent creatures in the wild, not just in history books.`,
  },
  {
    id: 9,
    title: "Ocean Cleanup: Removing Plastic from Coral Reefs",
    image: "/images/causes-9.jpg",
    percentage: 40,
    raised: "12,000",
    goal: "30,000",
    category: "Environment",
    organizer: "Blue Ocean Project",
    date: "June 08, 2026",
    description: `Our oceans are choking on plastic. Millions of tons of waste end up in the sea every year, killing marine life and destroying delicate ecosystems like coral reefs. The Great Barrier Reef is currently under severe threat from microplastics and ghost fishing nets.

    Our team of professional divers and marine biologists is launching a massive cleanup operation. We aim to remove 10 tons of plastic waste from critical reef zones over the next three months. The collected plastic will be sorted and recycled into usable products.

    Protecting the ocean is essential for the planet's health. Coral reefs are the nurseries of the sea, supporting 25% of all marine life. Your contribution funds the boat fuel, diving equipment, and waste processing logistics. Let's turn the tide on plastic pollution together.`,
  },
  {
    id: 10,
    title: "Tech Education for Underprivileged Youth",
    image: "/images/causes-10.jpg",
    percentage: 10,
    raised: "5,000",
    goal: "50,000",
    category: "Technology",
    organizer: "Code for Future",
    date: "Sep 01, 2026",
    description: `The digital divide is creating a massive inequality gap. While technology advances rapidly, children in low-income neighborhoods are being left behind due to a lack of access to computers and internet connectivity. We believe that talent is everywhere, but opportunity is not.

    'Code for Future' is a boot camp designed to teach Python, JavaScript, and Web Development to teenagers from disadvantaged backgrounds. We provide them with laptops, internet access, and top-tier instruction from industry professionals.

    Our goal is to equip 100 students with the skills they need to land high-paying jobs in the tech industry. This program is a ladder out of poverty. By sponsoring a student, you are providing them with the hardware and software needed to rewrite their destiny. Join us in coding a better future.`,
  },
];
