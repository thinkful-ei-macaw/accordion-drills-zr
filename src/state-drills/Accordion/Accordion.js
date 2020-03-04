import React, { Component } from 'react';

class Accordion extends Component {

  static defaultProps = {
    sections: [{
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },]

  }

  handleSetActiveSection(section) {
    this.setState({ activeSection: section })
  }


  state = {
    activeSection: null

  };



  renderItem(idX, activeSection, section) {
    return (
      <li className="AccordionItem" key={idX}>
        <button onClick={() => this.handleSetActiveSection(idX)}>{section.title}</button>
        {(activeSection === idX) && <p>{section.content}</p>}
      </li>
    );
  }


  render() {
    const { activeSection } = this.state
    const { sections } = this.props

    return (
      <ul className="Accordion">
        {sections.map((section, idX) =>
          this.renderItem(idX, activeSection, section)
        )}
      </ul>
    )
  }

}

export default Accordion