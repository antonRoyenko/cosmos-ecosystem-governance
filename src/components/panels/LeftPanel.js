import { Panel } from '@citadeldao/apps-ui-kit/dist/main';
import { config } from '../../index';

function LeftPanel(props) {
    const { borderRadius } = props;
    return (
      <Panel config={config} style={{ borderRadius: `${borderRadius}px` }}>
        <div>123</div>
      </Panel>
    );
}

export default LeftPanel;
