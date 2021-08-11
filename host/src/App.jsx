import React from 'react';

const App1Component = React.lazy(() => import("app1/app1Component"));
const App2Component = React.lazy(() => import("app2/app2Component"));

const App = () => (
    <>
        <div>I am App!!!</div>
        <React.Suspense fallback="Loading App1">
            <App1Component />
        </React.Suspense>
        <React.Suspense fallback="Loading App2">
            <App2Component />
        </React.Suspense>
    </>
);

export default App;