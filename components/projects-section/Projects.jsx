import styles from './Projects.module.scss';

import dynamic from 'next/dynamic';

import { projectsCarouselConfig } from '../../assets/slider';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <h1>My Projects</h1>
      <OwlCarousel {...projectsCarouselConfig}></OwlCarousel>
    </div>
  );
};

export default Projects;
