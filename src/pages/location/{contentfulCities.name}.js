import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

export const postQuery = graphql`
  query MyQuery($id: String!) {
    contentfulCities(id: { eq: $id }) {
      id
      name
      description
      location {
        lat
        lon
      }
    }
  }
`;
const Template = ({ data }) => {
  let city = data.contentfulCities;
  return (
    <Layout>
      <div>
        <Link to="/location">Go Back</Link>
        <h1>{city.name}</h1>
        <h4>{city.description}</h4>
        <small>
          Lat: {city.location.lat}
          <br />
          Lon:{city.location.lon}
        </small>
      </div>
    </Layout>
  );
};

export default Template;
