import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading() {
    return <div>正在加载...</div>
  }
});

export default () => <LoadableComponent />