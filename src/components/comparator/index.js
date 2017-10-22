import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './style'

export const ComparatorJSX = ({typeface}) => <Wrapper typeface={typeface}>
  <h1 id='an-h1-header'>An h1 header</h1>
  <p>Paragraphs are separated by a blank line.</p>
  <p>2nd paragraph. <em>Italic</em>, <strong>bold</strong>, and <code>monospace</code>. Itemized lists look like:</p>
  <ul>
    <li>this one</li>
    <li>that one</li>
    <li>the other one</li>
  </ul>
  <p>Note that — not considering the asterisk — the actual text content starts at 4-columns in.</p>
  <blockquote>
    <p>Block quotes are written like so.</p>
    <p>They can span multiple paragraphs, if you like.</p>
  </blockquote>
  <p>Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., “it’s all in chapters 12–14”). Three dots … will be
    converted to an ellipsis. Unicode is supported. ☺</p>
  <h2 id='an-h2-header'>An h2 header</h2>
  <p>Here’s a numbered list:</p>
  <ol>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
  </ol>
  <p>Note again how the actual text starts at 4 columns in (4 characters from the left side). Here’s a code sample:</p>
  <p>As you probably guessed, indented 4 spaces. By the way, instead of indenting the block, you can use delimited
    blocks, if you like:</p>
  <p>(which makes copying &amp; pasting easier). You can optionally mark the delimited block for Pandoc to syntax
    highlight it:</p>
  <div><pre><code><span>import</span> time
<span># Quick, count to ten!</span>
    <span>for</span> i <span>in</span> <span>range</span>(<span>10</span>):
    <span># (but not *too* quick)</span>
    time.sleep(<span>0.5</span>)
    <span>print</span> i</code></pre>
  </div>
  <h3 id='an-h3-header'>An h3 header</h3>
  <p>Now a nested list:</p>
  <ol>
    <li><p>First, get these ingredients:</p>
      <ul>
        <li>carrots</li>
        <li>celery</li>
        <li>lentils</li>
      </ul>
    </li>
    <li><p>Boil some water.</p></li>
    <li><p>Dump everything in the pot and follow this algorithm:</p>
      <pre><code>find wooden spoon
uncover pot
stir
cover pot
balance wooden spoon precariously on pot handle
wait 10 minutes
goto first step (or shut off burner when done)</code></pre>
      <p>Do not bump wooden spoon or it will fall.</p></li>
  </ol>
  <p>Notice again how text always lines up on 4-space indents (including that last line which continues item 3
    above).</p>
  <p>Here’s a link to <a href='http://foo.bar'>a website</a>, to a <a href='local-doc.html'>local doc</a>, and to a <a
    href='#an-h2-header'>section heading in the current doc</a>. Here’s a footnote <a href='#fn1'
      id='fnref1'><sup>1</sup></a>.</p>
  <p>Tables can look like this:</p>
  <table>
    <caption>Shoes, their sizes, and what they’re made of</caption>
    <thead>
      <tr>
        <th>size</th>
        <th align='left'>material</th>
        <th align='left'>color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>9</td>
        <td align='left'>leather</td>
        <td align='left'>brown</td>
      </tr>
      <tr>
        <td>10</td>
        <td align='left'>hemp canvas</td>
        <td align='left'>natural</td>
      </tr>
      <tr>
        <td>11</td>
        <td align='left'>glass</td>
        <td align='left'>transparent</td>
      </tr>
    </tbody>
  </table>
  <p>(The above is the caption for the table.) Pandoc also supports multi-line tables:</p>
  <p>Here’s a definition list:</p>
  <dl>
    <dt>apples</dt>
    <dd>Good for making applesauce. oranges
    </dd>
    <dd>Citrus! tomatoes
    </dd>
    <dd>There’s no “e” in tomatoe.
    </dd>
  </dl>
  <p>Again, text is indented 4 spaces. (Put a blank line between each term/definition pair to spread things out
    more.)</p>
  <p>Here’s a “line block”:</p>
  <p>Line one<br />
    &nbsp;&nbsp;Line too<br />
    Line tree</p>
  <p>and images can be specified like so:</p>
  <div>
    <img src='example-image.jpg' title='An exemplary image' alt='example image' />
    <p>example image</p>
  </div>
</Wrapper>
ComparatorJSX.propTypes = {
  typeface: PropTypes.string
}
ComparatorJSX.defaultProps = {
  typeface: 'arial'
}

export default ComparatorJSX
