import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import { connect } from 'react-redux';
import { getDataByGeolocation, getDataBySearch } from '../../actions/weatherActions';

import Loader from '../icon/Loader';
import Footer from '../layout/Footer';
import backgroundNight from '../icon/background.jpg';
import backgroundDay from '../icon/background2.jpg';

class Weather extends Component {

    constructor(){
        super();
        this.state = {
            city: '',
            units: 'metric',
            search: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    };

    componentWillReceiveProps(nextProps){
        if (nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        };
    };

    componentDidMount(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const units = this.state.units;

                this.props.getDataByGeolocation(lat, lon, units);
            });
        } else {
            alert('Your navigator doesn\'t support geolocation');
        };
    };

    onSubmit(e){
        e.preventDefault();

        const city = this.state.city;
        const units = this.state.units;
        
        this.props.getDataBySearch(city, units);
    };

    render() {
        const { weather, forecast, loading } = this.props.weather;
        const { errors }= this.state;
        let weatherItem;

        if (weather === null || loading){
            weatherItem = <Loader />;
        } else {
            weatherItem = <div>
                <ForecastItem forecast={forecast} />
            </div>;
        };

        const date = new Date();
        const hour = date.getHours();

        // TODO
        // Show date, hour, render background by hour day/night

        return (
            <div id={'weather'}>
                <div className={'header'} style={{'background': `url(${hour >= 6 || hour <= 19 ? backgroundDay : backgroundNight}) no-repeat center`}}>
                    <div className={'main-data'}>
                        {weather.weather && weather.weather[0].id >= '600' && weather.weather[0].id <= '622' ? (
                            <div className={'winter-is-coming'}>
                                <div className={'snow snow--near'}></div>
                                <div className={'snow snow--near snow--alt'}></div>
                                <div className={'snow snow--mid'}></div>
                                <div className={'snow snow--mid snow--alt'}></div>
                                <div className={'snow snow--far'}></div>
                                <div className={'snow snow--far snow--alt'}></div>
                            </div>
                        ) : null}
                        {weather.weather && <p style={{'fontSize': '2.5rem'}} className={'has-text-centered has-text-weight-semibold has-text-white is-capitalized'}>{weather.weather[0].description}</p>}
                        {weather.name ? <h3 style={{'fontSize': '1.75rem'}} className={'has-text-centered has-text-weight-normal has-text-white'}>{weather.name}, {weather.sys && <span className={'is-uppercase'}>{weather.sys.country}</span>}</h3> : null}
                        {weather.main && <p style={{'fontSize': '6rem'}} className={'has-text-centered has-text-weight-bold has-text-white'}>{Math.round(weather.main.temp)}°</p>}
                    </div>
                </div>
                <div className={'form'}>
                    <div className={'container'}>
                        <div className={'columns is-centered'}>
                            <div className={'column is-8 has-text-centered'}>
                                <div className={'form-section'} style={{'marginTop': '25px'}}>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className={'field has-addons has-addons-right'}>
                                            <div className={'control is-expanded'}>
                                                <label htmlFor={'city'} hidden>Ville</label>
                                                <input
                                                    className={'input custom-input'}
                                                    type={'text'}
                                                    name={'city'}
                                                    placeholder={'Ville a rechercher'}
                                                    onChange={this.onChange}
                                                    value={this.state.city}
                                                />
                                            </div>
                                            <div className={'control'}>
                                                <span className={'select'}>
                                                    <label htmlFor={'units'} hidden>Units</label>
                                                    <select name={'units'} className={'custom-input'} onChange={this.onChange}>
                                                        <option value={'metric'}>°C</option>
                                                        <option value={'imperial'}>°F</option>
                                                    </select>
                                                </span>
                                            </div>
                                            <div className={'control'}>
                                                <button type={'submit'} className={'button is-info submit-button'}>Rechercher</button>
                                            </div>
                                        </div>
                                        {errors.message && (<span>{errors.message}</span>)}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'infos'}>
                    <div className={'container'}>
                        <div className={'columns is-centered'}>
                            <div className={'column is-half'}>
                                {weatherItem}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
};

Weather.propTypes = {
    getDataByGeolocation: PropTypes.func.isRequired,
    getDataBySearch: PropTypes.func.isRequired,
    weather: PropTypes.object.isRequired,
    forecast: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    weather: state.weather,
    forecast: state.weather,
    errors: state.errors
});

export default connect(mapStateToProps, { getDataByGeolocation, getDataBySearch })(Weather);