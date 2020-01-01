import React from 'react';
import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (

      <div className="col-md-2">
        <div className="card mb-2">
          <img src={dog.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h3 className="card-title">{dog.name}</h3>
            <h5 className="card-text">Owner: {dog.owner}</h5>
            <p className="card-text"><b>About:</b> {dog.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
