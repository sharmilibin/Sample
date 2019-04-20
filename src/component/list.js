import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [
                {
                  id: 0,
                  name:'health'
                },
               {
                  id: 1,
                  name:'beauty'
              },
              
              ],
        };
    }

    render() {
        const menu = this.state.tab.map((tab) => {
            return (
              <div key={tab.id} className="col-12 mt-5">
                <Media tag="li">
                  
                  <Media body className="ml-5">
                    <Media heading>{tab.name}</Media>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
            <nav class="health">Health</nav>
            <nav class="beauty">beauty</nav>
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;