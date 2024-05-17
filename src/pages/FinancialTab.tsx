import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './FinancialTab.css';

const FinancialTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Financial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Financial</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Financial page" />
      </IonContent>
    </IonPage>
  );
};

export default FinancialTab;
