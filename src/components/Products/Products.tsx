import React, { useState, useEffect } from "react";
import { Layout, Card, Row, Col, Button } from "antd";
import Loader from "../Loader";
import EllipsisText from "react-ellipsis-text";
import "./styles.scss";
const { Content } = Layout;
export interface Props {
  // catalog: ICatalog;
}
const Products = ({
  products,
  categories,
  productLoaded,
  getProducts,
  getCategories,
}) => {
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  if (!productLoaded) {
    return <Loader />;
  }
  return (
    <Content className="container-wrapper">
      <Row className="product-page">
        <Col span={4} className="categories">
          {categories.items.length ? (
            categories.items.map((category) => {
              return (
                <div
                  className="category p10 ml10 fontsize15 medium"
                  key={category.key}
                >
                  {category.name}
                </div>
              );
            })
          ) : (
            <div className="no-found">No category to show!!</div>
          )}
        </Col>
        <Col span={20} className="products p10 ">
          <Row gutter={[6, 6]}>
            {products.items.length ? (
              products.items.map((item) => {
                return (
                  <Col key={item.id} span={6}>
                    <Card
                      hoverable
                      title={
                        <span className="bold fontsize16 p5">
                          <EllipsisText text={item.name} length={50} />
                        </span>
                      }
                      className="product-card"
                    >
                      <Row className="flex flexible">
                        <Col span={24} className="card-img w50">
                          <img alt="example" src={item.imageURL} />
                        </Col>
                        <Col
                          span={24}
                          className="card-description medium p5 w50"
                        >
                          <EllipsisText text={item.description} length={100} />
                        </Col>
                      </Row>
                      <Col span={24} className="card-action-btn absolute">
                        <Button className="w100 white" type="text">
                          Buy Now @ Rs.{item.price}
                        </Button>
                      </Col>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <h1 className="no-products">No Products Found.</h1>
            )}
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default Products;
