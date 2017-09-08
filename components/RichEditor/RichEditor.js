import React, { Component } from 'react';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createCounterPlugin from 'draft-js-counter-plugin';
import s from './RichEditor.scss';


const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];


export default class RichEditor extends Component {

  constructor(props) {
    super(props);
    let value = (this.props.value) ? this.props.value : "";

    this.state = {
      editorState: EditorState.createWithContent(ContentState.createFromText(value))
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(editorState) {
    this.setState({
      editorState: editorState
    });

    this.props.onChange(this.getMarkdown(editorState))
  };

  getMarkdown(editorState) {
    return editorState.getCurrentContent().getPlainText()
  }

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className={(this.props.readOnly)?s.readOnly:s.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          readOnly={this.props.readOnly}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
      </div>
    );
  }
}