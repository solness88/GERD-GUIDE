// 'use client';

// import { useEffect } from 'react';

// export default function ScrollToTop() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'instant' });
//   }, []);

//   return null;
// }

'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return null;
}