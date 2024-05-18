import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
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
        <div className="button-container">
          <IonButton expand="block" className="custom-button">
            Search for nearby vehicles
          </IonButton>
          <IonButton expand="block" className="custom-button">
            Specify location and time
          </IonButton>
        </div>
        <ExploreContainer name="Vehicles page" />
      </IonContent>
    </IonPage>
  );
};

export default VehicleTab;
