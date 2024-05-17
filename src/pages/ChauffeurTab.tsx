import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ChauffeurTab.css';

const ChauffeurTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chauffeurs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chauffeurs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Chauffeurs page" />
      </IonContent>
    </IonPage>
  );
};

export default ChauffeurTab;
