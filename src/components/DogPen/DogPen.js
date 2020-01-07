import React from 'react';
import PropTypes from 'prop-types';

import Dog from '../Dog/Dog';
import dogShape from '../../helpers/propz/dogShape';

class DogPen extends React.Component {
  static propTypes = {
    allDogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { allDogs } = this.props;

    return (
      <div className="DogPen">
        <h1 className="text-center text-white mt-3 mb-3">Our Babies</h1>
        <div className="row justify-content-center">
          {
            allDogs.map((dog) => <Dog key={dog.id} dog={dog} />)
          }
        </div>
      </div>
    );
  }
}

export default DogPen;
