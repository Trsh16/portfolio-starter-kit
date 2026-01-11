import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index} className="text-left px-2 py-1 border-b">
      {header}
    </th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} className="px-2 py-1 border-b">
          {cell}
        </td>
      ))}
    </tr>
  ))

  return (
    <table className="w-full table-auto">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

// ✅ VIDEO COMPONENT
function Video(props) {
  return (
    <video
      {...props}
      controls
      className="w-full max-w-4xl rounded-xl shadow-lg my-8"
      preload="metadata"
    />
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  const { className, alt, ...rest } = props
  return <Image alt={alt} className={`${className ?? ''} rounded-lg`} {...rest} />
}

function Code({ children, ...props }) {
  const codeText = typeof children === 'string' ? children : String(children)
  let codeHTML = highlight(codeText)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level) {
  const Heading = ({ children }) => {
    const text = React.Children.toArray(children)
      .map((c) => {
        if (typeof c === 'string' || typeof c === 'number') return String(c)
        if (React.isValidElement(c) && c.props && c.props.children)
          return String(c.props.children)
        return ''
      })
      .join('')

    let slug = slugify(text)

    return React.createElement(
      `h${level}`,
      { id: slug },
      React.createElement(
        'a',
        {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
          'aria-hidden': true,
        },
        '#'
      ),
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Video, // ✅ REGISTER VIDEO
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
