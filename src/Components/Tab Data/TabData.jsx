import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabData() {
  return (
    <>
      <Tabs>
        <TabList className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 container mx-auto lg:h-48 sm:h-72 items-center text-center justify-center gap-5 pb-10">
   
          <Tab className='p-2 sm:p-1 border-2 border-orange-700 text-orange-700 rounded'>All Menu</Tab>
          <Tab className='p-2 border-2 border-orange-700 text-orange-700 rounded'>Breakfast</Tab>
          <Tab className='p-2 border-2 border-orange-700 text-orange-700 rounded'>Lunch</Tab>
          <Tab className='p-2 border-2 border-orange-700 text-orange-700 rounded'>Dinner</Tab>

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
      </Tabs>
    </>
  )
}

export default TabData