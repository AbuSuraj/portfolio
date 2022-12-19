import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Ayesha Auto Reseller',
        projectDesc: 'Used Car resale website, where buyer can buy, seller can sell a car and admin to maintain this and so on.',
        detailsDesc: ["Used Car resale website, which has three types of account systems Admin, Seller, and Buyer.", "Buyers can book a car and pay with a debit/master card, and send a report for an item.", "A seller can add, delete, and advertise a car.", "Admin can see and delete buyers and sellers, and the reported items and can verify a seller.", "Used  firebase authentication,  Jwt  for  user  authorisation,  Stripe  for  payment,  and  Vercel  to deploy back-end."],
        tags: ['React', 'Tailwind', 'Firebase', 'Express', 'Node.js', 'MongoDB', 'vercel'],
        clientCode: 'https://github.com/AbuSuraj/Ayesha-Auto-Resaller-client',
        serverCode: 'https://github.com/AbuSuraj/Ayesha-Auto-Resaller-server',
        demo: 'https://asyesha-auto-reseller.web.app/',
        thumbnail: "https://i.ibb.co/vX4G1Hj/home.jpg",
        image:["https://i.ibb.co/vX4G1Hj/home.jpg", "https://i.ibb.co/VtYvpLr/admin-Dashboard.png", "https://i.ibb.co/xfz3BFx/buyer-Dashboard.png", "https://i.ibb.co/XZXNVdF/payment.png", "https://i.ibb.co/1MC08nf/seller-Dashboard.png"]  
    },
    {
        id: 2,
        projectName: "Ruhi's Fitness Care",
        projectDesc: "A simple website for a fitness trainer, which has several services. A User can explore all services, see all reviews, can give a review.",
        detailsDesc: ["A simple website for a fitness trainer, which has several services.", "A User can explore all services, see all reviews, can give a review.","To do that authentication is a must, can see all of his reviews on different services."],
        tags: ['React', 'Tailwind', 'Firebase', 'Express', 'Node.js', 'MongoDB', 'vercel'],
        clientCode: 'https://github.com/AbuSuraj/Ruhi-Fitness-Care-Client',
        serverCode: "https://github.com/AbuSuraj/Ruhi-Fitness-care-Server",
        demo: 'https://ruhi-fitness-care.web.app/',
        thumbnail: "https://i.ibb.co/9Z74kvW/ruhi.png",
        image: ['https://i.ibb.co/9Z74kvW/ruhi.png', "https://i.ibb.co/BLRq1kc/add-review.png",
       "https://i.ibb.co/pjJ2rh3/my-review.png",
        "https://i.ibb.co/th9JxSs/workout.png"]
    },
    {
        id: 3,
        projectName: 'Islamic Ilm Center ',
        projectDesc: 'A simple online learning platform, which has a few courses. A learner can explore courses but has to log in to get premium access.',
        detailsDesc: ["A simple online learning platform, which has a few courses.", "Each Course have certain amounts of fees and duration, and a course instructor.","Course page has two parts, one is name of the courses and other is overview of these courses.", "Course details can be found in course details page, clicking on download button, user can download outline of that particular course", "Used firebase for authentication, Social Login, and Register."],
        tags: ['React', 'Tailwind', 'Firebase', 'Express', 'Node.js', 'MongoDB', 'vercel'],
        clientCode: 'https://github.com/AbuSuraj/Islamic-Ilm-Center-Client',
        serverCode: "https://github.com/AbuSuraj/Islamic-Ilm-Center-Server",
        demo: 'https://ilm-center-7bfb1.web.app/',
        thumbnail: "https://i.ibb.co/MkZX5Sg/home.png",
        image: ["https://i.ibb.co/MkZX5Sg/home.png", 'https://i.ibb.co/BnpfgL2/course-detail.jpg',
        "https://i.ibb.co/hCnxt1w/courses.png",]
    },
    {
        id: 4,
        projectName: 'Android Patient Tracker',
        projectDesc: 'This project involves the development of an Android application for viewing and managing patient data.',
        tags: ['React', 'Tailwind', 'Firebase', 'Express', 'Node.js', 'MongoDB', 'vercel'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        thumbnail: "https://i.ibb.co/MkZX5Sg/home.png",
        image: four
    },
    // {
    //     id: 5,
    //     projectName: 'E-Commerce App',
    //     projectDesc: 'A Simple E-commerce application',
    //     tags: ['React Native', 'Firebase'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: five
    // },
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/