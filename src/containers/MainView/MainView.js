import { View  } from '@citadeldao/apps-ui-kit/dist/main';
import LeftPanel from '../../components/panels/LeftPanel';
import { RightPanel } from '../../components/RightPanel';
import useMainView from "./useMainView";

function MainView() {
    const { borderRadius } = useMainView()
    
    return (
      <View>
        <LeftPanel borderRadius={borderRadius} />
        <RightPanel borderRadius={borderRadius} />
      </View>
    );
}

export default MainView;
