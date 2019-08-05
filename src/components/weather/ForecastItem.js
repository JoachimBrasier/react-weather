import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/fr';

class ForecastItem extends Component {
    render() {
        const { forecast } = this.props;

        const table = forecast.list && forecast.list.map((item, index) => {
          const date = new Date(item.dt_txt)
          const hour = date.getHours();
          if (hour === 12){
            return (
              <div key={index} className={'level'}>
                <div children={'level-left'}>
                  <div className={'level-item'}>
                    <Moment className={'is-capitalized is-size-6'} locale={'fr'} format={'dddd DD'}>{item.dt_txt}</Moment>
                  </div>
                </div>
                <div className={'level-right'}>
                  <div className={'level-item has-text-right has-text-centered-mobile'}>
                    <div>
                      <p className={'is-size-6'}>{Math.round(item.main.temp)}°C</p>
                      <p className={'is-size-7 is-capitalized has-text-weight-light'}>{item.weather[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            return null
          }
        })
        
        return (
            <div>
              {table}
            </div>
        )
    }
}

export default ForecastItem;