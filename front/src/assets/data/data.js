import foodIcon from "../icons/food.png";
import educationIcon from "../icons/mortarboard.png";
import medicalIcon from "../icons/hospital.png";
import waterDropIcon from "../icons/mineral-water.png";
import loveCareIcon from "../icons/hands.png";
import shelterIcon from "../icons/shelter.png";

import jane from "../images/ceo.jpg";
import eunice from "../images/manager.jpg";
import michael from "../images/michael.jpg";
import stacy from "../images/stacy.jpg";

import man1 from "../images/man1.jpg";
import man2 from "../images/man2.jpg";
import woman1 from "../images/woman1.jpg";

import peopleIcon from "../icons/people.png";
import projectIcon from "../icons/project.png";
import missionIcon from "../icons/mission.png";
import donationIcon from "../icons/donation.png";

import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image from "../images/eunice.jpg";
import image2 from "../images/michael.jpg";
import image3 from "../images/man2.jpg";
import image4 from "../images/man1.jpg";
import janey from "../images/jane.jpg";
import image5 from "../images/stacy.jpg";
import annabel from "../images/woman1.jpg";
import dean from "../images/woman2.jpg";

import { Link } from "react-router-dom";

export const homeInformation = [
  {
    id: 1,
    title: "Healthy Food",
    icon: foodIcon,
    body: "Every child deserves access to nutritious meals to grow strong and thrive. Your donation helps us provide healthy, nourishing food, giving children the energy and hope they need for a brighter future.",
  },
  {
    id: 2,
    title: "Education",
    icon: educationIcon,
    body: "Education unlocks endless possibilities. With your support, we can provide children with the tools, resources, and opportunities they need to learn, grow, and achieve their dreams.",
  },
  {
    id: 3,
    title: "Medical Care",
    icon: medicalIcon,
    body: "Quality healthcare is a fundamental right. Your contributions help us provide medical care, essential supplies, and a chance for children to live healthy and fulfilling lives.",
  },
  {
    id: 4,
    title: "Clean Water",
    icon: waterDropIcon,
    body: "Safe and clean drinking water is life-changing. Your support ensures access to pure water, promoting better health and brighter futures for children in need.",
  },
  {
    id: 5,
    title: "Love & Care",
    icon: loveCareIcon,
    body: "Your time and compassion can make a world of difference. Become a volunteer and help us bring hope, joy, and brighter futures to children who need it most.",
  },
  {
    id: 6,
    title: "Shelter & Safety",
    icon: shelterIcon,
    body: "A safe and secure environment is every child’s right. Your support helps us provide shelter and protection, ensuring children grow up in a nurturing and stable setting.",
  },
];

export const featuredCases = [
  {
    id: 1,
    image: [
      "https://images.pexels.com/photos/30441517/pexels-photo-30441517.jpeg",
      "https://images.unsplash.com/photo-1608500218861-01091cdc501e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBmb29kfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1663100451272-ab5bef759b7c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMGNoaWxkJTIwZWF0aW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1694286080490-aa5cba939c6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGNoaWxkJTIwZWF0aW5nfGVufDB8fDB8fHww",
    ],
    title: "Feed the Children",
    body: "Join us in providing nourishing meals to children in need. Your support ensures they have the energy and health to learn, grow, and thrive. Together, we can make a difference, one meal at a time.",
  },
  {
    id: 2,
    title: "Education",
    image: [
      "https://images.unsplash.com/photo-1668620589356-56ba14193005?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMGNoaWxkJTIwbGVhcm5pbmclMjBpbiUyMGNsYXNzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1473649085228-583485e6e4d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjBjaGlsZCUyMGxlYXJuaW5nJTIwaW4lMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1583951171188-48057a97073f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFmcmljYW4lMjBjaGlsZCUyMGxlYXJuaW5nJTIwaW4lMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1620969910995-4bbe4eaa32c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFmcmljYW4lMjBjaGlsZCUyMGxlYXJuaW5nJTIwaW4lMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
    body: "Empower children with the gift of knowledge. Your support helps provide access to quality education, giving them the tools they need to build a brighter future. Together, we can create opportunities that transform lives and communities.",
  },
  {
    id: 3,
    title: "Clean Water",
    image: [
      "https://images.unsplash.com/photo-1740741705746-74e6f9b93b4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBjaGlsZCUyMGRyaW5raW5nJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1667549873806-28fd8b5957e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjBjaGlsZCUyMGRyaW5raW5nJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1697649124175-8115463efde4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFmcmljYW4lMjBjaGlsZCUyMGRyaW5raW5nJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1740741703651-2ab84a608a0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFmcmljYW4lMjBjaGlsZCUyMGRyaW5raW5nJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D",
    ],
    body: "Access to clean water is a basic necessity and a foundation for healthy living. Your support helps us provide safe, clean water to children and their communities, reducing illness and creating a better quality of life. Together, we can ensure every child has the water they need to thrive.",
  },
];

export const changingLives = [
  {
    id: 1,
    title: "Health",
    body: "Your support ensures children have access to proper healthcare, giving them the strength to grow, learn, and thrive. Together, we can create a healthier, happier future for every child in need.",
  },
  {
    id: 2,
    title: "Education",
    body: "Your generosity gives children access to quality education, empowering them with the knowledge and skills they need to unlock their potential and build a brighter future. Together, we can break the cycle of poverty through learning.",
  },
];

export const volunteers = [
  { id: 1, name: "Jane N. Kimani", title: "Founder & CEO", image: jane },
  { id: 2, name: "Eunice W. Muthoni", title: "Manager", image: eunice },
  {
    id: 3,
    name: "Michael Odero",
    title: "Technical Support",
    image: michael,
  },
  { id: 4, name: "Stacy Henderson", title: "Support Staff", image: stacy },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Anderson",
    image: woman1,
    body: "Volunteering with this organization has been one of the most rewarding experiences of my life. Seeing the smiles on the children’s faces and knowing that our efforts are making a real difference fills my heart with joy. I’m proud to be part of a mission that truly changes lives.",
  },
  {
    id: 2,
    name: "George Flavius",
    image: man1,
    body: "Supporting this campaign has been a deeply fulfilling experience. Knowing that my contributions help provide children with education, healthcare, and a safe environment gives me a sense of purpose. Together, we are building a brighter future for these kids.",
  },
  {
    id: 3,
    name: "Peter Oliver",
    image: man2,
    body: "Working with this organization has shown me the power of compassion and collective effort. Every moment spent with the children is a reminder of how impactful our support can be. It’s a privilege to be part of this journey.",
  },
];

export const numbers = [
  { id: 1, number: 580, name: "Volunteers" },
  { id: 2, number: 980, name: "Donations" },
  { id: 3, number: 987, name: "Projects" },
  { id: 4, number: 320, name: "Missions" },
];

export const topNumbers = [
  { id: 1, icon: peopleIcon, number: 580, name: "Volunteers" },
  { id: 2, icon: donationIcon, number: 980, name: "Donations" },
  { id: 3, icon: projectIcon, number: 987, name: "Projects" },
  { id: 4, icon: missionIcon, number: 320, name: "Missions" },
];

export const contactInfo = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    title: "Physical Address",
    info: "00100, Nairobi, Kenya.",
    info2: "",
  },
  {
    id: 2,

    icon: <FontAwesomeIcon icon={faClock} />,
    title: "Work Hours",
    info: "Monday to Friday: 7am - 7pm",
    info2: "Weekends: 10am - 5pm",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faPhone} />,
    title: "Phone",
    info: "+254-743-854495",
    info2: "+254-723-736651",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: "Email",
    info: (
      <a
        href="mailto:admin@upliftingkindnessfoundation.com"
        style={{ color: "#ffd700", textDecoration: "none" }}
      >
        admin@upliftingkindnessfoundation.com
      </a>
    ),
    info2: "",
  },
];

export const volunteersPage = [
  { id: 1, image: image4, name: "Nick Paterson", task: "Support Staff" },
  { id: 2, image: image5, name: "Stacy Henderson", task: "Support Staff" },
  { id: 3, image: image2, name: "Michael Clark", task: "Support Staff" },
  { id: 4, image: image, name: "Alicia Anderson", task: "Support Staff" },
  { id: 5, image: annabel, name: "Annabel Flow", task: "Support Staff" },
  { id: 6, image: janey, name: "Sintra Casper", task: "Support Staff" },
  { id: 7, image: image3, name: "Peter Amborson", task: "Support Staff" },
  { id: 8, image: dean, name: "Dean Solist", task: "Support Staff" },
];

export const faqs = [
  {
    id: 1,
    question: "How to be a volunteer?",
    answer: (
      <>
        To become a volunteer, you can start by filling out our online{" "}
        <Link to="/volunteer-form">application form</Link>. After that, you will
        be contacted for an interview to discuss your interests and
        availability.
      </>
    ),
  },
  {
    id: 2,
    question: "What you should know before you apply",
    answer:
      "Before applying, it's important to understand the commitment required, the types of roles available, and the impact your volunteering can have on the community.",
  },
  {
    id: 3,
    question: "Information about application process",
    answer:
      "The application process involves submitting an online form, followed by an interview and a background check. We will guide you through each step to ensure a smooth experience.",
  },
  {
    id: 4,
    question: "Spread awareness about volunteering",
    answer:
      "You can help spread awareness by sharing your experiences on social media, inviting friends to join, and participating in community events that promote volunteer opportunities.",
  },
  {
    id: 5,
    question: "How you could become an external partner",
    answer:
      "To become an external partner, please reach out to us via our contact page. We are always looking for organizations and businesses to collaborate with on various projects.",
  },
  {
    id: 6,
    question: "How to be a volunteer",
    answer:
      "To volunteer, start by visiting our website to learn about available opportunities. You can then apply online and attend an orientation session to get started.",
  },
];
