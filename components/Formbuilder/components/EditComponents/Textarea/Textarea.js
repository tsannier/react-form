import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './textarea.scss'
import { observer } from "mobx-react";
import { mode } from '../../../config.js'
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';



const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];


@observer
class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromText(
          this.props.content.Value
        ))
    };

    this.onChange = this.onChange.bind(this)
  }

  onChange(editorState) {
    this.setState({
      editorState
    });

    this.props.content.Value = this.state.editorState.getCurrentContent().getPlainText();

  }


  render() {
    const readOnly = (this.props.mode == "lecture") ? true : false;

    return (
      <div className={s.text}>
        <Editor
          readOnly={readOnly}
          className="DraftEditor-editorContainer-textarea"
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
      </div>);
  }
}
export default Textarea;


