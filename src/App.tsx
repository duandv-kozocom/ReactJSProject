import useRouteElements from '@/useRouteElements'
import { Helmet } from 'react-helmet-async'

function App() {
  const routeElements = useRouteElements()

  return (
    <div className="App">
      <>
        <Helmet
          titleTemplate=""
          defaultTitle=""
          htmlAttributes={{ lang: 'ja' }}
        >
          <meta name="description" content="" />
        </Helmet>
        {routeElements}
      </>
    </div>
  )
}

export default App;
