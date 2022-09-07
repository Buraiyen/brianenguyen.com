import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { HomeJumboData } from '../../helper/JumbotronData';
import { HomePageTitle } from '../../helper/PageTitleData';
import Passion from '../../components/home/Passion';
import WebCardList from '../../components/home/WebCardList';
import RecentProjectList from '../../components/projects/main/RecentProjectList';
import Jumbotron from '../../components/ui/jumbotron/Jumbotron';

const HomeView = () => {
  useEffect(() => {
    document.title = HomePageTitle;
  }, []);

  const jumboImage = HomeJumboData.src;
  const jumboTitle = HomeJumboData.title;
  const jumboDescription = HomeJumboData.description;

  return (
    <AnimatedPage>
      <div className='home'>
        <Jumbotron
          src={jumboImage}
          title={jumboTitle}
          description={jumboDescription}
        />
        <Container maxWidth='xl'>
          <Passion />
          <WebCardList />
          <RecentProjectList />
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default HomeView;
