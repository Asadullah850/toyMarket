import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from '../Cart';
import './styles.css';


const ShopByCategory = () => {
    const [loading, setloadng] = useState(true)
    const [data, setData] = useState([]);
    const [subCategory, setSubCategory] = useState("Cars")

    if (loading) {
        <p>loading....................</p>
    }

    useEffect(() => {
        fetch(`https://toyserver-two.vercel.app/products/${subCategory}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setloadng(false)
            });
    }, [subCategory]);


    const handelSubCategoryChange = (tabName) => {
        setSubCategory(tabName)
    }

    return (
        <div className="">
            <Tabs forceRenderTabPanel defaultIndex={0}>
                <TabList >
                    <Tab className={"tab"} onClick={() => handelSubCategoryChange("Cars")}>Toy Car</Tab>
                    <Tab  className={"tab"} onClick={() => handelSubCategoryChange("avengers")}>ActionFigureToys</Tab>
                    <Tab  className={"tab"} onClick={() => handelSubCategoryChange("barbie")}>Dolls</Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab className={"tab"} onClick={() => handelSubCategoryChange("Cars")}>Sports Car</Tab>
                            <Tab className={"tab"} onClick={() => handelSubCategoryChange("truck")}>Truck</Tab>
                        </TabList>
                        <TabPanel>
                            <div className=" grid grid-cols-3 gap-4">
                                {
                                    data.slice(0, 3).map(toys => <Cart key={toys._id} toys={toys}></Cart>)
                                }
                            </div>

                        </TabPanel>
                        <TabPanel >
                        <div className=" grid grid-cols-3 gap-4">
                                {
                                    data.slice(0, 3).map(toys => <Cart key={toys._id} toys={toys}></Cart>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab className={"tab"} onClick={() => handelSubCategoryChange("avengers")}>Avengers</Tab>
                            <Tab className={"tab"} onClick={() => handelSubCategoryChange("transformers")}>Transformers</Tab>
                        </TabList>
                        <TabPanel>
                        <div className=" grid grid-cols-3 gap-4">
                                {
                                    data.slice(0, 3).map(toys => <Cart key={toys._id} toys={toys}></Cart>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className=" grid grid-cols-3 gap-4">
                                {
                                    data.slice(0, 3).map(toys => <Cart key={toys._id} toys={toys}></Cart>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <TabList>
                            <Tab className={"tab"} onClick={() => handelSubCategoryChange("barbie")}>Barbie</Tab>
                            <Tab className={"tab"} onClick={() => handelSubCategoryChange("AmericanGirl")}>American girl</Tab>
                        </TabList>
                        <TabPanel>
                        <div className=" grid grid-cols-3 gap-4">
                                {
                                    data.slice(0, 3).map(toys => <Cart key={toys._id} toys={toys}></Cart>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className=" grid grid-cols-3 gap-4">
                                {
                                    data.slice(0, 3).map(toys => <Cart key={toys._id} toys={toys}></Cart>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ShopByCategory;