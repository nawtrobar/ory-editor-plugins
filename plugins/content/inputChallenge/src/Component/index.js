import React, { Component } from 'react'

import Display from './Display'
import Form from './Form'

const inputChallenge = props =>
  props.readonly ? <Display {...props} /> : <Form {...props} />
export default inputChallenge
