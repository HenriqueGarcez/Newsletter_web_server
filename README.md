 #  OCC_Custom_Extension
Express web server to use as OCC's server-side extension.
 #  Features
  - Express with body_parser
  - Updated package.json file
 #  Installing
    $ git clone https://github.com/HenriqueGarcez/OCC_ApiSamples_Axios.git
    $ npm install
 #  Installing(OCC)
    zip OCC_Custom_Extension
    POST host/ccadmin/v1/serverExtensions
         form: {
              fileUpload: Extension.zip,
              fileName: name
         }
 #  Usage
    node index.js port(optional) and browse localhost:port/news
    or
    browse host/ccstorex/custom/news
 


     
