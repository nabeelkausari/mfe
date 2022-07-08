import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;

    if (pathname !== nextPathname) {
      history.push(nextPathname)
    }
  }

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, { onNavigate });

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}
