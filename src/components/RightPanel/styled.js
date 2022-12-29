import styled from 'styled-components';
import { Panel as CitadelPanel } from '@citadeldao/apps-ui-kit';
import CoinCard from '@citadeldao/apps-ui-kit/dist/components/uiKit/CoinCard';

export const NetworkWrapper = styled.div`
    margin: 10px 0;
`;

export const NetworkItem = styled.div`
    display: flex;
    align-items: center;
    background: #7c63f5;
    padding: 7px 10px;
    border-radius: 8px;
`;

export const Coin = styled(CoinCard)`
    height: 48px;
    width: 48px;
    background: #fff;
    color: white;
    border-radius: 4px;
`;

export const NetworkName = styled.div`
	color: #fff;
	margin-left: 10px;
`

export const Panel = styled(CitadelPanel)`
	border-radius: ${({ borderRadius = 0 }) => borderRadius}px;
`;
