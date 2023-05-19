import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabTest = () => {
  return (
    <div>
      <h1>React Tabs Example</h1>
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Content of Tab 1</h2>
          <p>This is the content of Tab 1.</p>
        </TabPanel>
        <TabPanel>
          <h2>Content of Tab 2</h2>
          <p>This is the content of Tab 2.</p>
        </TabPanel>
        <TabPanel>
          <h2>Content of Tab 3</h2>
          <p>This is the content of Tab 3.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabTest;
