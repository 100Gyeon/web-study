import { Header } from 'semantic-ui-react';
import GNB from './GNB';

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <img src="/images/logo.png" alt="logo" style={{ display: 'block', width: 80 }} />
        </div>
        <Header as="h1">100Gyeon</Header>
      </div>
      <GNB />
    </div>
  );
}
