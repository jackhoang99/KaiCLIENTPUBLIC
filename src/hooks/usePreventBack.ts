import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePreventBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const preventBack = (e: PopStateEvent) => {
      e.preventDefault();
      navigate(window.location.pathname, { replace: true });
    };

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', preventBack);

    return () => {
      window.removeEventListener('popstate', preventBack);
    };
  }, [navigate]);
};