import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import hljs from 'highlight.js'

export default class Writer extends Component {
  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.state = {}
  }

  handleInputChange(e) {
    this.setState({
      rawText: e.target.value
    })
  }

  handleBlur() {
    this.refs.writer.focus()
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <textarea type="text"
                  autoFocus
                  ref="writer"
                  placeholder="Write **some** *text*"
                  value={this.state.rawText || ''}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur}
                  style={{
                    borderColor: 'transparent',
                    backgroundColor: '#f2f2f2',
                    resize: 'none',
                    outline: 'none',
                    height: '600px',
                    fontSize: '16px',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    flex: 1,
                    paddingRight: '20px',
                    marginTop: '13px'
                  }}
        />

        <div style={{ flex: 1, wordWrap: 'break-word' }}>
          <Markdown options={{
            typographer: true,
            linkify: true,
            highlight(str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(lang, str).value
              }
              return hljs.highlightAuto(str).value
            }
          }}>
            {this.state.rawText || 'Write **some** *text*'}
          </Markdown>
        </div>
      </div>
    )
  }
}
