import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './VehicleTab.css';

const VehicleTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vehicles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vehicles</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Vehicles page" />
      </IonContent>
    </IonPage>
  );
};

export default VehicleTab;
