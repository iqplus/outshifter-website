import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {props.headComponents}
            <script src="./../includes/js/aftc.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js" integrity="sha256-gSh8eotzb/CVvCREGPUNgIWuDnTYnZvVOQnRrP1eDjI=" crossorigin="anonymous"></script>
    <script src="./../includes/js/stats.min.js"></script>
    <script src="./../includes/js/app.js"></script>
        <script
  dangerouslySetInnerHTML={{
    __html: `
    onReady(function(){
      new App();
  })
        `,
  }}
/>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      
        <script type="x-shader/x-vertex" id="vertexshader"
  dangerouslySetInnerHTML={{
    __html: `
    attribute float scale;
    attribute vec3 customColor;
    varying vec3 vColor;
  
    void main() {
      vColor = customColor;
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      gl_PointSize = scale * ( 100.0 / - mvPosition.z );
      gl_Position = projectionMatrix * mvPosition;
    }
        `,
  }}
/>        <script type="x-shader/x-fragment" id="fragmentshader"
  dangerouslySetInnerHTML={{
    __html: `
    uniform vec3 ccc;
    varying vec3 vColor;
  
    void main() {
      if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.275 ) discard;
      gl_FragColor = vec4( ccc * vColor, 1.0 );
    }
        `,
  }}
/>
<canvas id="canvas1"></canvas>
<canvas id="canvas2"></canvas>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
