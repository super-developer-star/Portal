import React, { Component } from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

class LocationTable extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
        { model: 'Clasic', country: 'USA', location: 'Los Angeles, CA', customerId: 'customer@email.com' },
      ],
    };
  }

  render() {
    const { list } = this.state;

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <Table
            height={200}
            width={width}
            headerHeight={20}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            <Column
              width={100}
              flexGrow={1}
              label="Model"
              dataKey="model"
            />
            <Column
              width={100}
              flexGrow={1}
              label="Country"
              dataKey="country"
            />
            <Column
              width={100}
              flexGrow={1}
              label="Location"
              dataKey="location"
            />
            <Column
              width={100}
              flexGrow={1}
              label="Customer ID"
              dataKey="customerId"
            />
          </Table>
        )}
      </AutoSizer>
    );
  }
}
export default LocationTable;
