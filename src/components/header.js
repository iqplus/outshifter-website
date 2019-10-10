import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

export default function Header(){
  return (
    <div>
      <StaticQuery query={MENU} render={data =>{
        const menu = data.items.edges
        return menu.map(item =>{
          return <Link key={item.node.id} to={'/' + item.node.name}>{item.node.name}</Link>
        })
      }}/>
     
    </div>
  )
}


const MENU = graphql `
  {
    items:
    allContentfulContentType {
      edges {
        node {
          id
          name
        }
      }
    }}`
