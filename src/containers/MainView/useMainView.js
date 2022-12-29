import { useSelector } from 'react-redux';
import { panelSelectors } from "../../store/selectors";

function useMainView() {
	const { borderRadius } = useSelector(panelSelectors.getPanelState);
	
	return { borderRadius };
}

export default useMainView;
