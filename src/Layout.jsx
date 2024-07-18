// Layout.jsx
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Joyride from 'react-joyride';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useTourStore from './TourStore';

function Layout() {
  const { run, stepIndex, steps, setSteps, nextStep, stopTour } = useTourStore();
  const navigate = useNavigate();

  useEffect(() => {
    setSteps([
      {
        target: '.navbar .home',
        content: 'This is the home button.',
        disableBeacon: true,
        data: { next: '/'},
      },
      {
        target: '.SignUp',
        content: 'This is the sign-up button.',
        data: { next: '/registerform',  },
        disableBeacon: true,
      },
      {
        target: '#registerForm',
        content: 'This is the register form.',
        disableBeacon: true,
        data: { next: '/' ,},
      },
      {
        target: '.navbar .feature',
        content: 'This is the sign-up button.',
        disableBeacon: true,
      },
    ]);
  }, [setSteps]);

  const handleCallback = (data) => {
    const { action, index, step, type } = data;
    const next = step?.data?.next;

    if (type === 'step:after') {
      if (action === 'next' && next) {
        navigate(next);
        nextStep();
      } 
       else if (action === 'skip' || index === steps.length - 1) {
        stopTour();
      }
    }
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Joyride
        callback={handleCallback}
        continuous
        run={run}
        stepIndex={stepIndex}
        steps={steps}
        showSkipButton
        showProgress
        styles={{
          options: {
            arrowColor: '#e3ffeb',
            backgroundColor: '#e3ffeb',
            primaryColor: '#000',
            textColor: '#004a14',
          },
          buttonBack: {
            display: 'none',
          },
          buttonClose:{
            display:'none'
          }
        }}
      />
    </>
  );
}

export default Layout;
