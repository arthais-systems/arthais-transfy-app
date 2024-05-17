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
import { carOutline, manOutline, timeOutline, cardOutline } from 'ionicons/icons';
import VehicleTab from './pages/VehicleTab';
import ChauffeurTab from './pages/ChauffeurTab';
import HistoricTab from './pages/HistoricTab';
import FinancialTab from './pages/FinancialTab';

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
            <VehicleTab />
          </Route>
          <Route exact path="/chauffeurs">
            <ChauffeurTab />
          </Route>
          <Route exact path="/historic">
            <HistoricTab />
          </Route>
          <Route exact path="/financial">
            <FinancialTab />
          </Route>
          <Route exact path="/">
            <Redirect to="/vehicles" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton tab="vehicles" href="/vehicles">
            <IonIcon aria-hidden="true" icon={carOutline} />
            <IonLabel>Vehicles</IonLabel>
          </IonTabButton>
          <IonTabButton tab="chauffeurs" href="/chauffeurs">
            <IonIcon aria-hidden="true" icon={manOutline} />
            <IonLabel>Chauffeurs</IonLabel>
          </IonTabButton>
          <IonTabButton tab="historic" href="/historic">
            <IonIcon aria-hidden="true" icon={timeOutline} />
            <IonLabel>Historic</IonLabel>
          </IonTabButton>
          <IonTabButton tab="financial" href="/financial">
            <IonIcon aria-hidden="true" icon={cardOutline} />
            <IonLabel>Financial</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
