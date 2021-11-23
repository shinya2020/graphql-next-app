import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql, useQuery } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      }
    }
`;

export default function Index() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return data.rates.map((rate: any, index: number) => (
    <div key={index}>
      <p> {rate.currency}: {rate.rate} </p>
    </div>
  ));
};
