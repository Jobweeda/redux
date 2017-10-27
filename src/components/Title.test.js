import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import Title from './Title'

chai.use(chaiEnzyme());

describe('<Title />', () => {
  const title = shallow(<Title content="Yo" />)

  it('is wrapped by a h1 tag', () => {
    expect(title).to.have.tagName('h1')
  })

  it('renders the content', () => {
    expect(title).to.have.text('Yo')
  })
})

describe('<Title /> with different content', () => {
  const title = shallow(<Title content="different content" />)

  it('renders the other content', () => {
    expect(title).to.have.text('different content')
  })
})
