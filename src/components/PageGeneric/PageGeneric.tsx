import React from 'react';


interface PageGenericProps {
  renderCallback: () => void;
}

export class PageGeneric extends React.Component<PageGenericProps>{

  componentDidMount(): void {
    this.props.renderCallback();
  }
}
