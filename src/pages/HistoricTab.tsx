import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './HistoricTab.css';

const HistoricTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Historic</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Historic page" />
      </IonContent>
    </IonPage>
  );
};

export default HistoricTab;
