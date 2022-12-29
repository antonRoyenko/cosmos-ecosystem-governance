import { Content } from '@citadeldao/apps-ui-kit';

import { config } from '../../index';
import { NetworkWrapper, NetworkItem, Coin, NetworkName, Panel } from './styled';

function RightPanel(props) {
    const { borderRadius } = props;
    return (
      <Panel config={config} borderRadius={borderRadius}>
        <Content>
          <h3 className="heading-text-h3">Choose necessary network</h3>
          <NetworkWrapper>
            <NetworkItem>
              <Coin icon="juno" color="#7C63F5" />
              <NetworkName>
                <p>Juno</p>
              </NetworkName>
            </NetworkItem>
          </NetworkWrapper>
        </Content>
      </Panel>
    );
}

export default RightPanel;
