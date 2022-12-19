 import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaAlignJustify, FaCode, FaPlay } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { projectsData } from '../../../data/projectsData';
 import './ProjectDetails.css'
 
const ProjectDetails = () => {
    // const {id, projectName}= projectsData
    const { theme } = useContext(ThemeContext);
    const {id} = useParams();
    var found = projectsData.find(function (element) {
        return element.id == id;
    });
    console.log(found.demo)
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
        home: {
            color: theme.primary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();
    return (
        <Fade bottom>
        <div
            key={id}
            className='detailProject my-20'
            // style={{ backgroundColor: theme.primary400 }}
        >
                          <Link to="/">
                        <AiOutlineHome className={classes.home}/>
                </Link>
            <div className='projectContent'>
                <h2
                    id={found.projectName.replace(' ', '-').toLowerCase()}
                    style={{ color: theme.tertiary }}
                >
                    {found.projectName}
                </h2>
               <div className='detailsContainer'>
                 <div className='imageContainer'>
                {

                    found.image.map(i => 
                      <div>
                          <img src={i ? i : found.placeholder} alt={found.projectName} />
                      </div>
                    )
                }
                </div>
                <div  style={{
                    background: theme.secondary,
                    color: theme.tertiary80,
                }} className='descriptionContainer'>
                    <h2>Project description</h2>
                {

found.detailsDesc.map(i => 
   <li  style={{
    background: theme.secondary,
    color: theme.tertiary80,
}}>{i}</li>
)
}
<div style={{
                    background: theme.secondary,
                    color: theme.tertiary80,
                }}  className='used-technology'>
    <h2>Used Technology: </h2>
    <div>
    {found.tags.map((tag, id) => (
                    <li className='projectLang' key={id}>{tag}</li>
                ))}
    </div>
    <div className='project--showcaseBtn showcase'>
        <span>
            <span >
                Live site
            </span>
                    <a 
                    href={found.demo}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()} ${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()}-demo`}
                    >
                        <FaPlay
                            id={`${found.projectName
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                            className={classes.icon}
                            aria-label='Demo'
                        />
                    </a>
        </span>
                    <span>
                        <span>
                            Clinet Side Code
                        </span>
                        <a
                        href={found.clientCode}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()} ${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()}-code`}
                    >
                        <FaCode
                            id={`${found.projectName
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                            className={classes.icon}
                            aria-label='Code'
                        />
                    </a>
                    </span>
                    <span>
                        <span>
                            Server Side Code
                        </span>
                        <a
                        href={found.serverCode}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()} ${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()}-code`}
                    >
                        <FaCode
                            id={`${found.projectName
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                            className={classes.icon}
                            aria-label='Code'
                        />
                    </a>
                    </span>
                </div>
</div>
                </div>
               </div>
                {/* <div className='project--showcaseBtn'>
                    <a 
                    href={found.demo}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()} ${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()}-demo`}
                    >
                        <FaPlay
                            id={`${found.projectName
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                            className={classes.icon}
                            aria-label='Demo'
                        />
                    </a>
                    <a
                        href={found.code}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()} ${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()}-code`}
                    >
                        <FaCode
                            id={`${found.projectName
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                            className={classes.icon}
                            aria-label='Code'
                        />
                    </a>
                    <a
                        href={found.code}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.iconBtn}
                        aria-labelledby={`${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()} ${found.projectName
                            .replace(' ', '-')
                            .toLowerCase()}-code`}
                    >
                        <FaCode
                            id={`${found.projectName
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                            className={classes.icon}
                            aria-label='Code'
                        />
                    </a>
                </div> */}
            </div>
        </div>
    </Fade>
    );
};

export default ProjectDetails;