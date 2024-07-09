@odata
service Basic @(path:'/basic') {
  function ping() returns String;
  function hello( to: String ) returns String;
}