import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './text.scss'
import { observer } from "mobx-react";
import { mode } from '../../../config.js'
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';

const linkifyPlugin = createLinkifyPlugin({
  component: (props) => {
    return <a href={props.href}  target="_blank" >{props.href}</a>
  }
});
const plugins = [linkifyPlugin];


@observer
class Text extends React.Component {

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

    this.props.content.Value = this.state.editorState.getCurrentContent().getPlainText()
  }

  render() {
    const readOnly = (this.props.mode == "edition") ? false : true;
    let langue = this.props.content.component.Langue ; 


    return (
      <div onClick={this.focus}>
        <Editor
          readOnly={readOnly}
          className={s.text}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
      </div>);
  }
}
export default Text;
