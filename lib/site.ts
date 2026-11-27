export const site = {
  name: "Rotaract Club of Prestige",
  short: "Rotaract Prestige",
  rid: "3053",
  city: "Gwalior",
  address: "Prestige Institute of Management, DD Nagar, Gwalior",
  phone: "+91 91568 56387",
  phoneHref: "tel:+919156856387",
  email: "rotaractprestige.gwalior@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rotaract-prestige.vercel.app",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  socials: {
    facebook: "https://www.facebook.com/rotaractclubofprestige",
    instagram: "https://instagram.com/rotaract_club_of_prestige",
    youtube: "https://www.youtube.com/channel/UCJyWXKhFppOPSXwowEy4RnA",
  },
  video: { id: "G86CKSN_d-g", url: "https://youtu.be/G86CKSN_d-g" },
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const PHOTO_BASE = (
  process.env.NEXT_PUBLIC_IMAGE_BASE ||
  "https://kunalkarmavat.github.io/Rotaract_Prestige.github.io/images"
).replace(/\/$/, "");

/**
 * Every picture on the site is a custom illustration in /public/illustrations.
 * To use a real club photo instead, add its file name below. The key is the
 * illustration name, the value is the photo file inside NEXT_PUBLIC_IMAGE_BASE
 * (or /public/images once you set that to "/images").
 *
 * Keys: hero-main, hero-side, mission, vision, economy, education, health,
 *       clothes, trees, birds
 */
export const photos: Record<string, string> = {
  // "clothes": "ClothesDonation.webp",
  // "trees": "Tree_Planting_Web.jpg",
  // "birds": "chahak_event.jpg",
};

export const img = (name: string) =>
  photos[name] ? `${PHOTO_BASE}/${photos[name]}` : `${BASE_PATH}/illustrations/${name}.svg`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#causes", label: "Causes" },
  { href: "/#events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

// EDIT ME: replace with real club numbers whenever you have them.
export const stats = [
  { value: "20", label: "post holders leading the club in 2026-27" },
  { value: "3", label: "causes we serve" },
  { value: "3", label: "service drives on this page" },
];

export const causes = [
  {
    title: "Growing local economies",
    image: "economy",
    text: "We run service projects that support community development and create decent, productive work for young and old, with a focus on local entrepreneurs and women.",
    href: "https://www.rotary.org/en/our-causes/growing-local-economies",
  },
  {
    title: "Education for poor children",
    image: "education",
    text: "We help communities strengthen basic education and literacy, reduce gender gaps in schooling and support learning for children and adults.",
    href: "https://www.rotary.org/en/our-causes/supporting-education",
  },
  {
    title: "Fighting disease",
    image: "health",
    text: "We help communities stop the spread of diseases like polio, HIV/AIDS and malaria, and widen access to low-cost and free health care.",
    href: "https://www.rotary.org/en/our-causes/fighting-disease",
  },
];

export const steps = [
  {
    title: "Spot the need",
    text: "We talk to people and local partners to find who needs support most.",
  },
  {
    title: "Plan the drive",
    text: "Members pick a project, set a date and gather what is needed: clothes, food, saplings, hands.",
  },
  {
    title: "Show up",
    text: "Volunteers carry out the drive in person, in Gwalior and nearby rural areas.",
  },
  {
    title: "Share the result",
    text: "We post photos and updates on our social pages so everyone can see what happened.",
  },
];

export const events = [
  {
    day: "25",
    month: "Aug",
    title: "Clothes donation for poor children",
    image: "clothes",
    time: "9:00 AM",
    place: "Gwalior",
  },
  {
    day: "28",
    month: "Aug",
    title: "Tree plantation: one step up for nature",
    image: "trees",
    time: "9:00 AM",
    place: "Gwalior",
  },
  {
    day: "30",
    month: "Aug",
    title: "Food and water for birds",
    image: "birds",
    time: "9:00 AM",
    place: "Gwalior",
  },
];

export const team = [
  { name: "Garima Makhija", role: "President" },
  { name: "Rohit Sharma", role: "Vice President" },
  { name: "Gouri Bhadouriya", role: "Secretary" },
  { name: "Rakhi Sharma", role: "Joint Secretary" },
  { name: "Priya Chhatrasal", role: "Treasurer" },
  { name: "Tanisha Tomar", role: "Professional Development Director" },
  { name: "Akshara Jain", role: "International Service Director" },
  { name: "Nischay Keshwani", role: "Rotaract Education Director" },
  { name: "Ashish Gurjar", role: "Rotaract Education Coordinator" },
  { name: "Kunal Rustogi", role: "Sergeant at Arms" },
  { name: "Anushka Yadav", role: "Sergeant at Arms" },
  { name: "Aditya Yadav", role: "Report Coordinator" },
  { name: "Suhani Tiwari", role: "Report Coordinator" },
  { name: "Saniya Tomar", role: "Promotion Coordinator" },
  { name: "Khushi Pandey", role: "Promotion Coordinator" },
  { name: "Anchal Bhadouriya", role: "Membership Coordinator" },
  { name: "Khushi Agrawal", role: "Membership Coordinator" },
  { name: "Ayush Sharma", role: "Social Media Director" },
  { name: "Devesh Sharma", role: "Social Media Coordinator" },
  { name: "Lokesh Upmanyu", role: "Social Media Coordinator" },
];

export const ways = [
  {
    title: "Become a member",
    text: "Join a club of young people who turn free time into service.",
    topic: "membership",
    cta: "Apply for membership",
  },
  {
    title: "Volunteer at a drive",
    text: "Pick up a task at our next clothes, food or plantation drive.",
    topic: "volunteer",
    cta: "Volunteer with us",
  },
  {
    title: "Donate",
    text: "Fund clothes, meals and supplies for the families we serve.",
    topic: "donation",
    cta: "Ask how to donate",
  },
  {
    title: "Partner with us",
    text: "Sponsor a project or co-host a drive with your college or business.",
    topic: "partnership",
    cta: "Start a partnership",
  },
];

export const faqs = [
  {
    q: "What is Rotaract?",
    a: "Rotaract develops young adults as leaders in their communities and workplaces. Clubs around the world also take part in international service projects, working toward peace and international understanding.",
  },
  {
    q: "How do I become a member?",
    a: "Send us a message from the contact page and choose Membership. Tell us your name and where you study or work, and our membership team will reply with the next steps.",
  },
  {
    q: "How can I donate?",
    a: "Use the contact form, choose Donation and tell us what you would like to support. We will reply with the details for that drive.",
  },
  {
    q: "Can I volunteer without joining the club?",
    a: "Tell us you are interested and we will let you know about upcoming drives where extra volunteers are welcome.",
  },
  {
    q: "Where are you based?",
    a: "We are at Prestige Institute of Management, DD Nagar, Gwalior.",
  },
];

export const news = [
  {
    title: "Rotary in India sets a new record in membership growth",
    date: "March 29, 2021",
    source: "Rotary News",
    href: "https://rotarynewsonline.org/rotary-in-india-sets-a-new-record-in-membership-growth/",
  },
  {
    title: "Rotary Clubs in India to support government in achieving 100% literacy",
    date: "July 22, 2021",
    source: "The Indian Express",
    href: "https://indianexpress.com/article/cities/pune/rotary-clubs-india-support-government-100-literacy-shekhar-mehta-7416671/",
  },
];
