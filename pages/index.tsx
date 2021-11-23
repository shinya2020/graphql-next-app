import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql, useQuery } from "@apollo/client";
import { GetExchangeRatesQuery } from '../src/generated/graphql';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      }
    }
`;

export default function Index() {
  const { loading, error, data } = useQuery<GetExchangeRatesQuery>(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return data?.rates?.map((rate, index) => (
    <div key={index}>
      <p> {rate?.currency}: {rate?.rate} </p>
    </div>
  ));
};
