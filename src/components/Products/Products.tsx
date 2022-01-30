import React, { useEffect } from "react";
import { Button, Card, Col, Layout, Row } from "antd";
import EllipsisText from "react-ellipsis-text";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader";
import "./styles.scss";
const { Content } = Layout;
export interface Props {
  // catalog: ICatalog;
}
const Products = ({
  products,
  cart,
  categories,
  productLoaded,
  getProducts,
  getCategories,
  addToCart,
}) => {
  const { id: categoryId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    categoryId && categoryId !== "all"
      ? getProducts(categoryId)
      : getProducts();
    getCategories();
  }, [categoryId]);

  if (!productLoaded) {
    return <Loader />;
  }
  const handleChangeCategory = (id?: string) => {
    if (id) {
      let navigationUri = `/products/${id}`;
      navigate(navigationUri);
      getProducts(id);
    } else {
      let navigationUri = `/products/all`;
      navigate(navigationUri);
      getProducts(id);
    }
  };

  return (
    <Content className="container-wrapper">
      <Row className="product-page">
        <Col span={4} className="categories">
          <div
            className={`clickable category p10 ml10 fontsize15 medium ${
              categoryId === "all" ? "theme-col" : ""
            }`}
            onClick={() => handleChangeCategory()}
            key={"All"}
          >
            All Categories
          </div>
          {categories.length ? (
            categories.map((category, index) => {
              const { id } = category;
              return (
                <div
                  className={`clickable category p10 ml10 fontsize15 medium ${
                    categoryId
                      ? category.id == categoryId
                        ? "theme-col"
                        : ""
                      : index == 0 && categoryId !== "all"
                      ? "theme-col"
                      : ""
                  }`}
                  onClick={() => handleChangeCategory(id)}
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
                        <Button
                          className="w100 white"
                          type="text"
                          onClick={() => addToCart(item)}
                        >
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
