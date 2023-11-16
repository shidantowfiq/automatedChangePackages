/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CreateProducts",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "CreateProducts",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Tree" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node) {
//var children = node.getChildren();
var iMax = 104;
for (var i=0; i<iMax; i++) {
	node.createProduct("","Item");
	iCurrent = i + 1;
	log.info("Created product " + iCurrent + " of " + iMax);
}
}