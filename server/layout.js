import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>TodoApp</title>
          <link
            type='text/css'
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
          />
          <link
            type='text/css'
            rel='stylesheet'
            href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
          />
          <link
            rel='stylesheet'
            href='/build/bundle.css'
          />
          <meta name='viewport' content='width=device-width, user-scalable=no' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        </head>
        <body>
          <div id='content' style={{ width: '40em', position: 'relative' }} />
          <script type='text/javascript' src='/build/bundle.js' />
        </body>
      </html>
    );
  }
}
