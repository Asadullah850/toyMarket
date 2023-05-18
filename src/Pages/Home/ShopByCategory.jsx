import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const [subCategory, setSubCategory] = useState('Car')

    console.log(subCategory);

    // allToys marvel avengers transformers

    const handelSubCategoryChange = (tabName)=>{
        setSubCategory(tabName)
        
    }

    return (
        <div className="">
            <Tabs forceRenderTabPanel defaultIndex={1}>
              <TabList>
                <Tab onClick={()=>handelSubCategoryChange("Car")}>Toy Car</Tab>
                <Tab onClick={()=>handelSubCategoryChange("avengers")}>ActionFigureToys</Tab>
                <Tab onClick={()=>handelSubCategoryChange("barbie")}>Dolls</Tab>
              </TabList>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab onClick={()=>handelSubCategoryChange("Car")}>Sports Car</Tab>
                    <Tab onClick={()=>handelSubCategoryChange("truck")}>Truck</Tab>
                  </TabList>
                  <TabPanel>
                    <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
                  </TabPanel>
                  <TabPanel>
                    <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                  </TabPanel>
   
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab onClick={()=>handelSubCategoryChange("avengers")}>Avengers</Tab>
                    <Tab  onClick={()=>handelSubCategoryChange("transformers")}>Transformers</Tab>
                  </TabList>
                  <TabPanel>
                    <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
                  </TabPanel>
                  <TabPanel>
                    <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                  </TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel>
                <Tabs forceRenderTabPanel>
                  <TabList>
                    <Tab onClick={()=>handelSubCategoryChange("barbie")}>Barbie</Tab>
                    <Tab onClick={()=>handelSubCategoryChange("AmericanGirl")}>American girl</Tab>
                  </TabList>
                  <TabPanel>
                    <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
                  </TabPanel>
                  <TabPanel>
                    <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                  </TabPanel>
                </Tabs>
              </TabPanel>
            </Tabs>
         
        </div>
    );
};

export default ShopByCategory;