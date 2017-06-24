import React from 'react';
import ReactDOM from 'react-dom';
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.state = {
      value: 'Type some *markdown* here!',
    }
  }
  handleChange() {
      this.setState({value: this.refs.textarea.value});
  }
  // 將使用者輸入的 Markdown 語法 parse 成 HTML 放入 DOM 中，React 通常使用 virtual DOM 作為和 DOM 溝通的中介，不建議直接由操作 DOM。故使用時的屬性為 dangerouslySetInnerHTML
  rawMarkup() {
      const md = new Remarkable();
      return { __html: md.render(this.state.value) };
  }
  render() {
      return (
        <div className="MarkdownEditor">
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value} />
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.rawMarkup()}
          />
        </div>
      );
  }
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('app'));
/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}
const navStlye = {
  color: 'white',
  'backgroundColor': '#00a6ff',
};
const navContent =[
    <span style={{alignItems: 'flex-begin'}}id="NCTU+">NCTU+</span>,
    <span style={{alignItems: 'flex-begin'}}id="allcourse">全校課程</span>,
    <span style={{alignItems: 'flex-begin'}}id="ordercourse">模擬排課</span>,
    <span style={{alignItems: 'flex-begin'}}id="secondbook">二手書</span>,
    <span style={{alignItems: 'flex-begin'}}id="eventbar">活動吧</span>,
    <span style={{alignItems: 'flex-end'}}id="problemshoot">問題回報</span>,
    <span style={{alignItems: 'flex-end'}}id="courselist">課程收藏</span>,
]
ReactDOM.render(<nav style={navStlye}>{navContent}</nav>,document.getElementById('toolbar'))

ReactDOM.render(<App />, document.getElementById('app'));
*/
