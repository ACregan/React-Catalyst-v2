import React from 'react'
import propTypes from 'prop-types'
import styles from './accordion.module'
// import classNames from 'classnames/bind'

const Accordion = ({
  summary = null,
  children,
  className,
  summaryClassName,
  open = false,
  id,
  clickFunction,
  activeAccordion,
}) => {
  const clickHandler = (e) => {
    e.preventDefault()
    clickFunction(id)
  }

  return (
    <details
      onClick={clickHandler}
      className={`${styles.details} ${className}`}
      open={id === activeAccordion ? 'open' : null}
      id={id}
    >
      {summary !== null ? (
        <summary className={`${styles.summary} ${summaryClassName}`}>{summary}</summary>
      ) : null}
      {children}
    </details>
  )
}

Accordion.propTypes = {
  summary: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  clickFunction: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  activeAccordion: propTypes.string.isRequired,
  className: propTypes.string,
  summaryClassName: propTypes.string,
}

export default Accordion
