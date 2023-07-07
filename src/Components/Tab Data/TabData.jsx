import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabData() {
  return (
   <>
    <Tabs>
    <TabList className='flex items-center justify-center gap-10'>
      <Tab>All Menu</Tab>
      <Tab>Breakfast</Tab>
      <Tab>Lunch</Tab>
      <Tab>Dinner</Tab>
      <Tab>Budget Meal</Tab>
      <Tab>Buffet</Tab>
    </TabList>

    <TabPanel>
      <h2>Menu item</h2>
    </TabPanel>
    <TabPanel>
      <h2>Breakfast item</h2>
    </TabPanel>
    <TabPanel>
      <h2>Lunch item</h2>
    </TabPanel>
    <TabPanel>
      <h2>Dinner Meal</h2>
    </TabPanel>
    <TabPanel>
      <h2>Budget Item</h2>
    </TabPanel>
    <TabPanel>
      <h2>Buffet</h2>
    </TabPanel>
  </Tabs>
  </>
  )
}

export default TabData