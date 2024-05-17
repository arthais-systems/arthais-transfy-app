import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './DriversTab.css';

const DriversTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Drivers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Drivers</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Drivers page" />
      </IonContent>
    </IonPage>
  );
};

export default DriversTab;
