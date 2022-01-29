import React, { useState, useEffect } from "react";
import { Layout, Card } from "antd";
import { IUser } from "@typings/state/index";
import Loader from "../Loader";
import "./styles.scss";
const { Content } = Layout;

export interface Props {
  // catalog: ICatalog;
}

const Home = ({ initCatalog, catalog, catalogLoaded }) => {
  useEffect(() => {
    initCatalog();
  }, []);

  if (!catalogLoaded) {
    return <Loader />;
  }
  return (
    <Content className="container-wrapper">
      <div className="banners m60">
        {catalog.items.length ? (
          catalog.items.map((item) => {
            return (
              <Card
                key={item.id}
                hoverable
                className="mb20"
                style={{ width: "100%" }}
                cover={<img alt="example" src={item.bannerImageUrl} />}
              ></Card>
            );
          })
        ) : (
          <h1 className="no-products">No offers found.</h1>
        )}
      </div>
    </Content>
  );
};

export default Home;
