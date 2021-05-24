import port1 from '../img/portImages/urlshortner.JPG';
import port2 from '../img/portImages/social_media_app.jpg';
import port3 from '../img/portImages/quizapp.JPG';
import port4 from '../img/portImages/portfolioimg.jpg'


const projects = [
    {
        id: 1,
        category: 'MERN',
        link1: 'https://urlshortnerprasanna12.herokuapp.com/home/prasanna12@gmail.com',
        link2: 'https://github.com/laxmiprasannachukka/urlshortfrontend',
        icon1: 'viewsite',
        icon2: 'Github',
        image: port1,
        title: 'URL-Shortner',
        desc:'As the name suggests this app will make short urls for all the Long urls all over the Internet.User can register,login to the app and can check what are all URLs and their short links'
    },
    {
        id: 2,
        category: 'MERN stack',
        link1: 'https://social-media-app-pin.netlify.app',
        link2: 'https://github.com/laxmiprasannachukka/social-media-app',
        icon1: 'viewsite',
        icon2: 'Github',
        image: port2,
        title: 'Social-media-app',
        desc:'This app allows users to register,login into account and user can post something with image.User can like the post and follow and unfollow someone.User can see posts of his followed friends in timeline'
    },
    {
        id: 3,
        category: 'Reactjs',
        link1: 'https://quiz-app-using-api-l.netlify.app/',
        link2: 'https://github.com/laxmiprasannachukka/Quiz-react-app-using-api',
        icon1: 'viewsite',
        icon2: 'Github',
        image: port3,
        title: 'Quiz-app',
        desc:'Quiz app allows us to create Quiz based on the categories and the users can take quiz.It allots marks,percentage and timer as well. '
    },
    {
        id: 4,
        category: 'Reactjs',
        link1: 'https://quiz-app-using-api-l.netlify.app/',
        link2: 'https://github.com/laxmiprasannachukka/Quiz-react-app-using-api',
        icon1: 'viewsite',
        icon2: 'Github',
        image: port4,
        title: 'Portfolio',
        desc:'I made my portfolio with reactjs as frontend which shows about me,my skills and my projects'
    }
]

export default projects;