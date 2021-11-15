import React, { Component } from 'react';
import styles from '../css/styles.module.css';

class Index extends Component {
  constructor(){
    super();
    
  }

  render() {
    return (
      <div className={styles.index}>
        <a href="/login">
          <h1 name="btn" className="btn-outline-light">ElectroWorx Services</h1>
        </a>
      </div>
    );
  }
}

export default Index;