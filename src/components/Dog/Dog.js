import React from 'react';
import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (

      <div className="Dog col-md-3">
        <div className="card mb-2">
          <img src={dog.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <h6 className="card-text">{dog.owner}</h6>
            <p className="card-text">{dog.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
