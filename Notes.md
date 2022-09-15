# Notes

## query vs content body
*Usually the content body is used for the data that is to be uploaded/downloaded to/from the server and the query parameters are used to specify the exact data requested. For example when you upload a file you specify the name, mime type, etc. in the body but when you fetch list of files you can use the query parameters to filter the list by some property of the files. In general, the query parameters are property of the query not the data.*
[ref](https://stackoverflow.com/a/25405668)