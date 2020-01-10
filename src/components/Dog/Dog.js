import React from 'react';
import dogShape from '../../helpers/propz/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className='card col-2 m-2 mb-4'>
        <img src={dog.imageUrl} className='card-img-top' alt={dog.name} />
        <div className='card-body text-center'>
          <h3 className='card-title text-white'>{dog.name}</h3>
          <p className='card-text'>{dog.description}</p>
          <p className='card-text'>Owner: {dog.owner}</p>
        </div>
      </div>
    );
  }
}

export default Dog;
