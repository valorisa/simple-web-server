(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{413:function(e,t,r){"use strict";r.r(t);var s=r(56),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",[e._v("How to use custom scripts")]),e._v(" "),r("br"),e._v(" "),r("h2",[e._v("How it works")]),e._v(" "),r("br"),e._v(" "),r("p",[e._v("Perform a post/get request towards a js file, This js file will be checked for a key (Security) and with the correct key, the document will temporarily append the script and will execute the requested script"),e._v(" "),r("br")]),r("p",[e._v("As a security feature, you must have the request path and a key programed in a .swshtaccess file and in the js file.")]),e._v(" "),r("p",[e._v("The file name does not need to end with .js  The extension can be anything you want as the extension does not matter and will not be checked")]),e._v(" "),r("p",[e._v("You do not need to have htaccess enabled, this does not enable htaccess. It is just easier to keep everything in 1 place")]),e._v(" "),r("p",[e._v("It is recommended to have the log to file function on, so it is easier to see if something goes wrong")]),e._v(" "),r("p",[e._v("WHILE IT IS NOT REQUIRED - IT IS VERY HIGHLY RECOMENDED TO TURN ON THE HTACCESS FEATURE - AS IT WILL BLOCK USERS FROM PERFORMING A GET REQUEST TOWARDS THE FILE")]),e._v(" "),r("br"),r("br"),e._v(" "),r("h2",[e._v("Writing the htaccess file")]),e._v(" "),r("p",[e._v("The file needs to be in the same path as the requested file")]),e._v(" "),r("p",[e._v("The file name should be .swshtaccess (case sensitive)")]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("p",[e._v("For info on how to write for a get request, please read the "),r("RouterLink",{attrs:{to:"/docs/htaccess.html"}},[e._v("htaccess readme")])],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('[\n    {\n        "type": "POSTkey",\n        "request_path": "index.js",\n        "key": "wa4e76yhefy54t4a"\n    }\n]\n')])])]),r("p",[e._v("Change "),r("code",[e._v("request_path")]),e._v(" to the file you would like to perform this towards\nChange "),r("code",[e._v("key")]),e._v(" to a random string of numbers and letters\nDo not change "),r("code",[e._v("type")])]),e._v(" "),r("h2",[e._v("Adding key verification to the .js file")]),e._v(" "),r("p",[e._v("Add the following line to your htaccess file")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("postKey = 'wa4e76yhefy54t4a'\n")])])]),r("p",[e._v("Change "),r("code",[e._v("wa4e76yhefy54t4a")]),e._v(" to the value of the key that you had inputed into the htaccess file\nThe start of the line ("),r("code",[e._v("postKey =")]),e._v(") MUST STAY THE SAME (case sensitive). The server does not check for a set variable, but it will scan the file for the text "),r("code",[e._v("postKey")]),e._v("\nTHIS LINE MUST BE ITS OWN LINE!! You CANNOT combine multiple lines of code with "),r("code",[e._v(";")]),e._v("\nIndenting this line may cause for the server to not find this line and in result, the code will not be executed\nYOU CANNOT PUT SPACES, "),r("code",[e._v('"')]),e._v(", or "),r("code",[e._v("'")]),e._v(" IN YOUR KEY")]),e._v(" "),r("p",[e._v("the res and req variables ARE NOT WINDOW VARIABLES. DO NOT USE THEM AS SUCH")]),e._v(" "),r("br"),e._v(" "),r("h2",[e._v("Writing the code inside the file")]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("res.contentType('text/plain') // ALWAYS set the headers first\nres.write('test') // THEN send the data\nres.end() // THEN end the request\n")])])]),r("p",[e._v("res contains all the functions to respond, while req contains all the request information")]),e._v(" "),r("p",[r("em",[e._v("NOTE")]),e._v(" - You can use BOTH server side javascript and Server Side POST in the same file! Just declare 2 seperate keys in the htaccess and in the file!")]),e._v(" "),r("p",[e._v("To Debug the code, open the main window and press ctrl + shift + i")]),e._v(" "),r("h1",[e._v("res Commands")]),e._v(" "),r("h3",{attrs:{id:"res-end-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-end-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.end()")]),e._v(": function")]),e._v(" "),r("p",[e._v("This function MUST be called at the end of the file. If called before finished processing, the server will cut off your script\nThis function will close the http request\nYou can use this function directly when finished and it will automaticaly respond with an http code of 200 (unless set otherwise)")]),e._v(" "),r("h3",{attrs:{id:"res-write-data-httpcode-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-write-data-httpcode-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.write(data, httpCode)")]),e._v(": function")]),e._v(" "),r("p",[r("code",[e._v("data: String || Buffer || ArrayBuffer")]),e._v("\nThis function will write data to the client. Once called, you canot push any more information.")]),e._v(" "),r("h3",{attrs:{id:"res-setheader-headertype-headervalue-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-setheader-headertype-headervalue-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.setHeader(headerType, headerValue)")]),e._v(": function")]),e._v(" "),r("p",[e._v("This function will set headers of the response.\nInstead of "),r("code",[e._v("Cookie: name=value")]),e._v(", you would put "),r("code",[e._v("res.setHeader('Cookie', 'name=value')")])]),e._v(" "),r("h3",{attrs:{id:"res-contenttype-type-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-contenttype-type-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.contentType(type)")]),e._v(": function")]),e._v(" "),r("p",[e._v("This function will set the content type to respond with, you could also use the "),r("code",[e._v("res.setHeader()")]),e._v(" function")]),e._v(" "),r("h3",{attrs:{id:"res-writecode-httpcode-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-writecode-httpcode-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.writeCode(httpCode)")]),e._v(": function")]),e._v(" "),r("p",[e._v("Call this to respond with no message. Dont forget to finish with "),r("code",[e._v("res.end()")])]),e._v(" "),r("h3",{attrs:{id:"res-renderfilecontents-file-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-renderfilecontents-file-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.renderFileContents(file)")]),e._v(": function")]),e._v(" "),r("p",[e._v("Once you have called the file with "),r("code",[e._v("res.getFile()")]),e._v(" (DO NOT use the "),r("code",[e._v("file.file()")]),e._v(" function) use "),r("code",[e._v("res.renderFileContents()")]),e._v(" to render the file\nDO NOT call "),r("code",[e._v("res.end()")]),e._v(" when using this function\nExample:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("`res.getFile('../somefile.html', function(file) {\n    if (file.error) {\n        console.log('error')\n    } else if (file.isFile) {\n        res.renderFileContents(file)\n    } else if (file.isDirectory) {\n        file.getDirContents(function(results) {\n            results[2].file(function(file2) {\n                res.renderFileContents(file2)\n            })\n        }\n    }\n})\n")])])]),r("h2",[e._v("Chunked encoding")]),e._v(" "),r("h3",{attrs:{id:"res-writechunk-data-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-writechunk-data-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.writeChunk(data)")]),e._v(": function")]),e._v(" "),r("p",[r("code",[e._v("data: String || Buffer || ArrayBuffer")]),e._v("\nThis feature will send the data in chunks, instead of all at once.\nTo enable, you must set the transfer-encoding header to chunked\nLike this: "),r("code",[e._v("res.setHeader('transfer-encoding','chunked')")])]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("res.setHeader('transfer-encoding','chunked')\nres.contentType('text/html; charset=utf-8')\nres.writeHeaders(200)\nres.writeChunk('This is Chunk number 1')\nres.writeChunk('\\n\\nAnd this is chunk number 2')\nres.writeChunk('\\n\\nAnd this is the last chunk')\nres.end() // VERY IMPORTANT (as always)\n")])])]),r("h1",[e._v("req Commands")]),e._v(" "),r("h3",{attrs:{id:"req-bodyparams-if-the-request-is-made-with-the-html-form-element-then-this-will-have-all-the-values-of-the-form"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#req-bodyparams-if-the-request-is-made-with-the-html-form-element-then-this-will-have-all-the-values-of-the-form"}},[e._v("#")]),e._v(" "),r("code",[e._v("req.bodyparams")]),e._v(": If the request is made with the html "),r("code",[e._v("form")]),e._v(" element, then this will have all the values of the form")]),e._v(" "),r("h3",{attrs:{id:"req-headers-json-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#req-headers-json-string"}},[e._v("#")]),e._v(" "),r("code",[e._v("req.headers")]),e._v(": json string")]),e._v(" "),r("p",[e._v("This contains all of the headers that the user sent when making the http request")]),e._v(" "),r("h3",{attrs:{id:"req-arguments-json-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#req-arguments-json-string"}},[e._v("#")]),e._v(" "),r("code",[e._v("req.arguments")]),e._v(": json string")]),e._v(" "),r("p",[e._v("This contains all of the arguments that the user has put in the url")]),e._v(" "),r("h3",{attrs:{id:"req-method-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#req-method-string"}},[e._v("#")]),e._v(" "),r("code",[e._v("req.method")]),e._v(": string")]),e._v(" "),r("p",[e._v("This contains the request method")]),e._v(" "),r("h3",{attrs:{id:"req-uri-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#req-uri-string"}},[e._v("#")]),e._v(" "),r("code",[e._v("req.uri")]),e._v(": string")]),e._v(" "),r("p",[e._v("This contains the entire requested path")]),e._v(" "),r("h3",{attrs:{id:"req-origpath-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#req-origpath-string"}},[e._v("#")]),e._v(" "),r("code",[e._v("req.origpath")]),e._v(": string")]),e._v(" "),r("p",[e._v("This contains the requested file (Will end with / if is directory)")]),e._v(" "),r("h3",{attrs:{id:"req-path-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#req-path-string"}},[e._v("#")]),e._v(" "),r("code",[e._v("req.path")]),e._v(": string")]),e._v(" "),r("p",[e._v("This contains the requested file. (Will NOT end with / if is directory)")]),e._v(" "),r("h1",{attrs:{id:"filesystem"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filesystem"}},[e._v("#")]),e._v(" FileSystem")]),e._v(" "),r("h3",{attrs:{id:"res-getfile-path-callback-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-getfile-path-callback-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.getFile(path, callback)")]),e._v(": function")]),e._v(" "),r("p",[e._v("This function will read a file. Relative urls are supported.\nTo get the directory contents, use the "),r("code",[e._v("file.getDirContents()")]),e._v(" function\nTo read the file as text, use the "),r("code",[e._v("file.file()")]),e._v(" function\nExample:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("`res.getFile('../test.txt', function(file) {\n    if (file.error) {\n        console.log('error')\n    } else if (file.isFile) {\n        file.file(function(text)\n            var filetext = text // file.file will read the file as text. To render the file, you can use the renderFileContents() function\n        })\n    } else if (file.isDirectory) {\n        file.getDirContents(function(results) {\n            results[2].file(function(file) {\n                console.log(file)\n            })\n        }\n    }\n})\n")])])]),r("h3",{attrs:{id:"res-writefile-path-data-allowreplacefile-callback-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-writefile-path-data-allowreplacefile-callback-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.writeFile(path, data, allowReplaceFile, callback)")]),e._v(": function")]),e._v(" "),r("p",[e._v("This function will save a file\npath: the path of the file\nIf the path contains a non existent folder, the folder will be created\ndata: string/Buffer/ArrayBuffer of the file. DO NOT SEND OTHER TYPES OF DATA - THIS COULD BREAK THE APP (Just refresh it)\nallowReplaceFile: if file exists and you want to replace the file, set this to true\ncallback: function will be excecuted to tell you if there was an error or it will callback the file")]),e._v(" "),r("h3",{attrs:{id:"res-deletefile-path-callback-function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-deletefile-path-callback-function"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.deleteFile(path, callback)")]),e._v(": function")]),e._v(" "),r("p",[e._v("This function will delete\npath: the path of the file\ncallback: function will be excecuted to tell you if there was an error or success")]),e._v(" "),r("p",[e._v("Commands once you get the info using the "),r("code",[e._v("res.getFile()")]),e._v(" function")]),e._v(" "),r("h3",{attrs:{id:"entry-file-callback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#entry-file-callback"}},[e._v("#")]),e._v(" "),r("code",[e._v("entry.file(callback)")])]),e._v(" "),r("p",[e._v("promise: "),r("code",[e._v("entry.filePromise()")]),e._v("\nThis function will read the file and return the contents as a Buffer.\nIf you want to display the contents of the file, it is recommended to use "),r("code",[e._v("res.renderFileContents()")]),e._v("\nThis function will only work on files, not directories")]),e._v(" "),r("h3",{attrs:{id:"entry-text-callback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#entry-text-callback"}},[e._v("#")]),e._v(" "),r("code",[e._v("entry.text(callback)")])]),e._v(" "),r("p",[e._v("promise: "),r("code",[e._v("entry.textPromise()")]),e._v("\nWill read the file as text")]),e._v(" "),r("h3",{attrs:{id:"entry-remove-callback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#entry-remove-callback"}},[e._v("#")]),e._v(" "),r("code",[e._v("entry.remove(callback)")])]),e._v(" "),r("p",[e._v("promise: "),r("code",[e._v("entry.removePromise()")]),e._v("\nUse this to delete the file")]),e._v(" "),r("h3",{attrs:{id:"entry-getdircontents-callback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#entry-getdircontents-callback"}},[e._v("#")]),e._v(" "),r("code",[e._v("entry.getDirContents(callback)")])]),e._v(" "),r("p",[e._v("promise: "),r("code",[e._v("entry.getDirContentsPromise()")]),e._v("\nThis function will get the contents of the directory in an array. Every file in the array will work with the "),r("code",[e._v(".file")]),e._v(" and the "),r("code",[e._v(".getDirContents")]),e._v(" functions\nThis function will only work on directories, not files\nFrom here, you can use the contents to use in the rest of the processing.")]),e._v(" "),r("p",[e._v("If you would like to render the directory listing with the results, you can use these commands.\nWhen the directory listing is sent, you still need to send "),r("code",[e._v("res.end()")])]),e._v(" "),r("h3",{attrs:{id:"res-renderdirectorylistingjson-results"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-renderdirectorylistingjson-results"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.renderDirectoryListingJSON(results)")])]),e._v(" "),r("p",[e._v("Will send a stringified json of the directory listing")]),e._v(" "),r("h3",{attrs:{id:"res-renderdirectorylistingstaticjs-results"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-renderdirectorylistingstaticjs-results"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.renderDirectoryListingStaticJs(results)")])]),e._v(" "),r("p",[e._v("Will send a directory listing that can transition between javascript and static")]),e._v(" "),r("h3",{attrs:{id:"res-renderdirectorylistingtemplate-results"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-renderdirectorylistingtemplate-results"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.renderDirectoryListingTemplate(results)")])]),e._v(" "),r("p",[e._v("Will send a the default javascript directory listing")]),e._v(" "),r("h3",{attrs:{id:"res-renderdirectorylisting-results"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-renderdirectorylisting-results"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.renderDirectoryListing(results)")])]),e._v(" "),r("p",[e._v("Will send a plain, static directory listing")]),e._v(" "),r("h1",{attrs:{id:"promise-based-fs-functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise-based-fs-functions"}},[e._v("#")]),e._v(" Promise based fs functions")]),e._v(" "),r("p",[e._v("Same use as functions above, just uses promises to use await or .then when reading the file.")]),e._v(" "),r("p",[r("code",[e._v("res.getFilePromise(path)")])]),e._v(" "),r("p",[r("code",[e._v("res.writeFilePromise(path, data, allowReplaceFile)")])]),e._v(" "),r("p",[r("code",[e._v("res.deleteFilePromise(path)")])]),e._v(" "),r("h1",{attrs:{id:"processing-the-request-body"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#processing-the-request-body"}},[e._v("#")]),e._v(" Processing the request body")]),e._v(" "),r("h3",{attrs:{id:"res-readbody-callback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-readbody-callback"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.readBody(callback)")])]),e._v(" "),r("p",[e._v("callback: function")]),e._v(" "),r("p",[e._v("Will read from the req stream. If the body has already been read, it will return the existing body\nAfter calling this, "),r("code",[e._v("req.body")]),e._v(" will be set")]),e._v(" "),r("p",[e._v("Example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("res.readBody(function(body) {\n    console.log(body)\n})\n")])])]),r("h3",{attrs:{id:"res-readbodypromise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-readbodypromise"}},[e._v("#")]),e._v(" "),r("code",[e._v("res.readBodyPromise()")])]),e._v(" "),r("p",[e._v("Same as "),r("code",[e._v("res.readBody")]),e._v(", but uses promises")]),e._v(" "),r("p",[e._v("Examples:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// When inside an async function\nvar body = await res.readBodyPromise()\nconsole.log(body)\n// or\nres.readBodyPromise().then(function(body) {\n    console.log(body)\n})\n")])])]),r("h3",{attrs:{id:"stream2file-writepath-allowoverwrite-callback"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stream2file-writepath-allowoverwrite-callback"}},[e._v("#")]),e._v(" "),r("code",[e._v("stream2File(writePath, allowOverWrite, callback)")])]),e._v(" "),r("p",[r("code",[e._v("writePath")]),e._v(": path to save file to\n"),r("code",[e._v("allowOverWrite")]),e._v(": allow file overwrite, "),r("code",[e._v("true")]),e._v(" or "),r("code",[e._v("false")]),e._v(" "),r("code",[e._v("callback")]),e._v(": function. Will return if there is an error, or success")]),e._v(" "),r("p",[e._v("stream request body to file. Saves memory on larger requests")]),e._v(" "),r("h1",{attrs:{id:"requiring-modules"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requiring-modules"}},[e._v("#")]),e._v(" Requiring modules")]),e._v(" "),r("p",[e._v("First, you MUST require a file through the "),r("code",[e._v("requireFile")]),e._v(" function.\nIn the folder that has the module you required, you can open a terminal/command prompt window and install the modules you want.\nThen, inside the file you required, you can require the modules you installed")]),e._v(" "),r("p",[e._v("You CANNOT require modules inside the main file\nthe "),r("code",[e._v("requireFile")]),e._v(" function is only for use in the main file")]),e._v(" "),r("p",[e._v("To clear module cache: call the "),r("code",[e._v("clearModuleCache")]),e._v(" function")]),e._v(" "),r("h1",{attrs:{id:"another-useful-tool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#another-useful-tool"}},[e._v("#")]),e._v(" Another Useful Tool")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("httpRequest")]),e._v(" tool has been moved "),r("RouterLink",{attrs:{to:"/docs/httpRequest.html"}},[e._v("here")])],1),e._v(" "),r("p",[r("code",[e._v("global.tempData")]),e._v(": json This global variable is a place that you can store data if you need. It will NOT be cleared after the end of the response.")]),e._v(" "),r("p",[e._v("Want to create a script compatible between this server and "),r("a",{attrs:{href:"https://github.com/ethanaobrien/web-server-chrome",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Server For Chrome"),r("OutboundLink")],1),e._v("?")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("appInfo")]),e._v(" variable will tell you which server you are using")])])}),[],!1,null,null,null);t.default=a.exports}}]);