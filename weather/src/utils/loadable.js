import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'

const loadingComponet = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
      return <div><Spin /></div>;
  }
  // Handle the error state
  else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
      return null;
  }
};

export default (loader, loading = loadingComponet) => {
  return Loadable({
    loader,
    loading
  })
}
