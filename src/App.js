import React, { Component, useEffect } from 'react';
import './styles/main.css';
import Header from './components/ContentHeader'
import ProductList from './components/ProductList'
import { connect } from "react-redux";
import { fetchProducts } from "./actions/index";


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;



    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    const title = products.map((result, key) => {
      return (
        <p key={key}>{result.page.title}</p>
      )
    });


    const content = products.map((r) => {
      console.log("content=" + r.page.content_items.content.length)
      return r.page.content_items
      //  console.log(result.page.content_items.content)
    });
    return (
      <div class="bg-black " >

        <Header title={title} />
        <div class="py-6 px-5 text-white">
          <ProductList loading={loading} movieList={products} />
        </div>
      </div>

    );
  }
}
const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});
export default connect(mapStateToProps)(App);





