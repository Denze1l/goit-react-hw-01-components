import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import Styles from './statsBar.module.css';

const StatsBar = ({ title, stats }) => {
  return (
    <section className={Styles.statsSection}>
      <h2 className={Styles.title}>{title}</h2>
      <ul className={Styles.statList}>
        {stats.map(elem => (
          <li
            className={Styles.item}
            key={elem.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={Styles.label}>{elem.label}</span>
            <span className={Styles.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

StatsBar.defaultProps = {
  stats: [],
  title: 'No Title',
};

StatsBar.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatsBar;
