import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Navbar from 'components/atoms/Navbar'
import DashboardGrid from 'components/atoms/DashboardGrid'
import SimpleContainer from 'components/atoms/SimpleContainer'

export interface DashboardProps {
}

const Dashboard = () => {
  const indicators = [
    { id: "sales_per_week", title: "Vendas por semana", data: Math.random() * 100 },
    { id: "stock", title: "Em estoque", data: Math.random() * 100 },
    { id: "pending_orders", title: "Encomendas pendentes", data: Math.random() * 100 },
    { id: "delivery_orders", title: "Encomendas a caminho", data: Math.random() * 100 },
    { id: "broken_products_per_week", title: "Produtos quebrados por semana", data: Math.random() * 100 },
  ]

  const charts = [
    {
      id: "sales_growth",
      data: {
        options: {
          title: {
            text: 'Crescimento das vendas'
          },
          series: [
            {
              data: [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ]
            },
            {
              data: [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ]
            },
            {
              data: [
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20,
                Math.random() * 20
              ]
            }
          ]
        }
      }
    }
  ]

  return (
    <Fragment>
      <Navbar />
      <SimpleContainer>
        <DashboardGrid topElements={indicators} bottomElements={charts} />
      </SimpleContainer>
    </Fragment>
  );
}

Dashboard.propTypes = {
};

Dashboard.defaultProps = {
};

export default Dashboard;
