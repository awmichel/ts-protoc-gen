/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var othercom_external_enum_pb = require('../othercom/external_enum_pb.js');
goog.exportSymbol('proto.examplecom.EnumMessage', null, global);
goog.exportSymbol('proto.examplecom.EnumMessage.InternalEnum', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.EnumMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.examplecom.EnumMessage.repeatedFields_, null);
};
goog.inherits(proto.examplecom.EnumMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.examplecom.EnumMessage.displayName = 'proto.examplecom.EnumMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.examplecom.EnumMessage.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.EnumMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.EnumMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.EnumMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.EnumMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalEnum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    internalEnumsList: jspb.Message.getRepeatedField(msg, 2),
    externalEnum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    externalEnumsList: jspb.Message.getRepeatedField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.EnumMessage}
 */
proto.examplecom.EnumMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.EnumMessage;
  return proto.examplecom.EnumMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.EnumMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.EnumMessage}
 */
proto.examplecom.EnumMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.examplecom.EnumMessage.InternalEnum} */ (reader.readEnum());
      msg.setInternalEnum(value);
      break;
    case 2:
      var value = /** @type {!Array.<!proto.examplecom.EnumMessage.InternalEnum>} */ (reader.readPackedEnum());
      msg.setInternalEnumsList(value);
      break;
    case 3:
      var value = /** @type {!proto.othercom.ExternalEnum} */ (reader.readEnum());
      msg.setExternalEnum(value);
      break;
    case 4:
      var value = /** @type {!Array.<!proto.othercom.ExternalEnum>} */ (reader.readPackedEnum());
      msg.setExternalEnumsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.EnumMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.EnumMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.EnumMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.EnumMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalEnum();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInternalEnumsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getExternalEnum();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getExternalEnumsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.examplecom.EnumMessage.InternalEnum = {
  DEFAULT: 0,
  FIRST: 1,
  SECOND: 2,
  THIRD: 3
};

/**
 * optional InternalEnum internal_enum = 1;
 * @return {!proto.examplecom.EnumMessage.InternalEnum}
 */
proto.examplecom.EnumMessage.prototype.getInternalEnum = function() {
  return /** @type {!proto.examplecom.EnumMessage.InternalEnum} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.examplecom.EnumMessage.InternalEnum} value */
proto.examplecom.EnumMessage.prototype.setInternalEnum = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated InternalEnum internal_enums = 2;
 * @return {!Array.<!proto.examplecom.EnumMessage.InternalEnum>}
 */
proto.examplecom.EnumMessage.prototype.getInternalEnumsList = function() {
  return /** @type {!Array.<!proto.examplecom.EnumMessage.InternalEnum>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<!proto.examplecom.EnumMessage.InternalEnum>} value */
proto.examplecom.EnumMessage.prototype.setInternalEnumsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.examplecom.EnumMessage.InternalEnum} value
 * @param {number=} opt_index
 */
proto.examplecom.EnumMessage.prototype.addInternalEnums = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.examplecom.EnumMessage.prototype.clearInternalEnumsList = function() {
  this.setInternalEnumsList([]);
};


/**
 * optional othercom.ExternalEnum external_enum = 3;
 * @return {!proto.othercom.ExternalEnum}
 */
proto.examplecom.EnumMessage.prototype.getExternalEnum = function() {
  return /** @type {!proto.othercom.ExternalEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.othercom.ExternalEnum} value */
proto.examplecom.EnumMessage.prototype.setExternalEnum = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated othercom.ExternalEnum external_enums = 4;
 * @return {!Array.<!proto.othercom.ExternalEnum>}
 */
proto.examplecom.EnumMessage.prototype.getExternalEnumsList = function() {
  return /** @type {!Array.<!proto.othercom.ExternalEnum>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array.<!proto.othercom.ExternalEnum>} value */
proto.examplecom.EnumMessage.prototype.setExternalEnumsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.othercom.ExternalEnum} value
 * @param {number=} opt_index
 */
proto.examplecom.EnumMessage.prototype.addExternalEnums = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.examplecom.EnumMessage.prototype.clearExternalEnumsList = function() {
  this.setExternalEnumsList([]);
};


goog.object.extend(exports, proto.examplecom);