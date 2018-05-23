import React, { Component } from 'react'
import PropTypes from 'prop-types'


class OutsideWrapper extends Component {

  handleEvent(e) {
    const nodeElement = this.node
    const condition = (!nodeElement || !nodeElement.contains(e.target)) &&
      typeof this.props.eventHandler === 'function' &&
      this.props.eventTypes[e.type] !== -1
    if(condition) this.props.eventHandler(e)
  }

  componentDidMount() {
    const { eventTypes } = this.props
    const handler = this.handleEvent.bind(this)
    eventTypes.forEach((eventType) => {
      document.addEventListener(eventType, handler, false)
    })
  }

  componentWillUnmount() {
    const { eventTypes } = this.props
    const handler = this.handleEvent.bind(this)
    eventTypes.forEach(function(eventType) {
      document.removeEventListener(eventType, handler, true)
    })
  }

  render() {
    const { className, children } = this.props
    return (
      <div className={className} ref={(node) => {
        this.node = node
      }}>
        {children}
      </div>
    )
  }
}

OutsideWrapper.defaultProps = {
  eventTypes: ['click']
}

OutsideWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  eventHandler: PropTypes.func.isRequired,
  eventTypes: PropTypes.array
}

export default OutsideWrapper
