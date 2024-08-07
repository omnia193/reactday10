import './Jobswraaber.css'
import JopItem from '../JopItem/JopItem';
import { useEffect, useState } from 'react'

function Jobswraaber() {
    const [jobs, setjobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            // هنا يجب أن تكون لديك واجهة برمجية تقدم البيانات
            // ولكن لهذا المثال سأقوم بملء البيانات مباشرة
            const jobData = [
                {
                    "id": 1,
                    "company": "Photosnap",
                    "logo": "./images/photosnap.svg",
                    "new": true,
                    "featured": true,
                    "position": "Senior Frontend Developer",
                    "role": "Frontend",
                    "level": "Senior",
                    "postedAt": "1d ago",
                    "contract": "Full Time",
                    "location": "USA Only",
                    "languages": ["HTML", "CSS", "JavaScript"],
                    "tools": []
                },
                {
                    "id": 2,
                    "company": "Manage",
                    "logo": "./images/manage.svg",
                    "new": true,
                    "featured": true,
                    "position": "Fullstack Developer",
                    "role": "Fullstack",
                    "level": "Midweight",
                    "postedAt": "1d ago",
                    "contract": "Part Time",
                    "location": "Remote",
                    "languages": ["Python"],
                    "tools": ["React"]
                },
                
      {
        "id": 3,
                    "company": "Account",
                    "logo": "./images/account.svg",
                    "new": true,
                    "featured": false,
                    "position": "Junior Frontend Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "2d ago",
                    "contract": "Part Time",
                    "location": "USA Only",
                    "languages": ["JavaScript"],
                    "tools": ["React", "Sass"]
                },
                {
                    "id": 4,
                    "company": "MyHome",
                    "logo": "./images/myhome.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Frontend Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "5d ago",
                    "contract": "Contract",
                    "location": "USA Only",
                    "languages": ["CSS", "JavaScript"],
                    "tools": []
                },
                {
                    "id": 5,
                    "company": "Loop Studios",
                    "logo": "./images/loop-studios.svg",
                    "new": false,
                    "featured": false,
                    "position": "Software Engineer",
                    "role": "Fullstack",
                    "level": "Midweight",
                    "postedAt": "1w ago",
                    "contract": "Full Time",
                    "location": "Worldwide",
                    "languages": ["JavaScript", "Ruby"],
                    "tools": ["Sass"]
                },
                {
                    "id": 6,
                    "company": "FaceIt",
                    "logo": "./images/faceit.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Backend Developer",
                    "role": "Backend",
                    "level": "Junior",
                    "postedAt": "2w ago",
                    "contract": "Full Time",
                    "location": "UK Only",
                    "languages": ["Ruby"],
                    "tools": ["RoR"]
                },
                {
                    "id": 7,
                    "company": "Shortly",
                    "logo": "./images/shortly.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "2w ago",
                    "contract": "Full Time",
                    "location": "Worldwide",
                    "languages": ["HTML", "JavaScript"],
                    "tools": ["Sass"]
                },
                
      {
        "id": 8,
                    "company": "Insure",
                    "logo": "./images/insure.svg",
                    "new": false,
                    "featured": false,
                    "position": "Junior Frontend Developer",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "2w ago",
                    "contract": "Full Time",
                    "location": "USA Only",
                    "languages": ["JavaScript"],
                    "tools": ["Vue", "Sass"]
                },
                {
                    "id": 9,
                    "company": "Eyecam Co.",
                    "logo": "./images/eyecam-co.svg",
                    "new": false,
                    "featured": false,
                    "position": "Full Stack Engineer",
                    "role": "Fullstack",
                    "level": "Midweight",
                    "postedAt": "3w ago",
                    "contract": "Full Time",
                    "location": "Worldwide",
                    "languages": ["JavaScript", "Python"],
                    "tools": ["Django"]
                },
                {
                    "id": 10,
                    "company": "The Air Filter Company",
                    "logo": "./images/the-air-filter-company.svg",
                    "new": false,
                    "featured": false,
                    "position": "Front-end Dev",
                    "role": "Frontend",
                    "level": "Junior",
                    "postedAt": "1mo ago",
                    "contract": "Part Time",
                    "location": "Worldwide",
                    "languages": ["JavaScript"],
                    "tools": ["React", "Sass"]
                }
            ];

            setjobs(jobData);
        }

        fetchJobs();
    }, []);

    return (
        <div id="jobswraberdiv">
            {jobs.map((AnyJop) => {
                return (
                    <JopItem key={AnyJop.id} AnyJop={AnyJop}></JopItem>
                );
            })}
        </div>
    );
}

    
   /*useEffect(()=> {
        function Calljobs(){
            fetch("http://localhost:3000/jobs").then((response)=>response.json()).then((finalresult)=>setjobs(finalresult))
         }   
         Calljobs();
    },[]);*/

   /* return(
       
        <div id="jobswraberdiv">
            {jobs.map((AnyJop)=>{
                return(
                <JopItem key={AnyJop.id} AnyJop={AnyJop}></JopItem>
            );
                    
                
            })}



        </div>
    )*/

export default Jobswraaber