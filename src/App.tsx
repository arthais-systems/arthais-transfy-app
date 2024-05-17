import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/VehicleTab';
import Tab2 from './pages/DriversTab';
import Tab3 from './pages/HistoricTab';
import Tab4 from './pages/FinancialTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/vehicles">
            <Tab1 />
          </Route>
          <Route exact path="/drivers">
            <Tab2 />
          </Route>
          <Route exact path="/historic">
            <Tab3 />
          </Route>
          <Route exact path="/financial">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/vehicles" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="vehicles" href="/vehicles">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Vehicles</IonLabel>
          </IonTabButton>
          <IonTabButton tab="drivers" href="/drivers">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Drivers</IonLabel>
          </IonTabButton>
          <IonTabButton tab="historic" href="/historic">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Historic</IonLabel>
          </IonTabButton>
          <IonTabButton tab="financial" href="/financial">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Financial</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
